import express from "express";

const router = express.Router();

router.get("/animes", (req, res) => {
  const animes = [
    { nome: "Jujutsu Kaisen", preco: 3000, img: "/imgs/imgA001.png" },
    { nome: "The Promised Nerverland", preco: 4000, img: "/imgs/imgA002.png" },
    { nome: "Boku no Hero", preco: 2000, img: "/imgs/imgA003.png" },
    { nome: "Sakamoto Days", preco: 3000, img: "/imgs/imgA004.png" },
    { nome: "Chainsaw Man", preco: 3000, img: "/imgs/imgA005.png" },
  ];

  res.render("animes", {
    animes: animes,
  });
});

export default router;
