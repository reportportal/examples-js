import { expect, test } from '@playwright/test';

export const commonStep = (page) => {
  test.step('Nested step', async () => {
    await expect(page).toHaveTitle(/Playwright/);
    test.step('Nested step', async () => {
      await expect(page).toHaveTitle(/Playwright/);
    });
    test.step('Nested step', async () => {
      await expect(page).toHaveTitle(/Playwright1/);
    });
    test.step('Nested step', async () => {
      await expect(page).toHaveTitle(/Playwright/);
      test.step('Nested step', async () => {
        throw new Error('My error!');
      });
    });
  });
}
