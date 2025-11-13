import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";
// Definindo a estrutura da tabela de filmes
const Favorito = connection.define("favoritos", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  preco: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
Favorito.sync({ force: false });

export default Favorito;
