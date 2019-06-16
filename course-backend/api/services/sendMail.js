const nodemailer = require('nodemailer');
var config = require('../../config.json');


module.exports.send = (mail, address, id) => {
    var transporter = nodemailer.createTransport({
        service: config.emailConfirm.service,
        auth: {
            user: config.emailConfirm.from,
            pass: config.emailConfirm.pass
        }
    });

    var mailOptions = {
        from: config.emailConfirm.from,
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