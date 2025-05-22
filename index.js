import cor from 'cors'
import express from 'express'
import clienteRoutes from './routes/clienteRoutes.js'

const app = express();
app.use(cors())
app.use(express.json());

app.use('/api/clientes', clienteRoutes)

const PORT = 3000;


app.listen(PORT, () =>{
    console.log(`Servidor corrinedo en http://localhost:${PORT}`)
});