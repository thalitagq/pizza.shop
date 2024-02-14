import { test, expect } from '@playwright/test';

test('sign up success', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@exemple.com')
  await page.getByLabel('Seu celular').fill('8989889898')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso')

  expect(toast).toBeVisible()

});

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  await page.getByLabel('Nome do estabelecimento').fill('Invalid name')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@exemple.com')
  await page.getByLabel('Seu celular').fill('8989889898')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante')

  expect(toast).toBeVisible()

});

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')

});

