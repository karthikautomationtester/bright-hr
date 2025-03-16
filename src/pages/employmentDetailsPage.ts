import { Page } from '@playwright/test';

export class EmploymentDetailsPage {
  constructor(private page: Page) {}

  async fillEmploymentDetails() {
    await this.page.getByTestId('publicHolidaySelect').selectOption('ENGLANDANDWALES');
    await this.page.getByRole('textbox', { name: 'Place of work' }).click();
    await this.page.locator('label').filter({ hasText: 'Not set' }).click();
    await this.page.locator('form').click();
    await this.page.getByTestId('employee-type-radio-Regular').check();
    await this.page.getByTestId('employee-type-radio-Variable').check();
    await this.page.getByTestId('fullTimeEquivalentWorkingWeek.hours').click();
    await this.page.getByTestId('fullTimeEquivalentWorkingWeek.hours').fill('40');
    await this.page.getByTestId('fullTimeEquivalentWorkingWeek.hours').press('Tab');
    await this.page.getByTestId('fullTimeEquivalentWorkingWeek.minutes').fill('10');
    await this.page.getByTestId('fullTimeEquivalentWorkingWeek.minutes').press('Tab');
    await this.page.getByTestId('entitlement-unit-radio-hours').check();
    await this.page.getByTestId('contractedHoursPerWeek.hours').click();
    await this.page.getByTestId('contractedHoursPerWeek.hours').fill('4');
    await this.page.getByTestId('contractedHoursPerWeek.hours').press('Tab');
    await this.page.getByTestId('contractedHoursPerWeek.minutes').fill('10');
    await this.page.getByTestId('contractedHoursPerWeek.minutes').press('Tab');
    await this.page.getByTestId('averageWorkingDay.hours').fill('7');
    await this.page.getByTestId('averageWorkingDay.hours').press('Tab');
    await this.page.getByTestId('averageWorkingDay.minutes').fill('0');
    await this.page.getByTestId('averageWorkingDay.minutes').press('Tab');
    await this.page.getByTestId('fullTimeEquivalentAnnualEntitlement.hours').click();
    await this.page.getByTestId('fullTimeEquivalentAnnualEntitlement.hours').fill('3');
    await this.page.getByTestId('fullTimeEquivalentAnnualEntitlement.hours').press('Tab');
    await this.page.getByTestId('fullTimeEquivalentAnnualEntitlement.minutes').fill('10');
    await this.page.getByTestId('fullTimeEquivalentAnnualEntitlement.minutes').press('Tab');
    await this.page.getByTestId('annualLeaveEntitlement.hours').click();
    await this.page.getByTestId('annualLeaveEntitlement.hours').press('Tab');
    await this.page.getByTestId('annualLeaveEntitlement.minutes').press('Tab');
    await this.page.getByTestId('annualLeaveAllowance.hours').press('Tab');
    await this.page.getByTestId('annualLeaveAllowance.minutes').press('Tab');
  }
}