import { test as base, createBdd } from "playwright-bdd";
import { Pages } from "../Pages/Pages";
import { ScenarioContext } from "../Utilities/ScenarioContext";

type typePages = {
  pages: Pages;
};

type typeContext = {
  scenarioContext: ScenarioContext;
};

export const test = base.extend<typePages & typeContext>({
  pages: async ({ page }, use) => {
    await use(new Pages(page));
  },
  scenarioContext: async ({}, use) => {
    await use(new ScenarioContext());
  },
});

export const { Given, When, Then, Before, After } = createBdd(test);
