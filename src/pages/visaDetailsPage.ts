import { Page } from '@playwright/test';

export class VisaDetailsPage {
    constructor(private page: Page) { }

    async fillVisaDetails(visaNumber: string, visaExpiryDate: string) {
        await this.page.waitForSelector('#visaNumber', { state: 'visible' });
        await this.page.locator('#visaNumber').click();
        await this.page.locator('#visaNumber').pressSequentially(visaNumber);
        await this.page.locator('#visaNumber').press('Tab');
        await this.page.waitForSelector('#visaExpiryDate', { state: 'visible' });
        await this.page.locator('#visaExpiryDate').click();
        await this.page.locator('#visaExpiryDate').pressSequentially(visaExpiryDate);
        await this.page.locator('#visaExpiryDate').press('Tab');
    }
}