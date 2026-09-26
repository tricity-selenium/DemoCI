import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginpage'

test('LoginValidation', async ({page})=>{

    const loginobj = new LoginPage(page);
    await loginobj.openwebsite();
    await page.waitForTimeout(2000);
    await loginobj.doLogin();

    await page.waitForTimeout(3000);

})