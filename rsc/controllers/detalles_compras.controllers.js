import { pool } from '../../db_conecction.js';
// Obtener todas las detalles_compras
export const obtenerdetalles_compras = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM detalles_compras');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};


// Obtener una clientes por su ID
export const obtenerdetalles_compra = async (req, res) => {
try {
    const id_detalles_compra = req.params.id_categoria;
const [result] = await pool.query('SELECT * FROM detalles_compras WHERE id_detalle_compra = ?', [id_detalles_compra]);
if (result.length <= 0) {
return res.status(404).json({
mensaje: `Error al leer los datos. ID ${id_detalles_compra} no encontrado.`
});
}
res.json(result[0]);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos de las categorias.'
});
}
};