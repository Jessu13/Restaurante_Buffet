import express from 'express';
import { 
    p_home, 
    p_platos,
    eliminar_plato
} from '../controllers/pagControllers.js';
import { 
    guardar_platos,
    eliminar_plato,
    actualizar_plato
} from '../controllers/platosController.js';
import {
    guardar_usuario,
    eliminar_usuario,
    actualizar_usuario
} from '../controllers/usuariosController.js';

const router = express.Router();

router.get('/', p_home);

router.get('/platos', p_platos);
router.post('/platos', guardar_platos);
router.get('/platos/:id',plato);
router.put('/platos/:id',actualizar_plato);
router.delete('/platos/:id', eliminar_plato);

router.get('/usuarios', p_usuarios);
router.post('/usuarios', guardar_usuario);
router.put('/usuarios/:id',actualizar_usuario);
router.delete('/usuarios/:id', eliminar_usuario);


export default router;
