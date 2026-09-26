import {Page, Locator} from '@playwright/test'

export class ProductPage
{
   page: Page;
   productTitle: Locator;

   constructor(page: Page)
   {
     this.page = page;
     this.productTitle = page.getByText('Sauce Labs Backpack');

   }

   async clickProduct()
   {
      await this.productTitle.click();

   }


}