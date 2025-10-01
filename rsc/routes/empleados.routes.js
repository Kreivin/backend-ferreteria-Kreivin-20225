import { Router } from 'express';
import { obtenerempleados, obtenerempleados, registrarempleados, eliminarempleados,actualizarempleado} from '../controllers/detalles_ventas.routes.js';

const router = Router();

// Ruta para obtener todas los detalles_ventas
router.get('/detalles_ventas', obtenerempleados);

// ruta para obtener una detalles_ventas por su ID
router.get('/detalles_ventas/:id', obtenerempleados);

// Ruta para registrar una nueva detalle_ventas
router.post('/categoria', registrarempleados);

// ruta para eliminar una detalles_ventas por ID
router.delete('/empleados/:id_empleado', eliminarempleados);

export default router;

// Ruta para actualizar una detalles_ventas por su ID
router.put('/categoria/:id_detalles_ventas', actualizarempleado);

// Ruta para actualizar una detalles_ventas por su ID
router.patch('/categoria/:id_detalles_ventas', actualizarempleado);
