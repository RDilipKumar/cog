import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#username");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  get btnContinue() {
    return $('button[data-testid="AUTHN__SUBMIT_BTN"]');
  }

  get createSkyPwdLabel() {
    return $('div[class="subtitle center"]');
  }

  get linkSignIn() {
    return $('a[data-test-id="sign-in-link"]');
  }

  get authenticationTitle() {
    // return $('//div/h1[@class="title"]');
    return $('//h1[@data-testid="AUTHN__TITLE"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login() {
    await this.linkSignIn.click();
    await browser.pause(6000);
    await browser.switchToFrame(1);
    // await browser.switchWindow("Sky Sign-In");
    await this.authenticationTitle.getText();
    console.log(
      "-------alskhlak;akjs-------" + (await this.authenticationTitle.getText())
    );
    await expect(this.authenticationTitle).toHaveTextContaining(
      "Let’s get started"
    );
    await this.inputUsername.setValue("testid@gmail.com");
    await this.btnContinue.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open(path) {
    return super.open(path);
  }
}

export default new LoginPage();
