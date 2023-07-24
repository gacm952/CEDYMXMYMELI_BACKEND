import nodemailer from "nodemailer";
import sgMail from '@sendgrid/mail';
sgMail.setApiKey('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')


export const emailRegistro = async (Userdata) => {

    const { email, name, token } = Userdata;

    const msg = {
      to: email, // Change to your recipient
      from: 'contacto@cedym.com', // Change to your verified sender
      subject: 'aSending with SendGrid is Fun',
      text: 'anad easy to do anywhere, even with Node.js',
      html: '<strong>and eaasy to do anywhere, even with Node.js</strong>',
    }
    
    sgMail
    .send(msg)
    .then((response) => {
    console.log(response[0].statusCode)
    console.log(response[0].headers)
    })
    .catch((error) => {
    console.error(error)
    })

    
/*
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST, 
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
      });

      // Informacion del email

      const info = await transport.sendMail({
        from: '"CEDYM - Centro de Diabetes y Metabolismo" <cedym@gmail.com>',
        to: email,
        subject: "CEDYM - Confirma tu cuenta",
        text: "Confirma tu cuenta en CEDYM.",
        html: ` <section style="font-family: 'Roboto'; sans-serif; min-height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column;">
        <div style="max-width: 600px; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); text-align: center; display: flex; flex-direction: column; align-items: center; border-top: 5px solid #16a34a;">
           <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">¡Hola ${name}!</h2>
           <p style="font-size: 16px; margin-left: 20px; margin-right: 20px;">Tu registro ya casi está listo, solo debes confirmarlo con el siguiente enlace:</p>
           <p style="font-size: 16px; margin-bottom: 20px;"><a href="${process.env.FRONTEND_URL}/ConfirmAccount/${token}" style="background-color: #16a34a; color: #ffffff; font-size: 16px; text-decoration: none; padding: 12px 30px; border-radius: 30px; margin-bottom: 20px; text-transform: uppercase;">Confirma tu cuenta aquí</a></p>
           <p style="font-size: 14px;">Si tú no creaste esta cuenta, puedes ignorar este mensaje.</p>
                  </div>
              </section>   
    `
          }) */

};

export const emailForgotPassword = async (Userdata) => {

  const { email, name, token } = Userdata;

  const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, 
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    // Informacion del email

    const info = await transport.sendMail({
      from: '"CEDYM - Centro de Diabetes y Metabolismo" <cedym@gmail.com>',
      to: email,
      subject: "CEDYM - Reestablece tu contraseña",
      text: "Reestablece tu contraseña.",
      html: ` <section style="font-family: 'Roboto'; min-height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column;">
                <div style="max-width: 600px; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); text-align: center; display: flex; flex-direction: column; align-items: center; border-top: 5px solid #16a34a;">
                  <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">Hola ${name} has solicitado reestablecer tu contraseña</h2>
                  <p style="font-size: 16px; margin-left: 20px; margin-right: 20px;">Sigue el siguiente enlace para generar una nueva contraseña:</p>
                  <p style="font-size: 16px; margin-bottom: 20px;"><a href="${process.env.FRONTEND_URL}/ForgotPassword/${token}" style="background-color: #16a34a; color: #ffffff; font-size: 16px; text-decoration: none; padding: 12px 30px; border-radius: 30px; margin-bottom: 20px; text-transform: uppercase;">Reestablecer contraseña</a></p>
                  <p style="font-size: 14px;"> Si tu no solicitaste cambiar la contraseña, puedes ignorar el mensaje.</p>
                </div>
              </section> `
    })

};

// Emails para usuarios que fueron registrado desde el sistema 

export const emailCreatePassword = async (Userdata) => {

  const { email, name, token } = Userdata;

  const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, 
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    // Informacion del email

    const info = await transport.sendMail({
      from: '"CEDYM - Centro de Diabetes y Metabolismo" <cedym@gmail.com>',
      to: email,
      subject: "CEDYM - Crea tu contraseña",
      text: "Crea tu contraseña.",
      html: ` <section style="font-family: 'Roboto'; min-height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column;">
                  <div style="max-width: 600px; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); text-align: center; display: flex; flex-direction: column; align-items: center; border-top: 5px solid #16a34a;">
                    <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 20px;"> Hola ${name} se ha hecho un registro a su nombre</h2>
                    <p style="font-size: 16px; margin-left: 20px; margin-right: 20px;">Sigue el siguiente enlace para crear una contraseña:</p>
                    <p style="font-size: 16px; margin-bottom: 20px;"><a href="${process.env.FRONTEND_URL}/CreatePassword/${token}" style="background-color: #16a34a; color: #ffffff; font-size: 16px; text-decoration: none; padding: 12px 30px; border-radius: 30px; margin-bottom: 20px; text-transform: uppercase;">Crea tu contraseña</a></p>
                    <p style="font-size: 14px;">Si tu no pediste que te crearan un nuevo usuario, puedes ignorar el mensaje.</p>
                  </div>
              </section>  `
    })

};