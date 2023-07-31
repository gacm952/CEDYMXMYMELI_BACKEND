import formData from 'form-data';
import Mailgun from 'mailgun.js';


export const emailRegistro = async (Userdata) => {

const{ email, name, lastName, token } = Userdata

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

(async () => {
  try {
    const data = {
      from: 'NotificacionesCEDYM<notreply@cedym.co>',
      to: email,
      subject: 'Confirma tu Cuenta',
      html: '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>¡Confirma tu Cuenta!</title></head><body style="margin: 0;"><table style="padding: 40px 0px; width: 100%; max-width: 600px; margin: 0 auto; background-color: #F8F8F8;"><tr><td style="text-align: center;"><img src="https://res.cloudinary.com/dhqxmaqdk/image/upload/f_auto,q_auto/jmbwpbt5q3j5eomhcgh7" alt="Logo CEDYM" style="width: 80px; padding: 20px;"><h1 style="font-size: 32px; font-weight: bold; margin: 20px;">¡Confirma tu Cuenta!</h1></td></tr><tr><td style="padding: 20px;"><p style="text-align: left; font-size: 16px; margin: 0;">¡Hola, <strong>' + name + ' ' + lastName + '!</strong></p><p style="text-align: justify; font-size: 16px; margin: 20px 0;">Para disfrutar de la gestión ágil y sencilla de tus citas médicas, te pedimos que verifiques tu dirección de correo electrónico. Esto nos ayudará a garantizar la seguridad y la confiabilidad de tu cuenta.</p><p style="text-align: center; padding: 10px; font-size: 12px; margin: 0;">Haz clic en el botón a continuación para confirmar tu cuenta:</p></td></tr><tr><td style="text-align: center;"><a href="' + process.env.FRONTEND_URL + '/ConfirmAccount/' + token + '" style="display: inline-block; background-color: #00a451; color: #ffffff; font-size: 16px; font-weight: bold; text-decoration: none; padding: 12px 20px; border-radius: 8px; text-transform: uppercase; margin: 10px 0px;">Confirmar Cuenta</a></td></tr></table></body></html>',
    };
    


    const result = await client.messages.create(process.env.EMAIL_HOST, data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})()};

/* export const emailRegistroAdmission = async (Userdata) => {

  const{ email, name, lastName, token } = Userdata
  
  const mailgun = new Mailgun(formData);
  const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});
  
  (async () => {
    try {
      const data = {
        from: 'CEDYM <notreply@cedym.co>',
        to: email,
        subject: 'Confirma tu Cuenta',
        html: '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>¡Confirma tu Cuenta!</title></head><body style="margin: 0;"><table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #F8F8F8;"><tr><td style="text-align: center;"><img src="https://res.cloudinary.com/dhqxmaqdk/image/upload/f_auto,q_auto/jmbwpbt5q3j5eomhcgh7" alt="Logo CEDYM" style="width: 80px; padding: 20px;"><h1 style="font-size: 32px; font-weight: bold; margin: 20px;">¡Confirma tu Cuenta!</h1></td></tr><tr><td style="padding: 20px;"><p style="text-align: left; font-size: 16px; margin: 0;">¡Hola, <strong>' + name + ' ' + lastName + '!</strong></p><p style="text-align: justify; font-size: 16px; margin: 20px 0;">Para disfrutar de la gestión ágil y sencilla de tus citas médicas, te pedimos que verifiques tu dirección de correo electrónico. Esto nos ayudará a garantizar la seguridad y la confiabilidad de tu cuenta.</p><p style="text-align: center; padding: 10px; font-size: 12px; margin: 0;">Haz clic en el botón a continuación para confirmar tu cuenta:</p></td></tr><tr><td style="text-align: center;"><a href="' + process.env.FRONTEND_URL + '/ConfirmAccount/' + token + '" style="display: inline-block; background-color: #00a451; color: #ffffff; font-size: 16px; font-weight: bold; text-decoration: none; padding: 12px 20px; border-radius: 8px; text-transform: uppercase; margin: 10px 0px;">Confirmar Cuenta</a></td></tr></table></body></html>',
      };
      
  
  
      const result = await client.messages.create(process.env.EMAIL_HOST, data);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  })()}; */

export const emailForgotPassword = async (Userdata) => {

const{ email, name, lastName, token } = Userdata;

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

(async () => {
  try {
    const data = {
      from: 'NotificacionesCEDYM<notreply@cedym.co>',
      to: email,
      subject: 'Restablece tu Contraseña',
      html: '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>¡Recupera tu Contraseña!</title></head><body style="margin: 0;"><table style="padding: 40px 0px; width: 100%; max-width: 600px; margin: 0 auto; background-color: #F8F8F8;"><tr><td style="text-align: center;"><img src="https://res.cloudinary.com/dhqxmaqdk/image/upload/f_auto,q_auto/jmbwpbt5q3j5eomhcgh7" alt="Logo CEDYM" style="width: 80px; padding: 20px;"><h1 style="font-size: 32px; font-weight: bold; margin: 20px;">¡Recupera tu Contraseña!</h1></td></tr><tr><td style="padding: 20px;"><p style="text-align: left; font-size: 16px; margin: 0;">¡Hola, <strong>' + name + ' ' + lastName + '!</strong></p><p style="text-align: center; font-size: 16px; margin: 20px 0;">Hemos detectado una solicitud para restablecer tu contraseña.</p><p style="text-align: center; padding: 10px; font-size: 12px; margin: 0;">Haz clic en el botón a continuación para restablecer tu contraseña:</p></td></tr><tr><td style="text-align: center;"><a href="' + process.env.FRONTEND_URL + '/ForgotPassword/' + token + '" style="display: inline-block; background-color: #00a451; color: #ffffff; font-size: 16px; font-weight: bold; text-decoration: none; padding: 12px 20px; border-radius: 8px; text-transform: uppercase; margin: 10px 0px;">Restablecer Contraseña</a></td></tr></table></body></html>',
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
      from: 'NotificacionesCEDYM<notreply@cedym.co>',
      to: email,
      subject: 'Crea una Contraseña',
      html: '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>¡Crea una Contraseña!</title></head><body style="margin: 0;"><table style="padding: 40px 0px; width: 100%; max-width: 600px; margin: 0 auto; background-color: #F8F8F8;"><tr><td style="text-align: center;"><img src="https://res.cloudinary.com/dhqxmaqdk/image/upload/f_auto,q_auto/jmbwpbt5q3j5eomhcgh7" alt="Logo CEDYM" style="width: 80px; padding: 20px;"><h1 style="font-size: 32px; font-weight: bold; margin: 20px;">¡Crea una Contraseña!</h1></td></tr><tr><td style="padding: 20px;"><p style="text-align: left; font-size: 16px; margin: 0;">¡Hola, <strong>' + name + ' ' + lastName + '!</strong></p><p style="text-align: center; font-size: 16px; margin: 20px 0;">Tu cuenta ha sido registrada exitosamente.</p><p style="text-align: center; font-size: 16px; margin: 24px 0 10px 0;">Para comenzar a gestionar tus citas de forma rápida y sencilla, es importante que crees una contraseña segura para tu cuenta. Así podrás acceder a todas las funcionalidades y mantener tus datos protegidos.</p><p style="text-align: center; padding: 10px; font-size: 14px; margin: 0;">Haz clic en el botón a continuación para crear una contraseña:</p></td></tr><tr><td style="text-align: center;"><a href="' + process.env.FRONTEND_URL + '/CreatePassword/' + token + '" style="display: inline-block; background-color: #00a451; color: #ffffff; font-size: 16px; font-weight: bold; text-decoration: none; padding: 12px 20px; border-radius: 8px; text-transform: uppercase; margin: 10px 0px;">Crear Contraseña</a></td></tr></table></body></html>',
    };
    
    const result = await client.messages.create(process.env.EMAIL_HOST, data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})()};


export const emailCreateBooking = async (Userdata) => {

  const{ email, name, lastName, token, Motive, Date, Hour, Type } = Userdata;

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

(async () => {
  try {
    const data = {
      from: 'CitasCEDYM <bookings@cedym.co>',
      to: email,
      subject: 'Su Cita de ' + Motive + ' Está Agendada',
      html: '<body style="margin:0;"><table style="padding:40px 0px;width:100%;max-width:600px;margin:0 auto;background-color:#F8F8F8;"><tr><td style="text-align:center;"><img src="https://res.cloudinary.com/dhqxmaqdk/image/upload/f_auto,q_auto/jmbwpbt5q3j5eomhcgh7" alt="Logo CEDYM" style="width:100px;padding:20px;"></td></tr><tr><td style="padding:20px;"><p style="text-align:left;font-size:16px;margin:0;">¡Hola, <strong>' + name + ' ' + lastName + '</strong>¡</p><p style="text-align:justify;font-size:14px;margin:20px 0;">Es un placer saludarle, nos complace informarle que hemos recibido con éxito su solicitud de cita médica.</p><p style="text-align:left;font-size:16px;margin:20px 0;">Informacion de la Cita:</p><p style="text-align:left;font-size:16px;margin:0;">Fecha: <strong>' + Date + '</strong></p><p style="text-align:left;font-size:16px;margin:0;">Hora: <strong>' + Hour + '</strong></p><p style="text-align:left;font-size:16px;margin:0;">Tipo: <strong>' + Type + ' ' + subType + '</strong></p><p style="text-align:left;font-size:16px;margin:0;">Motivo: <strong>' + Motive + '</strong></p><p style="text-align:center;font-size:14px;margin:50px 0px 30px 0px;">Recomendaciones:</p><ul style="text-align:justify;font-size:12px;margin:0px 30px;"><li style="margin:0px 0px 14px 0px;">Llegar 15 minutos antes de la cita para facilitar el proceso de registro y evitar demoras.</li><li style="margin:0px 0px 14px 0px;">Traer consigo los documentos necesarios para la cita médica, incluyendo estudios médicos previos u otra documentación relevante.</li><li style="margin:0px 0px 14px 0px;">Usar tapabocas durante toda la visita para mantener un entorno seguro tanto para el paciente como para el personal médico.</li></ul></td></tr><tr><td style="text-align:center;"><a href="' + process.env.FRONTEND_URL + '/confirmBooking/' + token + '" style="display:inline-block;background-color:#00a451;color:#ffffff;font-size:16px;font-weight:bold;text-decoration:none;padding:12px 20px;border-radius:8px;text-transform:uppercase;margin:10px 0px;">Confirmar Cita</a></td></tr></table></body>',
    };
    
    const result = await client.messages.create(process.env.EMAIL_HOST, data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})()};


export const emailCreateBookingType = async (Userdata) => {

  const{ email, name, lastName, token, Motive, Date, Hour } = Userdata;

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

(async () => {
  try {
    const data = {
      from: 'CitasCEDYM <bookings@cedym.co>',
      to: email,
      subject: 'Su Cita de ' + Motive + ' Está Agendada',
      html: '<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>¡Su Cita Está Agendada!</title></head><body style="margin: 0;"><table style="padding: 40px 0px; width: 100%; max-width: 600px; margin: 0 auto; background-color: #F8F8F8;"><tr><td style="text-align: center;"><img src="https://res.cloudinary.com/dhqxmaqdk/image/upload/f_auto,q_auto/jmbwpbt5q3j5eomhcgh7" alt="Logo CEDYM" style="width: 100px; padding: 20px;"></td></tr><tr><td style="padding: 20px;"><p style="text-align: left; font-size: 16px; margin: 0;">¡Hola, <strong>' + name + ' ' + lastName + '!</strong></p><p style="text-align: justify; font-size: 14px; margin: 20px 0;">Es un placer saludarle, nos complace informarle que hemos recibido con éxito su solicitud de cita médica.</p><p style="text-align: left; font-size: 16px; margin: 20px 0;">Informacion de la Cita:</p><p style="text-align: left; font-size: 16px; margin: 0;">Tipo: <strong>' + Motive + '</strong></p><p style="text-align: left; font-size: 16px; margin: 0;">Fecha: <strong>' + Date + '</strong></p><p style="text-align: left; font-size: 16px; margin: 0;">Hora: <strong>' + Hour + '</strong></p><p style="text-align: justify; font-size: 14px; margin: 20px 0;">Recuerda que tu salud es nuestra prioridad, por lo que te recomendamos tomar en cuenta las siguientes indicaciones antes de tu visita:</p><ul style="font-size: 12px;"><li style="margin: 0px 0px 14px 0px;">Llegar 15 minutos antes: Te pedimos amablemente que llegues con 15 minutos de anticipación para realizar el proceso de registro y evitar demoras.</li><li style="margin: 0px 0px 14px 0px;">Llevar Documentos Requeridos: Es importante que traigas contigo los documentos necesarios para tu cita médica. Si tienes algún estudio médico previo o cualquier otra documentación relevante, por favor asegúrate de llevarla.</li><li style="margin: 0px 0px 14px 0px;">Llevar tapabocas: Te pedimos gentilmente que lleves puesto tu tapabocas durante toda la visita para mantener un entorno seguro tanto para ti como para nuestro personal.</li></ul></td></tr><tr><td style="text-align: center;"><a href="' + process.env.FRONTEND_URL + '/confirmBooking/' + token + '" style="display: inline-block; background-color: #00a451; color: #ffffff; font-size: 16px; font-weight: bold; text-decoration: none; padding: 12px 20px; border-radius: 8px; text-transform: uppercase; margin: 10px 0px;">Confirmar Cita</a></td></tr></table></body></html>',
    };
    
    const result = await client.messages.create(process.env.EMAIL_HOST, data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})()};

/*
export const emailCreateBookingAdmission = async (Userdata) => {

  const{ email, name, lastName, token } = Userdata;

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

(async () => {
  try {
    const data = {
      from: 'CEDYM <notreply@cedym.co>',
      to: email,
      subject: 'Crea una Contraseña',
      html: '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>¡Crea una Contraseña!</title></head><body style="margin: 0; padding: 0; background-color: #f1f1f1;"><table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);"><tr><td style="text-align: center; padding: 20px 0;"><h1 style="font-size: 32px; font-weight: bold; margin: 0;">¡Crea una Contraseña!</h1></td></tr><tr><td style="padding: 20px;"><p style="text-align: left; font-size: 16px; margin: 0;">¡Hola ' + name + ' ' + lastName + '!</p><p style="text-align: center; font-size: 16px; margin: 20px 0;">Hemos registrado exitosamente tu cuenta.</p><p style="text-align: center; font-size: 16px; margin: 24px 0 10px 0;">Para comenzar a autogestionar tus citas médicas de manera rápida y sencilla, necesitamos que crees una contraseña segura para tu cuenta.</p><p style="text-align: center; padding: 10px; font-size: 14px; margin: 0;">Haz clic en el botón a continuación para crear una contraseña:</p></td></tr><tr><td style="text-align: center;"><a href="' + process.env.FRONTEND_URL + '/CreatePassword/' + token + '" style="display: inline-block; background-color: #16a34a; color: #ffffff; font-size: 16px; text-decoration: none; padding: 12px 25px; border-radius: 8px;">Crear Contraseña</a></td></tr></table></body></html>',
    };
    
    const result = await client.messages.create(process.env.EMAIL_HOST, data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})()};

export const emailReBooking = async (Userdata) => {

  const{ email, name, lastName, token } = Userdata;

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

(async () => {
  try {
    const data = {
      from: 'CEDYM <notreply@cedym.co>',
      to: email,
      subject: 'Crea una Contraseña',
      html: '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>¡Crea una Contraseña!</title></head><body style="margin: 0; padding: 0; background-color: #f1f1f1;"><table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);"><tr><td style="text-align: center; padding: 20px 0;"><h1 style="font-size: 32px; font-weight: bold; margin: 0;">¡Crea una Contraseña!</h1></td></tr><tr><td style="padding: 20px;"><p style="text-align: left; font-size: 16px; margin: 0;">¡Hola ' + name + ' ' + lastName + '!</p><p style="text-align: center; font-size: 16px; margin: 20px 0;">Hemos registrado exitosamente tu cuenta.</p><p style="text-align: center; font-size: 16px; margin: 24px 0 10px 0;">Para comenzar a autogestionar tus citas médicas de manera rápida y sencilla, necesitamos que crees una contraseña segura para tu cuenta.</p><p style="text-align: center; padding: 10px; font-size: 14px; margin: 0;">Haz clic en el botón a continuación para crear una contraseña:</p></td></tr><tr><td style="text-align: center;"><a href="' + process.env.FRONTEND_URL + '/CreatePassword/' + token + '" style="display: inline-block; background-color: #16a34a; color: #ffffff; font-size: 16px; text-decoration: none; padding: 12px 25px; border-radius: 8px;">Crear Contraseña</a></td></tr></table></body></html>',
    };
    
    const result = await client.messages.create(process.env.EMAIL_HOST, data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})()};

export const emailReBookingAdmission = async (Userdata) => {

  const{ email, name, lastName, token } = Userdata;

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

(async () => {
  try {
    const data = {
      from: 'CEDYM <notreply@cedym.co>',
      to: email,
      subject: 'Crea una Contraseña',
      html: '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>¡Crea una Contraseña!</title></head><body style="margin: 0; padding: 0; background-color: #f1f1f1;"><table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);"><tr><td style="text-align: center; padding: 20px 0;"><h1 style="font-size: 32px; font-weight: bold; margin: 0;">¡Crea una Contraseña!</h1></td></tr><tr><td style="padding: 20px;"><p style="text-align: left; font-size: 16px; margin: 0;">¡Hola ' + name + ' ' + lastName + '!</p><p style="text-align: center; font-size: 16px; margin: 20px 0;">Hemos registrado exitosamente tu cuenta.</p><p style="text-align: center; font-size: 16px; margin: 24px 0 10px 0;">Para comenzar a autogestionar tus citas médicas de manera rápida y sencilla, necesitamos que crees una contraseña segura para tu cuenta.</p><p style="text-align: center; padding: 10px; font-size: 14px; margin: 0;">Haz clic en el botón a continuación para crear una contraseña:</p></td></tr><tr><td style="text-align: center;"><a href="' + process.env.FRONTEND_URL + '/CreatePassword/' + token + '" style="display: inline-block; background-color: #16a34a; color: #ffffff; font-size: 16px; text-decoration: none; padding: 12px 25px; border-radius: 8px;">Crear Contraseña</a></td></tr></table></body></html>',
    };
    
    const result = await client.messages.create(process.env.EMAIL_HOST, data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})()};

export const emailCancelBooking = async (Userdata) => {

  const{ email, name, lastName, token } = Userdata;

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

(async () => {
  try {
    const data = {
      from: 'CEDYM <notreply@cedym.co>',
      to: email,
      subject: 'Crea una Contraseña',
      html: '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>¡Crea una Contraseña!</title></head><body style="margin: 0; padding: 0; background-color: #f1f1f1;"><table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);"><tr><td style="text-align: center; padding: 20px 0;"><h1 style="font-size: 32px; font-weight: bold; margin: 0;">¡Crea una Contraseña!</h1></td></tr><tr><td style="padding: 20px;"><p style="text-align: left; font-size: 16px; margin: 0;">¡Hola ' + name + ' ' + lastName + '!</p><p style="text-align: center; font-size: 16px; margin: 20px 0;">Hemos registrado exitosamente tu cuenta.</p><p style="text-align: center; font-size: 16px; margin: 24px 0 10px 0;">Para comenzar a autogestionar tus citas médicas de manera rápida y sencilla, necesitamos que crees una contraseña segura para tu cuenta.</p><p style="text-align: center; padding: 10px; font-size: 14px; margin: 0;">Haz clic en el botón a continuación para crear una contraseña:</p></td></tr><tr><td style="text-align: center;"><a href="' + process.env.FRONTEND_URL + '/CreatePassword/' + token + '" style="display: inline-block; background-color: #16a34a; color: #ffffff; font-size: 16px; text-decoration: none; padding: 12px 25px; border-radius: 8px;">Crear Contraseña</a></td></tr></table></body></html>',
    };
    
    const result = await client.messages.create(process.env.EMAIL_HOST, data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})()};

export const emailCancelBookingAdmission = async (Userdata) => {

  const{ email, name, lastName, token } = Userdata;

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

(async () => {
  try {
    const data = {
      from: 'CEDYM <notreply@cedym.co>',
      to: email,
      subject: 'Crea una Contraseña',
      html: '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>¡Crea una Contraseña!</title></head><body style="margin: 0; padding: 0; background-color: #f1f1f1;"><table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);"><tr><td style="text-align: center; padding: 20px 0;"><h1 style="font-size: 32px; font-weight: bold; margin: 0;">¡Crea una Contraseña!</h1></td></tr><tr><td style="padding: 20px;"><p style="text-align: left; font-size: 16px; margin: 0;">¡Hola ' + name + ' ' + lastName + '!</p><p style="text-align: center; font-size: 16px; margin: 20px 0;">Hemos registrado exitosamente tu cuenta.</p><p style="text-align: center; font-size: 16px; margin: 24px 0 10px 0;">Para comenzar a autogestionar tus citas médicas de manera rápida y sencilla, necesitamos que crees una contraseña segura para tu cuenta.</p><p style="text-align: center; padding: 10px; font-size: 14px; margin: 0;">Haz clic en el botón a continuación para crear una contraseña:</p></td></tr><tr><td style="text-align: center;"><a href="' + process.env.FRONTEND_URL + '/CreatePassword/' + token + '" style="display: inline-block; background-color: #16a34a; color: #ffffff; font-size: 16px; text-decoration: none; padding: 12px 25px; border-radius: 8px;">Crear Contraseña</a></td></tr></table></body></html>',
    };
    
    const result = await client.messages.create(process.env.EMAIL_HOST, data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})()};

*/