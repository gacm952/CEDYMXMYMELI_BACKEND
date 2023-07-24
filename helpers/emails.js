import path from 'node:path';
import fs from 'node:fs/promises';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

export const emailRegistro = async (Userdata) => {

  const{ email, name, token } = Userdata;

  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: 'api', key: process.env.EMAIL_PASS });
  
  (async () => {
    const filepath = path.resolve('sample.jpg');
    try {
      const file = {
        filename: 'sample.jpg',
        data: await fs.readFile(filepath)
      };
      const attachment = [file];
  
      const data = {
        from: 'CEDYM<notreply@cedym.co>',
        to: email,
        cc: '',
        bcc: '',
        subject: 'Confirma tu Cuenta',
        text: '¡Hola, ' + name + '! ingresa en este enlace para confirmar tu cuenta ' + process.env.FRONTEND_URL+ '/ConfirmAccount/' + token + '',
        html: '<html></html>',
        attachment
      };
  
      const result = await client.messages.create(process.env.EMAIL_HOST, data);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  })()};

 export const emailForgotPassword = async (Userdata) => {

  const { email } = Userdata;

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

const messageData = {
  from: 'Notificaciones CEDYM <notreply@cedym.co>',
  to: email,
  subject: 'Confirma tu Cuenta',
  text: 'TESTEO'
};

client.messages.create(process.env.EMAIL_HOST, messageData)
 .then((res) => {
   console.log(res);
 })
 .catch((err) => {
   console.error(err);
 })};

 export const emailCreatePassword = async (Userdata) => {

  const { email } = Userdata;

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

const messageData = {
  from: 'Notificaciones CEDYM <notreply@cedym.co>',
  to: email,
  subject: 'Confirma tu Cuenta',
  text: 'TESTEO'
};

client.messages.create(process.env.EMAIL_HOST, messageData)
 .then((res) => {
   console.log(res);
 })
 .catch((err) => {
   console.error(err);
 })};