import { pool } from '../db.js';

export const getAllUsers = async (req, res) => {
    try{
        const { rows } = await pool.query('SELECT * FROM users');
        if (rows.length > 0) {
            res.status(200).json(rows);
        }else if (rows.length <= 0) {
            res.status(404).json({message: 'No se encontro el usuario solicitado'});
        }
    }catch(error){
        res.status(500).json({message: 'Error al obtener los usuarios'});
    }
}

export const getUserById = async (req, res) => { 
    const { id }  = req.params;
    try{
        const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);{
            if (rows.length > 0) {
                res.status(200).json(rows[0]);
            }else if (rows.length <= 0) {
                res.status(404).json({message: 'No se encontro el usuario solicitado'});
            }
        }
    }catch(error){
        res.status(500).json({message: 'Error al obtener el usuario'});
    }
}