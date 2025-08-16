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
  // naviagate to URL
  await pages.login.navigateTo();
  // login with credentials loaded from env users
  await pages.login.loginAs(user.username, user.password);
});

Then("user has logged out", async ({ pages }) => {
  // user logged out
  await pages.dashboard.signout();
});
