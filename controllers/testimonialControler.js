import { Testimoniales } from '../models/Testimoniales.js'

const guardarTestimoniales = async(req, res) => {
    //validar 
    const { nombre,correo,mensaje} = req.body;
    const errores = []

    if(nombre.trim() === '') {
        errores.push({mensaje: 'El nombre esta vacio'});
    }

    if(correo.trim() === '') {
        errores.push({mensaje: 'El correo esta vacio'});
    }

    if(mensaje.trim() === '') {
        errores.push({mensaje: 'El mensaje esta vacio'});
    }  

    if(errores.length > 0) {

        //consultar los testimoniales ya existentes
        const testimoniales = await Testimoniales.findAll();
        
        //mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else{
        //almacenar en la base de datos
        try {
            await Testimoniales.create({
                nombre,
                correo,
                mensaje
            });
        } catch (error) {
            console.log(error);
        }    
    }
}

export {
    guardarTestimoniales
}