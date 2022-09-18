import { placeholder } from 'placeholder/placeholder';
import { templateCreator } from 'templates/checkout';

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    const {
        firstName, lastName, address, mail, state, city, store, products,
    } = req.body;
    // console.log('=> ', req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SENDER_EMAIL || placeholder.SENDER_EMAIL,
            pass: process.env.SENDER_EMAIL_PASS || placeholder.SENDER_EMAIL_PASS,
        },
    });

    await new Promise((resolve, reject) => {
    // verify connection configuration
        transporter.verify((error, success) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log('Server is ready to take our messages');
                resolve(success);
            }
        });
    });

    const mailData = {
        from: {
            name: store,
            address: process.env.SENDER_EMAIL || placeholder.SENDER_EMAIL,
        },
        to: mail,
        subject: `${ firstName }, Thank You For Shopping With Us`,
        html: templateCreator(firstName, lastName, address, mail, state, city, store, products),
    };

    await new Promise((resolve, reject) => {
    // send mail
        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
                res.status(504).end(JSON.stringify({ message: 'Unknown Error' }));
            } else {
                console.log(info);
                resolve(info);
                res.status(200).end(JSON.stringify({ message: 'Successfully Checked Out' }));
            }
        });
    });
}
