import express from "express";
import router from "./routes/index.routes.js";

const app = express();

app.use(express.json());

app.use('/', router);
app.use('/platos', router);

export default app;