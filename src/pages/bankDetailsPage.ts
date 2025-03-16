import { Page } from '@playwright/test';

export class BankDetailsPage {
  constructor(private page: Page) { }

  async fillBankDetails(nameOnAccount: string, nameOfBank: string, bankBranch: string, accountNumber: string, sortCode: string) {
    await this.page.getByRole('textbox', { name: 'Name on account' }).fill(nameOnAccount);
    await this.page.getByRole('textbox', { name: 'Name of bank' }).fill(nameOfBank);
    await this.page.getByRole('textbox', { name: 'Bank branch' }).fill(bankBranch);
    await this.page.getByRole('textbox', { name: 'Account number' }).fill(accountNumber);
    await this.page.getByRole('textbox', { name: 'Sort code' }).fill(sortCode);
  }
}