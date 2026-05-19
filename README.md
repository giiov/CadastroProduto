# 📦 Sistema de Cadastro de Produtos

Projeto simples desenvolvido  na matéria de Sistemas Web II utilizando Node.js, Express e EJS para praticar criação de rotas, formulários e renderização de páginas dinâmicas.

---

## 🚀 Funcionalidades

- **Cadastro de novos produtos**
- **Envio via POST**
- **Tela de resultado**

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **Node.js** 
- **Express**
- **EJS**
- **CSS3** 
---
## Como executar

Clone o repositório:

```bash
git clone LINK_DO_REPOSITORIO
```

Acesse a pasta do projeto:

```bash
cd exemplo_pratico
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
node app.js
```

Abra no navegador:

```text
http://localhost:3000/produtos
```
## 📂 Estrutura de Pastas

A arquitetura do projeto segue uma organização dividida por responsabilidades:

```text
app/
 ├── routes/              # Definição e lógica de rotas da aplicação
 ├── views/               # Arquivos de template (EJS)
 │    └── produtos/
 │         ├── cadastro.ejs   # Formulário para cadastrar novos produtos
 │         ├── detalhe.ejs    # Exibição de detalhes de um item específico
 │         ├── lista.ejs      # Listagem geral de produtos
 │         └── resultado.ejs  # Feedback após o cadastro com sucesso
 │
public/
 └── css/
      └── style.css       # Estilizações globais e específicas das páginas


