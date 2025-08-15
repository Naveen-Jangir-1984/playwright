import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { DashboardPage } from "./DashboardPage";

export class Pages {
  readonly loginPage: LoginPage;
  readonly dashboardPage: DashboardPage;

  constructor(private page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
  }
}
