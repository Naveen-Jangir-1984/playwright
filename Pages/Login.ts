import { Page } from "@playwright/test";
import { config } from "../testConfig";

export class Login {
  readonly username;
  readonly password;
  readonly signin;

  constructor(private page: Page) {
    this.page = page;
    this.username = this.page.locator(`#username`);
    this.password = this.page.locator(`#password`);
    this.signin = this.page.locator(`#Login`);
  }
  // navigate to the url
  async navigateTo() {
    await this.page.goto(config.baseUrl);
  }
  // login with username and password
  async loginAs(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.signin.click();
  }
}
