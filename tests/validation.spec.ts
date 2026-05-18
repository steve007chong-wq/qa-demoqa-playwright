import { test, expect } from '@playwright/test';
import { DemoQaPage } from './pages/DemoQaPage';

test('should NOT show output when form is empty', async ({ page }) => {
  const demoQaPage = new DemoQaPage(page);

  // 1. Navigate to page
  await demoQaPage.goto();

  // 2. Try to submit without filling any fields
  await demoQaPage.submitButton.click();

  // 3. Verify output panel does NOT appear (submission failed)
  await expect(demoQaPage.outputPanel).not.toBeVisible();
  
  // 4. Verify form is still visible (page didn't redirect)
  await expect(demoQaPage.usernameInput).toBeVisible();
});