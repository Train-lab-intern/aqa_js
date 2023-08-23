export class MainPage {
	elements = {
		logo: () => cy.get('.container > :nth-child(1) > img'),
		aboutUsButton: () =>
			cy.get(
				'#basic-navbar-nav > div.nav.me-auto.ms-auto.navbar-nav > a:nth-child(1)'
			),
		tooltip1: () =>
			cy.get(
				'[data-tooltip="здесь будет переход на страницу с информацией о приложении"]'
			),
		signInButton: () => cy.get(':nth-child(2) > a > .btn'),
		tooltip2: () =>
			cy.get(
				'[data-tooltip="здесь будет переход на страницу авторизации"]'
			),
		taskButton: () => cy.get('.d-flex > .btn'),
		tooltip3: () =>
			cy.get(
				'[data-tooltip="здесь будет переход на страницу с примерами заданий"]'
			),
		startWayButton: () => cy.get('.Banner_btn_banner__BU3iN'),
		tooltip4: () =>
			cy.get(
				'[data-tooltip="здесь будет переход на страницу регистрации"]'
			),

		titleBanner: () => cy.get('.Banner_h3_banner__ebOJR'),
		contentBanner: () => cy.get('.Banner_text_banner__7pRMU'),

		askQuestButton: () => cy.get('.row > :nth-child(5)'),
		tooltip5: () =>
			cy.get(
				'[data-tooltip="здесь будет возможно инициировать получение обратной связи"]'
			),

		tooltip6: () =>
			cy.get(
				'[data-tooltip="здесь будет переход на страницу о защите персональных данных"]'
			),

		linkedIn: () => cy.get('[href="src/components/Footer/Footer"]'),

		gitLink: () => cy.get('[href="https://github.com/Train-lab-intern"]'),

		persDateProtect: () => cy.get('.Footer_rights__pTQXT'),
		carousel: () =>
			cy.get(
				'.Block_wrapper__djAAq> .react-multi-carousel-list>.react-multi-carousel-track'
			),
		rightArrow: () =>
			cy.get(
				'.Block_wrapper__djAAq> .react-multi-carousel-list > .react-multiple-carousel__arrow--right '
			),
		leftArrow: () =>
			cy.get(
				'.Block_wrapper__djAAq> .react-multi-carousel-list > .react-multiple-carousel__arrow--left'
			),
		el1Carousel: () =>
			cy.get(
				'.Block_wrapper__djAAq > .react-multi-carousel-list > .react-multi-carousel-track > [data-index="0"]'
			),
		el2Carousel: () =>
			cy.get(
				'.Block_wrapper__djAAq > .react-multi-carousel-list > .react-multi-carousel-track > [data-index="1"]'
			),
		el3Carousel: () =>
			cy.get(
				'.Block_wrapper__djAAq > .react-multi-carousel-list > .react-multi-carousel-track > [data-index="2"]'
			),

		step1Elem: () =>
			cy.get(':nth-child(1) > .OurFeatures_block_2__sEF7v > span'),
		step2Elem: () =>
			cy.get(':nth-child(2) > .OurFeatures_block_1__fSB3B > span'),
		step3Elem: () =>
			cy.get(':nth-child(3) > .OurFeatures_block_2__sEF7v > span'),
		step4Elem: () =>
			cy.get(':nth-child(4) > .OurFeatures_block_1__fSB3B > span'),

		peopleStorySection: () =>
			cy.get(
				'.UserReviews_wrapper__fBNeW > .react-multi-carousel-list>.react-multi-carousel-track'
			),

		peopleStoryElement: () =>
			cy.get(
				'.UserReviews_wrapper__fBNeW > .react-multi-carousel-list>.react-multi-carousel-track>li'
			),
		ownerEmail: () => cy.get('.Footer_email__5cPNs'),
	};
}
