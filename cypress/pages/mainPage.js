export class MainPage {
	elements = {
		logo: () => cy.get('.navbar-brand > a > img'),
		aboutUsButton: () => cy.get('[href="#about"] > .btn'),
		tooltip1: () => cy.get(''),
		signInButton: () => cy.get('.nav-link > a > .btn'),
		tooltip2: () => cy.get(''),
		taskButton: () => cy.get('.d-flex > .btn'),
		tooltip3: () => cy.get(''),
		startWayButton: () => cy.get('.Banner_btn_banner__ZteJM'),
		tooltip4: () => cy.get(''),

		titleBanner: () => cy.get('h3.Banner_h3_banner__BaCln'),
		contentBanner: () => cy.get('div.col-md-6>.Banner_text_banner__EfApu'),

		askQuestButton: () => cy.get('.row > :nth-child(5)'),
		tooltip5: () => cy.get(''),

		tooltip6: () => cy.get(''),

		linkedIn: () =>
			cy.get(
				'[href="https://www.linkedin.com/company/train-lab-interns/mycompany/"]'
			),

		gitLink: () => cy.get('[href="https://github.com/Train-lab-intern"]'),

		persDateProtect: () => cy.get('.Footer_rights__wnw41'),
		carousel: () =>
			cy.get(
				'.Block_wrapper__cn3TA > .react-multi-carousel-list>.react-multi-carousel-track'
			),
		rightArrow: () =>
			cy.get(
				'.Block_wrapper__cn3TA > .react-multi-carousel-list > .react-multiple-carousel__arrow--right '
			),
		leftArrow: () =>
			cy.get(
				'.Block_wrapper__cn3TA > .react-multi-carousel-list > .react-multiple-carousel__arrow--left'
			),
		el1Carousel: () =>
			cy.get(
				'.Block_wrapper__cn3TA > .react-multi-carousel-list > .react-multi-carousel-track > [data-index="0"]'
			),
		el2Carousel: () =>
			cy.get(
				'.Block_wrapper__cn3TA > .react-multi-carousel-list > .react-multi-carousel-track > [data-index="1"]'
			),
		el3Carousel: () =>
			cy.get(
				'.Block_wrapper__cn3TA > .react-multi-carousel-list > .react-multi-carousel-track > [data-index="2"]'
			),

		step1Elem: () => cy.get('.OurFeatures_block_1__A4l3Y > span'),
		step2Elem: () =>
			cy.get(':nth-child(2) > .OurFeatures_block_2__Zs-cQ > span'),
		step3Elem: () =>
			cy.get(':nth-child(3)>.OurFeatures_block_3__Y9mBM > span'),
		step4Elem: () =>
			cy.get(':nth-child(4)>.OurFeatures_block_2__Zs-cQ > span'),

		peopleStorySection: () =>
			cy.get(
				'.UserReviews_wrapper__jd7or > .react-multi-carousel-list>.react-multi-carousel-track'
			),

		peopleStoryElement: () =>
			cy.get(
				'.UserReviews_wrapper__jd7or > .react-multi-carousel-list>.react-multi-carousel-track>li>.UserReviews_cart__rpfMC>span'
			),
		ownerEmail: () => cy.get('.Footer_email__5cPNs'),
	};
}
