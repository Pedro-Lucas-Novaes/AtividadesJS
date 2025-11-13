import express from "express";

const app = express();

import Auth from "./middleware/Auth.js";

import session from "express-session";

import connection from "./config/sequelize-config.js";

import FilmesController from "./controllers/FilmesController.js";
import SeriesController from "./controllers/SeriesController.js";
import AnimesController from "./controllers/AnimesController.js";
import FavoritosController from "./controllers/FavoritosController.js";

// Realizando a conexão com o banco de dados
connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

// Criando o banco de dados se ele não existir
connection
  .query(`CREATE DATABASE IF NOT EXISTS fatecflix;`)
  .then(() => {
    console.log("O banco de dados está criado.");
  })
  .catch((error) => {
    console.log(error);
  });

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.use("/", FilmesController);
app.use("/", SeriesController);
app.use("/", AnimesController);
app.use("/", FavoritosController);

app.get("/", (req, res) => {
  res.render("index");
});

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
