import { Page } from '@playwright/test';
import { config } from '../testConfig';

export class LoginPage {

	readonly username;
	readonly password;
	readonly login;

  constructor(private page: Page) {
		this.page = page;
		this.username = this.page.locator(`#user-name`);
		this.password = this.page.locator(`#password`);
		this.login = this.page.locator(`#login-button`);
  }

  async navigateTo() {
    await this.page.goto(config.baseUrl);
  }

  async loginAs(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
		await this.login.click();
  }
}
