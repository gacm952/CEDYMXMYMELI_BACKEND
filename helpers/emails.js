import path from 'node:path';
import fs from 'node:fs/promises';
import formData from 'form-data';
import Mailgun from 'mailgun.js';


export const emailRegistro = async (Userdata) => {

  const{ email, name, token } = Userdata

const mailgun = require("mailgun-js");
const mg = mailgun({apiKey: process.env.EMAIL_PASS, domain: process.env.EMAIL_HOST});
const data = {
	from: 'CEDYM<notreply@cedym.co>',
	to: email,
	subject: "Confirma tu Cuenta",
	template: "Confirm Account",
	'h:X-Mailgun-Variables': {name: name, token: token}
};
mg.messages().send(data, function (error, body) {
	console.log(body);
})};

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