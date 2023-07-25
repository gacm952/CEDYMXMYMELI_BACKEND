import path from 'node:path';
import fs from 'node:fs/promises';
import formData from 'form-data';
import Mailgun from 'mailgun.js';


export const emailRegistro = async (Userdata) => {

const{ email, name, token } = Userdata

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

(async () => {
  try {
    const data = {
      from: 'CEDYM <notreply@cedym.co>',
      to: email,
      subject: 'Confirma tu Cuenta',
      html: '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>¡Confirma tu Cuenta!</title></head><body style="margin: 0; padding: 0; background-color: #f1f1f1;"><table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);"><tr><td style="text-align: center; padding: 20px 0;"><h1 style="font-size: 32px; font-weight: bold; margin: 0;">¡Confirma tu Cuenta!</h1></td></tr><tr><td style="text-align: left; padding: 20px;"><p style="font-size: 16px; margin: 0;">¡Hola ' + name + '!</p><p style="font-size: 16px; margin: 20px 0;">Gracias por registrarte en nuestro sistema. Para comenzar a gestionar tus citas de manera rápida y sencilla, necesitamos verificar tu dirección de correo electrónico.</p><p style="text-align: center; padding: 10px; font-size: 14px; margin: 0;">Haz clic en el botón a continuación para confirmar tu cuenta:</p></td></tr><tr><td style="text-align: center;"><a href="' + process.env.FRONTEND_URL + '/ConfirmAccount/' + token + '" style="display: inline-block; background-color: #16a34a; color: #ffffff; font-size: 16px; text-decoration: none; padding: 12px 25px; border-radius: 8px; text-transform: uppercase;">Confirmar Cuenta</a></td></tr></table></body></html>',
    };
    


    const result = await client.messages.create(process.env.EMAIL_HOST, data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})()};

 export const emailForgotPassword = async (Userdata) => {

  const{ email, name, token } = Userdata;

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

const messageData = {
  from: 'CEDYM<notreply@cedym.co>',
  to: email,
  subject: 'Reestablece tu Contraseña',
  text: '¡Hola, ' + name + '! Para reestablecer tu contraseña ingresa a el siguiente enlace ' + process.env.FRONTEND_URL + '/ForgotPassword/' + token + '',
};

client.messages.create(process.env.EMAIL_HOST, messageData)
 .then((res) => {
   console.log(res);
 })
 .catch((err) => {
   console.error(err);
 })};

 export const emailCreatePassword = async (Userdata) => {

  const{ email, name, token } = Userdata;

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

const messageData = {
  from: 'CEDYM<notreply@cedym.co>',
  to: email,
  subject: 'Crea una Contraseña',
  text: '¡Hola, ' + name + '! haz sido registrado en nuestro sistema, para crear una contraseña y autogestionar tus citas ingresa en el siguiente enlace ' + process.env.FRONTEND_URL + '/CreatePassword/' + token + '',
};

client.messages.create(process.env.EMAIL_HOST, messageData)
 .then((res) => {
   console.log(res);
 })
 .catch((err) => {
   console.error(err);
 })};