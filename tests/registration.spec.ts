import { test, expect } from '@playwright/test';

test('Register new user', async ({ page }) => {

    // 1. Open Automation Exercise
    await page.goto('https://automationexercise.com/');

    // 2. Click Signup / Login
    await page.getByRole('link', { name: 'Signup / Login' }).click();

    // 3. Verify New User Signup section
    await expect(
        page.getByText('New User Signup!')
    ).toBeVisible();

    // 4. Enter Name
    await page.getByPlaceholder('Name').fill('Playwright User');

    // 5. Enter unique Email
    await page.locator('[data-qa="signup-email"]').fill(
        `playwright${Date.now()}@test.com`
    );

    // 6. Click Signup
    await page.getByRole('button', { name: 'Signup' }).click();

    // 7. Verify Account Information page
    await expect(
        page.getByText('Enter Account Information')
    ).toBeVisible();

    // 8. Select Gender
    await page.getByLabel('Mr.').check();

    // 9. Enter Password
    await page.locator('[data-qa="password"]').fill('Test@12345');

    // 10. Select Date of Birth
    await page.locator('[data-qa="days"]').selectOption('10');
    await page.locator('[data-qa="months"]').selectOption('5');
    await page.locator('[data-qa="years"]').selectOption('1995');

    // 11. Select Newsletter
    await page.getByLabel('Sign up for our newsletter!').check();

    // 12. Select Special Offers
    await page.getByLabel(
        'Receive special offers from our partners'
    ).check();

    // 13. Enter First Name
    await page.locator('[data-qa="first_name"]').fill('Playwright');

    // 14. Enter Last Name
    await page.locator('[data-qa="last_name"]').fill('User');

    // 15. Enter Company
    await page.locator('[data-qa="company"]').fill('Test Company');

    // 16. Enter Address
    await page.locator('[data-qa="address"]').fill(
        '123 Automation Street'
    );

    // 17. Select Country
    await page.locator('[data-qa="country"]').selectOption({
        label: 'India'
    });

    // 18. Enter State
    await page.locator('[data-qa="state"]').fill('West Bengal');

    // 19. Enter City
    await page.locator('[data-qa="city"]').fill('Kolkata');

    // 20. Enter Zipcode
    await page.locator('[data-qa="zipcode"]').fill('700001');

    // 21. Enter Mobile Number
    await page.locator('[data-qa="mobile_number"]').fill('9876543210');

    // 22. Create Account
    await page.getByRole('button', {
        name: 'Create Account'
    }).click();

    // 23. Verify Account Created
    await expect(
        page.getByText('Account Created!')
    ).toBeVisible();

    // 24. Continue
    await page.getByRole('link', {
        name: 'Continue'
    }).click();

});