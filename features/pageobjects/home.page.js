import { Then } from "@wdio/cucumber-framework";
import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */
  get btnAgree() {
    return $('button[title="Agree"]');
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  async acceptCookie() {
    var alert_frame = await browser.$('iframe[title="SP Consent Message"]');
    // await alert_frame.waitForExist({ timeout: 5000 });
    let isExisting = await alert_frame.isExisting();
    if (isExisting) {
      await browser.switchToFrame(alert_frame);
      await await this.btnAgree.click();
      await browser.switchToParentFrame();
    }
  }
  /**
   * overwrite specific options to adapt it to page object
   */
  open(path) {
    return super.open("");
  }
}

export default new HomePage();
