const capabilities = {
  platformName: "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "emulator-5556",
  "appium:app": "android/demo.apk",
  "appium:autoGrantPermissions": true, // Automatically grant all permissions
  "appium:no-Reset": false,
};
export const wdOpts = {
  hostname: process.env.APPIUM_HOST || "localhost",
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: "info",
  capabilities,
};