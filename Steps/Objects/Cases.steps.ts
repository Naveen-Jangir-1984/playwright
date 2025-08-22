import { expect } from "@playwright/test";
import { Given, When, Then, After, Before } from "../../Fixtures/fixtures";
import { DataTable } from "playwright-bdd";

When("user {string} the case", async ({ pages, scenarioContext }, action: string, dataTable?: DataTable) => {
  // click on cases object to display records before create or delete
  await pages.service.navigateTo("Cases");
  switch (action) {
    case "creates":
      // click New button
      await pages.service.cases.clickOnNew();
      const data = dataTable?.hashes();
      if (data) {
        const timestamp = new Date().getTime();
        // fill data
        for (const record of data) {
          let accountName = scenarioContext.get<string>("Account Name");
          if (accountName) {
            accountName = accountName;
            await pages.service.cases.pickValueForLabelAs(accountName, "Account Name");
          } else {
            accountName = record["Account Name"] + "_" + timestamp;
            scenarioContext.set("Account Name", accountName);
          }
          await pages.service.cases.selectValueForLabelAs(record["Case Origin"], "Case Origin");
        }
      }
      // click Save button
      await pages.service.cases.clickOnSave();
      // save case number
      scenarioContext.set("Case Number", await pages.service.cases.getCaseNumber());
      break;
    case "deletes":
      const caseNumber = scenarioContext.get<string>("Case Number");
      if (caseNumber !== undefined) {
        // delete the matching case from table
        await pages.service.cases.deleteRecordWithNameAs(caseNumber);
      }
    default:
      break;
  }
});

When("user changes the case status to {string}", async ({ pages }, status: string) => {
  // click Edit button
  await pages.service.cases.clickOnEdit();
  // change status
  await pages.service.cases.selectValueForLabelAs(status, "Status");
  // click Save button
  await pages.service.cases.clickOnSave();
});
