import  { Router } from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/users.controllers.js';

const router = Router();

router.get('/', (_, res) => {
    res.status(200).json({message: 'Ruta base API'});
});

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

export default router;