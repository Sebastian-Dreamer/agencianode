import express from 'express';
import  {
        paginaInicio, 
        paginaNosotros, 
        PaginaTestimoniales, 
        paginaViajes,
        paginaDetalleViaje
} from '../controllers/paginaControler.js'
import {
        guardarTestimoniales  
} from '../controllers/testimonialControler.js'

const router = express.Router();

router.get('/inicio', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', PaginaTestimoniales);
router.post('/testimoniales', guardarTestimoniales);





export default router;