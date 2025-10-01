// Importando o Express
import express from "express"
// Carregando na variável router o express.Router() que é responsavel por gerenciar as rotas da aplicação
const router = express.Router()

// ROTA DE CLIENTES
router.get("/filmes", (req, res) => {
  const filmes = [
    { nome: "Harry Potter e o Prisioneiro de Azkaban", cpf: "123.456.789-00", endereco: "Rua das Flores, 34", img: "/imgs/imgF001.png" },
    { nome: "Vida de Inseto", cpf: "123.456.789-00", endereco: "Rua Diamante, 100", img: "/imgs/imgF002.png" },
    { nome: "The Moon: Sobrevivente", cpf: "123.456.789-00", endereco: "Rua Ceará, 30", img: "/imgs/imgF003.png" },
    { nome: "Cidade de Deus", cpf: "123.456.789-00", endereco: "Rua Curitiba, 22", img: "/imgs/imgF004.png" },
    { nome: "Twisters", cpf: "123.456.789-00", endereco: "Rua Curitiba, 22", img: "/imgs/imgF005.png" },
  ];
  res.render("filmes", {
    filmes: filmes,
  });
});

// Exportando o objeto router
export default router;