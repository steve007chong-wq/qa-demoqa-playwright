# 🎯 Playwright Automation: DemoQA

[![CI](https://github.com/steve007chong-wq/qa-demoqa-playwright/actions/workflows/playwright.yml/badge.svg)](https://github.com/steve007chong-wq/qa-demoqa-playwright/actions)

Automated E2E test suite for **DemoQA** using **Playwright** and **TypeScript**.
Demonstrates CI/CD integration, resilient selectors, and automated reporting.

##  Tech Stack
| Category | Tool |
|----------|------|
| Framework | Playwright |
| Language | TypeScript |
| CI/CD | GitHub Actions |
| Reporting | HTML / List |
| Browser | Chromium |

## ✅ Key Features
- **Resilient Selectors:** Uses Playwright's built-in auto-waiting and user-acting locators (`page.fill`, `page.click`).
- **CI/CD Pipeline:** Automatic test execution on push to `main`.
- **Parallel Execution:** Configured for faster feedback loops.
- **HTML Reporting:** Auto-generates test reports on completion.

## 🚀 How to Run Locally

### 1. Install Dependencies
```bash
npm install
npx playwright install