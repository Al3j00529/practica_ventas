import{
    obtenerVentas as obtenerVentasModel,
    registrarVentas as registrarVentasModel
} from '../models/ventaModel.js';

export const registrarVentas =(req, res) => {
    const venta = req.body;
    if (!venta.id_cliente || !venta.id_producto || !venta.cantidad){
        return res.status(400).json({error: 'Faltan campos requeridos'});
    }
    registrarVentasModel(venta, (error,resultado) =>{
        if (err) return res.status(500).json({error:err.message});
        res.status(201).json({ mensaje: 'Venta Registrada con exito'});
    })
}

    export const obtenerVentas =(req, res) => {
        obtenerVentasModel((err, ventas ) =>{
            if (err) return res.status(500).json({error:err.message});
            res.json(ventas);
        });
    };
