import { expect } from "@playwright/test";
import { Given, When, Then, After, Before } from "../Fixtures/fixtures";
import { DataTable } from "playwright-bdd";
import { ScenarioContext } from "../Utilities/ScenarioContext";
import { Pages } from "../Pages/Pages";

When("user {string} the {string}", async ({ pages, scenarioContext }, action: string, object: string, dataTable: DataTable | undefined) => {
  // click on accounts object to display records before create or delete
  const application = scenarioContext.get<string>("Application")?.toLowerCase() as "sales" | "service";
  await pages[application].selectObjectWithNameAs(object);
  // object wise actions
  switch (object) {
    case "Lead":
      await leadObjectActions(pages, action, dataTable, scenarioContext);
      break;
    case "Contact":
      await contactObjectActions(pages, action, dataTable, scenarioContext);
      break;
    case "Account":
      await accountObjectActions(pages, action, dataTable, scenarioContext);
      break;
    case "Opportunitie":
      await opportunityObjectActions(pages, action, dataTable, scenarioContext);
      break;
    case "Case":
      await caseObjectActions(pages, action, dataTable, scenarioContext);
      break;
    default:
      break;
  }
});

// lead object actions
const leadObjectActions = async (pages: Pages, action: string, dataTable: DataTable | undefined, scenarioContext: ScenarioContext) => {
  const application = scenarioContext.get<string>("Application")?.toLowerCase() as "sales" | "service";
  const data = dataTable?.hashes();
  switch (action) {
    case "creates":
      // click New button
      await pages[application].leads.clickOnNew();
      if (data) {
        const timestamp = new Date().getTime();
        // fill data
        for (const record of data) {
          const name = record["Last Name"] + "_" + timestamp;
          await pages[application].leads.fillValueForLabelAs(name, "Last Name");
          await pages[application].leads.fillValueForLabelAs(record["Company"], "Company");
          scenarioContext.set("Lead Name", name);
        }
      }
      // click Save button
      await pages[application].leads.clickOnSave();
      break;
    case "modifies":
      // click Edit button
      const recordToBeModified = scenarioContext.get<string>("Lead Name") as string;
      await pages[application].leads.editRecordWithLeadNameAs(recordToBeModified);
      if (data) {
        // modify data
        for (const record of data) {
          // change status
          await pages[application].leads.selectValueForLabelAs(record["Lead Status"], "Lead Status");
        }
      }
      // click Save button
      await pages[application].leads.clickOnSave();
      break;
    case "deletes":
      const recordToBeDeleted = scenarioContext.get<string>("Lead Name") as string;
      // delete the matching record from table
      await pages[application].leads.deleteRecordWithLeadNameAs(recordToBeDeleted);
      break;
    default:
      break;
  }
};

// contact object actions
const contactObjectActions = async (pages: Pages, action: string, dataTable: DataTable | undefined, scenarioContext: ScenarioContext) => {
  const application = scenarioContext.get<string>("Application")?.toLowerCase() as "sales" | "service";
  const data = dataTable?.hashes();
  switch (action) {
    case "creates":
      // click New buttons
      await pages[application].contacts.clickOnNew();
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
          await pages[application].contacts.fillValueForLabelAs(name, "Last Name");
          await pages[application].contacts.pickValueForLabelAs(accountName, "Account Name");
          scenarioContext.set("Contact Name", name);
        }
      }
      // click Save button
      await pages[application].contacts.clickOnSave();
      break;
    case "modifies":
      // click Edit button
      const recordToBeEdited = scenarioContext.get<string>("Contact Name") as string;
      await pages[application].contacts.editRecordWithContactNameAs(recordToBeEdited);
      if (data) {
        // modify data
        for (const record of data) {
          // to be impletemented
        }
      }
      // click Save button
      await pages.service.contacts.clickOnSave();
      break;
    case "deletes":
      const recordToBeDeleted = scenarioContext.get<string>("Contact Name") as string;
      // delete the matching record from table
      await pages[application].contacts.deleteRecordWithContactNameAs(recordToBeDeleted);
      break;
    default:
      break;
  }
};

