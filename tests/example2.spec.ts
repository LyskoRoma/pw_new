import { test, expect } from '@playwright/test';

test('Проверка элементов на странице Playwright', async ({ page }) => {

    await test.step('Степ 1 - Открыть страницу Playwright', async () => {
        await page.goto('https://playwright.dev/');
    });

    await test.step('Степ 2 - Проверить наличие таба Community', async () => {
        const tab = page.locator('//a[contains(@class, "navbar__item") and contains(@class, "navbar__link") and text()="Community"]');
        await expect(tab).toBeVisible();
    });

    await test.step('Степ 3 - Проверить наличие кнопки "Get Started"', async () => {
        const getStartedButton = page.locator('//a[@class="getStarted_Sjon"]');
        await expect(getStartedButton).toBeVisible();
    });

    await test.step('Степ 4 - Проверить наличие поля для поиска', async () => {
        const searchButton = page.locator('//div[@class="navbarSearchContainer_Bca1"]');
        await expect(searchButton).toBeVisible();
    });

    // Шаг 5 - Проверить наличие ссылки "GitHub"
    await test.step('Степ 5 - Проверить наличие плейсхолдера с тексом Search в поле для поиска', async () => {
        const placeHolder = page.locator('//span[@class="DocSearch-Button-Placeholder"]');
        await expect(placeHolder).toHaveText('Search');
    });
});