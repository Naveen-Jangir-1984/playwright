import { expect } from "@playwright/test";
import { Given, When, Then, After, Before } from "../Fixtures/fixtures";
import { DataTable } from "playwright-bdd";

When("user {string} the opportunity", async ({ pages, scenarioContext }, action: string, dataTable?: DataTable) => {
  // click on opportunities object to display records before create or delete
  await pages.sales.navigateTo("Opportunities");
  switch (action) {
    case "creates":
      // click New button
      await pages.sales.opportunties.clickOnNew();
      const data = dataTable?.hashes();
      if (data) {
        const timestamp = new Date().getTime();
        // fill data
        for (const record of data) {
          let accountName = scenarioContext.get<string>("Account Name");
          if (accountName) {
            accountName = accountName;
          } else {
            accountName = record["Account Name"] + "_" + timestamp;
            scenarioContext.set("Account Name", accountName);
          }
          const name = record["Opportunity Name"] + "_" + timestamp;
          await pages.sales.opportunties.fillValueForLabelAs(name, "Opportunity Name");
          await pages.sales.opportunties.pickValueForLabelAs(accountName, "Account Name");
          await pages.sales.opportunties.fillValueForLabelAs(record["Close Date"], "Close Date");
          await pages.sales.opportunties.selectValueForLabelAs(record["Stage"], "Stage");
          scenarioContext.set("Opportunity Name", name);
        }
      }
      // click Save button
      await pages.sales.opportunties.clickOnSave();
      break;
    case "deletes":
      const opportunityName = scenarioContext.get<string>("Opportunity Name");
      if (opportunityName !== undefined) {
        // delete the matching opportunity from table
        await pages.sales.opportunties.deleteAnOpportunityWithNameAs(opportunityName);
      }
    default:
      break;
  }
});

When("user changes the opportunity stage to {string}", async ({ pages }, status: string) => {
  // click Edit button
  await pages.sales.opportunties.clickOnEdit();
  // change status
  await pages.sales.opportunties.selectValueForLabelAs(status, "Stage");
  // click Save button
  await pages.sales.opportunties.clickOnSave();
});
