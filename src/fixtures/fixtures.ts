import { test as base } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../pages/loginPage';
import { BasicDetailsPage } from '../pages/basicDetailsPage';
import { AddressPage } from '../pages/addressPage';
import { BankDetailsPage } from '../pages/bankDetailsPage';
import { SalaryDetailsPage } from '../pages/salaryDetailsPage';
import { TaxDetailsPage } from '../pages/taxDetailsPage';
import { PassportDetailsPage } from '../pages/passportDetailsPage';
import { DrivingLicenseDetailsPage } from '../pages/drivingLicenseDetailsPage';
import { VisaDetailsPage } from '../pages/visaDetailsPage';
import { generateUKMobileNumber, formatDate } from '../utils/helper-utils';
import { SaveAndContinuePage } from '../pages/saveAndContinuePage';
import { EmploymentDetailsPage } from '../pages/employmentDetailsPage';

type Pages = {
  loginPage: LoginPage;
  basicDetailsPage: BasicDetailsPage;
  addressPage: AddressPage;
  bankDetailsPage: BankDetailsPage;
  salaryDetailsPage: SalaryDetailsPage;
  taxDetailsPage: TaxDetailsPage;
  passportDetailsPage: PassportDetailsPage;
  drivingLicenseDetailsPage: DrivingLicenseDetailsPage;
  visaDetailsPage: VisaDetailsPage;
  saveAndContinuePage: SaveAndContinuePage;
  employmentDetailsPage: EmploymentDetailsPage;
};

type TestData = {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  formattedDateOfBirth: string;
  jobTitle: string;
  mobileNumber: string;
  workPhone: string;
  formattedEmploymentStartDate: string;
  formattedProbationEndDate: string;
  address1: string;
  address2: string;
  address3: string;
  townCity: string;
  county: string;
  postcode: string;
  nameOnAccount: string;
  nameOfBank: string;
  bankBranch: string;
  accountNumber: string;
  sortCode: string;
  salary: string;
  effectiveFrom: string;
  reason: string;
  payrollNumber: string;
  taxCode: string;
  niNumber: string;
  passportNumber: string;
  passportCountryOfIssue: string;
  passportExpiryDate: string;
  licenceNumber: string;
  drivingLicenceCountryOfIssue: string;
  licenceClass: string;
  dateOfExpiry: string;
  visaNumber: string;
  visaExpiryDate: string;
};

export const test = base.extend<Pages & { testData: TestData }>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  basicDetailsPage: async ({ page }, use) => {
    await use(new BasicDetailsPage(page));
  },
  addressPage: async ({ page }, use) => {
    await use(new AddressPage(page));
  },
  bankDetailsPage: async ({ page }, use) => {
    await use(new BankDetailsPage(page));
  },
  salaryDetailsPage: async ({ page }, use) => {
    await use(new SalaryDetailsPage(page));
  },
  taxDetailsPage: async ({ page }, use) => {
    await use(new TaxDetailsPage(page));
  },
  passportDetailsPage: async ({ page }, use) => {
    await use(new PassportDetailsPage(page));
  },
  drivingLicenseDetailsPage: async ({ page }, use) => {
    await use(new DrivingLicenseDetailsPage(page));
  },
  visaDetailsPage: async ({ page }, use) => {
    await use(new VisaDetailsPage(page));
  },
    saveAndContinuePage: async ({ page }, use) => {
        await use(new SaveAndContinuePage(page));
    },
    employmentDetailsPage: async ({ page }, use) => {
        await use(new EmploymentDetailsPage(page));
    },
  testData: async ({}, use) => {
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
    const rawEffectiveFrom = faker.date.past().toISOString().split('T')[0];
    const effectiveFrom = '25/03/2025';
    const reason = "Adjustment";
    const payrollNumber = faker.string.alphanumeric();
    const taxCode = faker.string.alphanumeric(4);
    const niNumber = faker.string.alphanumeric(8);
    const passportNumber = faker.string.alphanumeric(9);
    const country = "Afghanistan";
    const passportCountryOfIssue = country;
    const rawPassportExpiryDate = faker.date.future().toISOString().split('T')[0];
    const passportExpiryDate = formatDate(rawPassportExpiryDate);
    const licenceNumber = faker.string.alphanumeric(10);
    const drivingLicenceCountryOfIssue = country;
    const licenceClass = faker.string.alphanumeric(1);
    const rawDateOfExpiry = faker.date.future().toISOString().split('T')[0];
    const dateOfExpiry = formatDate(rawDateOfExpiry);
    const visaNumber = faker.string.alphanumeric(6);
    const rawVisaExpiryDate = faker.date.future().toISOString().split('T')[0];
    const visaExpiryDate = formatDate(rawVisaExpiryDate);

    const testData: TestData = {
      firstName,
      lastName,
      middleName,
      email,
      formattedDateOfBirth,
      jobTitle,
      mobileNumber,
      workPhone,
      formattedEmploymentStartDate,
      formattedProbationEndDate,
      address1,
      address2,
      address3,
      townCity,
      county,
      postcode,
      nameOnAccount,
      nameOfBank,
      bankBranch,
      accountNumber,
      sortCode,
      salary,
      effectiveFrom,
      reason,
      payrollNumber,
      taxCode,
      niNumber,
      passportNumber,
      passportCountryOfIssue,
      passportExpiryDate,
      licenceNumber,
      drivingLicenceCountryOfIssue,
      licenceClass,
      dateOfExpiry,
      visaNumber,
      visaExpiryDate,
    };

    await use(testData);
  },
});

export {expect} from '@playwright/test';
