import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Usuario = db.define('usuarios', {
    nombreUsuario: {
        type: Sequelize.STRING
    },
    telefono: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    },
    direccion: {
        type: Sequelize.STRING
    }
})