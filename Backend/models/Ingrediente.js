import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Ingrediente = db.define('ingredientes', {
    nombreIngrediente: {
        type: Sequelize.STRING
    },
    cantidadDisponible: {
        type: Sequelize.INTEGER
    },
    tipo_Ingrediente: {
        type: Sequelize.STRING
    },
    precioIngrediente: {
        type: Sequelize.INTEGER
    }
})