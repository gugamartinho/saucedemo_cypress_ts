# 🚀 Automação E2E com Cypress + TypeScript + Mochawesome

Este projeto implementa testes end‑to‑end utilizando **Cypress**, **TypeScript** e relatórios profissionais com **Mochawesome**, seguindo o padrão **Page Object Model (POM)** para garantir organização, escalabilidade e fácil manutenção.

---

## 📦 Tecnologias Utilizadas

- **Node.js 18+**
- **Cypress 13+**
- **TypeScript**
- **Mochawesome**
- **Mochawesome Merge**
- **Mochawesome Report Generator**
- **Page Object Model (POM)**

---

## 🛠️ Instalação

### 1️⃣ Clonar o repositório
```bash
git clone <url-do-repo>
cd <nome-do-projeto>
```
### 2️⃣ Instalar dependências
```bash
npm install
```
### 3️⃣ Instalar Cypress
```bash
npm install cypress --save-dev
```
### 4️⃣ Instalar TypeScript + tipos do Cypress
```bash
npm install --save-dev typescript ts-node @types/node @types/mocha @types/chai
```
### 5️⃣ Instalar Mochawesome e ferramentas de relatório
```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```
## 📁 Estrutura do Projeto
```bash
cypress/
  e2e/
    inventory/
      inventory.cy.ts
  pages/
    LoginPage.ts
    InventoryPage.ts
  reports/
    (gerado automaticamente)
cypress.config.ts
package.json
tsconfig.json
README.md
```
## 🧩 Padrão Page Object Model (POM)
- LoginPage.ts → métodos de login, validações e navegação
- InventoryPage.ts → métodos para validar produtos, nomes, preços, etc.

## ▶️ Como Correr os Testes
### 🟦 Modo interativo (ideal para desenvolvimento)
```bash
npm run cy:open
```
### 🟩 Correr todos os testes em modo headless
```bash
npm run cy:run
```
### 🟧 Correr os testes por pasta
```bash
npm run cy:login
npm run cy:inventory
```
## 📊 Relatórios Mochawesome
Após correr os testes:
```bash
npm run report
```
O relatório final fica disponível em:
```bash
cypress/reports/html/index.html
```
nota: se correr os testes via script não necessita gerar os relatorios manualmente
## 🧱 Requisitos
- Node.js 18+
- npm 9+
- Chrome
## 👤 Autor
Projeto mantido por David Martinho.