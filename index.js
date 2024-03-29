const express = require('express');
const app = express();
const porta = 443;

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/home.html");
});

app.get("/p1", function(req, res) {
  res.sendFile(__dirname + "/p1.html");
});

app.get("/p2", function(req, res) {
  res.sendFile(__dirname + "/p2.html");
});

app.get("/p3", function(req, res) {
  res.sendFile(__dirname + "/p3.html");
});

app.use((req, res) => {
  res.status(404).send("<h1>Página não encontrada</h1>");
});

app.listen(porta, function() {
  console.log("Servidor rodando");
});