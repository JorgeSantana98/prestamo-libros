import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import estudianteRoutes from "./routes/estudiante.routes.js";
import prestamoRoutes from "./routes/prestamo.routes.js";

const app = express();

app.use(express.json())//procesar los datos que vienen del cliente

app.use(indexRoutes);
app.use(taskRoutes);
app.use(estudianteRoutes);
app.use(prestamoRoutes);

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);
