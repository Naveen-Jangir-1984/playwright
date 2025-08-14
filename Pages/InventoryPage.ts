import { Page } from '@playwright/test';

export class InventoryPage {

	readonly pageTitle;

  constructor(private page: Page) {
		this.page = page;
		this.pageTitle = this.page.locator(`.title`);
  }

  async isPageTitleDisplayed() {
    return await this.pageTitle.isVisible();
  }
}
