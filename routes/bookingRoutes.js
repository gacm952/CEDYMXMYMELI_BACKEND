import express from 'express'
import { 
        createBooking, 
        getBookings,
        getDateBookings,
        getBooking,
        cancelBooking,
        getAllBookings,
        reBooking,
        updateStatusUser,
        massiveReBooking,
        confirmBooking
} from "../controllers/BookingController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

// Agendar una cita
router
.post('/createbooking', checkAuth, createBooking)
// Obtener citas creadas
router
.get('/createbooking', checkAuth, getBookings)

router
.get('/allbookings', checkAuth, getDateBookings, getAllBookings)

router
.get('/confirmBooking/:token', confirmBooking); 

router
.route('/:id')
.get(checkAuth, getBooking)

router.route('/:id/actualizar')
.put(checkAuth, reBooking)

router.route('/desplazamiento')
        .put(checkAuth, massiveReBooking)

router.route('/:id/status')
.put(checkAuth, updateStatusUser)

router.route('/:id/delete')
.put(checkAuth, cancelBooking)


export default router;