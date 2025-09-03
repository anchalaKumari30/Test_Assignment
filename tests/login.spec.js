const { test, expect } = require("@playwright/test");
const { URL_CONSTANTS, MESSAGES } = require("../constants/DataConst");

const { LoginPage } = require("../pageObjects/LoginPage");
const testData = require("../utilis/TestData.json");

//First test.describe has positive testcases validation
test.describe("Login Feature Positive cases", () => {
  let loginPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  //This testcase validates successful login
  test("Test1 | Validate login successfully", async ({ page }) => {
    const { username, password } = testData.ValidCredentials;

    await loginPage.loginToUrl(URL_CONSTANTS.LOGIN_URL, username, password);
    await expect(page).toHaveURL(URL_CONSTANTS.SUCCESS_URL);
  });

  //This testcase validates logout feature
  test("Test2 | Validate logout feature functionality", async ({ page }) => {
    const { username, password } = testData.ValidCredentials;

    await loginPage.loginToUrl(URL_CONSTANTS.LOGIN_URL, username, password);
    await expect(page.locator(".post-title")).toHaveText(
      MESSAGES.LOGGED_IN_SUCCESS_MSG
    );
    await page.getByText("Log out").click();
    await expect(page).toHaveURL(URL_CONSTANTS.LOGIN_URL);
  });
});

//This test describe has negative test validation
test.describe("Login Feature Negative cases", () => {
  //This testcase has validation around incorrect username and incorrect password
  test("Test3 | Validate incorrect username and password", async ({ page }) => {
    let loginPage = new LoginPage(page);

    const { username, password } = testData.InvalidCredentials;

    await loginPage.loginToUrl(URL_CONSTANTS.LOGIN_URL, username, password);
    await loginPage.assertInvalidLoginMessage(MESSAGES.INVALID_USERNAME_MSG);
    await loginPage.assertInputFieldText();
  });

  //This testcase has validation around empty username and password

  test("Test4 | Validate empty username and empty password", async ({
    page,
  }) => {
    let loginPage = new LoginPage(page);
    const { username, password } = testData.EmptyCredentials;
    await loginPage.loginToUrl(URL_CONSTANTS.LOGIN_URL, username, password);
    await loginPage.assertInvalidLoginMessage(MESSAGES.INVALID_USERNAME_MSG);
  });
});
