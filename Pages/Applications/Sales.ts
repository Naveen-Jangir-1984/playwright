import { Page } from "@playwright/test";
import { Common } from "../Locators/Common";
import { Leads } from "../Objects/Leads";
import { Contacts } from "../Objects/Contacts";
import { Accounts } from "../Objects/Accounts";
import { Opportunties } from "../Objects/Opportunities";
import { Cases } from "../Objects/Cases";

export class Sales {
  readonly common: Common;
  readonly cases: Cases;
  readonly leads: Leads;
  readonly contacts: Contacts;
  readonly accounts: Accounts;
  readonly opportunties: Opportunties;

  constructor(private page: Page) {
    this.page = page;
    this.common = new Common(this.page);
    this.cases = new Cases(this.page);
    this.leads = new Leads(this.page);
    this.contacts = new Contacts(this.page);
    this.accounts = new Accounts(this.page);
    this.opportunties = new Opportunties(this.page);
  }
  // select an object from nav bar
  async selectObjectWithNameAs(name: string) {
    await this.common.object(name).click();
  }
}
