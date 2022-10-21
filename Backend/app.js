import express from "express";
import router from "./routes/index.routes.js";

const app = express();

app.use(express.json());

app.use('/', router);
app.use('/platos', router);
app.use('/usuarios', router);
app.use('/ingredientes', router);
app.use('/domiciliarios', router);

export default app;