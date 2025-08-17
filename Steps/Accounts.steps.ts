import { expect } from "@playwright/test";
import { Given, When, Then, After, Before } from "../Fixtures/fixtures";
import { DataTable } from "playwright-bdd";

When("user {string} the account", async ({ pages, scenarioContext }, action: string, dataTable?: DataTable) => {
  // click on accountss object to display records before create or delete
  await pages.sales.navigateTo("Accounts");
  switch (action) {
    case "creates":
      // click New button
      await pages.sales.accounts.clickOnNew();
      const data = dataTable?.hashes();
      if (data) {
        const timestamp = new Date().getTime();
        // fill data
        for (const record of data) {
          const name = record["Account Name"] + "_" + timestamp;
          await pages.sales.accounts.fillValueForLabelAs(name, "Account Name");
          scenarioContext.set("Account Name", name);
        }
      }
      // click Save button
      await pages.sales.accounts.clickOnSave();
      break;
    case "deletes":
      const accountName = scenarioContext.get<string>("Account Name");
      if (accountName !== undefined) {
        // delete the matching account from table
        await pages.sales.accounts.deleteAnAccountWithNameAs(accountName);
      }
    default:
      break;
  }
});
