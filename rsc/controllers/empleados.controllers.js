import { pool } from '../../db_conecction.js';
// Obtener todas las empleado
export const obtenerEmpleados = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM empleados');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener un empleado por su ID
export const obtenerEmpleado = async (req, res) => {
try {
    const id_empleado = req.params.id_empleado;
const [result] = await pool.query('SELECT * FROM empleados WHERE id_empleado = ?', [id_empleado]);
if (result.length <= 0) {
return res.status(404).json({
mensaje: `Error al leer los datos. ID ${id_empleado} no encontrado.`
});
}
res.json(result[0]);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos de los empleados.'
});
}
};

// Registrar una nueva Empleado
export const registrarEmpleado = async (req, res) => {
try {
const { primer_nombre, segundo_nombre, primer_apellido,segundo_apellido, celular, cargo, fecha_contratacion } = req.body;
const [result] = await pool.query(
'INSERT INTO empleados (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo, fecha_contratacion) VALUES (?, ?, ?, ?, ?, ?, ?)',
[ primer_nombre ,segundo_nombre ,primer_apellido ,segundo_apellido ,celular ,cargo, fecha_contratacion]
);
res.status(201).json({ id_empleado: result.insertId });
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al registrar los Empleados.',
error: error
});
}
};

// Eliminar empleados por id 
export const eliminarEmpleado = async (req, res)=> {
    try{
        const id_empleado = req.params.id_empleado;
        const [result] = await pool.query('DELETE FROM empleados WHERE id_empleado = ?',[id_empleado]);

        if (result.affectedRows === 0 ){
            return res.status(404).json({
            mensaje: `Error al eliminar el empleado. el ID ${id_empleado} no fue encontrado.`
        });
    }

    //respuesta sin contenido para indicar exito
res.status(204).send();
}catch (error){
    return res.status(500).json({
        mensaje: 'Ha ocurrido un error al eliminar el empleado.',
        error: error
    });
}
};


// controlador para actualizar parcialmente una empleado por su ID
export const actualizarEmpleado = async (req, res) => {
    try {
        const {id_empleado} = req.params;
        const datos = req.body;

        const [result] = await pool.query(
            'UPDATE empleados SET ? WHERE id_empleado = ?',
            [datos, id_empleado]
        );
        if (result.affectedRows === 0){
            return res.status(404).json({
                mensaje: `empleados con ID ${id_empleado} no encontrada.`
            });
        }
        res.status(200).json({
            mensaje: `Empleados con ID ${id_empleado} actualizada exitosamente.`
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al actualizar los empleados.',
            error: error
        });
    }
};