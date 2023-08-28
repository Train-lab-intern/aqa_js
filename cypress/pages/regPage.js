export class registrationPage {
	elements = {
		form: () => cy.get('form'),
		emailInput: () =>
			cy.get('input.Registration_input__fHjpg[name="email"]'),
		loginInput: () =>
			cy.get('input.Registration_input__fHjpg[name="username"]'),
		passw1Input: () =>
			cy.get('.Registration_input__fHjpg.form-control[name="password"]'),
		passw2Input: () =>
			cy.get('.Registration_input__fHjpg[name="passwordConfirm"]'),
		signUpButton: () => cy.get('button.Registration_input__fHjpg'),
		signInLink: () => cy.get('a[href="/auth"]'),
		askQwLink: () => cy.get('a[href="#"]'),
		errorMess: () => cy.get('.Registration_errors__ySskW'),
	};
	registration(userEmail, userName, userPassword) {
		this.elements.emailInput().type(userEmail);
		this.elements.loginInput().type(userName);
		this.elements.passw1Input().type(userPassword);
		this.elements.passw2Input().type(userPassword);
		this.elements.signUpButton().click();
	}
}
