import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) { }

  async login(email: string, password: string) {
    await this.page.goto('/login');
    await this.page.getByRole('textbox', { name: 'Email address' }).fill(email);
    await this.page.locator('#password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}