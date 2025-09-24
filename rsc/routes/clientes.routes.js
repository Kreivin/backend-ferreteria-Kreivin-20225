import { Router } from 'express';
import { obtenerClientes, obtenerCliente, eliminarCliente, registrarCliente } from '../controllers/clientes.controlliers.js';

const router = Router();

// Ruta para obtener todas las categorías
router.get('/categorias', obtenerClientes);

// ruta para obtener una categoría por su ID
router.get('/categoria/:id', obtenerCliente);

// Ruta para registrar una nueva categoría
router.post('/categoria', registrarCliente);

// ruta para eliminar una categoria por ID
router.delete('/categoria/:id_categoria', eliminarCliente);

export default router;