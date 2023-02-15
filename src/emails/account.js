const sgMail=require('@sendgrid/mail')
require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail=(email,username)=>{
    sgMail.send({
        to:email,
       from:"mbonyimfuratresor@gmail.com",
       subject:'Thank you for joining in!',
       text:`Welcome to the app, ${username}. Let me know how you get along with the app `
    })
}
module.exports={
    sendWelcomeEmail
}