# Valet API Testing

## Description
Valet API Testing is a project designed to test the Valet API endpoints using Playwright.

## Installation

1. **Ensure Node.js is Installed:**
   Download and install Node.js from [Node.js official website](https://nodejs.org/).

2. **Install Dependencies:**
   - Clone the repository: `git clone https://github.com/yourusername/valet-api-testing.git`
   - Navigate into the project directory: `cd valet-api-testing`
   - Install dependencies: `npm install`

## Usage

Run the Playwright tests with:
```bash
npx playwright test
```
## Reporting
The framework provides an HTML report using playwright-report of the test results every time the tests run.

## Observations
Tests validate API responses, handle incorrect currency codes, and check for future dates.

## Linting
To ensure code quality and consistency, the project uses ESLint. You can run the linting script to check for and automatically fix code style issues.

Running Linting
To run the linter and automatically fix issues, use the following command:
```bash
npm run lint
```
## Additional Steps
1. **Expand Test Coverage:**
Add more test cases for different scenarios and performance testing.

2. **Enhance Error Handling:**
Improve error handling and logging.

3. **Integrate Continuous Integration (CI):**
Set up CI/CD pipelines with GitHub Actions, Travis CI, or Jenkins to automate test runs.

4. **Add Unit Testing for Utilities:**
Implement unit tests for the methods in the Utilities folder to ensure code reliability and correctness.