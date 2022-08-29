import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Plato = db.define('platos', {
    nombre_plato: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.INTEGER
    },
    descripcion: {
        type: Sequelize.STRING
    }
})