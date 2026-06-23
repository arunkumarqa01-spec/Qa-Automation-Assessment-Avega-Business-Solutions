const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const loginData = require('../../testData/loginData.json');

test.describe('OrangeHRM Login Functionality', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
    });
    
    test('TC001 - Verify successful login with valid credentials', async ({ page }) => {

       

        // Login using JSON test data
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );

        // Validate Dashboard Page
        await expect(page).toHaveURL(/dashboard/);

        await expect(
            page.locator('//h6[text()="Dashboard"]')
        ).toBeVisible();
    });




test('TC002 - Verify user can login by pressing Enter key', async ({ page }) => {

        
        // Login using Enter key
        await loginPage.loginUsingEnter(
            loginData.validUser.username,
            loginData.validUser.password
        );

        // Verify successful login
        await expect(page).toHaveURL(/dashboard/);
        await expect(page.getByRole('heading', { name: 'Dashboard' }))
            .toBeVisible();
    });


    test('TC003 - Verify error message for invalid password', async ({ page }) => {


        // Login with invalid password
      await loginPage.login(
            loginData.validUser.username,
            loginData.invalidUser.invalidpass
        );

        // Verify error message
        await expect(page.locator(loginPage.errorMessage))
            .toHaveText('Invalid credentials');

        // Verify user remains on login page
        await expect(page).toHaveURL(/auth\/login/);
    });

    test('TC004 - Verify login fails with invalid username', async ({ page }) => {

      

        // Login with invalid username
        await loginPage.login(
            loginData.invalidUser.invaliduser,
            loginData.invalidUser.invalidpass
        );

        // Verify authentication error message
        await expect(page.locator(loginPage.errorMessage))
            .toHaveText('Invalid credentials');

        // Verify user remains on login page
        await expect(page).toHaveURL(/auth\/login/);
    });


});
