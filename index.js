import express from 'express';
import router from './routes/Index.js'
import db from './config/db.js'
import dotenv from 'dotenv';

const app = express();


//conectar a la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error=> {
        console.log(error);
    })

//definir el puerto
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;



//habilitar pug
app.set('view engine', 'pug')

//obtner el year actual
app.use(( req,res,next) =>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia De Viajes'
    return next();
});

//agregar body parser para leer los datos
app.use(express.urlencoded({extended: true}))


//definir la carpeta publica
app.use(express.static('public'))

//agregar router

app.use('/', router)

app.listen(port , host, () =>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})

