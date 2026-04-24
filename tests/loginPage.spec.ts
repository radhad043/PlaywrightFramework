import { test, expect } from '@playwright/test';
import login, { delay } from "../utils/utils"
import constant from "../utils/constant"
//import { routerlist } from '../utils/router.const';
//import { getBaseUrl } from '../../config';

test.describe("Log In/Log Out", () => {

    test("Should login with correct credentials and navigate to home page", async ({ page }) => {

        // Verify taking screenshot entire Login Page before Login the Application 
        await page.screenshot({ path: "screenshots/screenshots3.png" });

        // Click and check the notication alert 
        //await page.getByText('Help & Support').click({delay:3000});

        // Login the Page 
        await login(page);

        // Navigation to the Home Page 
        await page.waitForURL(constant.homeUrl);

        // Verify taking screenshot entire Home-Page
        await page.screenshot({ path: "screenshots/screenshots1.png" });

   
        // Checks if the element's text content matches the expected text
        
        //expect(page.url()).toContain("loginUrl/auth/login`")
        

        // Taking and Verify the Screenshot of the "Login Button"
        //await page.getByRole('button', { name: 'Log in' }).screenshot({ path: "screenshot4.png" });

       // Verify the Navigation Page
        await page.goBack();
        await page.goForward();
        await page.close();

   
});

})