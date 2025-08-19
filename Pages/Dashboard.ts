import { Page } from "@playwright/test";

export class Dashboard {
  readonly userProfile;
  readonly logout;
  readonly appLauncher;
  readonly appLauncherInput;
  readonly application;

  constructor(private page: Page) {
    this.page = page;
    this.userProfile = this.page.locator(`button[class*="userProfile"]`);
    this.logout = this.page.locator(`a[class*="logout"]`);
    this.appLauncher = this.page.getByRole("button", { name: "App Launcher" });
    this.appLauncherInput = this.page.getByRole("combobox", { name: "Search apps and items..." });
    this.application = (name: string) => this.page.getByRole("option", { name: `${name}`, exact: true });
  }

  // sign out
  async signout() {
    await this.userProfile.click();
    await this.logout.click();
    await this.page.waitForLoadState();
  }
  // select application based on Name
  async selectApplication(name: string) {
    await this.appLauncher.click();
    await this.appLauncherInput.fill(name);
    await this.application(name).click();
  }
}
