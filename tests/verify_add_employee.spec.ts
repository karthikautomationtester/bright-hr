import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('verify add employee test', async ({ page }) => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const middleName = faker.person.middleName();

  const email = faker.internet.email();
  const dateOfBirth = faker.date.past().toISOString().split('T')[0];
  const formattedDateOfBirth = formatDate(dateOfBirth);

  const jobTitle = faker.person.jobTitle();

  const mobileNumber = generateUKMobileNumber(true);
  const workPhone = generateUKMobileNumber(true);
  const employmentStartDate = faker.date.past().toISOString().split('T')[0];
  const formattedEmploymentStartDate = formatDate(employmentStartDate);
  const probationEndDate = faker.date.future().toISOString().split('T')[0];
  const formattedProbationEndDate = formatDate(probationEndDate);

  const address1 = faker.location.streetAddress();
  const address2 = faker.location.secondaryAddress();
  const address3 = faker.location.streetAddress();
  const townCity = faker.location.city();
  const county = faker.location.county();
  const postcode = faker.location.zipCode();

  const nameOnAccount = faker.person.fullName();
  const nameOfBank = faker.finance.accountName();
  const bankBranch = faker.finance.accountName();
  const accountNumber = faker.finance.accountNumber(8);
  const sortCode = faker.finance.accountNumber(8);

  const salary = faker.finance.amount();
  const hourlyRate = faker.finance.amount();
  const rawEffectiveFrom = faker.date.past().toISOString().split('T')[0];
  const effectiveFrom = formatDate(rawEffectiveFrom);
  const reason = "Employee Setup";
  const payrollNumber = faker.string.alphanumeric();
  const taxCode = faker.string.alphanumeric(4);
  const niNumber = faker.string.alphanumeric(8);

  const passportNumber = faker.string.alphanumeric(9);
  const passportCountryOfIssue = faker.location.country();
  const rawPassportExpiryDate = faker.date.future().toISOString().split('T')[0];
  const passportExpiryDate = formatDate(rawPassportExpiryDate);
  const licenceNumber = faker.string.alphanumeric(10);
  const drivingLicenceCountryOfIssue = faker.location.country();
  const licenceClass = faker.string.alphanumeric(1);
  const rawDateOfExpiry = faker.date.future().toISOString().split('T')[0];
  const dateOfExpiry = formatDate(rawDateOfExpiry);

  const visaNumber = faker.string.alphanumeric(6);
  const visaExpiryDate = faker.date.future().toISOString().split('T')[0];

  const department = faker.commerce.department();
  const location = faker.location.city();

  //print statements -- to remove
console.log(effectiveFrom);
  console.log(postcode);
  console.log(nameOnAccount);
  console.log(nameOfBank);
  console.log(bankBranch);
  console.log(accountNumber);
  console.log(sortCode);
  console.log(salary);
  console.log(hourlyRate);
  console.log(effectiveFrom);
  console.log(reason);
  console.log(payrollNumber);
  console.log(taxCode);
  console.log(niNumber);
  console.log(passportNumber);
  console.log(passportCountryOfIssue);

  await page.goto('https://sandbox-login.brighthr.com/login/');
  await page.getByRole('textbox', { name: 'Email address' }).fill('qaTechTask100@grr.la');
  await page.locator('#password').fill('A1234567890-');
  await page.getByRole('button', { name: 'Login' }).click();

  // Click on add employee button
  await page.getByRole('button', { name: 'Actions' }).click();
  await page.getByRole('link', { name: 'Add employees' }).click();
  await page.getByRole('textbox', { name: 'New first name' }).fill(firstName);
  await page.getByRole('textbox', { name: 'New last name' }).fill(lastName);
  await page.getByRole('button', { name: 'Add new employee' }).click();

  // Basic details
  await page.getByLabel('TitleSelect').selectOption('Mr');
  await page.getByRole('textbox', { name: 'Middle name' }).click();
  await page.getByRole('textbox', { name: 'Middle name' }).fill(middleName);
  await page.getByLabel('GenderSelect').selectOption('Male');
  await page.getByRole('textbox', { name: 'Date of birth' }).click();
  await page.getByRole('textbox', { name: 'Date of birth' }).fill(formattedDateOfBirth);
  await page.getByRole('textbox', { name: 'Email address Required' }).fill(email);
  await page.getByRole('textbox', { name: 'Mobile number' }).click();
  await page.getByRole('textbox', { name: 'Mobile number' }).fill(mobileNumber);
  await page.getByRole('textbox', { name: 'Work phone' }).click();
  await page.getByRole('textbox', { name: 'Work phone' }).fill(workPhone);
  await page.getByRole('textbox', { name: 'Job title' }).fill(jobTitle);
  await page.locator('#startDate').click();
  await page.locator('#startDate').fill(formattedEmploymentStartDate);
  await page.evaluate(() => {
    window.scrollBy(0, 500);
  });
  await page.getByRole('textbox', { name: 'Probation end date' }).click();
  await page.getByRole('textbox', { name: 'Probation end date' }).fill(formattedProbationEndDate);
  await page.getByRole('textbox', { name: 'Probation end date' }).press('Tab');

  // Address
  await page.evaluate(() => {
    window.scrollBy(0, 500);
  });

  await page.getByRole('textbox', { name: 'Address 1' }).fill(address1);
  await page.getByRole('textbox', { name: 'Address 2' }).fill(address2);
  await page.getByRole('textbox', { name: 'Address 3' }).fill(address3);
  await page.getByRole('textbox', { name: 'Town/City' }).fill(townCity);
  await page.getByRole('textbox', { name: 'Town/City' }).press('Tab');
  await page.getByRole('textbox', { name: 'County' }).fill(county);
  await page.getByRole('textbox', { name: 'County' }).press('Tab');
  await page.getByRole('textbox', { name: 'Postcode' }).fill(postcode);
  await page.getByRole('textbox', { name: 'Postcode' }).press('Tab');

  // Bank details
  await page.evaluate(() => {
    window.scrollBy(0, 500);
  });
  await page.getByRole('textbox', { name: 'Name on account' }).fill(nameOnAccount);
  await page.getByRole('textbox', { name: 'Name of bank' }).fill(nameOfBank);
  await page.getByRole('textbox', { name: 'Bank branch' }).fill(bankBranch);
  await page.getByRole('textbox', { name: 'Account number' }).fill(accountNumber);
  await page.getByRole('textbox', { name: 'Sort code' }).fill(sortCode);

  //Salary Details
  await page.evaluate(() => {
    window.scrollBy(0, 500);
  });
  await page.getByRole('textbox', { name: 'Salary' }).fill(salary);
  await page.getByLabel('RateSelect').selectOption('Daily');
  await page.getByLabel('Payment frequencySelect').selectOption('Weekly');
  await page.getByRole('textbox', { name: 'Effective from' }).fill(effectiveFrom);
  await page.getByRole('textbox', { name: 'Effective from' }).press('Tab');
  await page.getByLabel('ReasonSelect').selectOption('Adjustment');
  await page.getByLabel('ReasonSelect').press('Tab');
  await page.getByRole('textbox', { name: 'Payroll number' }).click();
  await page.getByRole('textbox', { name: 'Payroll number' }).fill(payrollNumber);
  await page.evaluate(() => {
    window.scrollBy(0, 500);
  });

  //Tax Details
  await page.evaluate(() => {
    window.scrollBy(0, 500);
  });
  await page.getByRole('textbox', { name: 'Tax code' }).fill(taxCode);
  await page.getByRole('textbox', { name: 'NI number' }).fill(niNumber);

  //Passport Details
  await page.evaluate(() => {
    window.scrollBy(0, 500);
  });
  await page.getByRole('textbox', { name: 'Passport number' }).fill(passportNumber);
  await page.getByTestId('passportCountryOfIssue').selectOption(passportCountryOfIssue);
  await page.getByRole('textbox', { name: 'Passport expiry date' }).click();
  await page.getByRole('textbox', { name: 'Passport expiry date' }).fill(passportExpiryDate);

  //Driving Licence Details
  await page.evaluate(() => {
    window.scrollBy(0, 500);
  });
  await page.getByRole('textbox', { name: 'Licence number' }).fill(licenceNumber);
  await page.getByTestId('drivingLicenceCountryOfIssue').selectOption(drivingLicenceCountryOfIssue);
  await page.getByRole('textbox', { name: 'Licence class' }).fill(licenceClass);
  await page.getByRole('textbox', { name: 'Date of expiry' }).click();
  await page.getByRole('textbox', { name: 'Date of expiry' }).fill(dateOfExpiry);

  //Visa Details
  await page.evaluate(() => {
    window.scrollBy(0, 500);
  });
  await page.getByRole('textbox', { name: 'Visa number' }).fill(visaNumber);
  await page.getByRole('textbox', { name: 'Visa expiry date' }).click();
  await page.getByRole('textbox', { name: 'Visa expiry date' }).fill(visaExpiryDate);


});

function formatDate(inputDate: string): string {
  const date = new Date(inputDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function generateUKMobileNumber(international: boolean = false): string {
  // Generate a 9-digit random number (e.g., '123456789')
  const randomDigits = faker.number.int({ min: 0, max: 999999999 }).toString().padStart(9, '0');
  // Subscriber number: '7' + 9 random digits (e.g., '7123456789')
  const subscriberNumber = '7' + randomDigits;
  // Return in national format ('07...') or international format ('+44...')
  return international ? `+44${subscriberNumber}` : `0${subscriberNumber}`;
}