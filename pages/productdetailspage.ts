import {Page, Locator} from '@playwright/test'

export class ProductDetails
{
   page: Page;
   addtocart: Locator;
   carticon: Locator;

   constructor(page: Page)
   {
     this.page = page;
     this.addtocart = page.locator('#add-to-cart');
     this.carticon = page.locator('.shopping_cart_link');

   }

   async clickAddToCart()
   {
      await this.addtocart.click();
    
   }

   async clickCartIcon()
   {
     await this.carticon.click();
   }



}