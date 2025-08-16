import { Page } from "@playwright/test";
import { Leads } from "../Objects/Leads";

export class Sales {
  readonly leads: Leads;
  readonly object;

  constructor(private page: Page) {
    this.page = page;
    this.leads = new Leads(this.page);
    this.object = (object: string) => this.page.locator(`//div[contains(@class, "oneAppNavContainer")]//a[@title="${object}"]`);
  }
  // navigate to ab object from nav bar
  async navigateTo(name: string) {
    await this.object(name).click();
  }
}
