import { Page } from '@playwright/test';

export class SaveAndContinuePage {
    constructor(private page: Page) { }

    async clickSaveAndContinue() {
        await this.page.getByRole('button', { name: 'Save and continue' }).click();
    }
}


