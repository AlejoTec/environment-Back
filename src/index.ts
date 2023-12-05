import cors from 'cors';
import express from "express";
import bodyParser from "body-parser";

import { apiUrl } from "./V1/api-routes";
import { authRoutes } from "./V1/routes/auth/auth.rotes";




const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json()); // Para JSON
app.use(bodyParser.urlencoded({ extended: false })); // Para datos codificados en formularios


/**
 * RUTAS
 */
app.use(apiUrl, authRoutes);

//TODO crear el Service
//TODO crear el controller
//TODO crear las Rutas
//TODO Se importa la ruta como esta -- app.use(apiUrl, nuevaRuta); - Ejemplo

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});


