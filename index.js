import cor from 'cors'
import express from 'express'
import clienteRoutes from './routes/clienteRoutes.js'
import produtoRoutes from './routes/produtoRoutes.js'
import ventaRoutes from './routes/ventaRoutes.js'

const app = express();
app.use(cors())
app.use(express.json());

app.use('/api/clientes', clienteRoutes);
app.use('/api/produtos', produtoRoutes);
app.use('/api/ventas', ventaRoutes);

const PORT = 3000;


app.listen(PORT, () =>{
    console.log(`Servidor corrinedo en http://localhost:${PORT}`)
});