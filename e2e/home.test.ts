import { test, expect } from '@playwright/test';

test('should display clients table', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.waitForLoadState("networkidle");


  // Check that the table is displayed
  const table = await page.$('table');
  expect(table).toBeTruthy();

  // Check that the table contains the expected headers
  const headers = await page.$$eval('th', headers => headers.map(header => header.textContent));
  expect(headers).toEqual([
    'Full Name',
    'Customer risk profile',
    'Customer net worth',
    'Restriction status',
    'Capital gain',
    'Details'
  ]);

  const rows = await page.$$('tbody tr');
  expect(rows.length).toBeGreaterThan(0);
});