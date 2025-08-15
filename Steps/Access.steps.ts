import { expect } from "@playwright/test";
import { Given, When, Then, After } from "../Fixtures/fixtures";
import { config, User } from "../testConfig";

var user: User;

const getUser = (name: string) => {
  return config.users[name];
};

Given("user has logged in as {string}", async ({ page, pages, scenarioContext }, name: string) => {
  scenarioContext.set("user", name);
  user = getUser(name);
  await pages.loginPage.navigateTo();
  await pages.loginPage.loginAs(user.username, user.password);
  await page.waitForLoadState();
});

Then("user has logged out", async ({ pages, scenarioContext }) => {
  await pages.dashboardPage.logOut();
  await expect(pages.loginPage.login).toBeVisible();
});
