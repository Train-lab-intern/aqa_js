import { MainPage } from "../../pages/mainPage"

describe("Main Page", () => {
  beforeEach(() => {
    cy.visit("https://front-test-a2ykv.ondigitalocean.app/")
  })
  const mainPage = new MainPage()
  it("Check logo", () => {
    mainPage.elements.logo().should("exist")
  })

  //О нас
  it("Check aboutUs button", () => {
    mainPage.elements.aboutUsButton().should("exist"),
      mainPage.elements.aboutUsButton().contains("О нас")
  })
  //Войти
  it("Check  SignIn button", () => {
    mainPage.elements.signInButton().should("exist")
    mainPage.elements.signInButton().contains("Войти")
  })

  //Начать путь
  it("Check StartYouWay button", () => {
    mainPage.elements.startPathButton().should("exist")
    mainPage.elements.startPathButton().contains("Начать путь")
  })

  //Задания
  it("Check Tasks button", () => {
    mainPage.elements.taskButton().should("exist"),
      mainPage.elements.taskButton().contains("Задания")
  })

  //Задай нам вопрос
  it("Check AskUsQuastion button", () => {
    mainPage.elements.askUsTheQuastion().should("exist")
    mainPage.elements.askUsTheQuastion().contains("Задай нам вопрос")
  })

  //Персональные данные
  it("Check PersonalData text", () => {
    cy.contains("Персональные данные").should("exist")
  })

  //LinkedIn
  it("Check LinkedIn", () => {
    mainPage.elements.linkedIn().should("exist")
  })

  //GitLink
  it("Check Git", () => {
    mainPage.elements.gitLink().should("exist")
  })
  // it("Check carousel", () => {
  //   mainPage.elements.carousel().should("exist")
  //   mainPage.elements.element1Carousel().should("be.visible")
  //   mainPage.elements.element2Carousel().should("be.visible")
  //   // на экране должно быть видно только два элемента карусели,третий должен быть скрыт
  //   // mainPage.elements.element3Carousel().should("not.be.visible");
  //   mainPage.elements.carouselRightButton().should("be.visible")
  //   mainPage.elements.carouselRightButton().click()
  //   mainPage.elements.element3Carousel().should("be.visible")

  //   // mainPage.elements.carouselLeftButton().should("be.visible");
  //   // mainPage.elements.carouselLeftButton().click();
  // })
})
