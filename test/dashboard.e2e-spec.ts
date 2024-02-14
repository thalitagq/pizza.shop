import { test, expect } from '@playwright/test';

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  expect(page.getByText('20', { exact: true }).nth(1)).toBeVisible()
  expect(page.locator('div').filter({ hasText: /^Pedidos \(dia\)20-5% em relação a ontem$/ }).getByRole('paragraph')).toBeVisible()
  await page.waitForTimeout(2000)
});

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  expect(page.getByText('R$ 1,00')).toBeVisible()
  expect(page.getByText('+4% em relação a ontem')).toBeVisible()
});

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  expect(page.getByText('5', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relação ao mês passado')).toBeVisible()
});


test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  expect(page.getByText('R$ 1,00')).toBeVisible()
  expect(page.getByText('+4% em relação a ontem')).toBeVisible()
});
