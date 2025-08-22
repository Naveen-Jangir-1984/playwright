import { Page } from "@playwright/test";

export class Common {
  readonly object;
  readonly newBtn;
  readonly saveBtn;
  readonly editBtn;
  readonly editItm;
  readonly deleteBtn;
  readonly showMoreBtn;
  readonly textField;
  readonly dropDown;
  readonly dropDownOption;
  readonly record;
  readonly recordAction;

  constructor(private page: Page) {
    // select object from nav bar
    this.object = (object: string) => this.page.getByRole("link", { name: `${object}s`, exact: true });
    // common elements for an object
    this.newBtn = this.page.getByRole("button", { name: "New", exact: true });
    this.saveBtn = this.page.getByRole("button", { name: "Save", exact: true });
    this.editBtn = this.page.getByRole("button", { name: "Edit", exact: true });
    this.editItm = this.page.getByRole("menuitem", { name: "Edit", exact: true });
    this.deleteBtn = this.page.locator(`//button//span[text()="Delete"]`);
    this.showMoreBtn = this.page.getByRole("button", { name: "Show more actions" });
    this.textField = (label: string) => this.page.locator(`//label[text()="${label}"]/parent::*//input`);
    this.dropDown = (label: string) => this.page.locator(`//label[text()="${label}"]/parent::*//button`);
    this.dropDownOption = (label: string, option: string) => this.page.locator(`//label[text()="${label}"]/parent::*//*[contains(@class, "slds-listbox")]//lightning-base-combobox-item//*[text()="${option}"]`);
    this.record = (name: string) => this.page.locator(`//table/tbody/tr[th//a[@title="${name}"]]/td`).last();
    this.recordAction = (action: string) => this.page.locator(`//*[contains(@class, "forceActionsDropDownMenuList")]//a[@title="${action}"]`);
  }
}
