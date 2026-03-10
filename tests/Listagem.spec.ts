import { test, expect } from '@playwright/test';

test('Listagem de cursos', async ({ page }) => {

    
await page.goto('https://creative-sherbet-a51eac.netlify.app/');

// Navega para a tela de cadastro de curso clicando no botão da página inicial
await page.getByRole('link', { name: 'Cadastrar curso' }).click();

// Aguarda a página de cadastro carregar
await page.waitForURL('https://creative-sherbet-a51eac.netlify.app/new-course');

// Verifica se o título "Cadastro de curso" está visível na tela
await expect(page.getByRole('heading', { name: 'Cadastro de curso' })).toBeVisible()

// Preenche o campo Nome do curso
await page.getByLabel('Nome do curso').fill('Curso 1');

// Clica no botão de cadastrar curso para enviar o formulário
await page.getByRole('button', { name: 'Cadastrar curso' }).click();

// Navega para a tela de cadastro de curso clicando no botão da página inicial
await page.getByRole('link', { name: 'Cadastrar curso' }).click();

// Preenche o campo Nome do curso
await page.getByLabel('Nome do curso').fill('Curso 2');

// Clica no botão de cadastrar curso para enviar o formulário
await page.getByRole('button', { name: 'Cadastrar curso' }).click();

// Navega para a tela de cadastro de curso clicando no botão da página inicial
await page.getByRole('link', { name: 'Cadastrar curso' }).click();

// Preenche o campo Nome do curso
await page.getByLabel('Nome do curso').fill('Curso 3');

// Clica no botão de cadastrar curso para enviar o formulário
await page.getByRole('button', { name: 'Cadastrar curso' }).click();

// Clica no botão Listar cursos para Listar
await page.getByRole('link', { name: 'Listar cursos' }).click();

// Verifica se existem exatamente 3 cards de cursos na página
await expect(page.locator('.my-card')).toHaveCount(3);




});

test('Exclusao de curso', async ({ page }) => {

    
await page.goto('https://creative-sherbet-a51eac.netlify.app/');

// Navega para a tela de cadastro de curso clicando no botão da página inicial
await page.getByRole('link', { name: 'Cadastrar curso' }).click();

// Aguarda a página de cadastro carregar
await page.waitForURL('https://creative-sherbet-a51eac.netlify.app/new-course');

// Verifica se o título "Cadastro de curso" está visível na tela
await expect(page.getByRole('heading', { name: 'Cadastro de curso' })).toBeVisible()

// Preenche o campo Nome do curso
await page.getByLabel('Nome do curso').fill('Curso 1');

// Clica no botão de cadastrar curso para enviar o formulário
await page.getByRole('button', { name: 'Cadastrar curso' }).click();

// Clica no botão "Excluir curso"
await page.getByRole('button', { name: 'Excluir curso' }).click();

// Aguarda a notificação de sucesso aparecer na tela
await expect(page.locator('.q-notification__message').filter({ hasText: 'Curso excluído com sucesso!' })).toBeVisible();

// Verifica se o card do curso foi removido da página
await expect(page.locator('.my-card')).toHaveCount(0);


});
