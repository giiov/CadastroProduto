# 📦 Sistema de Cadastro de Produtos

Projeto desenvolvido na matéria de Sistemas Web II utilizando Node.js, Express e EJS para praticar criação de rotas, formulários e renderização de páginas dinâmicas.

---

## 🚀 Funcionalidades

* **Cadastro de produtos**
* **Listagem de produtos**
* **Visualização de detalhes**
* **Edição de produtos**
* **Exclusão de produtos**

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**
* **Express**
* **EJS**
* **CSS3**

---

## Como executar

Clone o repositório:

```bash
git clone https://github.com/giiov/CadastroProduto
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

---

## 📂 Estrutura de Pastas

```text
app/
 ├── routes/             # definição e lógica de rotas
 │    └── produtos.js
 │
 ├── views/              # arquivos de template (EJS)
 │    └── produtos/
 │         ├── cadastro.ejs   # formulário para cadastrar novos produtos
 │         ├── detalhe.ejs    # exibição de detalhes de um produto específico
 │         ├── lista.ejs      # exibição de todos os produtos cadastrados
 │         ├── editar.ejs     # formulário para alterar informações de um produto
 │         └── resultado.ejs  # página de retorno após ações do formulário
 │
public/
 └── css/
      └── style.css           # estilização das páginas
```

