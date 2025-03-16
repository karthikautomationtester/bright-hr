import { Page } from '@playwright/test';

export class SalaryDetailsPage {
  constructor(private page: Page) {}

  async fillSalaryDetails(salary: string, effectiveFrom: string, reason: string, payrollNumber: string) {
    await this.page.getByRole('textbox', { name: 'Salary' }).fill(salary);
    await this.page.getByLabel('RateSelect').selectOption('Daily');
    await this.page.getByLabel('Payment frequencySelect').selectOption('Weekly');
    await this.page.getByLabel('Payment frequencySelect').press('Tab');
    await this.page.locator('#hourlyRate').fill('10');
    await this.page.locator('#hourlyRate').press('Tab');
    await this.page.locator('#effectiveFrom').click();
    await this.page.waitForSelector('#effectiveFrom', { state: 'visible' });
    await this.page.locator('#effectiveFrom').fill(effectiveFrom);
    await this.page.locator('#effectiveFrom').press('Tab');
    await this.page.waitForSelector('#reason', { state: 'visible' });
    await this.page.locator('#reason').click();
    await this.page.locator('#reason').selectOption(reason);
    await this.page.getByRole('textbox', { name: 'Payroll number' }).fill(payrollNumber);
  }
}