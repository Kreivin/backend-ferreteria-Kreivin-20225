import { pool } from '../../db_conecction.js';

// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM usuarios');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener un usuario por su ID
export const obtenerUsuario = async (req, res) => {
try {
    const id_usuario = req.params.id_producto;
const [result] = await pool.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id_usuario]);
if (result.length <= 0) {
return res.status(404).json({
mensaje: `Error al leer los datos. ID ${id_usuario} no encontrado.`
});
}
res.json(result[0]);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos de los usuarios.'
});
}
};

// Registrar un nuevo usuario
export const registrarUsuario = async (req, res) => {
try {
const { usuario ,contraseña } = req.body;
const [result] = await pool.query(
'INSERT INTO usuarios (usuario, contraseña) VALUES (?, ?)',
[usuario ,contraseña]
);
res.status(201).json({ id_usuario: result.insertId });
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al registrar el usuario.',
error: error
});
}
};

// Eliminar usuario por id 
export const eliminarUsuario = async (req, res)=> {
    try{
        const id_usuario = req.params.id_usuario;
        const [result] = await pool.query('DELETE FROM usuarios WHERE id_usuario = ?',[id_usuario]);

        if (result.affectedRows === 0 ){
            return res.status(404).json({
            mensaje: `Error al eliminar el usuario. el ID ${id_usuario} no fue encontrado.`
        });
    }

    //respuesta sin contenido para indicar exito
res.status(204).send();
}catch (error){
    return res.status(500).json({
        mensaje: 'Ha ocurrido un error al eliminar los productos.',
        error: error
    });
}
};


// controlador para actualizar parcialmente una usuario por su ID
export const actualizarUsuario = async (req, res) => {
    try {
        const {id_usuario} = req.params;
        const datos = req.body;

        const [result] = await pool.query(
            'UPDATE productos SET ? WHERE id_producto = ?',
            [datos, id_usuario]
        );
        if (result.affectedRows === 0){
            return res.status(404).json({
                mensaje: `usuarios con ID ${id_usuario} no encotntrada.`
            });
        }
        res.status(200).json({
            mensaje: `Usuarios con ID ${id_usuario} actualizada exitosamente.`
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al actualizar el usuario.',
            error: error
        });
    }
};