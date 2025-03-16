import { faker } from '@faker-js/faker';

export function formatDate(inputDate: string): string {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export function generateUKMobileNumber(international: boolean = false): string {
    const randomDigits = faker.number.int({ min: 0, max: 999999999 }).toString().padStart(9, '0');
    const subscriberNumber = '7' + randomDigits;
    return international ? `+44${subscriberNumber}` : `0${subscriberNumber}`;
}