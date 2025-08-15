import { Page } from "@playwright/test";

export class Dashboard {
  readonly userProfile;
  readonly logout;
  readonly application;

  constructor(private page: Page) {
    this.page = page;
    this.userProfile = this.page.locator(`button[class*="userProfile"]`);
    this.logout = this.page.locator(`a[class*="logout"]`);
    this.application = (name: string) => this.page.locator(`xpath=//li//span[text()="${name}"]/ancestor::a`);
  }

  // sign out
  async signout() {
    await this.userProfile.click();
    await this.logout.click();
  }
  // select application based on Name
  async selectApplication(name: string) {
    await this.application(name).click();
  }
}
