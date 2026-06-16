var produtos = [
  { id: 1, nome: "Livro de Node.js", preco: 50, quantidade: 101 },
  { id: 2, nome: "Curso de Express", preco: 120, quantidade: 5 },
  { id: 3, nome: "Treinamento EJS", preco: 80, quantidade: 7 },
];

module.exports = function (app) {
  app.get("/produtos", function (request, response) {
    response.render("produtos/lista", { listaProdutos: produtos });
  });

  app.get("/produtos/detalhe/:id", function (request, response) {
    var id = request.params.id;

    var produtoSelecionado = produtos.find(function (produto) {
      return produto.id == id;
    });

    response.render("produtos/detalhe", { produto: produtoSelecionado });
  });

  app.get("/produtos/json", function (request, response) {
    response.json(produtos);
  });

  app.get("/produtos/novo", function (request, response) {
    response.render("produtos/cadastro");
  });


  app.post("/produtos", function (request, response) {
    
    var novoProduto = {
      id: produtos.length + 1,
      nome: request.body.nome,
      preco: request.body.preco,
      quantidade: request.body.quant
    };
    produtos.push(novoProduto);

    response.redirect("/produtos");

  });

  app.get("/produtos/excluir/:id", function (request, response) {
    
    var id = request.params.id;

    var index = produtos.findIndex(function (produto) {
      return produto.id == id;
    });

    produtos.splice(index, 1);

    response.redirect("/produtos");
  });

  app.get("/produtos/alterar/:id", function (request, response) {
    
    var id = request.params.id;

    var produtoSelecionado = produtos.find(function (produto) {
      return produto.id == id;
    });

    response.render("produtos/editar", {produto: produtoSelecionado});

  });

  app.post("/produtos/alterar", function (request, response) {

    var id = request.body.id;

    var produto = produtos.find(function (produto) {
      return produto.id == id;
    });

    produto.nome = request.body.nome;
    produto.preco = request.body.preco;
    produto.quantidade = request.body.quantidade;

    response.redirect("/produtos");

  });

};

