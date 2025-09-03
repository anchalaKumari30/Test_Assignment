import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.submit = page.locator("#submit");
    this.errorMessage = page.locator("#error");
  }

  async loginToUrl(url, username, password) {
    await this.page.goto(url);
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submit.click();
  }
  async assertInvalidLoginMessage(expectedMessage) {
    await expect(this.errorMessage).toHaveText(expectedMessage);
  }

  async assertInputFieldText() {
    await expect(this.username).toHaveValue("");
    await expect(this.password).toHaveValue("");
  }
}
