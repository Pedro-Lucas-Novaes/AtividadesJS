import express from "express"

const router = express.Router()

// ROTA DE PEDIDOS
router.get("/series", (req, res) => {
  const series = [
    { numero: "1", produto: "abacaxi", valorDoPedido: "9,5", img: "/imgs/imagem1.png" },
    { numero: "2", produto: "melão", valorDoPedido: "11,77", img: "/imgs/imagem1.png" },
    { numero: "3", produto: "toranja", valorDoPedido: "37,98", img: "/imgs/imagem1.png" },
    { numero: "4", produto: "laranja", valorDoPedido: "22,99", img: "/imgs/imagem1.png" },
    { numero: "4", produto: "laranja", valorDoPedido: "22,99", img: "/imgs/imagem1.png" },
  ];
  res.render("series", {
    series: series,
  });
});

export default router;