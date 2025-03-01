import { remote } from "webdriverio";
import { registerUser } from "../graphql-methods.js";
import { createPhoneNumber } from "./create-phone-number.js";

const capabilities = {
  platformName: "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "emulator-5556",
  "appium:app": "android/betahers.apk",
  "appium:autoGrantPermissions": true, // Automatically grant all permissions
  "appium:no-Reset": false,
};
const wdOpts = {
  hostname: process.env.APPIUM_HOST || "localhost",
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: "info",
  capabilities,
};

// const randomizeEmail = (email) => {
//   return `${email}+${Math.floor(
//     Math.random() * 99999999,
//   )}+autotest@forhims.com`;
// };

// const user = {
//   email: randomizeEmail("WL+consultation+hims+e2e+mobile+autotest"),
//   password: "Asdf@89!",
// };

async function runTest() {
  const driver = await remote(wdOpts);
  const response = await registerUser(user);
  
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
    
    await waitAndClick('//android.view.ViewGroup[@resource-id="login-btn"]');
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const loginformId = await driver.$(
      '//android.widget.EditText[@resource-id="login-form-email"]'
    );
    await loginformId.waitForDisplayed({ timeout: 5000 });

    await loginformId.setValue("boombot+QH1WC8YkI+test@forhers.com");
    // Wait for the login button to be clickable and then click it
    const loginformPassword = await driver.$(
      '//android.widget.EditText[@resource-id="login-form-password"]'
    );
    await loginformPassword.waitForDisplayed({ timeout: 5000 });
    await loginformPassword.setValue("Asdf@89!");
    await waitAndClick(
      '//android.view.ViewGroup[@resource-id="login-form-submit"]'
    );

    await new Promise((resolve) => setTimeout(resolve, 1000));
    await waitAndClick('//android.view.ViewGroup[@content-desc="Add Treatment"]'); // Using the accessibility ID locator
    
    await waitAndClick('//android.widget.TextView[@resource-id="Hair Loss-option"]');
   
    await waitAndClick('//android.view.View[@resource-id="hairType-straight-label"]');
    await waitAndClick('//android.view.View[@resource-id="heat-based-label"]');
    await waitAndClick('//android.widget.Button[@text="Continue"]');
    //everyday wash hair
     await waitAndClick('//android.view.View[@resource-id="hairWashFrequency-everyday-label"]');
    //I just want thicker, fuller hair
    await new Promise((resolve) => setTimeout(resolve, 3000));
     await waitAndClick('//android.view.View[@resource-id="none-label"]');
     await waitAndClick('//android.widget.Button[@text="Continue"]');
     await waitAndClick('//android.widget.Button[@text="Next"]');
    
    await waitAndClick('//android.view.View[@resource-id="less-shedding-label"]');
    await waitAndClick('//android.widget.Button[@text="Continue"]');
    await driver.$('//android.widget.Button[@text="Next"]').click();
    await driver.$('//android.view.View[@resource-id="prescription-treatment-label"]').click();
    await driver.$('//android.widget.Button[@text="Continue"]').click();
    await driver.$('//android.view.View[@resource-id="doctorPrescription-ready-to-start-label"]').click();
    await driver.$('//android.widget.Button[@text="Next"]').click();
    await driver.$('//android.view.View[@resource-id="ageRange-18-to-29-label"]').click();
    await driver.$('//android.view.View[@resource-id="hairLossFamilyHistory-no-label"]').click();
    await driver.$('//android.view.View[@resource-id="stress-never-label"]').click();
    await driver.$('//android.view.View[@resource-id="recentMajorEvents-no-label"]').click();
    await driver.$('//android.view.View[@resource-id="diet-something-else-label"]').click();
    await driver.$('//android.view.View[@resource-id="dailyWaterConsumption-1-to-2-glasses-label"]').click();
    await driver.$('//android.widget.Button[@text="Next"]').click();
    await driver.$('//android.widget.Button[@text="Next"]').click();
    //state text locator
    await waitAndClick('//android.view.View[@resource-id="state-select"]');
    await driver.$('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="California"]').click();
    //term and condition 
    await driver.$('//android.view.View[@resource-id="termsAndConditions"]/android.view.View[1]/android.widget.Image').click();
    await waitAndClick('//android.widget.Button[@text="Continue"]');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    //dob
    await driver.$('//android.widget.EditText[@resource-id="dob"]').setValue("10121998")
    await waitAndClick('//android.widget.Button[@text="Continue"]');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    await waitAndClick('//android.widget.Button[@text="Continue"]');
    await waitAndClick('//android.widget.TextView[@text="Female"]');
    await waitAndClick('//android.widget.TextView[@text="Yes"]');
    await waitAndClick('//android.widget.TextView[@text="No"]');
    await waitAndClick('//android.widget.TextView[@text="No, neither of these apply to me"]');
    await waitAndClick('//android.widget.TextView[@text="More hair growth on my chest, abdomen or lower back"]');
    await waitAndClick('//android.widget.Button[@text="Continue"]');
    await waitAndClick('//android.widget.TextView[@text="No"]');
    await waitAndClick('//android.widget.TextView[@text="No, none of these"]');
    await waitAndClick('//android.widget.Button[@text="Continue"]');
    await waitAndClick('//android.widget.TextView[@text="No"]');
    await waitAndClick('//android.widget.TextView[@text="No"]');
    await waitAndClick('//android.widget.TextView[@text="No"]');
    await waitAndClick('//android.widget.TextView[@text="None of the above"]');
    await waitAndClick('//android.widget.Button[@text="Continue"]');
    await waitAndClick('//android.widget.TextView[@text="General thinning or shedding"]');
    await waitAndClick('//android.widget.Button[@text="Continue"]');
    await waitAndClick(`//android.widget.TextView[@text="No, I've provided all relevant information and have no questions. Thank you!"]`);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    await waitAndClick('//android.widget.Button[@text="Continue"]');
    await waitAndClick('//android.view.View[@resource-id="treatmentPreference-no-preference-label"]');
    await waitAndClick('//android.widget.Button[@text="Let’s get into it"]');
    await driver.$('//android.widget.Button[@text="Next"]').click();
    await waitAndClick('//android.widget.Button[@text="What’s in Hair Blends?"]');
    await waitAndClick('//android.widget.Button[@text="Tell me more"]');
    await waitAndClick('//android.widget.Button[@text="Ongoing support"]');
    await waitAndClick('//android.widget.Button[@text="Treatment preview"]');
    //you have got option & view treatment option
    await new Promise((resolve) => setTimeout(resolve, 3000));

    await waitAndClick('//android.widget.TextView[@text="Hair Vitamins + Minoxidil Pill"]');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    await waitAndClick('//android.widget.Button[@text="Select Custom Blend"]');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    await driver.$('//android.widget.Button[@text="Next"]').click();

    await driver.$('//android.widget.EditText[@resource-id="firstName"]').setValue("Test");
    await driver.$('//android.widget.EditText[@resource-id="lastName"]').setValue("Test");
    await driver.$('//android.widget.EditText[@resource-id="line1"]').setValue("3121 diablo avenue hayward ca usa");
    await driver.$('//android.widget.EditText[@resource-id="city"]').setValue("hayward");
    await driver.$('//android.widget.EditText[@resource-id="zip"]').setValue("94545-2702");
    await new Promise((resolve) => setTimeout(resolve, 5000));

    await driver.$('android=new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().text("Save and continue"))');
  
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await driver.$('//android.widget.EditText[@resource-id="phone"]').setValue(createPhoneNumber());
    await waitAndClick('//android.widget.Button[@text="Save and continue"]');

    await waitAndClick('//android.widget.ListView/android.view.View[1]/android.view.View/android.view.View');
    await new Promise((resolve) => setTimeout(resolve, 5000));

    await waitAndClick('//android.widget.Button[@text="Confirm"]');
    await driver.$('//android.widget.EditText[@resource-id="ssnDigits"]').setValue("2021");
  

    await waitAndClick('//android.widget.Button[@text="Continue"]');

    await driver.$('android=new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().text("Pay $0 today"))').click();
    
    await driver.$('(//android.view.View[@resource-id="root"])[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText').setValue("4242424242424242");
    await driver.$('(//android.view.View[@resource-id="root"])[2]/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]').setValue("0428");
    await driver.$('(//android.view.View[@resource-id="root"])[2]/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]').setValue("345");
        
    await waitAndClick('//android.widget.Button[@text="Pay $0 today"]');

  } finally {
    //await driver.deleteSession();
  }
}
runTest().catch(console.error);