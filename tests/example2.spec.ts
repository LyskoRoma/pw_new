import {test, expect} from '@playwright/test';

test.describe('Страница Playwright', () => {
    test('Модальное окно поиска', async ({page}) => {
        await test.step('Прекондиция: открыть главную страницу Playwright', async () => {
            await page.goto('/');
        });

        await test.step('Степ 1 - кликнуть на кнопку Search', async () => {
            await page.click("//span[@class='DocSearch-Button-Placeholder']");
            const modal = page.locator("//div[@class='DocSearch-Modal']")

            await expect(modal).toBeVisible();
        });

         const { searchForm, noSearchs, footer } = await test.step('Степ 2 - проверить дефолтное отображение элементов модального окна', async () => {
            const searchForm = page.locator("//form[@class='DocSearch-Form']");
            const noSearchs = page.locator("//p[text()='No recent searches']");
            const footer = page.locator("//footer[@class='DocSearch-Footer']");

            await expect(searchForm).toBeVisible();
            await expect(noSearchs).toBeVisible();
            await expect(footer).toBeVisible();

            return { searchForm, noSearchs, footer }
        });

        await test.step('Степ 3 - ввести текст и проверить состояние элементов поиска', async () => {
            await page.fill("//input[contains(@placeholder, 'Search docs')]", 'framework');

            await expect(page.locator("//button[contains(@class, 'DocSearch-Reset')]")).toBeVisible();
            await expect(page.locator("//div[contains(@class, 'DocSearch-Dropdown-Container')]")).toBeVisible();
            await expect(page.locator("//a[contains(@href, '/search?q=') and contains(text(), 'See all')]")).toBeVisible();


        });

        await test.step('Степ 4 - нажать на кнопку крестик и проверить состояние элементов модального окна', async () => {
            await page.click("//button[@class='DocSearch-Reset']");

            await expect(searchForm).toBeVisible();
            await expect(noSearchs).toBeVisible();
            await expect(footer).toBeVisible();

        });

        await test.step('Степ 5 - ввести строку "test" и кликнуть "See all"', async () => {
            await page.click("//input[@class='DocSearch-Input']");
            await page.fill("//input[@class='DocSearch-Input']", 'test');
            await page.click("//a[contains(@href, '/search?q=') and contains(text(), 'See all')]");

            await expect(page).toHaveURL(/.*search.*test.*/);
        });

    });
});
