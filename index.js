import express from "express";
import router from "./routes/index.routes.js";
import db from "./configuracion/db.js";

const app = express();

//DB
db.authenticate()
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch(err => console.log(err));

// Puerto
const port = 3000;

// PUG
app.set('view engine', 'pug');

// Leer form
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use((req, res, next) => {
    return next();
}); 

// Router
app.use('/', router);
app.use('/platos', router);
app.use('/usuarios', router);
app.use('/ingredientes', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});