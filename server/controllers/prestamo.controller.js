import { pool } from "../db.js";

export const getPrestamos = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM prestamo ORDER BY cedula ASC");
        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getPrestamo = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM prestamo WHERE cedula= ?", [req.params.cedula]);
        if (result.length === 0) {
            res.status(404).json({ message: "Prestamo not found" });
        }
        console.log(result);
        res.json(result)
        // console.log(req.params.id)
        // res.send('received')
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createPrestamo = async (req, res) => {
    try {
        const { cedula, codPublications, fechaEntrega} = req.body
        const [result] = await pool.query('INSERT INTO prestamo(cedula, codPublications, fechaEntrega) VALUES (?,?,?)',
            [cedula, codPublications, fechaEntrega]
        );
        console.log(result)

        res.json({
            cedula, codPublications, fechaEntrega
        })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updatePrestamo = async (req, res) => {
    try {
        const [result] = await pool.query("UPDATE prestamo SET ? WHERE cedula = ?", [
            req.body,
            req.params.cedula,
        ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deletePrestamo = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM prestamo WHERE cedula= ?", [req.params.cedula]);
        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Prestamo not found" })

        return res.sendStatus(204)
        //    res.json(result);
        // console.log(req.params.id)
        // res.json("received")
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};