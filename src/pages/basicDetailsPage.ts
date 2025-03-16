import { Page } from '@playwright/test';

export class BasicDetailsPage {
  constructor(private page: Page) {}

  async fillBasicDetails(firstName: string, lastName: string, middleName: string, formattedDateOfBirth: string, email: string, mobileNumber: string, workPhone: string, jobTitle: string, formattedEmploymentStartDate: string, formattedProbationEndDate: string) {
    await this.page.getByRole('textbox', { name: 'New first name' }).fill(firstName);
    await this.page.getByRole('textbox', { name: 'New last name' }).fill(lastName);
    await this.page.getByRole('button', { name: 'Add new employee' }).click();
    await this.page.getByLabel('TitleSelect').selectOption('Mr');
    await this.page.getByRole('textbox', { name: 'Middle name' }).fill(middleName);
    await this.page.getByLabel('GenderSelect').selectOption('Male');
    await this.page.getByRole('textbox', { name: 'Date of birth' }).fill(formattedDateOfBirth);
    await this.page.getByRole('textbox', { name: 'Email address Required' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Email address Required' }).press('Tab');
    await this.page.getByRole('textbox', { name: 'Mobile number' }).fill(mobileNumber);
    await this.page.getByRole('textbox', { name: 'Work phone' }).fill(workPhone);
    await this.page.getByRole('textbox', { name: 'Job title' }).fill(jobTitle);
    await this.page.locator('#startDate').fill(formattedEmploymentStartDate);
    await this.page.getByRole('textbox', { name: 'Probation end date' }).fill(formattedProbationEndDate);
    await this.page.evaluate(() => {
      window.scrollBy(0, 500);
    });
  }
}