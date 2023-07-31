import { MainPage } from '../../pages/mainPage';

describe('Main Page', () => {
	before(() => {
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
		cy.url().should('eq', 'https://alpha.it-roast.com/#about');
	});

	it.skip('Check aboutUs button tooltip', () => {
		mainPage.elements.aboutUsButton().focus();
		mainPage.elements
			.tooltip1()
			.should('be.visible')
			.and(
				'have.text',
				'здесь будет переход на страницу с информацией о приложении'
			);
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

	it.skip('Check SignIn button tooltip', () => {
		mainPage.elements.signInButton().focus();
		mainPage.elements
			.tooltip2()
			.should('be.visible')
			.and('have.text', 'здесь будет переход на страницу авторизации');
	});

	//Задания
	it('Check Tasks button', () => {
		mainPage.elements
			.taskButton()
			.should('exist')
			.and('have.text', 'Задания');
		mainPage.elements.taskButton().click();
		cy.url().should('eq', 'https://alpha.it-roast.com/#tasks');
	});

	it.skip('Check Tasks button tooltip', () => {
		mainPage.elements.taskButton().focus();
		mainPage.elements
			.tooltip3()
			.should('be.visible')
			.and(
				'have.text',
				'здесь будет переход на страницу с примерами заданий'
			);
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
	});

	it.skip('Check StartWay button tooltip', () => {
		mainPage.elements.startWayButton().focus();
		mainPage.elements
			.tooltip4()
			.should('be.visible')
			.and('have.text', 'здесь будет переход на страницу регистрации');
	});

	it('Check carousel', () => {
		mainPage.elements.carousel().should('exist').and('include.text', 'SQL');
		// .and('include.text', 'Java Script')
		// .and('include.text', 'Python');

		// первичное состояние
		mainPage.elements.el1Carousel().should('be.visible');
		mainPage.elements.el2Carousel().should('be.visible');
		mainPage.elements.el3Carousel().should('be.hidden');
		mainPage.elements.rightArrow().should('be.visible');
		// mainPage.elements.leftArrow().should('be.hidden');

		mainPage.elements.rightArrow().click();
		// состояние после клика на правую стрелку
		mainPage.elements.el3Carousel().should('be.visible');
		mainPage.elements.el2Carousel().should('be.visible');
		// mainPage.elements.el1Carousel().should('be.hidden');
		mainPage.elements.rightArrow().should('be.hidden');
		mainPage.elements.leftArrow().should('be.visible');

		mainPage.elements.leftArrow().click();
		// состояние после клика на левую стрелку
		mainPage.elements.el1Carousel().should('be.visible');
		mainPage.elements.el2Carousel().should('be.visible');
		// mainPage.elements.el3Carousel().should('be.hidden');
		mainPage.elements.rightArrow().should('be.visible');
		mainPage.elements.leftArrow().should('be.hidden');
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
			.and('have.text', 'Задай нам  вопрос');
	});

	it.skip('Check askUsQuestion button tooltip', () => {
		mainPage.elements.askQuestButton().focus();
		mainPage.elements
			.tooltip5()
			.should('be.visible')
			.and(
				'have.text',
				'здесь будет возможно инициировать получение обратной связи'
			);
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
	it.skip('Check PersonalData link', () => {
		cy.contains('Персональные данные').should('exist');
		mainPage.elements
			.tooltip6()
			.should('be.visible')
			.and(
				'have.text',
				'здесь будет переход на страницу о защите персональных данных'
			);
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
	it.only('Check LinkedIn', () => {
		mainPage.elements.linkedIn().should('exist');
		mainPage.elements.linkedIn().click();
		cy.url().should(
			'eq',
			'https://ru.linkedin.com/company/train-lab-interns'
		);
	});

	//GitLink
	it('Check Git', () => {
		cy.visit('https://alpha.it-roast.com/');
		mainPage.elements.gitLink().should('exist');
		mainPage.elements.gitLink().click();
		cy.url().should(
			'eq',
			'https://github.com/orgs/Train-lab-intern/topics/most_used?context=overview'
		);
	});
});
