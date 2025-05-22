import { getClientes, addCliente } from '../models/clienteModel.js';

export const obtenerClientes = (req, res) =>{
    getClientes((err, resultados)=> {
        if(err)return req.status(500).json( {error: err.message});
        res.json(resultados)
});
};