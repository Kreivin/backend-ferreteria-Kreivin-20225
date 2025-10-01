import { Router } from 'express';
import { obtenerProducto, obtenerProducto, registrarProducto, eliminarProducto,actualizarProducto} from '../controllers/Producto.routes.js';

const router = Router();

// Ruta para obtener todas los Producto
router.get('/productos', obtenerProducto);

// ruta para obtener una Producto por su ID
router.get('/productos/:id', obtenerProducto);

// Ruta para registrar una nueva detalle_ventas
router.post('/categoria', registrarProducto);

// ruta para eliminar una Producto por ID
router.delete('/producto/:id_producto', eliminarProducto);

export default router;

// Ruta para actualizar una Producto por su ID
router.put('/producto/:id_Producto', actualizarProducto);

// Ruta para actualizar una Producto por su ID
router.patch('/producto/:id_Producto', actualizarProducto);
