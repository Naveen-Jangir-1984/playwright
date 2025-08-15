import { Page } from "@playwright/test";

export class Leads {
  readonly button;
  readonly textField;
  readonly dropDown;
  readonly dropDownOption;
  readonly newBtn;
  readonly saveBtn;
  readonly editBtn;

  constructor(private page: Page) {
    this.page = page;
    this.newBtn = this.page.locator(`xpath=//div[text()="New"]/ancestor::a`);
    this.saveBtn = this.page.locator(`[name="SaveEdit"]`);
    this.editBtn = this.page.locator(`[name="Edit"]`);
    this.button = (name: string) => this.page.locator(`xpath=//div[text()="${name}"]/ancestor::a`);
    this.textField = (label: string) => this.page.locator(`xpath=//label[text()="${label}"]/parent::div//input`);
    this.dropDown = (label: string) => this.page.locator(`xpath=//label[text()="${label}"]/parent::div//button`);
    this.dropDownOption = (label: string, option: string) => this.page.locator(`xpath=//label[text()="${label}"]/parent::div//*[contains(@class, "slds-listbox")]//span[text()="${option}"]/ancestor::lightning-base-combobox-item`);
  }

  // click on New button
  async clickOnNew() {
    await this.newBtn.click();
  }
  // click on Save button
  async clickOnSave() {
    await this.saveBtn.click();
  }
  // click on Edit button
  async clickOnEdit() {
    await this.editBtn.click();
  }
  // enter the text based on label and value
  async fillValueForLabelAs(value: string, label: string) {
    await this.page.waitForTimeout(1000);
    await this.textField(label).fill(value);
  }
  // select the dropdown option based on label and value
  async selectValueForLabelAs(value: string, label: string) {
    await this.page.waitForTimeout(1000);
    await this.dropDown(label).click();
    await this.page.waitForTimeout(1000);
    await this.dropDownOption(label, value).click();
  }
}
