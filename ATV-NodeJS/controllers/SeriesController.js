import express from "express";

const router = express.Router();

// ROTA DE PEDIDOS
router.get("/series", (req, res) => {
  const series = [
    {
      nome: "Breaking Bad",
      preco: 2500,
      img: "/imgs/imgS001.png",
    },
    {
      nome: "WandaVision",
      preco: 6800,
      img: "/imgs/imgS002.png",
    },
    {
      nome: "Lucifer",
      preco: 9200,
      img: "/imgs/imgS003.png",
    },
    {
      nome: "The Witcher",
      preco: 2300,
      img: "/imgs/imgS004.png",
    },
    {
      nome: "Wandinha",
      preco: 3000,
      img: "/imgs/imgS005.png",
    },
  ];
  res.render("series", {
    series: series,
  });
});

export default router;
