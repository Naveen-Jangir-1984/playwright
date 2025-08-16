import { expect } from "@playwright/test";
import { Given, When, Then, After } from "../Fixtures/fixtures";
import { DataTable } from "playwright-bdd";

When("user {string} the lead", async ({ pages, scenarioContext }, action: string, dataTable?: DataTable) => {
  // click on leads object to display records before create or delete
  await pages.sales.navigateTo("Leads");
  switch (action) {
    case "creates":
      // click New button
      await pages.sales.leads.clickOnNew();
      const data = dataTable?.hashes();
      if (data) {
        const timestamp = new Date().getTime();
        // fill data
        for (const record of data) {
          const name = record["Last Name"] + "_" + timestamp;
          await pages.sales.leads.fillValueForLabelAs(name, "Last Name");
          await pages.sales.leads.fillValueForLabelAs(record["Company"], "Company");
          scenarioContext.set("Name", name);
        }
        // click Save button
        await pages.sales.leads.clickOnSave();
      }
      break;
    case "deletes":
      const leadName = scenarioContext.get<string>("Name");
      if (leadName !== undefined) {
        // delete the matching lead from table
        await pages.sales.leads.deleteALeadWithNameAs(leadName);
      }
    default:
      break;
  }
});

When("user changes the {string} to {string}", async ({ pages }, label: string, status: string) => {
  // click Edit button
  await pages.sales.leads.clickOnEdit();
  // change status
  await pages.sales.leads.selectValueForLabelAs(status, label);
  // click Save button
  await pages.sales.leads.clickOnSave();
});
