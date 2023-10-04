import { MainPage } from '../../pages/mainPage';
import 'cypress-real-events/support';
describe('Main Page', () => {
	beforeEach(() => {
		cy.visit('https://alpha.it-roast.com/');
	});
	const mainPage = new MainPage();

	it('Check logo', () => {
		mainPage.elements.logo().should('exist');
	});

	//О нас
	it('Check aboutUs button', () => {
		mainPage.elements
			.aboutUsButton()
			.should('exist')
			.and('have.text', 'О нас');
		mainPage.elements.aboutUsButton().click();
	});

	it('Check aboutUs button tooltip', () => {
		mainPage.elements.aboutUsButton().realHover();
		mainPage.elements.tooltip1().should('be.visible');
	});

	//Войти
	it('Check SignIn button', () => {
		mainPage.elements
			.signInButton()
			.should('exist')
			.and('have.text', 'Войти');
		mainPage.elements.signInButton().click();
		cy.url().should('eq', 'https://alpha.it-roast.com/auth');
	});

	//Задания
	it('Check Tasks button', () => {
		mainPage.elements
			.taskButton()
			.should('exist')
			.and('have.text', 'Задания');
	});

	it('Check Tasks button tooltip', () => {
		mainPage.elements.taskButton().realHover();
		mainPage.elements.tooltip3().should('be.visible');
	});

	it('Check the banner title', () => {
		cy.task(
			'connectDB',
			`SELECT text FROM public.frontend_data WHERE front_id='1.1'`
		).then((result) =>
			mainPage.elements
				.titleBanner()
				.should('have.text', result.rows[0].text)
		);
	});

	it('Check the banner content', () => {
		cy.task(
			'connectDB',
			`SELECT text FROM public.frontend_data WHERE front_id='1.2'`
		).then((result) =>
			mainPage.elements
				.contentBanner()
				.should('have.text', result.rows[0].text)
		);
	});

	//Начать путь
	it('Check StartWay button', () => {
		mainPage.elements
			.startWayButton()
			.should('exist')
			.and('have.text', 'Начать путь');
		mainPage.elements.startWayButton().click();
		cy.url().should('eq', 'https://alpha.it-roast.com/registration');
	});

	it('Check carousel', () => {
		mainPage.elements
			.carousel()
			.should('exist')
			.and('include.text', 'SQL')
			.and('include.text', 'JavaScript')
			.and('include.text', 'Python');

		mainPage.elements.el1Carousel().should('be.visible');
		mainPage.elements.el2Carousel().should('be.visible');
		mainPage.elements.el3Carousel().should('exist');
		mainPage.elements.rightArrow().should('be.visible');
		mainPage.elements.rightArrow().click();
		mainPage.elements.leftArrow().should('be.visible');
		mainPage.elements.leftArrow().click();
	});

	it('Check 1 element of the steps section', () => {
		cy.task(
			'connectDB',
			`SELECT text FROM public.frontend_data WHERE front_id='1.3'`
		).then((result) =>
			mainPage.elements
				.step1Elem()
				.should('have.text', result.rows[0].text)
		);
	});

	it('Check 2 element of the steps section', () => {
		cy.task(
			'connectDB',
			`SELECT text FROM public.frontend_data WHERE front_id='1.4'`
		).then((result) =>
			mainPage.elements
				.step2Elem()
				.should('have.text', result.rows[0].text)
		);
	});

	it('Check 3 element of the steps section', () => {
		cy.task(
			'connectDB',
			`SELECT text FROM public.frontend_data WHERE front_id='1.5'`
		).then((result) =>
			mainPage.elements
				.step3Elem()
				.should('have.text', result.rows[0].text)
		);
	});

	it('Check 4 element of the steps section', () => {
		cy.task(
			'connectDB',
			`SELECT text FROM public.frontend_data WHERE front_id='1.6'`
		).then((result) =>
			mainPage.elements
				.step4Elem()
				.should('have.text', result.rows[0].text)
		);
	});

	//Задай нам вопрос
	it('Check askUsQuestion button', () => {
		mainPage.elements
			.askQuestButton()
			.should('exist')
			.and('have.text', 'Задай нам вопрос');
	});

	it('Check askUsQuestion button tooltip', () => {
		mainPage.elements.askQuestButton().realHover();
		mainPage.elements.tooltip5().should('be.visible');
	});

	it('Check People story section', () => {
		mainPage.elements.peopleStorySection().should('exist');
		cy.task(
			'connectDB',
			`SELECT text FROM public.frontend_data WHERE front_id='1.8'`
		).then((result) =>
			mainPage.elements.peopleStoryElement().each(($el) => {
				cy.wrap($el).invoke('text').should('eq', result.rows[0].text);
			})
		);
	});

	//Персональные данные
	it('Check PersonalData link', () => {
		cy.contains('Персональные данные').should('exist');
		cy.get('.Footer_tooltip__sF9PZ ').realHover();
		mainPage.elements.tooltip6().should('be.visible');
	});

	it('Check the information about owner rights protection  ', () => {
		cy.task(
			'connectDB',
			`SELECT text FROM public.frontend_data WHERE front_id='1.7'`
		).then((result) =>
			mainPage.elements
				.persDateProtect()
				.should('have.text', result.rows[0].text)
		);
	});

	//LinkedIn
	it('Check LinkedIn', () => {
		mainPage.elements.linkedIn().should('exist');
		mainPage.elements.linkedIn().click();
		cy.url().should('include', 'linkedin.com');
	});

	//GitHubLink
	it('Check GitHub', () => {
		cy.visit('https://alpha.it-roast.com/');
		mainPage.elements.gitLink().should('exist');
		mainPage.elements.gitLink().click();
		cy.url().should('include', 'github.com');
	});
});
