import express from "express"

const router = express.Router()

// ROTA DE PRODUTOS
router.get("/animes", (req, res) => {
  // const produtos = ["Computador", "Celular", "Tablet", "Notebook"];

  // Array de objetos com os produtos
  const animes = [
    { nome: "Platano", preco: 3000, img: "imagem1.png"},
    { nome: "Computador", preco: 4000 },
    { nome: "Tablet", preco: 2000 },
    { nome: "Notebook", preco: 3000 },
  ];

  res.render("animes", {
    animes: animes,
  });
});



export default router;