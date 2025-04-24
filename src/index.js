import express from 'express';

// Importo router de routes/index.js
import router from './routes/index.js';

// importo el modulo path de node para poder utilizar la funcion dirname que me permite crear una ruta absoluta
import {dirname, join} from 'path';
// importo el modulo fileURLToPath de node para poder utilizar la funcion fileURLToPath que me permite crear una ruta absoluta
import { fileURLToPath } from 'url';

// creo una constante que se llama app y le asigno el valor de express para utilizarlo
const app = express();

// configuro el motor de plantillas que voy a utilizar
app.set("view engine", "ejs");

// configuro la carpeta donde se encuentran las vistas pero debo pasarle la ruta absoluta
// para ello utilizo el modulo path de node

// utilizo la funcion fileURLToPath para obtener la ruta absoluta del archivo actual
const __dirname = dirname(fileURLToPath(import.meta.url));

// utilizo la funcion join para unir la ruta absoluta del archivo actual con la carpeta views
app.set("views", join(__dirname, "views"));


app.use(router)

app.use(express.static(join(__dirname, "public")));


const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)});

