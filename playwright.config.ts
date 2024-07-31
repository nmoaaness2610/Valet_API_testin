// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'always' }], // HTML reporter configuration
    ['json', { outputFile: 'playwright-report/results.json' }], // Optional: JSON reporter for CI/CD pipelines
    ['junit', { outputFile: 'playwright-report/results.xml' }] // Optional: JUnit reporter
  ],
  // other configurations like projects, timeout, etc.
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'googlechrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
