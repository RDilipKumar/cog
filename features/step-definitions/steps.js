import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";
import HomePage from "../pageobjects/home.page";
import DealsPage from "../pageobjects/deals.page";

const pages = {
  login: LoginPage,
  home: HomePage,
  deals: DealsPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open(page);
});

When(/^I agree cookies$/, async () => {
  await HomePage.acceptCookie();
});

When(/^I try to sign in with invalid credentials$/, async () => {
  await LoginPage.login();
});

Then(/^I should see a box with the text "(.*)"$/, async (message) => {
  await expect(LoginPage.createSkyPwdLabel).toBeExisting();
  await expect(LoginPage.createSkyPwdLabel).toHaveTextContaining(message);
});

Then(/^I see a list of deals with a price to it "(.*)"$/, async (priceList) => {
  let price = priceList.split(",");
  await expect(DealsPage.highlightOfferText).toBeExisting();
  await expect(DealsPage.highlightOfferText[0]).toHaveTextContaining(price[0]);
  await expect(DealsPage.highlightOfferText[1]).toHaveTextContaining(price[1]);
  await expect(DealsPage.highlightOfferText[2]).toHaveTextContaining(price[2]);
});

Then(/^I should see heading "(.*)"$/, async (headingTitle) => {
  await expect(DealsPage.dealsTitleText).toBeExisting();
  await expect(DealsPage.dealsTitleText).toHaveTextContaining(headingTitle);
});
