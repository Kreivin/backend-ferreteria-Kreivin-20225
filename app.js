// Importar las dependencias necesarias
import express from 'express';
import cors from 'cors';

// Importar las rutas
import rutasCategorias from './rsc/routes/categorias.routes.js';
import rutasClientes from './rsc/routes/clientes.routes.js';
import rutasCompras from './rsc/routes/compras.routes.js';
import rutasDetalles_compras from './rsc/routes/detalles_compras.routes.js';
import rutasDetalles_ventas from './rsc/routes/detalles_ventas.routes.js';
import rutasEmpleados from './rsc/routes/empleados.routes.js';
import rutasProductos from './rsc/routes/productos.routes.js';
import rutasUsuarios from './rsc/routes/usuarios.routes.js';
import rutasVentas from './rsc/routes/ventas.routes.js';

// Crear la aplicación de Express
const app = express();

// Habilitar CORS para cualquier origen
app.use(cors({
methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],  allowedHeaders: ['Content-Type'],
}));

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json({ limit: '10mb' })); // 10 MB
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Rutas
app.use('/api', rutasCategorias);
app.use('/api', rutasClientes);
app.use('/api', rutasCompras);
app.use('/api', rutasDetalles_compras); 
app.use('/api', rutasDetalles_ventas);
app.use('/api', rutasEmpleados);
app.use('/api', rutasProductos);
app.use('/api', rutasUsuarios);
app.use('/api', rutasVentas);

// Manejo de rutas no encontradas
app.use((req, res, next) => {
res.status(404).json({
message: 'Ruta no encontrada'
});
}); 

// Exportar la aplicación
export default app;