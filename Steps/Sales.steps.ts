import { expect } from "@playwright/test";
import { Given, When, Then, After } from "../Fixtures/fixtures";
import { DataTable } from "playwright-bdd";

When("user {string} a {string} with below details", async ({ pages }, action: string, object: string, dataTable: DataTable) => {
  const data = dataTable.hashes();
  switch (action) {
    case "creates":
      await pages.sales.leads.clickOnNew();
      for (const record of data) {
        await pages.sales.leads.fillValueForLabelAs(record["Last Name"], "Last Name");
        await pages.sales.leads.fillValueForLabelAs(record["Company"], "Company");
      }
      await pages.sales.leads.clickOnSave();
      break;
    default:
      break;
  }
});

When("user changes the {string} to {string}", async ({ pages }, label: string, status: string) => {
  await pages.sales.leads.clickOnEdit();
  await pages.sales.leads.selectValueForLabelAs(status, label);
  await pages.sales.leads.clickOnSave();
});
