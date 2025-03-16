import { Page } from '@playwright/test';

export class TaxDetailsPage {
  constructor(private page: Page) {}

  async fillTaxDetails(taxCode: string, niNumber: string) {
    await this.page.waitForSelector('#taxCode', { state: 'visible' });
    await this.page.locator('#taxCode').click();
    await this.page.locator('#taxCode').pressSequentially(taxCode);
    await this.page.locator('#taxCode').press('Tab');
    await this.page.waitForSelector('#niNumber', { state: 'visible' });
    await this.page.locator('#niNumber').click();
    await this.page.locator('#niNumber').pressSequentially(niNumber);
    await this.page.locator('#niNumber').press('Tab');
  }
}