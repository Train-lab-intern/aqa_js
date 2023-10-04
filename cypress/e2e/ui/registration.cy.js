import { registrationPage } from '../../pages/regPage';
const regData = require('../../fixtures/regData.json');
const { faker } = require('@faker-js/faker');

describe('Registration Page', () => {
	beforeEach(() => {
		cy.visit('https://alpha.it-roast.com/registration');
	});

	// after('Delete a created user from DB', () => {
	// 	cy.task(
	// 		'connectDB',
	// 		`DELETE FROM public.users WHERE email='${userEmail}'`
	// 	);
	// });

	const regPage = new registrationPage();

	const userEmail = faker.internet.email({
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		allowSpecialCharacters: false,
	});

	const userName = faker.person.firstName();
	const userPassword = faker.internet.password({ length: 8, pattern: /\w/ });

	it('Check elements of registration page', () => {
		regPage.elements
			.emailInput()
			.should('exist')
			.and('have.attr', 'placeholder', 'Почта');
		regPage.elements
			.loginInput()
			.should('exist')
			.and('have.attr', 'placeholder', 'Логин');
		regPage.elements
			.passw1Input()
			.should('exist')
			.and('have.attr', 'placeholder', 'Пароль');
		regPage.elements
			.passw2Input()
			.should('exist')
			.and('have.attr', 'placeholder', 'Пароль');
		regPage.elements
			.signUpButton()
			.should('exist')
			.and('have.text', 'Зарегистрироваться');
		regPage.elements
			.signInLink()
			.should('exist')
			.and('have.text', 'Войти!');
		regPage.elements
			.askQwLink()
			.should('exist')
			.and('have.text', 'Спроси нас!');
		cy.contains(
			'Нажимая кнопку «Зарегистрироваться», вы подтверждаете своё согласие с условиями обработки данных.'
		).should('exist');
	});

	it('Positive registration', { tags: ['@smoke', '@regression'] }, () => {
		regPage.registration(userEmail, userName, userPassword);
		cy.wait(3000);
		regPage.elements
			.notification()
			.should('be.visible')
			.and(
				'have.text',
				'На адрес Вашей электронной почты было отправлено письмо. Для завершения регистрации перейдите по указанной в письме ссылке.'
			);
	});

	it(
		'Re-registtration: user with this email is already exist',
		{ tags: '@regression' },
		() => {
			regPage.registration(userEmail, userName, userPassword);
			cy.wait(3000);
			regPage.elements
				.notification()
				.should('be.visible')
				.and('have.text', 'User with this username is already exists.');
		}
	);

	it('Password does not match', { tags: '@regression' }, () => {
		regPage.elements.emailInput().clear().type('usermail@gmail.com');
		regPage.elements.loginInput().clear().type('userName');
		regPage.elements.passw1Input().clear().type('userPassword1');
		regPage.elements.passw2Input().clear().type('userPassword2');
		regPage.elements.signUpButton().click();
		regPage.elements
			.errorMess()
			.should('have.text', 'Введенный пароль не совпадает');
	});

	it('To view the entered password', () => {
		regPage.elements.passw1Input().type('userPassword1');
		regPage.elements.passw1Input().should('have.attr', 'type', 'password');
		regPage.elements.passw2Input().type('userPassword1');
		regPage.elements.passw2Input().should('have.attr', 'type', 'password');
		cy.get('img.Registration_showPasswordIcon__Y63gb').each(
			($elem, index) => {
				if (index < 1) {
					cy.get($elem).click();
				}
				regPage.elements
					.passw1Input()
					.should('have.attr', 'type', 'text');
				regPage.elements
					.passw2Input()
					.should('have.attr', 'type', 'text');
			}
		);
	});

	it('Registration with the blank fields', { tags: '@regression' }, () => {
		regPage.elements.signUpButton().click();
		regPage.elements
			.form()
			.find('.Registration_input_border_red__eTe3J')
			.should('have.length', 4);

		regPage.elements
			.form()
			.find('.Registration_errors__ySskW')
			.should('have.length', 4);
		cy.get('.Registration_errors__ySskW').each(($elem) => {
			cy.get($elem).should(
				'have.text',
				'это поле обязательно для заполнения'
			);
		});
	});

	it('Registration with wrong email format', { tags: '@regression' }, () => {
		cy.wrap(regData.invalidEmail).each(($item, index) => {
			if (index < 1) {
				regPage.elements.emailInput().clear().type($item);
				regPage.elements.loginInput().clear().type('userName');
				regPage.elements.passw1Input().clear().type('userPassword1');
				regPage.elements.passw2Input().clear().type('userPassword1');
				regPage.elements.signUpButton().click();
				regPage.elements
					.errorMess()
					.should(
						'have.text',
						'Вы заполняете поле в неверном формате.'
					);
			} else {
				cy.get('.Registration_input_border_red__eTe3J')
					.clear()
					.type($item);
				regPage.elements.signUpButton().click();
				regPage.elements
					.errorMess()
					.should(
						'have.text',
						'Вы заполняете поле в неверном формате.'
					);
			}
		});
	});

	it(
		'Registration with wrong password format',
		{ tags: '@regression' },
		() => {
			cy.wrap(regData.invalidPassword).each(($item, index) => {
				if (index < 1) {
					regPage.elements
						.emailInput()
						.clear()
						.type('usermail@gmail.com');
					regPage.elements.loginInput().clear().type('userName');
					regPage.elements.passw1Input().clear().type($item);
					regPage.elements.passw2Input().clear().type($item);
					regPage.elements.signUpButton().click();
					regPage.elements
						.errorMess()
						.should(
							'have.text',
							'Пароль вводится латинскими буквами,должен состоять минимум из 8 символов,должен содержать как минимум 1 букву, 1 цифру,должен содержать символы верхнего и нижнего регистра.'
						);
				} else {
					cy.get(
						'.Registration_input_border_red__eTe3J.form-control[type="password"]'
					)
						.clear()
						.type($item);
					regPage.elements.passw2Input().clear().type($item);
					regPage.elements.signUpButton().click();
					regPage.elements
						.errorMess()
						.should(
							'have.text',
							'Пароль вводится латинскими буквами,должен состоять минимум из 8 символов,должен содержать как минимум 1 букву, 1 цифру,должен содержать символы верхнего и нижнего регистра.'
						);
				}
			});
		}
	);
});
