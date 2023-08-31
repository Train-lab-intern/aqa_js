const { faker } = require('@faker-js/faker');

const userEmail = faker.internet.email({
	firstName: faker.person.firstName(),
	lastName: faker.person.lastName(),
	allowSpecialCharacters: false,
});
const userName = faker.person.firstName();
const userPassword = faker.internet.password({ length: 9, pattern: /\w/ });
let id;
let token;

describe('Login Page', () => {
	before('Registration', () => {
		cy.request({
			method: 'POST',
			url: 'https://test.app.it-roast.com/api/v1/users/register',
			body: {
				email: userEmail,
				password: userPassword,
				username: userName,
			},
		}).then((res) => {
			expect(res.status).to.eq(200);
		});
		cy.request({
			method: 'GET',
			url: `https://test.app.it-roast.com/api/v1/users/complete-registration?userEmail=${userEmail}`,
		}).then((res) => {
			expect(res.status).to.eq(200);
		});
	});

	it('Positive login', () => {
		cy.request({
			method: 'POST',
			url: 'https://test.app.it-roast.com/api/v1/auth',
			body: {
				userEmail: userEmail,
				userPassword: userPassword,
			},
		}).then((res) => {
			id = res.body.userDto.id;
			token = res.body.token;
			cy.log(id);
			expect(res.status).to.eq(200);
			expect(res.body).to.have.property('userEmail', userEmail);
			expect(res.body).to.have.property('token');
			expect(res.body.userDto).to.have.property('id');
			expect(res.body.userDto).to.have.property('username', userName);
			// expect(res.body.userDto).to.property('active', true)
		});
	});

	it('To get user by id', () => {
		cy.request({
			method: 'GET',
			url: 'https://test.app.it-roast.com/api/v1/users/' + id,
			headers: { Authorization: token },
		}).then((res) => {
			expect(res.status).to.eq(200);
			expect(res.body).to.have.property('id', id);
			expect(res.body).to.have.property('email', userEmail);
			expect(res.body).to.have.property('username', userName);
			// expect(res.body).to.have.property('active', true);
		});
	});

	it('Login with wrong email', () => {
		let arr = userEmail.split('');
		arr.splice(1, 1);
		let incEmail = arr.join('');
		cy.request({
			method: 'POST',
			url: 'https://test.app.it-roast.com/api/v1/auth',
			body: {
				userEmail: incEmail,
				userPassword: userPassword,
			},
			failOnStatusCode: false,
		}).then((res) => {
			expect(res.status).to.eq(400);
			expect(res.body).to.have.property(
				'message',
				`User not found with email: ${incEmail}`
			);
		});
	});

	it('Login with wrong password', () => {
		let arr = userEmail.split('');
		arr.splice(1, 1);
		let incEmail = arr.join('');
		cy.request({
			method: 'POST',
			url: 'https://test.app.it-roast.com/api/v1/auth',
			body: {
				userEmail: userEmail,
				userPassword: userPassword.slice(0, -1),
			},
			failOnStatusCode: false,
		}).then((res) => {
			expect(res.status).to.eq(400);
			expect(res.body).to.have.property('message', 'Bad credentials');
		});
	});
});
