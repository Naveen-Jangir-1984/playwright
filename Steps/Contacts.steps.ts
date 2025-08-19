import { expect } from "@playwright/test";
import { Given, When, Then, After, Before } from "../Fixtures/fixtures";
import { DataTable } from "playwright-bdd";

When("user {string} the contact", async ({ pages, scenarioContext }, action: string, dataTable?: DataTable) => {
  // click on contacts object to display records before create or delete
  await pages.sales.navigateTo("Contacts");
  switch (action) {
    case "creates":
      // click New button
      await pages.sales.contacts.clickOnNew();
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
          const name = record["Last Name"] + "_" + timestamp;
          await pages.sales.contacts.fillValueForLabelAs(name, "Last Name");
          await pages.sales.contacts.pickValueForLabelAs(accountName, "Account Name");
          scenarioContext.set("Contact Name", name);
        }
      }
      // click Save button
      await pages.sales.contacts.clickOnSave();
      break;
    case "deletes":
      const contactName = scenarioContext.get<string>("Contact Name");
      if (contactName !== undefined) {
        // delete the matching contact from table
        await pages.sales.contacts.deleteAnOpportunityWithNameAs(contactName);
      }
    default:
      break;
  }
});
