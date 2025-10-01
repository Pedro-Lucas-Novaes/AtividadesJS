import express from "express"

const router = express.Router()

// ROTA DE PEDIDOS
router.get("/series", (req, res) => {
  const series = [
    { nome: "Breaking Bad", produto: "abacaxi", valorDoPedido: "9,5", img: "/imgs/imgS001.png" },
    { nome: "WandaVision", produto: "melão", valorDoPedido: "11,77", img: "/imgs/imgS002.png" },
    { nome: "Lucifer", produto: "toranja", valorDoPedido: "37,98", img: "/imgs/imgS003.png" },
    { nome: "The Witcher", produto: "laranja", valorDoPedido: "22,99", img: "/imgs/imgS004.png" },
    { nome: "Wandinha", produto: "laranja", valorDoPedido: "22,99", img: "/imgs/imgS005.png" },
  ];
  res.render("series", {
    series: series,
  });
});

export default router;