import app from './app.js';
import { PORT } from './config.js';  

app.listen(PORT);
console.log("Servidor ejecutado en el puerto" ,PORT);
