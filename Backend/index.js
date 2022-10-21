import express from "express";
import cors from 'cors';
import router from "./routes/index.routes.js";
import db from "./configuracion/db.js";

const app = express();

//DB
db.authenticate()
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch(err => console.log(err));

// Puerto
const port = 4000;

// Leer form
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const dominiosPermitidos = ["http://127.0.0.1:5173"]

const corsOptions = {
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin) !== -1){
            //El origen del Request está permitido
            callback(null, true)
        }else{
            callback(new Error('No está permitido por CORS'));
        }
    }
}

app.use(cors(corsOptions))

app.use((req, res, next) => {
    return next();
}); 

// Router
app.use('/', router);
app.use('/platos', router);
app.use('/usuarios', router);
app.use('/ingredientes', router);
app.use('/domiciliarios', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});