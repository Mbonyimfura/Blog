const nodemailer =require("nodemailer");
const dotenv =require("dotenv");
dotenv.config()

exports.mailer = async  (emailfrom,message) => {
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.SEND_EMAIL,
            pass:process.env.PASS_EMAIL,
        },
        tls: {
            rejectUnauthorized: false
          }
    });

    let sendinfo = {
        from: emailfrom,
        to: "mbonyimfuratresor@gmail.com", 
        subject:"This message is sent from contact form",
        html: `<b>${message}</b>`,
      };

      try {
        const sendMail =  transporter.sendMail(sendinfo,(error,info) =>{
            if(error){
                throw new Error(error)
            }
            return sendMail;
        })
      } catch (error) {
        return error;
      }
}