import { logPage } from '../../pages/loginPage';
const regData = require('../../fixtures/regData.json');
const { faker } = require('@faker-js/faker');

const userEmail = faker.internet.email({
	firstName: faker.person.firstName(),
	lastName: faker.person.lastName(),
	allowSpecialCharacters: false,
});
const userName = faker.person.firstName();
const userPassword = faker.internet.password({ length: 9, pattern: /\w/ });

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

	// after('Delete a created user from DB', () => {
	// 	cy.task(
	// 		'connectDB',
	// 		`DELETE FROM public.users WHERE email='${userEmail}'`
	// 	);
	// });

	beforeEach(() => {
		cy.visit('https://alpha.it-roast.com/auth');
	});

	const loginPage = new logPage();

	it('Check elements of login page', () => {
		loginPage.elements
			.emailInput()
			.should('exist')
			.and('have.attr', 'placeholder', 'Почта');
		loginPage.elements
			.passwInput()
			.should('exist')
			.and('have.attr', 'placeholder', 'Пароль');
		loginPage.elements
			.signInButton()
			.should('exist')
			.and('have.text', 'Войти');
		loginPage.elements
			.signUpLink()
			.should('exist')
			.and('have.text', 'Присоединяйся !');
		loginPage.elements
			.changePasswLink()
			.should('exist')
			.and('have.text', 'Забыли пароль?');
		loginPage.elements
			.askQwLink()
			.should('exist')
			.and('have.text', 'Спроси нас!');
		cy.contains(
			'Нажимая кнопку «Войти», вы подтверждаете своё согласие с условиями обработки данных.'
		).should('exist');
	});

	it('Positive login', { tags: ['@smoke', '@regression'] }, () => {
		loginPage.login(userEmail, userPassword);
		// cy.url().should('include', '/profile');
	});

	it('Login with wrong email', { tags: '@regression' }, () => {
		let arr = userEmail.split('');
		arr.splice(1, 1);
		let incEmail = arr.join('');
		loginPage.login(incEmail, userPassword);
		cy.wait(4000);
		loginPage.elements
			.notification()
			.should('be.visible')
			.and('have.text', `User not found with email: ${incEmail}`);
		cy.url().should('include', '/auth');
	});

	it('Login with wrong password', { tags: '@regression' }, () => {
		loginPage.login(userEmail, userPassword.slice(0, -1));
		cy.wait(3000);
		loginPage.elements
			.notification()
			.should('be.visible')
			.and('have.text', 'Неверные учетные данные пользователя');
		cy.url().should('include', '/auth');
	});

	it('Login with the blank fields', { tags: '@regression' }, () => {
		loginPage.elements.signInButton().click();
		loginPage.elements
			.form()
			.find('.Auth_input_border_red__vIL-S.form-control')
			.should('have.length', 2);

		loginPage.elements
			.form()
			.find('.Auth_errors__oVY9X')
			.should('have.length', 2);
		cy.get('.Auth_errors__oVY9X').each(($elem) => {
			cy.get($elem).should(
				'have.text',
				'это поле обязательно для заполнения'
			);
		});
	});

	it('To view the entered password', () => {
		loginPage.elements.passwInput().type('userPassword1');
		loginPage.elements.passwInput().should('have.attr', 'type', 'password');
		cy.get('img.Auth_showPasswordIcon__p9hzL').click();
		loginPage.elements.passwInput().should('have.attr', 'type', 'text');
	});

	it('Check validation of the email field', { tags: '@regression' }, () => {
		cy.wrap(regData.invalidEmail).each(($item, index) => {
			if (index < 1) {
				loginPage.elements.emailInput().clear().type($item);
				loginPage.elements.passwInput().clear().type('userPassword1');
				loginPage.elements.signInButton().click();
				loginPage.elements
					.errorMess()
					.should('be.visible')
					.and('contain', 'Вы заполняете поле в неверном формате.');
				cy.url().should('include', '/auth');
			} else {
				cy.get('.Auth_input_border_red__vIL-S.form-control')
					.clear()
					.type($item);
				loginPage.elements.signInButton().click();
				loginPage.elements
					.errorMess()
					.should('be.visible')
					.and('contain', 'Вы заполняете поле в неверном формате.');
				cy.url().should('include', '/auth');
			}
		});
	});

	it(
		'Check validation of the password field',
		{ tags: '@regression' },
		() => {
			cy.wrap(regData.invalidPassword).each(($item, index) => {
				if (index < 1) {
					loginPage.elements.emailInput().clear().type(userEmail);
					loginPage.elements.passwInput().clear().type($item);
					loginPage.elements.signInButton().click();
					loginPage.elements
						.errorMess()
						.should('be.visible')
						.and(
							'contain',
							'Пароль вводится латинскими буквами,должен состоять минимум из 8 символов,должен содержать как минимум 1 букву, 1 цифру,должен содержать символы верхнего и нижнего регистра.'
						);
					cy.url().should('include', '/auth');
				} else {
					cy.get(
						'.Auth_input_border_red__vIL-S.form-control[type="password"]'
					)
						.clear()
						.type($item);
					loginPage.elements.signInButton().click();
					loginPage.elements
						.errorMess()
						.should('be.visible')
						.and(
							'contain',
							'Пароль вводится латинскими буквами,должен состоять минимум из 8 символов,должен содержать как минимум 1 букву, 1 цифру,должен содержать символы верхнего и нижнего регистра.'
						);
					cy.url().should('include', '/auth');
				}
			});
		}
	);
});
