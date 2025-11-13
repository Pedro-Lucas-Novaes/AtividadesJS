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

export default router;
