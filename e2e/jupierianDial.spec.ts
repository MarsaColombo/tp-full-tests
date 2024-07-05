import { test, expect } from '@playwright/test';

// Ensure this is at the top level
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173');
});

test('should load the app correctly', async ({ page }) => {
  await expect(page.locator('.app')).toBeVisible();
  await expect(page.locator('#lune')).toBeVisible();
  await expect(page.locator('#terre')).toBeVisible();
  await expect(page.locator('#soleil')).toBeVisible();
  await expect(page.locator('#btn-show')).toBeVisible();
});

test('should update input values correctly', async ({ page }) => {
  await page.locator('#lune').fill('2');
  await page.locator('#terre').fill('2');
  await page.locator('#soleil').fill('2');

  await expect(page.locator('#lune')).toHaveValue('2');
  await expect(page.locator('#terre')).toHaveValue('2');
  await expect(page.locator('#soleil')).toHaveValue('2');
});

test('should not allow values outside of 1-2 range', async ({ page }) => {
  await page.locator('#lune').fill('3');
  await expect(page.locator('#lune')).toHaveValue('2');

  await page.locator('#terre').fill('0');
  await expect(page.locator('#terre')).toHaveValue('1');
});

test('should display result when "Afficher" button is clicked', async ({ page }) => {
  await page.locator('#lune').fill('1');
  await page.locator('#terre').fill('1');
  await page.locator('#soleil').fill('1');
  await page.locator('#btn-show').click();

  await expect(page.locator('.heure-value')).toBeVisible();
  await expect(page.locator('.heure-value')).toHaveText('mortin');
});

test('should update result when inputs change and button is clicked again', async ({ page }) => {
  await page.locator('#lune').fill('2');
  await page.locator('#terre').fill('2');
  await page.locator('#soleil').fill('2');
  await page.locator('#btn-show').click();

  await expect(page.locator('.heure-value')).toHaveText('nuight');
});

test('should handle all possible combinations correctly', async ({ page }) => {
  const combinations = [
    { lune: 1, terre: 1, soleil: 1, expected: 'mortin' },
    { lune: 1, terre: 1, soleil: 2, expected: 'soirning' },
    { lune: 1, terre: 2, soleil: 1, expected: 'mortin' },
    { lune: 1, terre: 2, soleil: 2, expected: 'nuight' },
    { lune: 2, terre: 1, soleil: 1, expected: 'mortin' },
    { lune: 2, terre: 1, soleil: 2, expected: 'aprenoon' },
    { lune: 2, terre: 2, soleil: 1, expected: 'mortin' },
    { lune: 2, terre: 2, soleil: 2, expected: 'nuight' },
  ];

  for (const combo of combinations) {
    await page.locator('#lune').fill(combo.lune.toString());
    await page.locator('#terre').fill(combo.terre.toString());
    await page.locator('#soleil').fill(combo.soleil.toString());
    await page.locator('#btn-show').click();

    await expect(page.locator('.heure-value')).toHaveText(combo.expected);
  }
});
