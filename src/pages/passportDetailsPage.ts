import { Page } from '@playwright/test';

export class PassportDetailsPage {
  constructor(private page: Page) {}

  async fillPassportDetails(passportNumber: string, passportCountryOfIssue: string, passportExpiryDate: string) {
    await this.page.getByRole('textbox', { name: 'Passport number' }).fill(passportNumber);
    await this.page.locator('#passportCountryOfIssue').click();
    await this.page.waitForSelector('#passportCountryOfIssue', { state: 'visible' });
    await this.page.locator('#passportCountryOfIssue').selectOption(passportCountryOfIssue);
    await this.page.locator('#passportCountryOfIssue').press('Tab');
    await this.page.getByRole('textbox', { name: 'Passport expiry date' }).fill(passportExpiryDate);
  }
}