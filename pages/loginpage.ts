import {Page, Locator} from '@playwright/test'
import { TestData } from '../testdata/testdata';

export class LoginPage
{
  page: Page;
  username: Locator;
  password: Locator;
  loginbutton: Locator;

  constructor(page: Page)
  {
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginbutton = page.locator('#login-button')

  }

  async openwebsite()
  {
    //await this.page.goto('https://www.saucedemo.com/');
    await this.page.goto('/');
  }

  async doLogin()
  {
    //await this.username.fill('standard_user');
    await this.username.fill(TestData.username);
    
    //await this.password.fill('secret_sauce');
    await this.password.fill(TestData.password);
    await this.loginbutton.click();
  }

}