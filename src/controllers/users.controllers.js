import { pool } from '../config.js';

// router.get('/users', async (req, res) => {
//     await pool.query('SELECT * FROM users', () => {
//         res.status(200).json(results.rows);
//     });
//     res.send('Obteniendo usuarios');
// });

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

export const createUser = async (req, res) => {
    const data = req.body;
    try{
        const { rows } = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [data.name, data.email]);
        return rows.length > 0 ? res.json(rows[0]) : res.status(400).json({message: 'Error al insertar el usuario'});
    }catch(error){
        // getErrorResponse(error, res);
        switch (error.code){
            case '23505':
                res.status(400).json({message: 'El correo ya existe'});
                break;
            case '23502':
                res.status(400).json({message: 'Faltan campos por llenar'});
                break;
            default:
                res.status(400).json({message: 'Error al insertar el usuario'});
        }
            res.status(400).json({message: 'El correo ya existe'});
        
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    try{
        const { rows } = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [data.name, data.email, id]);
        return res.json(rows[0]);
    }catch{
        res.status(400).json({message: 'Error al actualizar el usuario'});
    }
    res.send('Actualizar usuarios con id y params'+ id);
}

export const deleteUser = async (req, res) => {
    const { userId } = req.params;
    const { rowCount } = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
    if(rowCount.length === 0){
        res.status(404).json({message: 'No se encontro el usuario solicitado'});
    }else if(rowCount.length === 1){
        res.status(204);
    }
};

export const getErrorResponse = (error, res) => {
    switch (error.code){
        case '23505':
            res.status(400).json({message: 'El correo ya existe'});
            break;
        case '23502':
            res.status(400).json({message: 'Faltan campos por llenar'});
            break;
        default:
            res.status(400).json({message: 'Error al insertar el usuario'});
    }
}