import express from 'express';
import { 
    p_home, 
    p_platos
} from '../controllers/pagControllers.js';
import { 
    guardar_platos,
    eliminar_plato, 
    actualizar_plato 
} from '../controllers/platosController.js';

const router = express.Router();

router.get('/', p_home);

router.get('/platos', p_platos);
router.post('/platos', guardar_platos);
router.delete('/platos', eliminar_plato);
router.patch('/platos', actualizar_plato);


export default router;
