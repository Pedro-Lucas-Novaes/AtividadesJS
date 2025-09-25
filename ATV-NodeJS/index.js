// Importando o Express (framework)
// const express = require("express"); -> CommonJS Modules
import express from "express" // ES6 Modules
// Iniciando o Express na variável "app"
const app = express();

// Importando os Controllers (onde estão as rotas e onde é tratado as requisições)
import FilmesController from "./controllers/FilmesController.js"
import SeriesController from "./controllers/SeriesController.js"
import AnimesController from "./controllers/AnimesController.js"


// CONFIGURANDO O EJS
app.set("view engine", "ejs");
// Definindo a pasta PUBLIC para arquivos estáticos
app.use(express.static("public"));

// DEFININDO O USO DAS ROTAS QUE ESTÃO NOS CONTROLLERS
app.use("/",FilmesController)
app.use("/",SeriesController)
app.use("/",AnimesController)


// Criando a primeira rota do site (ROTA PRINCIPAL)
// REQ = Trata a REQUISIÇÃO / RES = Trata a RESPOSTA
app.get("/", (req, res) => {
  res.render("index");
});




// Iniciando o servidor HTTP
// O servidor escutará na porta 8080
const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
