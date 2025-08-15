import { Page } from "@playwright/test";
import { Leads } from "../Objects/Leads";

export class Sales {
  readonly leads: Leads;
  constructor(private page: Page) {
    this.page = page;
    this.leads = new Leads(this.page);
  }
}
