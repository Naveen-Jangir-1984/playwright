import { Page } from "@playwright/test";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { Sales } from "./Applications/Sales";
import { Service } from "./Applications/Service";

export class Pages {
  readonly login: Login;
  readonly dashboard: Dashboard;
  readonly sales: Sales;
  readonly service: Service;

  constructor(private page: Page) {
    this.page = page;
    this.login = new Login(this.page);
    this.dashboard = new Dashboard(this.page);
    this.sales = new Sales(this.page);
    this.service = new Service(this.page);
  }
}
