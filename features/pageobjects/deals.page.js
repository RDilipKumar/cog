import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DealsPage extends Page {
  /**
   * define selectors using getter methods
   */
  get dealsTitleText() {
    return $("#deals-primary-heading");
  }

  get highlightOfferText() {
    return $$("//div[contains(@id,'highlight.offer')]");
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open(path) {
    return super.open(path);
  }
}

export default new DealsPage();
