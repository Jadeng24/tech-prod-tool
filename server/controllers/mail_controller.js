require('dotenv').config();
const nodemailer = require('nodemailer');
module.exports = {
    sendEmail(req, res) {

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: process.env.service,
            auth: {
                user: process.env.website_email,
                pass: process.env.website_pass
            }
        });
        console.log("req.body", req.body)
        // setup email data with unicode symbols
        // the subject says new customer (whatever they put there name as in my input filed that got sent through state)
        //html section you can literally send an html file as an email.
        let mailOptions = {
            from: `"Portfolio Message" <${process.env.website_email}>`, // sender address
            to: process.env.website_email, // list of receivers
            subject: req.body.subject, // Subject line
            // text: 'testing one two on two' // plain text body
            html: `
            <p>You have a message from ${req.body.name}<br/>${req.body.email}</p>
            <div style="width: 100%; min-height:30%; display: flex; justify-content:center; align-items:center; background: #eee;">
                <div style="width:90%; background: white;border-radius:5px; min-height:250px;margin:10px 0px">
                <h1 style="width:100%; padding:20px 0px;background:#235aa6;border-bottom:solid 1px #777;text-align:center;color:white;">${req.body.subject}</h1><br>
                <p style=" padding:10px 20px;">${req.body.message}</p>
                </div>
            </div>
            <hr/>
            <a href='http://www.backcountry.com/' style="text-decoration:none;color:#235aa6;"><h1 style="color:#235aa6;">Backcountry.com</h1></a>
            Sent from Tech Prod Tool | BC

            `
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
            }
            // console.log('Message %s send: %s', info);
            res.status(200).send(info);
        });

    }
}
