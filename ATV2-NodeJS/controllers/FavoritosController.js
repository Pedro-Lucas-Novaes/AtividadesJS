import express from "express";
import Favorito from "../models/Favorito.js";

const router = express.Router();

router.get("/favoritos", (req, res) => {
    Favorito.findAll().then((favoritos) => {
        res.render("favoritos", {
            favoritos: favoritos,
        });
    }).catch((error) => {
      console.log(error);
  });
});

router.post("/favoritos/new", (req, res) => {
  const titulo = req.body.titulo;
  const genero = req.body.genero;
  const preco = req.body.preco;
  Favorito.create({
    titulo: titulo,
    genero: genero,
    preco: preco,
  })
    .then(() => {
      res.redirect("/favoritos");
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/favoritos/delete/:id", (req, res) => {
  const id = req.params.id;
  Favorito.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/favoritos");
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
