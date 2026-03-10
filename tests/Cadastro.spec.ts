import { test, expect } from '@playwright/test';

test('Verificação da obrigatoriedade dos campos no cadastro de curso', async ({ page }) => {
  await page.goto('https://creative-sherbet-a51eac.netlify.app/');

// Navega para a tela de cadastro de curso clicando no botão da página inicial
await page.getByRole('link', { name: 'Cadastrar curso' }).click();

// Aguarda a página de cadastro carregar
await page.waitForURL('https://creative-sherbet-a51eac.netlify.app/new-course');

// Verifica se o título "Cadastro de curso" está visível na tela
await expect(page.getByRole('heading', { name: 'Cadastro de curso' })).toBeVisible()

// Clica no botão de cadastrar curso para enviar o formulário
await page.getByRole('button', { name: 'Cadastrar curso' }).click();

// Aguarda o card do curso aparecer na tela — confirma que o curso foi criado com sucesso
await page.waitForSelector('.my-card');



});

test('Cadastro de curso simples com imagem carregando', async ({ page }) => {

await page.goto('https://creative-sherbet-a51eac.netlify.app/');

  // Navega para a tela de cadastro de curso clicando no botão da página inicial
await page.getByRole('link', { name: 'Cadastrar curso' }).click();

// Aguarda a página de cadastro carregar
await page.waitForURL('https://creative-sherbet-a51eac.netlify.app/new-course');

// Verifica se o título "Cadastro de curso" está visível na tela
await expect(page.getByRole('heading', { name: 'Cadastro de curso' })).toBeVisible()

// Preenche o campo Nome do curso
await page.getByLabel('Nome do curso').fill('Curso Teste');

// Preenche o campo Descrição do curso
await page.getByLabel('Descrição do curso').fill('Curso sobre fundamentos da qualidade de software');

// Preenche o campo Instrutor
await page.getByLabel('Instrutor').fill('Instrutor 1');

// Preenche o campo Imagem
await page.getByLabel('URL da imagem de capa').fill('data:image/png;base64,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');

// Preenche o campo com a data 09/03/2026
await page.getByLabel('Data de início').fill('2026-03-09');

// Preenche o campo com a data 11/03/2026
await page.getByLabel('Data de fim').fill('2026-03-11');

// Preenche o campo Vagas
await page.getByLabel('Número de vagas').fill('10');

// Clica no campo "Tipo de curso" para abrir o dropdown
await page.getByLabel('Tipo de curso').click();

// Seleciona a opção "Presencial" no dropdown
await page.getByRole('option', { name: 'Presencial' }).click();

// Preenche o campo de endereço
await page.getByLabel('Endereço').fill('Rua Teste, 10');

// Guarda a URL da imagem ANTES de enviar o formulário
const IMAGEM_CAPA_ESPERADA = await page.getByLabel('URL da imagem de capa').inputValue();

// Clica no botão de cadastrar curso para enviar o formulário
await page.getByRole('button', { name: 'Cadastrar curso' }).click();

// Aguarda o nome do curso "Curso Teste" aparecer no card
await expect(page.locator('.text-h5').filter({ hasText: 'Curso Teste' })).toBeVisible();

// Aguarda a imagem do card carregar completamente
await page.waitForFunction(() => {
  const img = document.querySelector('.q-img__image') as HTMLImageElement;
  return img && img.complete;
});

// Verifica se a imagem exibida no card é a mesma que foi cadastrada
await expect(page.locator('.q-img__image')).toHaveAttribute('src', IMAGEM_CAPA_ESPERADA);


});

test('Teste do funcionamento do link do cadastro de curso', async ({ page }) => {

await page.goto('https://creative-sherbet-a51eac.netlify.app/');

  // Navega para a tela de cadastro de curso clicando no botão da página inicial
await page.getByRole('link', { name: 'Cadastrar curso' }).click();

// Aguarda a página de cadastro carregar
await page.waitForURL('https://creative-sherbet-a51eac.netlify.app/new-course');

// Verifica se o título "Cadastro de curso" está visível na tela
await expect(page.getByRole('heading', { name: 'Cadastro de curso' })).toBeVisible()

// Preenche o campo Nome do curso
await page.getByLabel('Nome do curso').fill('Curso Teste');


// Clica no campo "Tipo de curso" para abrir o dropdown
await page.getByLabel('Tipo de curso').click();

// Seleciona a opção "Presencial" no dropdown
await page.getByRole('option', { name: 'Online' }).click();

// Preenche o campo com o link de inscrição do curso
await page.getByLabel('Link de inscrição').fill('https://www.udemy.com/?srsltid=AfmBOopbPX-DLFBtB6HfvaBXty7VW0vLrJBpEzoyla0OuI3JOM7O3td_');

// Clica no botão de cadastrar curso para enviar o formulário
await page.getByRole('button', { name: 'Cadastrar curso' }).click();

await page.pause();

});