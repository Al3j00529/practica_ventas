import mysql from 'mysql';

export const db = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'clientes_db'
});
db.connect(err => {
    if (err) throw err;
    console.log("Conectado a la base de datos de MYSQL") 
});