import  { Router } from 'express';
import { pool } from '../db';
const router = Router();

router.get('/users', (req, res) => {
    res.send('Obteniendo usuarios');
});
router.get('/users/:id', (req, res) => {
    const {userId}  = req.params;
    res.send('Obteniendo usuario ' + userId);
});
router.post('/users', (req, res) => {
    res.send('Creando usuarios');
});
router.delete('/users/:id', (req, res) => {
    res.send('Eliminar un usuario con id');
});
router.put('/users/:id', (req, res) => {
    const {id} = req.params;
    res.send('Actualizar usuarios con id y params'+ id);
});

export default router;