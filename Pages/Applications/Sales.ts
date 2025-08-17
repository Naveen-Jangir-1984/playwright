import { Page } from "@playwright/test";
import { Leads } from "../Objects/Leads";
import { Contacts } from "../Objects/Contacts";
import { Accounts } from "../Objects/Accounts";
import { Opportunties } from "../Objects/Opportunities";

export class Sales {
  readonly leads: Leads;
  readonly contacts: Contacts;
  readonly accounts: Accounts;
  readonly opportunties: Opportunties;
  readonly object;

  constructor(private page: Page) {
    this.page = page;
    this.leads = new Leads(this.page);
    this.contacts = new Contacts(this.page);
    this.accounts = new Accounts(this.page);
    this.opportunties = new Opportunties(this.page);
    this.object = (object: string) => this.page.locator(`//div[contains(@class, "oneAppNavContainer")]//a[@title="${object}"]`);
  }
  // navigate to ab object from nav bar
  async navigateTo(name: string) {
    await this.object(name).click();
  }
}
