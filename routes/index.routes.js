import express from 'express';
import { 
    p_home, 
    p_platos
} from '../controllers/pagControllers.js';
import { 
    guardar_platos 
} from '../controllers/platosController.js';

const router = express.Router();

router.get('/', p_home);

router.get('/platos', p_platos);
router.post('/platos', guardar_platos);


export default router;