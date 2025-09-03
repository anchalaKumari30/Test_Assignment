# Playwright Test Automation Framework

A simple, scalable Playwright framework for UI testing of https://practicetestautomation.com/practice-test-login/.

## Features

- Page Object Model for maintainable code
- Positive and negative Testcases for functional tests
- Utilis, constants used for code reusability.
- test-case.md has defined testcases for Login page

## Project Structure

```
constants/        # Test Constants
pageObjects/      # Page Object classes
tests/            # Test cases (UI)
utils/            # Utilities
test-case.md/     #functional testcases
playwright.config.js
package.json
```

## Getting Started

1. Clone the repo:
   ```sh
   git clone <your-repo-url>
   cd PLAYWRIGHT-ASSIGNMENT
   ```
2. Install dependencies:
   ```sh
   npm install or npm init playwright@latest
   ```
3. Run all tests:
   ```sh
   npx playwright test
   ```
4. View HTML report:

   ```sh
   npx playwright show-report

   ```

## Requirements

- Node.js >= 20
- npm

## Test Cases

- UI: positive and negative Login flows

## Design Notes

- Page Object Model for scalability
- Screenshots auto-captured on failure
- Custom HTML reports via `playwright-html-reporter`

## Extending

- Add page objects in `/pages`
- Add tests in `/tests`
- Update configs in `/config`

---