// account object actions
const accountObjectActions = async (pages: Pages, action: string, dataTable: DataTable | undefined, scenarioContext: ScenarioContext) => {
  const application = scenarioContext.get<string>("Application")?.toLowerCase() as "sales" | "service";
  const data = dataTable?.hashes();
  switch (action) {
    case "creates":
      // click New button
      await pages[application].accounts.clickOnNew();
      if (data) {
        const timestamp = new Date().getTime();
        // fill data
        for (const record of data) {
          const name = record["Account Name"] + "_" + timestamp;
          await pages[application].accounts.fillValueForLabelAs(name, "Account Name");
          scenarioContext.set("Account Name", name);
        }
      }
      // click Save button
      await pages[application].accounts.clickOnSave();
      break;
    case "modifies":
      // click Edit button
      const recordToBeEdited = scenarioContext.get<string>("Account Name") as string;
      await pages[application].accounts.editRecordWithAccountNameAs(recordToBeEdited);
      if (data) {
        // modify data
        for (const record of data) {
          // to be impletemented
        }
      }
      // click Save button
      await pages.service.accounts.clickOnSave();
      break;
    case "deletes":
      const recordToBeDeleted = scenarioContext.get<string>("Account Name") as string;
      // delete the matching record from table
      await pages[application].accounts.deleteRecordWithAccountNameAs(recordToBeDeleted);
      break;
    default:
      break;
  }
};

// opportunity object actions
const opportunityObjectActions = async (pages: Pages, action: string, dataTable: DataTable | undefined, scenarioContext: ScenarioContext) => {
  const application = scenarioContext.get<string>("Application")?.toLowerCase() as "sales" | "service";
  const data = dataTable?.hashes();
  switch (action) {
    case "creates":
      // click New button
      await pages[application].opportunties.clickOnNew();
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
          await pages[application].opportunties.fillValueForLabelAs(name, "Opportunity Name");
          await pages[application].opportunties.pickValueForLabelAs(accountName, "Account Name");
          await pages[application].opportunties.fillValueForLabelAs(record["Close Date"], "Close Date");
          await pages[application].opportunties.selectValueForLabelAs(record["Stage"], "Stage");
          scenarioContext.set("Opportunity Name", name);
        }
      }
      // click Save button
      await pages[application].opportunties.clickOnSave();
      break;
    case "modifies":
      // click Edit button
      const recordToBeModified = scenarioContext.get<string>("Opportunity Name") as string;
      await pages[application].opportunties.editRecordWithOpportunityNameAs(recordToBeModified);
      if (data) {
        // modify data
        for (const record of data) {
          // change status
          await pages[application].opportunties.selectValueForLabelAs(record["Stage"], "Stage");
        }
      }
      // click Save button
      await pages[application].opportunties.clickOnSave();
      break;
    case "deletes":
      const recordToBeDeleted = scenarioContext.get<string>("Opportunity Name") as string;
      // delete the matching record from table
      await pages[application].opportunties.deleteRecordWithOpportunityNameAs(recordToBeDeleted);
      break;
    default:
      break;
  }
};

// case object actions
const caseObjectActions = async (pages: Pages, action: string, dataTable: DataTable | undefined, scenarioContext: ScenarioContext) => {
  const application = scenarioContext.get<string>("Application")?.toLowerCase() as "sales" | "service";
  const data = dataTable?.hashes();
  switch (action) {
    case "creates":
      // click New button
      await pages[application].cases.clickOnNew();
      if (data) {
        const timestamp = new Date().getTime();
        // fill data
        for (const record of data) {
          let accountName = scenarioContext.get<string>("Account Name");
          if (accountName) {
            accountName = accountName;
            await pages[application].cases.pickValueForLabelAs(accountName, "Account Name");
          } else {
            accountName = record["Account Name"] + "_" + timestamp;
            scenarioContext.set("Account Name", accountName);
          }
          await pages[application].cases.selectValueForLabelAs(record["Case Origin"], "Case Origin");
        }
      }
      // click Save button
      await pages[application].cases.clickOnSave();
      // save case number
      scenarioContext.set("Case Number", await pages[application].cases.getCaseNumber());
      break;
    case "modifies":
      // click Edit button
      const caseToBeModified = scenarioContext.get<string>("Case Number") as string;
      await pages[application].cases.editRecordWithCaseNumberAs(caseToBeModified);
      if (data) {
        // modify data
        for (const record of data) {
          // change status
          await pages[application].cases.selectValueForLabelAs(record["Status"], "Status");
        }
      }
      // click Save button
      await pages.service.cases.clickOnSave();
      break;
    case "deletes":
      // click Edit button
      const caseToBeDeleted = scenarioContext.get<string>("Case Number") as string;
      // delete the matching record from table
      await pages[application].cases.deleteRecordWithCaseNumberAs(caseToBeDeleted);
      break;
    default:
      break;
  }
};
