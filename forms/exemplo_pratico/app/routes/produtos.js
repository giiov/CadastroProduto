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


  app.post("/produtos/teste", function (request, response) {
    
    var nome = request.body.nome;
    var preco = request.body.preco;
    var quant = request.body.quant;

    response.render("produtos/resultado", {nome,preco,quant});

  });

};

