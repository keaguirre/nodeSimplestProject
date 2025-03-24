// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

// const sgMail = require('@sendgrid/mail')
import { sgMail } from '@sendgrid/mail'
import { mail } from '../config.js';

const { SENDGRID_API_KEY, FROM_MAIL } = mail;

sgMail.setApiKey(SENDGRID_API_KEY);

export const sendMail = async (mail) => {
  const { to, subject, text, html } = mail;
  const msg = {
    to: to,
    from: FROM_MAIL,
    subject: subject,
    text: text,
    html: html,
  }
  try{
      sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      }).catch((error) => {
        console.error(error)
      })
  }catch(error){
      console.error(error);
  }
}