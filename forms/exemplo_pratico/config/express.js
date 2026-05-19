var app = require("express")();
var express = require("express")
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));

module.exports = function () {
  return app;
};
