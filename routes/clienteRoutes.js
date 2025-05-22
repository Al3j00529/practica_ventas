import express from 'express';
import { obtenerClientes, crearCliente} from '../controllers/clienteCrontroller.js'

const router = express.Router();

router.get('/', obtenerClientes);
router.post('/', crearCliente);

export default router;
