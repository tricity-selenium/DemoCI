//import {test, expect} from '@playwright/test'
import {test} from '../fixtures/pageobjectfixrure'
import {LoginPage} from '../pages/loginpage'
import { ProductDetails } from '../pages/productdetailspage'
import { ProductPage } from '../pages/productspage'

test('Product Details' , async ({page, loginpage, productpage, productdetails})=>{

    await loginpage.openwebsite();
    await page.waitForTimeout(1000);
    await loginpage.doLogin();    
    await page.waitForTimeout(1000);
    await productpage.clickProduct(); 
    await page.waitForTimeout(1000);   
    await productdetails.clickAddToCart();
    await page.waitForTimeout(1000);
    await productdetails.clickCartIcon();
    await page.waitForTimeout(3000);
    
})