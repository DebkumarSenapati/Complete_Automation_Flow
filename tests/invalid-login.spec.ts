import { test, expect } from '@playwright/test';

test('TC-04 - Invalid Login', async ({ page }) => {

    // 1. Open Automation Exercise
    await page.goto('https://automationexercise.com/');

    // 2. Click Signup / Login
    await page.getByRole('link', { name: 'Signup / Login' }).click();

    // 3. Verify Login page
    await expect(
        page.getByText('Login to your account')
    ).toBeVisible();

    // 4. Enter invalid email
    await page.locator('[data-qa="login-email"]')
        .fill('invaliduser@test.com');

    // 5. Enter invalid password
    await page.locator('[data-qa="login-password"]')
        .fill('WrongPassword123');

    // 6. Click Login
    await page.getByRole('button', { name: 'Login' }).click();

    // 7. Verify error message
    await expect(
        page.getByText('Your email or password is incorrect!')
    ).toBeVisible();

});