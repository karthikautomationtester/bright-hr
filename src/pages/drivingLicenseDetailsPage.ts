import { Page } from '@playwright/test';

export class DrivingLicenseDetailsPage {
  constructor(private page: Page) {}

  async fillDrivingLicenseDetails(licenceNumber: string, drivingLicenceCountryOfIssue: string, licenceClass: string, dateOfExpiry: string) {
    await this.page.getByRole('textbox', { name: 'Licence number' }).fill(licenceNumber);
    await this.page.locator('#drivingLicenceNumber').press('Tab');
    await this.page.waitForSelector('#drivingLicenceCountryOfIssue', { state: 'visible' }); // Wait for the country of issue dropdown to be visible
    await this.page.getByTestId('drivingLicenceCountryOfIssue').click();
    await this.page.getByTestId('drivingLicenceCountryOfIssue').selectOption(drivingLicenceCountryOfIssue);
    await this.page.getByRole('textbox', { name: 'Licence class' }).fill(licenceClass);
    await this.page.getByRole('textbox', { name: 'Date of expiry' }).fill(dateOfExpiry);
  }
}