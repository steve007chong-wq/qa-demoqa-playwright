
import { test, expect } from '@playwright/test';

test('demoqa text box form submission', async ({ page }) => {
  // 1. Navigate to page
  await page.goto('https://demoqa.com/text-box');
  
  // 2. Wait for form to load
  await expect(page.locator('#userName')).toBeVisible();

  // 3. Fill form fields
  await page.fill('#userName', 'Steve Chong');
  await page.fill('#userEmail', 'steve@test.com');
  await page.fill('#currentAddress', '123 QA Street');
  await page.fill('#permanentAddress', '123 QA Street');

  // 4. Click Submit
  await page.click('#submit');

  // 5. Verify output panel appears with correct data
  await expect(page.locator('#output')).toBeVisible();
  await expect(page.locator('#output')).toContainText('Steve Chong');
  await expect(page.locator('#output')).toContainText('steve@test.com');
});