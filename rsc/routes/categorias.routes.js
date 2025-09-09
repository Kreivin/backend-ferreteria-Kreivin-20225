import { Router } from 'express';
import { obtenerCategorias, obtenerCategoria } from '../controllers/categorias.controllers.js';

const router = Router();

// Ruta para obtener todas las categorías
router.get('/categorias', obtenerCategorias);

// ruta para obtener una categoría por su ID
router.get('/categoria/:id', obtenerCategoria);

// Ruta para registrar una nueva categoría
router.post('/categoria', registrarCategoria);

export default router;