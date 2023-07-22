import express from "express";
const router = express.Router();

import {register, 
         login,
         confirm, 
         resetPassword, 
         changePassword, 
         newPassword,
         profile,
         allProfiles,
         // updateUserResponsable
        } from '../controllers/userController.js';

import checkAuth from "../middleware/checkAuth.js";

// Autenticacion, Registro y Confirmacion de Usuarios
router.post('/register', register); //Creacion de Usuario
router.post('/login', login); //Autenticacion de Usuario
router.get('/confirm/:token', confirm); //Confirmacion de Cuenta
router.post('/resetpassword', resetPassword); //Resetear Password 
//Validar Token y Cambio de Password
router
.route("/resetpassword/:token")
.get(changePassword)
.post(newPassword); 
router.get('/profile', checkAuth, profile); // Cheacker el login del usuario
router.get('/profiles', checkAuth, allProfiles); // Buscar todos los perfiles
// Agregar ruta para actualizar propiedad "Responsable"
// router.put('/:id', checkAuth, updateUserResponsable);



export default router;