import User from "../models/User.js"
import idGenerator from "../helpers/idGenerator.js";
import jwtGenerator from "../helpers/jwtGenerator.js";
import bcrypt from 'bcrypt';
import { emailRegistro, emailForgotPassword, emailCreatePassword } from '../helpers/emails.js';

const register = async (req, res) => {
    
    //Evitar Registros Duplicados

    const {email} = req.body;
    const duplicateUser = await User.findOne({email});
    if (duplicateUser){
        const error = new Error('Correo Duplicado');
        return res.status(400).json({msg: error.message})
    }
    try {

        const user = new User(req.body);
        user.token = idGenerator();
        user.registeredBy = req.body.registeredBy;
        await user.save();

        if (req.body.password !== '') {
            emailRegistro({
                email: user.email,
                name: user.name,
                lastname: user.lastName,
                token: user.token,
            })
        }
        
        if (req.body.password === '') {
            emailCreatePassword({
                email: user.email,
                name: user.name,
                lastname: user.lastName,
                token: user.token,
            })

        }


        res.json({msg: "Usuario Creado Correctamente, Revisa tu Email para confirmar tu Cuenta"});
    } catch (error) {
        res.json(error);
    }
};

const login = async (req, res) => {
    const {email, password} = req.body;
    //Comprobar si el usuario existe
    const user = await User.findOne({email})
    if (!user){
        const error = new Error("NO EXISTE EL USUARIO");
        return res.status(404).json({msg: error.message});
    }
     //Comprobar si confirmo cuenta
    if (!user.confirmado){
        const error = new Error("TU CUENTA NO ESTA CONFIRMADA");
        return res.status(403).json({msg: error.message});
    }
    //Comprobar Password
    if(await user.passwordCheck(password)){
        res.json({
            _id: user._id,
            primer_nombre: user.primer_nombre,
            email: user.email,
            token: jwtGenerator(user._id),
            role: user.role,
        });
    }else{
        const error = new Error("CONTRASEÑA ERRONEA");
        return res.status(403).json({msg: error.message});
    }

};

const confirm = async (req, res) => {
    const {token} = req.params;
    const userConfirm = await User.findOne({token})
    if (!userConfirm){
        const error = new Error("TOKEN NO VALIDO");
        return res.status(403).json({msg: error.message});
    } 
    try {
        userConfirm.confirmado = true;
        userConfirm.token = '';
        await userConfirm.save();
        res.json({msg: 'USUARIO CONFIRMADO CORRECTAMENTE'})
    } catch(error){
        console.log(error);
    }
};

const resetPassword = async (req, res) => {
    const {email} = req.body;
    const user = await User.findOne({email})
    if (!user){
        const error = new Error("NO EXISTE EL EMAIL");
        return res.status(404).json({msg: error.message});
    }
    try {
        user.token = idGenerator();
        await user.save();


         // Enviar el email de validacion

         emailForgotPassword({
            email: user.email,
            name: user.name,
            lastname: user.lastName,
            token: user.token,
        })


        res.json({msg: 'SE ENVIO AL CORREO LAS INSTRUCCIONES'});
    } catch (error) {
        
    }
};

const changePassword = async (req, res) => {
    const {token} = req.params;
    const tokenValid = await User.findOne({token});
    if (tokenValid) {
        res.json({msg: 'TOKEN VALIDO'})
    } else {
        const error = new Error("TOKEN NO VALIDO");
        return res.status(404).json({msg: error.message});
    }
};

const newPassword = async (req, res) => {
    const {token} = req.params;
    const {password} = req.body;

    const user = await User.findOne({token});
    if (user) {

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
        const error = new Error("La nueva contraseña debe ser diferente a la contraseña actual.");
        return res.status(400).json({ msg: error.message });
        }

        user.password = password;
        user.token = '';
        try {
            await user.save();
            res.json({msg: 'PASSWORD MODIFICADO CORRECTAMENTE'})
        } catch (error) {
            console.log(error);
        }
    } else {
        const error = new Error("TOKEN NO VALIDO");
        return res.status(404).json({msg: error.message});
    }

};

const createPassword = async (req, res) => {
    const {token} = req.params;
    const {password} = req.body;

    const user = await User.findOne({token});
    if (user) {
        user.password = password;
        try {
            await user.save();
            res.json({msg: 'PASSWORD MODIFICADO CORRECTAMENTE, AHORA CONFIRMA TU EMAIL.'})

            emailRegistro({
                email: user.email,
                name: user.name,
                token: user.token,
            })

        } catch (error) {
            console.log(error);
        }
    } else {
        const error = new Error("TOKEN NO VALIDO");
        return res.status(404).json({msg: error.message});
    }

};
    
const profile = async (req, res) => {
    const user = await User.findOne(req.user)
    res.json(user);
};

const allProfiles = async (req, res) => {
    const users = await User.find()

    res.json(users);
};

/* const updateUserResponsable = async (req, res) => {
    const { id } = req.params;

    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { responsable: true },
        { new: true }
      );
  
      res.json(updatedUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Ha ocurrido un error al actualizar el usuario.' });
    }
  }; */


export {
    register,
    login,
    confirm,
    resetPassword,
    changePassword,
    newPassword,
    profile,
    allProfiles,
    createPassword,
    //updateUserResponsable 
};