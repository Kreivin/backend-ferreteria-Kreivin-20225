import { Router } from 'express';
import { obtenerClientes, obtenerCliente, registrarCliente,actualizarCliente, eliminarCliente  } from '../controllers/clientes.controllers.js';

const router = Router();

// Ruta para obtener todas las categorías
router.get('/clientes', obtenerClientes);

// ruta para obtener una categoría por su ID
router.get('/cliente/:id', obtenerCliente);

router.get('/cliente', registrarCliente);

// Ruta para registrar una nueva categoría
router.post('/cliente', actualizarCliente);

// ruta para eliminar una categoria por ID
router.delete('/cliente/:id_cliente', eliminarCliente);

export default router;