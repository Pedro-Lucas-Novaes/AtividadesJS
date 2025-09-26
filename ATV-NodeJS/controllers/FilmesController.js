// Importando o Express
import express from "express"
// Carregando na variável router o express.Router() que é responsavel por gerenciar as rotas da aplicação
const router = express.Router()

// ROTA DE CLIENTES
router.get("/filmes", (req, res) => {
  const filmes = [
    { nome: "Ricardo", cpf: "123.456.789-00", endereco: "Rua das Flores, 34", img: "/imgs/imagem1.png" },
    { nome: "Isaac", cpf: "123.456.789-00", endereco: "Rua Diamante, 100", img: "/imgs/imagem1.png" },
    { nome: "Ana Flávia", cpf: "123.456.789-00", endereco: "Rua Ceará, 30", img: "/imgs/imagem1.png" },
    { nome: "Renan", cpf: "123.456.789-00", endereco: "Rua Curitiba, 22", img: "/imgs/imagem1.png" },
    { nome: "Renan", cpf: "123.456.789-00", endereco: "Rua Curitiba, 22", img: "/imgs/imagem1.png" },
  ];
  res.render("filmes", {
    filmes: filmes,
  });
});

// Exportando o objeto router
export default router;