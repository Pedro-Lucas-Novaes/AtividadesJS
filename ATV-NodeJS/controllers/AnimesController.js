import express from "express"

const router = express.Router()

// ROTA DE PRODUTOS
router.get("/animes", (req, res) => {
  // const produtos = ["Computador", "Celular", "Tablet", "Notebook"];

  // Array de objetos com os produtos
  const animes = [
    { nome: "Platano", preco: 3000, img: "/imgs/imagem1.png"},
    { nome: "Computador", preco: 4000, img: "/imgs/imagem1.png" },
    { nome: "Tablet", preco: 2000, img: "/imgs/imagem1.png" },
    { nome: "Notebook", preco: 3000, img: "/imgs/imagem1.png" },
    { nome: "Notebook", preco: 3000, img: "/imgs/imagem1.png" },
  ];

  res.render("animes", {
    animes: animes,
  });
});



export default router;