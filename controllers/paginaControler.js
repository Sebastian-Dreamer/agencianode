import { Testimoniales } from '../models/Testimoniales.js';
import {Viaje} from '../models/Viaje.js'
const paginaInicio = async(req, res) => { // req - lo que enviamos : res - lo que express nos responde

    //consultar 3 viajes del modo viaje   
    const promiseDB = [];

    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Testimoniales.findAll({limit: 3}));


    try {

        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }

    
}

const paginaNosotros = (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    //consultar la DB
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes,
    })
}

const PaginaTestimoniales =  async(req, res) => { // req - lo que enviamos : res - lo que express nos responde
    try {
        const testimoniales = await Testimoniales.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
    } catch (error) {
        console.log(error);
    }
}

const paginaDetalleViaje = async (req,res) => {
    const { slug } = req.params;

    console.log(req.params.viaje);

    try {
        const viaje = await Viaje.findOne({where: { slug }});

        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    PaginaTestimoniales,
    paginaDetalleViaje
}