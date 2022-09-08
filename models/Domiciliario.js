import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Domiciliario = db.define('domiciliarios', {
    nombre_Domiciliario: {
        type: Sequelize.STRING
    },
    disponible: {
        type: Sequelize.STRING
    },
    activo: {
        type: Sequelize.STRING
    }
})