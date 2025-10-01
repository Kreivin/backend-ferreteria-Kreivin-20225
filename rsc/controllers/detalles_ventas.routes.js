import { pool } from '../../db_conecction.js';
// Obtener todas las Detalles_ventas
export const obtenerVentas = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM detalles_ventas');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};


// Obtener una Detalle_ventas por su ID
export const obtenerDetallevetas = async (req, res) => {
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

// Actualizar Categoria por ID
export const actualizarCategoria = async (req, res) => {
    try{
        const id_categoria = req.params.id_categoria;
        const { nombre_categoria, descripcion_categoria } = req.body;

        const [result] = await pool.query(
            'UPDATE categorias SET nombre_categoria = IFNULL(?, nombre_categoria), descripcion_categoria = IFNULL(?, descripcion_categoria) WHERE id_categoria = ?',
            [nombre_categoria, descripcion_categoria, id_categoria] 
        );
        if (result.affectedRows === 0){
            return res.status(404).json({
                mensaje: `Error al actualizar la categoria. El ID ${id_categoria} no fue encontrado.`
            });
        }
        res.sendStatus(200).json({
            mensaje:`Categoria con ID ${id_categoria} actualizado exitosamente.`
        });
    }catch (error){
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al actualizar la categoria.',
            error: error
        });
    }
};

// controlador para actualizar parcialmente una categoria por su ID
export const actualizarCategoriapatch = async (req, res) => {
    try {
        const {id_categoria} = req.params;
        const datos = req.body;

        const [result] = await pool.query(
            'UPDATE categorias SET ? WHERE id_categoria = ?',
            [datos, id_categoria]
        );
        if (result.affectedRows === 0){
            return res.status(404).json({
                mensaje: `CAtegoria con ID ${id_categoria} no encotntrada.`
            });
        }
        res.status(200).json({
            mensaje: `Categoria con ID ${id_categoria} actualizada exitosamente.`
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al actualizar la categoria.',
            error: error
        });
    }
};