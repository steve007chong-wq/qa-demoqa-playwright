import { Page, Locator } from '@playwright/test';

export class DemoQaPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators as getters (fixes the undefined error)
  get usernameInput(): Locator {
    return this.page.locator('#userName');
  }
  get emailInput(): Locator {
    return this.page.locator('#userEmail');
  }
  get currentAddressInput(): Locator {
    return this.page.locator('#currentAddress');
  }
  get permanentAddressInput(): Locator {
    return this.page.locator('#permanentAddress');
  }
  get submitButton(): Locator {
    return this.page.locator('#submit');
  }
  get outputPanel(): Locator {
    return this.page.locator('#output');
  }

  // Actions
  async goto() {
    await this.page.goto('https://demoqa.com/text-box');
  }

  async fillForm(name: string, email: string, currAddr: string, permAddr: string) {
    await this.usernameInput.fill(name);
    await this.emailInput.fill(email);
    await this.currentAddressInput.fill(currAddr);
    await this.permanentAddressInput.fill(permAddr);
    await this.submitButton.click();
  }

  async isOutputVisible() {
    await this.outputPanel.waitFor({ state: 'visible' });
  }
}