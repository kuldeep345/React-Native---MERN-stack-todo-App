import { createTransport } from "nodemailer";


export const sendMail = async(email , subject , text) => {
    const transport = createTransport({
        service:process.env.MAIL_SERVICE,
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS
        }
    });

    await transport.sendMail({
        from:process.env.MAIL_USER,
        to:email,
        subject,
        text
    })
}