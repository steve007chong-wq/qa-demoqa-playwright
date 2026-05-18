import { test, expect } from '@playwright/test';
import { DemoQaPage } from './pages/DemoQaPage';

test('demoqa text box form submission (POM)', async ({ page }) => {
  // 1. Initialize Page Object
  const demoQaPage = new DemoQaPage(page);

  // 2. Use Page Object methods
  await demoQaPage.goto();
  await demoQaPage.fillForm(
    'Steve Chong',
    'steve@test.com',
    '123 QA Street',
    '123 QA Street'
  );

  // 3. Verify result
  await demoQaPage.isOutputVisible();
  await expect(demoQaPage.outputPanel).toContainText('Steve Chong');
  await expect(demoQaPage.outputPanel).toContainText('steve@test.com');
});