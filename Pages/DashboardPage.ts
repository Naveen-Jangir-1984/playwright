import { Page } from "@playwright/test";

export class DashboardPage {
  readonly userProfile;
  readonly logout;

  constructor(private page: Page) {
    this.page = page;
    this.userProfile = this.page.locator(`button[class*="userProfile"]`);
    this.logout = this.page.locator(`a[class*="logout"]`);
  }

  async logOut() {
    await this.userProfile.click();
    await this.logout.click();
  }
}
