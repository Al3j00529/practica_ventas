import express from 'express';
import { obtenerVentas, registrarVentas} from '../cotrollers/ventaController.js';
import router from './clienteRoutes.js';


const router = express.Router();
router.get('/', obtenerVentas);
router.post('/', registrarVentas);

export default router;
