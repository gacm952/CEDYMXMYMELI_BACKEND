import path from 'node:path';
import fs from 'node:fs/promises';
import formData from 'form-data';
import Mailgun from 'mailgun.js';


export const emailRegistro = async (Userdata) => {

  const{ email, name, token } = Userdata

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

const messageData = {
  from: 'Notificaciones CEDYM <notreply@cedym.co>',
  to: email,
  subject: 'Confirma tu Cuenta',
  text: '¡Hola, ' + name + '! ingresa en este enlace para confirmar tu cuenta ' + process.env.FRONTEND_URL + '/ConfirmAccount/' + token + '',
};

client.messages.create(process.env.EMAIL_HOST, messageData)
 .then((res) => {
   console.log(res);
 })
 .catch((err) => {
   console.error(err);
 })};

 export const emailForgotPassword = async (Userdata) => {

  const{ email, name, token } = Userdata;

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

const messageData = {
  from: 'CEDYM<notreply@cedym.co>',
  to: email,
  subject: 'Reestablece tu Contraseña',
  text: '¡Hola, ' + name + '! Para reestablecer tu contraseña ingresa a el siguiente enlace ' + process.env.FRONTEND_URL + '/ConfirmAccount/' + token + '',
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
  text: '¡Hola, ' + name + '! haz sido registrado en nuestro sistema, para crear una contraseña y autogestionar tus citas ingresa en el siguiente enlace ' + process.env.FRONTEND_URL + '/ConfirmAccount/' + token + '',
};

client.messages.create(process.env.EMAIL_HOST, messageData)
 .then((res) => {
   console.log(res);
 })
 .catch((err) => {
   console.error(err);
 })};