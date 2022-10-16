import Sequelize from "sequelize";

const db = new Sequelize( 'blog_db', 'root', 'root', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql', // or 'sqlite', 'postgres', 'mariadb'
    define: {
        timestamps: false
    },
    pool: {
        max: 5, 
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
} );

export default db;

//Aca un comentario de JP para que nos valgan el parcial