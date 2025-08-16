import { defineBddConfig } from "playwright-bdd";
import { defineConfig, devices } from "@playwright/test";

const timeout = 30000;

const testDir = defineBddConfig({
  features: "Features/**/*.feature",
  steps: ["Steps/**/*.ts", "Fixtures/**/*.ts"],
  outputDir: "Test",
});

export const workers = process.env.WORKERS || 4;

export default defineConfig({
  testDir: testDir,
  workers: workers,
  fullyParallel: true,
  timeout: 5 * 60000, // max time out for a test
  use: {
    headless: true,
    actionTimeout: timeout, // max time out for click, fill etc
    navigationTimeout: timeout, // max time out for navigation
    screenshot: "on",
    trace: "retain-on-failure",
    video: "retain-on-failure",
  },
  expect: {
    timeout: timeout, // max time out for expect
  },
  reporter: [["html", { open: "never" }]], // html report not te opened post test
  projects: [
    {
      name: "Google Chrome",
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome",
        launchOptions: {
          slowMo: 250, // slow down the execution on browser
        },
      },
    },
  ],
});
