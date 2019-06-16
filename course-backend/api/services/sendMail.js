const nodemailer = require('nodemailer');

module.exports.send = (mail, address, id) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nodemailer9500@gmail.com',
            pass: '96NjgBZ3pcyCHiU'
        }
    });

    var mailOptions = {
        from: 'nodemailer9500@gmail.com',
        to: mail,
        subject: 'Login',
        text: `For to complete registration you must click the link below:
                ${address+'/'+id}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};