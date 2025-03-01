import { remote } from "webdriverio";
import { expect } from "chai";

const capabilities = {
  platformName: "iOS",
  "appium:automationName": "XCUITest",
  "appium:deviceName": "iPhone 14",
  "appium:app": "android/betahers.apk",
  "appium:autoGrantPermissions": true, 
  "appium:platformVersion": "17.4",
  "appium:no-Reset": false,
};
const wdOpts = {
  hostname: process.env.APPIUM_HOST || "localhost",
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: "info",
  capabilities,
};
async function runTest() {
  const driver = await remote(wdOpts);

  try {
    const appIcon = await driver.waitUntil(
      async () => {
        const element = await driver.findElement(
          "xpath",
          '//*[@text="hers"]'
        );
        return element; // Return the element if found
      },
      {
        timeout: 10000,
        timeoutMsg: "App icon not found",
      }
    );
    async function waitAndClick(selector) {
      const element = await driver.$(selector);
      await element.waitForDisplayed({ timeout: 10000 });
      await element.click();
    }
   
    await driver.$("goals-receding-hairline-label").click();
  } finally {
    //await driver.deleteSession();
  }
}
runTest().catch(console.error);
