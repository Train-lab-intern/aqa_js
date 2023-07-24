export class MainPage {
  elements = {
    logo: () => cy.get(".navbar-brand > a > img"),
    aboutUsButton: () => cy.get('[href="#about"] > .btn'),
    taskButton: () => cy.get(".d-flex > .btn"),
    signInButton: () => cy.get(":nth-child(2) > .nav-link > .btn"),
    startPathButton: () => cy.get(".Banner_btn_banner__ZteJM"),
    headerBanner: () => cy.get(".Banner_h3_banner__BaCln"),
    textBanner: () => cy.get(".Banner_text_banner__EfApu"),
    askUsTheQuastion: () => cy.get(".OurFeatures_btn__IUbw9"),
    contactDate: ()=> cy.get('.Footer_email__5cPNs'),
    linkedIn: () => cy.get('[href="https://www.linkedin.com/company/train-lab-interns/mycompany/"] > img'),
    personalDate: () =>
      cy.get(":nth-child(3) > .Footer_right_block__u-6oV > :nth-child(1)"),
    carousel: () =>
      cy.get(".Block_wrapper__cn3TA > .react-multi-carousel-list"),
    carouselRightButton: () =>
      cy.get(
        ".Block_wrapper__cn3TA > .react-multi-carousel-list > .react-multiple-carousel__arrow--right "
      ),
    carouselLeftButton: () =>
      cy.get(
        ".Block_wrapper__cn3TA > .react-multi-carousel-list > .react-multiple-carousel__arrow--left"
      ),
    element1Carousel: () =>
      cy.get(
        '.Block_wrapper__cn3TA > .react-multi-carousel-list > .react-multi-carousel-track > [data-index="0"]'
      ),
    element2Carousel: () =>
      cy.get(
        '.Block_wrapper__cn3TA > .react-multi-carousel-list > .react-multi-carousel-track > [data-index="1"]'
      ),
    element3Carousel: () =>
      cy.get(
        '.Block_wrapper__cn3TA > .react-multi-carousel-list > .react-multi-carousel-track > [data-index="2"]'
      ),
    stepsBlock: () => cy.get(".MainPage_main_mainPage__L+OFn > :nth-child(3)"),
    step1Elem: () =>
      cy.get(
        ".MainPage_main_mainPage__L+OFn > :nth-child(3) > :nth-child(1) > .container > .row > :nth-child(1)"
      ),
    step2Elem: () =>
      cy.get(
        ".MainPage_main_mainPage__L+OFn > :nth-child(3) > :nth-child(1) > .container > .row > :nth-child(2)"
      ),
    step3Elem: () =>
      cy.get(
        ".MainPage_main_mainPage__L+OFn > :nth-child(3) > :nth-child(1) > .container > .row > :nth-child(3)"
      ),
    step4Elem: () =>
      cy.get(
        ".MainPage_main_mainPage__L+OFn > :nth-child(3) > :nth-child(1) > .container > .row > :nth-child(4)"
      ),
    askQuestButton: () => cy.get(".OurFeatures_btn__IUbw9"),
    peopleStoryBlock: () =>
      cy.get(".MainPage_main_mainPage__L+OFn > :nth-child(5)"),
    persDataLink: () =>
      cy.get(":nth-child(3) > .Footer_right_block__u-6oV > :nth-child(1)"),
    ownerEmail: () => cy.get(".Footer_email__5cPNs"),
  }
}
