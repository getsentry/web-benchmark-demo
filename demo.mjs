
export class MyScenario {
  async run(browser, page) {
    await page.goto('https://sentry.io/welcome/');
    await page.getByRole('navigation').getByRole('link', { name: 'Pricing' }).click();
  }
}
