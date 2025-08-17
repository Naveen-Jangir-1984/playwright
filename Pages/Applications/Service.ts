import { Page } from "@playwright/test";
import { Contacts } from "../Objects/Contacts";
import { Accounts } from "../Objects/Accounts";
import { Cases } from "../Objects/Cases";

export class Service {
  readonly cases: Cases;
  readonly contacts: Contacts;
  readonly accounts: Accounts;
  readonly object;

  constructor(private page: Page) {
    this.page = page;
    this.cases = new Cases(this.page);
    this.contacts = new Contacts(this.page);
    this.accounts = new Accounts(this.page);
    this.object = (object: string) => this.page.locator(`//div[contains(@class, "oneAppNavContainer")]//a[@title="${object}"]`);
  }
  // navigate to ab object from nav bar
  async navigateTo(name: string) {
    await this.object(name).click();
  }
}
