import { remote } from "webdriverio";
import { wdOpts } from "./capabilities.js"

await wdOpts;

async function runTest() {
  const driver = await remote(wdOpts);

  try {
    const appIcon = await driver.waitUntil(
      async () => {
        const element = await driver.findElement(
          "xpath",
          '//*[@text="WEBDRIVER"]'
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
    await driver.$('//android.widget.TextView[@text="Webview"]').click();
    await driver
      .$(
        'android=new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().text("Get Started"))'
      )
      .click();

    const getingtext = await driver
      .$('//android.widget.TextView[@text="Getting Started"]')
      .getText();
    await expect(getingtext).to.equal("Getting Started");
    const isElementPresent = await getingtext.isDisplayed();
    await expect(isElementPresent).to.be.true;

    //app.assert.textContains({selector: getingtext},'Getting Started');
    //await driver.$('//android.widget.TextView[@text="Get Started"]').click();
    //await waitAndClick('//android.widget.Button[@resource-id="android:id/button2"]');
    // console.log("Clicked on the update button.");
    // await waitAndClick('//android.view.ViewGroup[@resource-id="login-btn"]');
    // console.log("Clicked on the login button.");
    // const loginformId = await driver.$('//android.widget.EditText[@resource-id="login-form-email"]');
    // await loginformId.waitForDisplayed({ timeout: 1000 });
    // await   loginformId.setValue('wl+glp+no+rx+test@forhims.com')
    // // Wait for the login button to be clickable and then click it
    // const loginformPassword = await driver.$('//android.widget.EditText[@resource-id="login-form-password"]');
    // await loginformPassword.waitForDisplayed({ timeout: 10000 });
    // await   loginformPassword.setValue('Asdf@89!')
    // await waitAndClick('//android.view.ViewGroup[@resource-id="login-form-submit"]');
    // //await new Promise((resolve) => setTimeout(resolve, 10000));
    // //await driver.$().click();
    // //await waitAndClick('//android.view.View[@content-desc="Care"]');

    // await new Promise((resolve) => setTimeout(resolve, 10000));
    // const element = await driver.$("Care-tab-nav-selected");  // Using the accessibility ID locator
    // await element.click();
    // // await driver.performActions([{
    // //   type: 'pointer',
    // //   id: 'finger',
    // //   parameters: { pointerType: 'touch' },
    // //   actions: [
    // //       { type: 'pointerMove', x: 833, y: 336 },
    // //       { type: 'pointerDown', button: 0 }, // Press down on the screen
    // //       { type: 'pointerUp', button: 0 }    // Release the press
    // //   ]
    // // }]);

    // // let action = new TouchAction(driver);

    // const origin = await driver.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]');//$('#source');
    // await driver.action('pointer')
    //  .move({ duration: 0, origin, x:830, y:320})
    //  .down({button:0})
    //  .pause(2)
    //  .up({button: 0})
    //  .perform();
    // .press({ x: 830, y: 320 })
    // .wait(500)
    // .release()
    // .perform();

    // new TouchAction(driver)
    //     .press(833, 336)
    //     .waitAction(500)
    //     .release()
    //     .perform();

    //await waitAndClick('//android.widget.TextView[@text="Add Treatment"]');
    //await waitAndClick('//android.widget.TextView[@text="Browse"]');
    //tab-for-Browse
    //driver.executeScript("document.getElementById('tab-for-Browse').style.zIndex = '1';");
    // let element1= await driver.$('//android.widget.TextView[@text="Browse"]');
    // driver.executeScript("arguments[0].click();", element1);
    // let element = await driver.$('//android.widget.TextView[@text="Browse"]');
    // await driver.execute('mobile: scroll', { direction: 'down' });
    // await element.click();
    //await waitAndClick('//android.View[@content-desc="Browse"]');
    // //  driver.waitAndClick("tab-for-Browse").click();
    //    const browserElement = await driver.$('tab-for-Browse');
    //    await browserElement.waitForClickable({ timeout: 5000 });
    // const browserElement = await driver.$('tab-for-Browse'); // Replace with your actual element ID
    //  await driver.touchAction({ action: 'tap', x: 1026, y: 454 })
    // const browserElement = await driver.$$('tab-for-Browse');
    // console.log(browserElement.getElements());
    // browserElement.waitForDisplayed();
    // browserElement.click();
    // await waitAndClick('(//android.widget.ImageView[@resource-id="product-card-image"])[1]');
    //after browse button
    //  await waitAndClick('//android.view.ViewGroup[@resource-id="navigation-item-Shop RX"]');
    // await waitAndClick('((//android.view.ViewGroup[@resource-id="WEIGHT_MANAGEMENT"])[1]');
    // await waitAndClick('//android.view.ViewGroup[@resource-id="start-consultation"]');
    //   await browserElement.click();
  } finally {
    //await driver.deleteSession();
  }
}
runTest().catch(console.error);
