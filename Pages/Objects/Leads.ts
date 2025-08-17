import { Page } from "@playwright/test";

export class Leads {
  readonly textField;
  readonly dropDown;
  readonly dropDownOption;
  readonly newBtn;
  readonly saveBtn;
  readonly editBtn;
  readonly deleteBtn;
  readonly record;
  readonly recordAction;

  constructor(private page: Page) {
    this.page = page;
    this.newBtn = this.page.locator(`//a[@title="New"]`);
    this.saveBtn = this.page.locator(`[name="SaveEdit"]`);
    this.editBtn = this.page.getByRole("button", { name: "Edit", exact: true });
    this.deleteBtn = this.page.locator(`//button//span[text()="Delete"]`);
    this.record = (name: string) => this.page.locator(`//table/tbody/tr[th//a[@title="${name}"]]/td`).last();
    this.recordAction = (action: string) => this.page.locator(`//*[contains(@class, "forceActionsDropDownMenuList")]//a[@title="${action}"]`);
    this.textField = (label: string) => this.page.locator(`//label[text()="${label}"]/parent::*//input`);
    this.dropDown = (label: string) => this.page.locator(`//label[text()="${label}"]/parent::*//button`);
    this.dropDownOption = (label: string, option: string) => this.page.locator(`//label[text()="${label}"]/parent::*//*[contains(@class, "slds-listbox")]//lightning-base-combobox-item//*[text()="${option}"]`);
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
    await this.textField(label).fill(value);
  }
  // select the dropdown option based on label and value
  async selectValueForLabelAs(value: string, label: string) {
    await this.dropDown(label).click();
    await this.dropDownOption(label, value).click();
  }
  // pick the dropdown option based on label and value
  async pickValueForLabelAs(value: string, label: string) {
    this.textField(label).click();
    await this.textField(label).fill(value);
    await this.dropDownOption(label, value).click();
  }
  // delete a lead based on name
  async deleteALeadWithNameAs(name: string) {
    await this.record(name).click();
    await this.recordAction("Delete").click();
    await this.deleteBtn.click();
  }
}
