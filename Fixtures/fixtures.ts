import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';

type typePage = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
};

export const test = base.extend<typePage>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
});

export const { Given, When, Then, Before, After } = createBdd(test);
