import { expect } from "@playwright/test";
import { Given, When, Then, After } from "../Fixtures/fixtures";

When("user select application as {string}", async ({ pages }, application: string) => {
  // select application
  await pages.dashboard.selectApplication(application);
});
