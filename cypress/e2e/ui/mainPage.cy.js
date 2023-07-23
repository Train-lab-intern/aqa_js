import { MainPage } from "../../pages/mainPage";

describe("Main Page", () => {
  beforeEach(() => {
    cy.visit("https://front-test-a2ykv.ondigitalocean.app/");
  });
  const mainPage = new MainPage();
  it("Check logo", () => {
    mainPage.elements.logo().should("exist");
  });

  it("Check aboutUs button", () => {
    mainPage.elements.aboutUsButton().should("exist");
  });
  it("Check carousel", () => {
    mainPage.elements.carousel().should("exist");
    mainPage.elements.element1Carousel().should("be.visible");
    mainPage.elements.element2Carousel().should("be.visible");
    // на экране должно быть видно только два элемента карусели,третий должен быть скрыт
    // mainPage.elements.element3Carousel().should("not.be.visible");
    mainPage.elements.carouselRightButton().should("be.visible");
    mainPage.elements.carouselRightButton().click();
    mainPage.elements.element3Carousel().should("be.visible");

    mainPage.elements.carouselLeftButton().should("be.visible");
    mainPage.elements.carouselLeftButton().click();
  });
});
