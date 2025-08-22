import { Page } from "@playwright/test";
import { Common } from "../Locators/Common";

export class Contacts {
  readonly common;
  readonly lob;

  constructor(private page: Page) {
    this.page = page;
    this.common = new Common(this.page);
    this.lob = (name: string) => this.page.locator(``);
  }

  // click on New button
  async clickOnNew() {
    await this.common.newBtn.click();
  }
  // click on Save button
  async clickOnSave() {
    await this.common.saveBtn.click();
  }
  // click on Edit button
  async clickOnEdit() {
    if (await this.common.editBtn.isVisible()) {
      await this.common.editBtn.click();
      return;
    }
    await this.common.showMoreBtn.click();
    await this.common.editItm.click();
  }
  // select line of business
  async selectLineOfBusinessAs(name: string) {
    await this.lob(name).click();
  }
  // enter the text based on label and value
  async fillValueForLabelAs(value: string, label: string) {
    await this.common.textField(label).fill(value);
  }
  // select the dropdown option based on label and value
  async selectValueForLabelAs(value: string, label: string) {
    await this.common.dropDown(label).click();
    await this.common.dropDownOption(label, value).click();
  }
  // pick the dropdown option based on label and value
  async pickValueForLabelAs(value: string, label: string) {
    await this.common.textField(label).click();
    await this.common.textField(label).fill(value);
    await this.common.dropDownOption(label, value).click();
  }
  // edit an account based on name
  async editRecordWithContactNameAs(name: string) {
    await this.common.record(name).click();
    await this.common.recordAction("Edit").click();
  }
  // delete a contact based on name
  async deleteRecordWithContactNameAs(name: string) {
    await this.common.record(name).click();
    await this.common.recordAction("Delete").click();
    await this.common.deleteBtn.click();
  }
}
