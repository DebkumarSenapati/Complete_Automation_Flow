import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Where our test files are located
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // HTML report
  reporter: 'html',

  // Common settings for all tests
  use: {
    // Open browser in headed mode
    headless: false,

    // Take screenshot when test fails
    screenshot: 'only-on-failure',

    // Record video when test fails
    video: 'retain-on-failure',

    // Collect trace on first retry
    trace: 'on-first-retry',
  },

  // Browser configuration
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});