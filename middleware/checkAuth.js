import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Booking from '../models/Booking.js';

const checkAuth = async (req, res, next) => {
    
    let token = "";
    if (req.headers.authorization && 
        req.headers.authorization.startsWith("Bearer")) 
        {
            try {

                token = req.headers.authorization.split(" ")[1];

                const decoded = jwt.verify(token, process.env.JWT_SECRET);

                req.user = await User.findById(decoded.id).select("-password -secondName -secondLastName -typeDocument -document -phoneNumber -address -dateOfBirth -civilStatus -confirmado -tipo_documento -segundo_nombre -primer_apellido -segundo_apellido -numero_telefono -direccion -fecha_nacimiento -tipo_sangre -responsable -createdAt -updateAt -__v +role +registeredBy" );

                return next();
            } catch (error) {
                return res.status(404).json({msg: 'HUBO UN ERROR'});
            }
        }
    
    if (!token) {
        const error = new Error("TOKEN NO VALIDO");
        return res.status(401).json({ msg: error.message })
    }

    next();
};

export default checkAuth;