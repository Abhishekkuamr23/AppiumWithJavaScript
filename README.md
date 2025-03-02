# Appium Mobile Testing with JavaScript

This project demonstrates how to set up and run mobile tests on both iOS and Android devices using Appium and JavaScript. Appium is a cross-platform mobile application testing framework that allows you to automate native, hybrid, and mobile web applications.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Prerequisites

Before starting, ensure you have the following installed on your machine:

1. **Node.js** - JavaScript runtime. Download from [here](https://nodejs.org/).
2. **Appium** - Mobile application testing framework. Install via npm:
   ```bash
   npm install -g appium
npm install -g appium-doctor
appium-doctor

git clone https://github.com/yourusername/appium-javascript-mobile-testing.git
cd appium-javascript-mobile-testing
npm install

appium

Folder structure
/appium-javascript-mobile-testing
│
├── /tests                   # Contains all the test scripts
│   ├── androidTest.js        # Android-specific tests
│   └── iosTest.js            # iOS-specific tests
│
├── /config                  # Configuration files for different platforms
│   ├── android-config.js     # Android desired capabilities
│   └── ios-config.js         # iOS desired capabilities
│
├── /support                 # Helper files and utilities
│   ├── driver.js            # WebDriver setup and capabilities
│   └── actions.js           # Custom actions or utility functions
│
├── package.json             # NPM package descriptor
└── README.md                # Project documentation

Android Configuration
module.exports = {
  platformName: "Android",
  platformVersion: "12", // Your Android version
  deviceName: "Android Emulator",
  appPackage: "com.example.android", // Your app's package name
  appActivity: "com.example.android.MainActivity", // Your app's main activity
  automationName: "UiAutomator2",
  app: "/path/to/your/app.apk" // Path to your APK
};

IOS configuration:
module.exports = {
  platformName: "iOS",
  platformVersion: "15.0", // Your iOS version
  deviceName: "iPhone 12", // Your iPhone device name
  app: "/path/to/your/app.app", // Path to your .app file
  automationName: "XCUITest",
  udid: "your-device-udid", // Optional: UDID for real device testing
  xcodeOrgId: "your-xcode-org-id", // Optional: if needed for real device testing
  xcodeSigningId: "iPhone Developer" // Optional: if needed for real device testing
};

Run Test on Appium
appium
npm run test:android
npm run test:IOS
npm run test:all
