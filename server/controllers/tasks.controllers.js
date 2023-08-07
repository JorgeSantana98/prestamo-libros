import { pool } from "../db.js";

export const getTasks = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM publications ORDER BY codPublications ASC");
        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getTask = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM publications WHERE codPublications= ?", [req.params.id]);
        if (result.length === 0) {
            res.status(404).json({ message: "Publications not found" });
        }
        console.log(result);
        res.json(result[0])
        // console.log(req.params.id)
        // res.send('received')
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createTask = async (req, res) => {
    try {
        const { categoria, editorial, nombrePublicacion, autor, anioPublicacion } = req.body
        const [result] = await pool.query('INSERT INTO publications(categoria, editorial, nombrePublicacion, autor, anioPublicacion) VALUES (?,?,?,?,?)',
            [categoria, editorial, nombrePublicacion, autor, anioPublicacion]
        );
        console.log(result)

        res.json({
            id: result.insertId, //esto es para que se visualize con el json, no agrega una id ya que es incremental
            categoria, editorial, nombrePublicacion, autor, anioPublicacion
        })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateTask = async (req, res) => {
    try {
        const result = await pool.query("UPDATE publications SET ? WHERE codPublications = ?", [
            req.body,
            req.params.id,
        ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM publications WHERE codPublications= ?", [req.params.id]);
        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Publications not found" })

        return res.sendStatus(204)
        //    res.json(result);
        // console.log(req.params.id)
        // res.json("received")
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};