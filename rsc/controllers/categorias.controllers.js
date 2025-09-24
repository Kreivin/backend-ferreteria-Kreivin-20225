import { pool } from '../../db_conecction.js';
// Obtener todas las categorías
export const obtenerCategorias = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM categorias');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener una categoría por su ID
export const obtenerCategoria = async (req, res) => {
try {
    const id_categoria = req.params.id_categoria;
const [result] = await pool.query('SELECT * FROM categorias WHERE id_categoria = ?', [id_categoria]);
if (result.length <= 0) {
return res.status(404).json({
mensaje: `Error al leer los datos. ID ${id_categoria} no encontrado.`
});
}
res.json(result[0]);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos de las categorias.'
});
}
};

// Registrar una nueva Categoría
export const registrarCategoria = async (req, res) => {
try {
const { nombre_categoria, descripcion_categoria } = req.body;
const [result] = await pool.query(
'INSERT INTO categorias (nombre_categoria, descripcion_categoria) VALUES (?, ?)',
[nombre_categoria, descripcion_categoria]
);
res.status(201).json({ id_categoria: result.insertId });
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al registrar la categoría.',
error: error
});
}
};

// Eliminar categoria por id 
export const eliminarCategoria = async (req, res)=> {
    try{
        const id_categoria = req.params.id_categoria;
        const [result] = await pool.query('DELETE FROM cateegorias WHERE id_categoria = ?',[id_categoria]);

        if (result.affectedRows === 0 ){
            return res.status(404).json({
            mensaje: `Error al eliminar la categoria. el ID ${id_categoria} no fue encontrado.`
        });
    }

    //respuesta sin contenido para indicar exito
res.status(204).send();
}catch (error){
    return res.status(500).json({
        mensaje: 'Ha ocurrido un error al eliminar la categoria.',
        error: error
    });
}
};