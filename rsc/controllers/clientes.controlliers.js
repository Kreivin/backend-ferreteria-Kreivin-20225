import { pool } from '../../db_conecction.js';
// Obtener todas las clientes
export const obtenerClientes = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM clientes');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};


// Obtener una clientes por su ID
export const obtenerCliente = async (req, res) => {
try {
    const id_cliente = req.params.id_categoria;
const [result] = await pool.query('SELECT * FROM clientes WHERE id_clientes = ?', [id_cliente]);
if (result.length <= 0) {
return res.status(404).json({
mensaje: `Error al leer los datos. ID ${id_cliente} no encontrado.`
});
}
res.json(result[0]);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos de las categorias.'
});
}
};


// Eliminar categoria por id 
export const eliminarCliente = async (req, res)=> {
    try{
        const id_cliente = req.params.id_cliente;
        const [result] = await pool.query('DELETE FROM cateegorias WHERE id_cliente = ?',[id_cliente]);

        if (result.affectedRows === 0 ){
            return res.status(404).json({
            mensaje: `Error al eliminar el cliente. el ID ${id_cliente} no fue encontrado.`
        });
    }

    //respuesta sin contenido para indicar exito
res.status(204).send();
}catch (error){
    return res.status(500).json({
        mensaje: 'Ha ocurrido un error al eliminar el cliente.',
        error: error
    });
}
};