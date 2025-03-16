import { Page } from '@playwright/test';

export class AddressPage {
  constructor(private page: Page) { }

  async fillAddress(address1: string, address2: string, address3: string, townCity: string, county: string, postcode: string) {
    try {
      await this.page.waitForSelector('#address1', { state: 'visible' });
      await this.page.getByRole('textbox', { name: 'Address 1' }).fill(address1);
      await this.page.getByRole('textbox', { name: 'Address 2' }).fill(address2);
      await this.page.getByRole('textbox', { name: 'Address 3' }).fill(address3);
      await this.page.getByRole('textbox', { name: 'Town/City' }).fill(townCity);
        await this.page.waitForSelector('#county', { state: 'visible' });
      await this.page.locator('#county').click();
      await this.page.locator('#county').fill(county);
      await this.page.locator('#county').press('Tab');
      await this.page.waitForSelector('#postcode', { state: 'visible' });
      await this.page.getByRole('textbox', { name: 'Postcode' }).fill(postcode);
    } catch (error) {
      console.error('Error filling address:', error);
      throw error;
    }

  }
}