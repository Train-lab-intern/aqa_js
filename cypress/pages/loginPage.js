export class logPage {
	elements = {
		form: () => cy.get('form'),
		emailInput: () => cy.get('input.Auth_input__H9ezj[name="userEmail"]'),
		passwInput: () =>
			cy.get('input.Auth_input__H9ezj[name="userPassword"]'),
		signInButton: () => cy.get('button.Auth_input__H9ezj'),
		signUpLink: () => cy.get('a[href="/registration"]'),
		changePasswLink: () => cy.get('a[href="/change-password"]'),
		askQwLink: () => cy.get('a[href="#"]'),
		errorMess: () => cy.get('.Auth_errors__oVY9X'),
		notification: () => cy.get('.Notifications_wrapperNotification__zdDWZ'),
	};
	login(userEmail, userPassword) {
		this.elements.emailInput().type(userEmail);
		this.elements.passwInput().type(userPassword);
		this.elements.signInButton().click();
	}
}
