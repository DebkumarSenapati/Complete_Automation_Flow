import { test, expect } from '@playwright/test';

test('TC-03 - Valid Login', async ({ page }) => {

    // 1. Open Automation Exercise
    await page.goto('https://automationexercise.com/');

    // 2. Click Signup / Login
    await page.getByRole('link', { name: 'Signup / Login' }).click();

    // 3. Verify Login page
    await expect(
        page.getByText('Login to your account')
    ).toBeVisible();

    // 4. Enter email
    await page.locator('[data-qa="login-email"]')
        .fill('your-email@example.com');

    // 5. Enter password
    await page.locator('[data-qa="login-password"]')
        .fill('your-password');

    // 6. Click Login
    await page.getByRole('button', { name: 'Login' }).click();

    // 7. Verify successful login
    await expect(
        page.getByText(/Logged in as/)
    ).toBeVisible();

});