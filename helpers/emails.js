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
      html: '<section style="font-family: "Roboto"; sans-serif; min-height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column;"><div style="max-width: 600px; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); text-align: center; display: flex; flex-direction: column; align-items: center; border-top: 5px solid #16a34a;"><h2 style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">¡Hola ' + name + '"!</h2><p style="font-size: 16px; margin-left: 20px; margin-right: 20px;">Tu registro ya casi está listo, solo debes confirmarlo con el siguiente enlace:</p><p style="font-size: 16px; margin-bottom: 20px;"><a href="' + process.env.FRONTEND_URL + '/ForgotPassword/' + token + '" style="background-color: #16a34a; color: #ffffff; font-size: 16px; text-decoration: none; padding: 12px 30px; border-radius: 30px; margin-bottom: 20px; text-transform: uppercase;">Confirma tu cuenta aquí</a></p><p style="font-size: 14px;">Si tú no creaste esta cuenta, puedes ignorar este mensaje.</p></div> </section>',
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