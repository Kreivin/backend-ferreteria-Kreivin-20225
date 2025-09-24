import { Router } from 'express';
import { obtenerCompras, obtenecompra } from '../controllers/compras.controllers.js';

const router = Router();

// Ruta para obtener todas las  compras
router.get('/ compras', obtenercompras);

// ruta para obtener una compras por su ID
router.get('/categoria/:id', obtenecompra);

// Ruta para registrar una nueva compras
router.post('/categoria', registracompra);

// ruta para eliminar una compras por ID
router.delete('/categoria/:id_categoria', eliminacompra);

export default router;