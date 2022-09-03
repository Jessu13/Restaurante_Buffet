import express from 'express';
import { 
    p_home, 
    p_platos,
    plato,
    actualizar_plato
} from '../controllers/pagControllers.js';
import { 
    guardar_platos,
    eliminar_plato
} from '../controllers/platosController.js';

const router = express.Router();

router.get('/', p_home);

router.get('/platos', p_platos);
router.post('/platos', guardar_platos);

router.get('/platos/:id',plato);

router.put('/platos/:id',actualizar_plato);
router.delete('/platos/:id', eliminar_plato);


export default router;
