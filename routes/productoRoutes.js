import express from 'express';
import { crearProducto, obtenerProductos } from
'../cotrollers/productoController';
const router = express.Router();
router.get('/', obtenerProductos);
router.post('/', crearProducto);
export default router;