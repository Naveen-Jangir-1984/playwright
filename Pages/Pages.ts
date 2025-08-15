import { Page } from "@playwright/test";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { Sales } from "./Applications/Sales";

export class Pages {
  readonly login: Login;
  readonly dashboard: Dashboard;
  readonly sales: Sales;

  constructor(private page: Page) {
    this.page = page;
    this.login = new Login(this.page);
    this.dashboard = new Dashboard(this.page);
    this.sales = new Sales(this.page);
  }
}
