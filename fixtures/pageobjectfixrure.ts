import {test as base, Page} from '@playwright/test'
import { LoginPage } from '../pages/loginpage';
import { ProductPage} from '../pages/productspage'
import { ProductDetails } from '../pages/productdetailspage'


type MyFixture =
{
  loginpage: LoginPage;
  productpage: ProductPage;
  productdetails: ProductDetails;
}

export const test = base.extend<MyFixture>({
  
    loginpage: async ({page}, use)=>{
        await use(new LoginPage(page));
  },

  productpage: async ({page}, use)=>{
    await use(new ProductPage(page));

   },

   productdetails: async ({page}, use)=>{
    await use(new ProductDetails(page));

   }


})
