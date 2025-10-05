import express from "express";

const app = express();

import FilmesController from "./controllers/FilmesController.js";
import SeriesController from "./controllers/SeriesController.js";
import AnimesController from "./controllers/AnimesController.js";

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", FilmesController);
app.use("/", SeriesController);
app.use("/", AnimesController);

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
