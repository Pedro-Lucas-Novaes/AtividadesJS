// Importando o Express
import express from "express";
// Carregando na variável router o express.Router() que é responsavel por gerenciar as rotas da aplicação
const router = express.Router();

// ROTA DE CLIENTES
router.get("/filmes", (req, res) => {
  const filmes = [
    {
      nome: "Harry Potter e o Prisioneiro de Azkaban",
      preco: 3000,
      img: "/imgs/imgF001.png",
    },
    {
      nome: "Vida de Inseto",
      preco: 2000,
      img: "/imgs/imgF002.png",
    },
    {
      nome: "The Moon: Sobrevivente",
      preco: 1500,
      img: "/imgs/imgF003.png",
    },
    {
      nome: "Cidade de Deus",
      preco: 7000,
      img: "/imgs/imgF004.png",
    },
    {
      nome: "Twisters",
      preco: 1000,
      img: "/imgs/imgF005.png",
    },
  ];
  res.render("filmes", {
    filmes: filmes,
  });
});

// Exportando o objeto router
export default router;
