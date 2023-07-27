import formData from 'form-data';
import Mailgun from 'mailgun.js';


export const emailRegistro = async (Userdata) => {

const{ email, name, lastName, token } = Userdata

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

(async () => {
  try {
    const data = {
      from: 'CEDYM <notreply@cedym.co>',
      to: email,
      subject: 'Confirma tu Cuenta',
      html: '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>¡Confirma tu Cuenta!</title></head><body style="margin: 0; padding: 30px;"><table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #F8F8F8; padding: 30px;"><tr><td style="text-align: center;"><img src="https://res.cloudinary.com/dhqxmaqdk/image/upload/f_auto,q_auto/jmbwpbt5q3j5eomhcgh7" alt="Logo CEDYM" style="width: 80px; padding: 20px;"><h1 style="font-size: 32px; font-weight: bold; margin: 20px;">¡Confirma tu Cuenta!</h1></td></tr><tr><td style="padding: 20px;"><p style="text-align: left; font-size: 16px; margin: 0;">¡Hola <strong>' + name + ' ' + lastName + '!</strong></p><p style="text-align: justify; font-size: 16px; margin: 20px 0;">Para disfrutar de la gestión ágil y sencilla de tus citas médicas, te pedimos que verifiques tu dirección de correo electrónico. Esto nos ayudará a garantizar la seguridad y la confiabilidad de tu cuenta.</p><p style="text-align: center; padding: 10px; font-size: 12px; margin: 0;">Haz clic en el botón a continuación para confirmar tu cuenta:</p></td></tr><tr><td style="text-align: center;"><a href="' + process.env.FRONTEND_URL + '/ConfirmAccount/' + token + '" style="display: inline-block; background-color: #00a451; color: #ffffff; font-size: 16px; font-weight: bold; text-decoration: none; padding: 12px 20px; border-radius: 8px; text-transform: uppercase; margin: 10px 0px;">Confirmar Cuenta</a></td></tr></table></body></html>',
    };
    


    const result = await client.messages.create(process.env.EMAIL_HOST, data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})()};

export const emailForgotPassword = async (Userdata) => {

const{ email, name, lastName, token } = Userdata;

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

(async () => {
  try {
    const data = {
      from: 'CEDYM<notreply@cedym.co>',
      to: email,
      subject: 'Restablece tu Contraseña',
      html: '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>¡Recupera tu Contraseña!</title></head><body style="margin: 0; padding: 30px;"><table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #F8F8F8; padding: 30px;"><tr><td style="text-align: center;"><img src="https://res.cloudinary.com/dhqxmaqdk/image/upload/f_auto,q_auto/jmbwpbt5q3j5eomhcgh7" alt="Logo CEDYM" style="width: 80px; padding: 20px;"><h1 style="font-size: 32px; font-weight: bold; margin: 20px;">¡Recupera tu Contraseña!</h1></td></tr><tr><td style="padding: 20px;"><p style="text-align: left; font-size: 16px; margin: 0;">¡Hola <strong>' + name + ' ' + lastName + '!</strong></p><p style="text-align: center; font-size: 16px; margin: 20px 0;">Hemos detectado una solicitud para restablecer tu contraseña.</p><p style="text-align: center; padding: 10px; font-size: 12px; margin: 0;">Haz clic en el botón a continuación para restablecer tu contraseña:</p></td></tr><tr><td style="text-align: center;"><a href="' + process.env.FRONTEND_URL + '/ForgotPassword/' + token + '" style="display: inline-block; background-color: #00a451; color: #ffffff; font-size: 16px; font-weight: bold; text-decoration: none; padding: 12px 20px; border-radius: 8px; text-transform: uppercase; margin: 10px 0px;">Restablecer Contraseña</a></td></tr></table></body></html>',
    };
    
    const result = await client.messages.create(process.env.EMAIL_HOST, data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})()};

 export const emailCreatePassword = async (Userdata) => {

  const{ email, name, lastName, token } = Userdata;

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

(async () => {
  try {
    const data = {
      from: 'CEDYM <notreply@cedym.co>',
      to: email,
      subject: 'Crea una Contraseña',
      html: '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>¡Crea una Contraseña!</title></head><body style="margin: 0; padding: 30px;"><table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #F8F8F8; padding: 30px;"><tr><td style="text-align: center;"><img src="https://res.cloudinary.com/dhqxmaqdk/image/upload/f_auto,q_auto/jmbwpbt5q3j5eomhcgh7" alt="Logo CEDYM" style="width: 80px; padding: 20px;"><h1 style="font-size: 32px; font-weight: bold; margin: 20px;">¡Crea una Contraseña!</h1></td></tr><tr><td style="padding: 20px;"><p style="text-align: left; font-size: 16px; margin: 0;">¡Hola <strong>' + name + ' ' + lastName + '!</strong></p><p style="text-align: center; font-size: 16px; margin: 20px 0;">Tu cuenta ha sido registrada exitosamente.</p><p style="text-align: center; font-size: 16px; margin: 24px 0 10px 0;">Para comenzar a gestionar tus citas de forma rápida y sencilla, es importante que crees una contraseña segura para tu cuenta. Así podrás acceder a todas las funcionalidades y mantener tus datos protegidos.</p><p style="text-align: center; padding: 10px; font-size: 14px; margin: 0;">Haz clic en el botón a continuación para crear una contraseña:</p></td></tr><tr><td style="text-align: center;"><a href="' + process.env.FRONTEND_URL + '/CreatePassword/' + token + '" style="display: inline-block; background-color: #00a451; color: #ffffff; font-size: 16px; font-weight: bold; text-decoration: none; padding: 12px 20px; border-radius: 8px; text-transform: uppercase; margin: 10px 0px;">Crear Contraseña</a></td></tr></table></body></html>',
    };
    
    const result = await client.messages.create(process.env.EMAIL_HOST, data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})()};