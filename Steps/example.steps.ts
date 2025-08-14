import { expect } from '@playwright/test';
import { Given, When, Then } from '../Fixtures/fixtures';
import { config, User } from '../testConfig';

var user: User;

const getUser = (name: string) => {
  return config.users[name];
};

Given('user login as {string}', async ({ loginPage }, name: string) => {
  user = getUser(name);
  await loginPage.navigateTo();
  await loginPage.loginAs(user.username, user.password);
});

Then('user should see the inventory title', async ({ inventoryPage }) => {
  expect(await inventoryPage.isPageTitleDisplayed()).toBe(true);
});
