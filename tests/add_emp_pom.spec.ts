import { test, expect } from '../src/fixtures/fixtures';
import loginDetails from '../src/data/loginDetails.json' assert { type: 'json' };

test('verify add employee test', async ({ page, loginPage, basicDetailsPage, addressPage, bankDetailsPage, salaryDetailsPage, taxDetailsPage, passportDetailsPage, drivingLicenseDetailsPage, visaDetailsPage, saveAndContinuePage, testData }) => {
  testData;

  await loginPage.login(loginDetails.email, loginDetails.password);
  await page.getByRole('button', { name: 'Actions' }).click();
  await page.getByRole('link', { name: 'Add employees' }).click();

  await basicDetailsPage.fillBasicDetails(testData.firstName, testData.lastName, testData.middleName, testData.formattedDateOfBirth, testData.email, testData.mobileNumber, testData.workPhone, testData.jobTitle, testData.formattedEmploymentStartDate, testData.formattedProbationEndDate);
  await addressPage.fillAddress(testData.address1, testData.address2, testData.address3, testData.townCity, testData.county, testData.postcode);
  await bankDetailsPage.fillBankDetails(testData.nameOnAccount, testData.nameOfBank, testData.bankBranch, testData.accountNumber, testData.sortCode);
  await salaryDetailsPage.fillSalaryDetails(testData.salary, testData.effectiveFrom,testData.reason, testData.payrollNumber);
  await taxDetailsPage.fillTaxDetails(testData.taxCode, testData.niNumber);
  await passportDetailsPage.fillPassportDetails(testData.passportNumber, testData.passportCountryOfIssue,testData. passportExpiryDate);
  await drivingLicenseDetailsPage.fillDrivingLicenseDetails(testData.licenceNumber, testData.drivingLicenceCountryOfIssue, testData.licenceClass, testData.dateOfExpiry);
  await visaDetailsPage.fillVisaDetails(testData.visaNumber, testData.visaExpiryDate);
  await saveAndContinuePage.clickSaveAndContinue();
});