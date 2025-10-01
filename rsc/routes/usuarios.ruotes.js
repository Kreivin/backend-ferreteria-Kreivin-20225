import { Router } from 'express';
import { obtenerdetalles_ventas, obtenerdetalles_ventas, registrardetalles_ventas, eliminardetalles_ventas,actualizardetalles_ventas} from '../controllers/detalles_ventas.routes.js';

const router = Router();

// Ruta para obtener todas los detalles_ventas
router.get('/detalles_ventas', obtenerdetalles_ventas);

// ruta para obtener una detalles_ventas por su ID
router.get('/detalles_ventas/:id', obtenerdetalles_ventas);

// Ruta para registrar una nueva detalle_ventas
router.post('/categoria', registrardetalles_ventas);

// ruta para eliminar una detalles_ventas por ID
router.delete('/detalles_ventas/:id_detalles_ventas', eliminardetalles_ventas);

export default router;

// Ruta para actualizar una detalles_ventas por su ID
router.put('/categoria/:id_detalles_ventas', actualizardetalles_ventas);

// Ruta para actualizar una detalles_ventas por su ID
router.patch('/categoria/:id_detalles_ventas', actualizardetalles_ventas);
