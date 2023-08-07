import { pool } from "../db.js";

export const getEstudiantes = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM estudiante ORDER BY cedula ASC");
        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getEstudiante = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM estudiante WHERE cedula= ?", [req.params.cedula]);
        if (result.length === 0) {
            res.status(404).json({ message: "Estudiante not found" });
        }
        console.log(result);
        res.json(result[0])
        // console.log(req.params.id)
        // res.send('received')
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createEstudiante = async (req, res) => {
    try {
        const { cedula, nombreEstudiante, apellidoEstudiante, sexo, fechaNacimiento } = req.body
        const [result] = await pool.query('INSERT INTO estudiante(cedula, nombreEstudiante, apellidoEstudiante, sexo, fechaNacimiento) VALUES (?,?,?,?,?)',
            [cedula, nombreEstudiante, apellidoEstudiante, sexo, fechaNacimiento]
        );
        console.log(result)

        res.json({
            cedula, nombreEstudiante, apellidoEstudiante, sexo, fechaNacimiento
        })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateEstudiante = async (req, res) => {
    try {
        const result = await pool.query("UPDATE estudiante SET ? WHERE cedula = ?", [
            req.body,
            req.params.cedula,
        ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteEstudiante = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM estudiante WHERE cedula= ?", [req.params.cedula]);
        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Estudiante not found" })

        return res.sendStatus(204)
        //    res.json(result);
        // console.log(req.params.id)
        // res.json("received")
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};