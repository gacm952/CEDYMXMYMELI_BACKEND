import formData from 'form-data';
import Mailgun from 'mailgun.js';

export const emailRegistro = async (Userdata) => {

  const { email } = Userdata;

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

const messageData = {
  from: 'Notificaciones CEDYM <contacto@cedym.co>',
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

 export const emailForgotPassword = async (Userdata) => {

  const { email } = Userdata;

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.EMAIL_PASS});

const messageData = {
  from: 'Notificaciones CEDYM <contacto@cedym.co>',
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
  from: 'Notificaciones CEDYM <contacto@cedym.co>',
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