import { test, expect } from '@playwright/test';

test('Verify Automation Exercise homepage', async ({ page }) => {

    await page.goto('https://automationexercise.com/');

    // Verify page title
    await expect(page).toHaveTitle(/Automation Exercise/);

    // Verify main heading
    await expect(
        page.getByText('Full-Fledged practice website for Automation Engineers')
    ).toBeVisible();

    // Verify navigation links
    await expect(
        page.getByRole('link', { name: 'Products' })
    ).toBeVisible();

    await expect(
        page.getByRole('link', { name: 'Signup / Login' })
    ).toBeVisible();

});