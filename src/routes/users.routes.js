import  { Router } from 'express';
import { pool } from '../db.js';
const router = Router();

router.get('/', async (res) => {
    res.status(200).json({message: 'Ruta base API'});
});
router.get('/users', async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM users');
    res.json(rows);
});
// router.get('/users', async (req, res) => {
//     await pool.query('SELECT * FROM users', () => {
//         res.status(200).json(results.rows);
//     });
//     res.send('Obteniendo usuarios');
// });
router.get('/users/:id', async (req, res) => {
    const { userId }  = req.params;
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);{
        if (rows.length > 0) {
            res.status(200).json(results.rows[0]);
        }else if (rows.length <= 0) {
            res.status(404).json({message: 'No se encontro el usuario solicitado'});
        }
    }
});

router.post('/users', async (req, res) => {
    const data = req.body;
    try{
        const { rows } = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [data.name, data.email]);
        return rows.length > 0 ? res.json(rows[0]) : res.status(400).json({message: 'Error al insertar el usuario'});
    }catch(error){
        res.status(400).json({message: 'Error al insertar el usuario'});
    }
});
router.delete('/users/:id', async(req, res) => {

    const { userId } = req.params;
    const { rowCount } = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
    if(rowCount.length === 0){
        res.status(404).json({message: 'No se encontro el usuario solicitado'});
    }else if(rowCount.length === 1){
        res.status(204);
    }
});

router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    try{
        const { rows } = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [data.name, data.email, id]);
        return res.json(rows[0]);
    }catch{
        res.status(400).json({message: 'Error al actualizar el usuario'});
    }
    res.send('Actualizar usuarios con id y params'+ id);
});

export default router;