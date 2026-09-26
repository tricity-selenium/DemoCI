//import {test, expect} from '@playwright/test'
import {test} from '../fixtures/pageobjectfixrure'
import {LoginPage} from '../pages/loginpage'
import { ProductPage } from '../pages/productspage'

test('Product Test', async ({page, loginpage, productpage})=>{
   
    await loginpage.openwebsite();
    await page.waitForTimeout(1000);
    await loginpage.doLogin();   
    await page.waitForTimeout(1000); 
    await productpage.clickProduct();
    await page.waitForTimeout(3000);
})