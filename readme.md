# BrightHR Interview Project

This project contains automated tests for the BrightHR application using Playwright. The tests cover various functionalities such as adding employee details, filling out forms, and verifying the presence of elements.

## Project Structure

- `tests/`: Contains all the test files.
- `pages/`: Page Object Models for different pages of the application.
- `utils/`: Utility functions and helpers.
- `playwright.config.ts`: Configuration file for Playwright.

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

## Getting Started

### Clone the Repository

bash
git clone https://github.com/your-username/brighthr.git
cd brighthr

## Install Dependencies

- npm install

## Running the Tests

To run the tests, use the following command:
- npx playwright test

## Project Structure
- src/data/: Contains JSON files with test data.
- src/fixtures/: Contains fixture files for setting up the test environment.
- src/pages/: Contains Page Object Model (POM) classes for different pages of the application.
- tests/: Contains test files

## Page Object Model (POM)
The POM Classes encapsulate the interactions with different pages of the application. Each class contains methods to perform actions on the respective page.

## Example Test
```import { test, expect } from '../src/fixtures/fixtures';
import loginDetails from '../src/data/loginDetails.json' assert { type: 'json' };

test('verify add employee test', async ({ page, loginPage, basicDetailsPage, addressPage, bankDetailsPage, salaryDetailsPage, taxDetailsPage, passportDetailsPage, drivingLicenseDetailsPage, visaDetailsPage, saveAndContinuePage, employmentDetailsPage, testData }) => {
  testData;

  await loginPage.login(loginDetails.email, loginDetails.password);
  await page.getByRole('button', { name: 'Actions' }).click();
  await page.getByRole('link', { name: 'Add employees' }).click();

  await basicDetailsPage.fillBasicDetails(testData.firstName, testData.lastName, testData.middleName, testData.formattedDateOfBirth, testData.email, testData.mobileNumber, testData.workPhone, testData.jobTitle, testData.formattedEmploymentStartDate, testData.formattedProbationEndDate);
  await addressPage.fillAddress(testData.address1, testData.address2, testData.address3, testData.townCity, testData.county, testData.postcode);
  await bankDetailsPage.fillBankDetails(testData.nameOnAccount, testData.nameOfBank, testData.bankBranch, testData.accountNumber, testData.sortCode);
  await salaryDetailsPage.fillSalaryDetails(testData.salary, testData.effectiveFrom, testData.reason, testData.payrollNumber);
  await taxDetailsPage.fillTaxDetails(testData.taxCode, testData.niNumber);
  await passportDetailsPage.fillPassportDetails(testData.passportNumber, testData.passportCountryOfIssue, testData.passportExpiryDate);
  await drivingLicenseDetailsPage.fillDrivingLicenseDetails(testData.licenceNumber, testData.drivingLicenceCountryOfIssue, testData.licenceClass, testData.dateOfExpiry);
  await visaDetailsPage.fillVisaDetails(testData.visaNumber, testData.visaExpiryDate);
  await expect(page.getByRole('button', { name: 'Save and continue' })).toBeVisible();
  await saveAndContinuePage.clickSaveAndContinue();
  await employmentDetailsPage.fillEmploymentDetails();
  await saveAndContinuePage.clickSaveAndContinue();
});