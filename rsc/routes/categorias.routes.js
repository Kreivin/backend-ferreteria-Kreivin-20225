import { Router } from 'express';
import { obtenerCategorias } from '../controllers/categorias.controllers.js';

const router = Router();

// Ruta para obtener todas las categorías
router.get('/categorias', obtenerCategorias);
export default router;