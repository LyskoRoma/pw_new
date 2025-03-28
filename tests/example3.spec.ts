import { test, expect, defineConfig } from '@playwright/test';

test('Проверить переключение со светлой темы на темную и обратно', async ({ page }) => {

    await test.step('Прекондиция: открыть главную страницу Playwright', async () => {
        await page.goto('/')
    });

    await test.step('Степ 1 - Переключиться на темную тему и проверить отображение элементов', async () => {
        const lightSwitcher = page.locator("//*[contains(@class, 'lightToggle')]")
        await lightSwitcher.click()

        const darkButton = page.locator("//*[contains(@class, 'darkToggle')]")
        await expect(darkButton).toBeVisible();

        const pageDark = await page.locator("//html[contains(@data-theme, 'dark')]")
        await expect(pageDark).toBeVisible();

    });

    await test.step('Степ 2 - Переключиться на светлую тему и проверить отображение элементов', async () => {
        const darkSwitcher = page.locator("//*[contains(@class, 'darkToggle')]");
        await darkSwitcher.click();

        const lightButton = page.locator("//*[contains(@class, 'lightToggle')]")
        await expect(lightButton).toBeVisible();

        const pageLight = await page.locator("//html[contains(@data-theme, 'light')]");
        await expect(pageLight).toBeVisible();

    });
});
