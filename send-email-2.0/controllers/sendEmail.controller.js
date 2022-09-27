const nodemailer = require('nodemailer');
const { google } = require('googleapis');

exports.send = async (req, res) => {
    const CLIENT_ID = process.env.CLIENT_ID
    const CLIENT_SECRET = process.env.CLIENT_SECRET
    const REDIRECT_URI = process.env.REDIRECT_URI
    const REFRESH_TOKEN = process.env.REFRESH_TOKEN

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
    const accessToken = await oAuth2Client.getAccessToken();

    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use TLS
        service: `${process.env.SERVICE}`,
        auth: {
            type: 'OAuth2',
            user: `${process.env.EMAIL_SENDER}`,
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: accessToken
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: `"LAVM - Luis Vanegas 👨‍💻📡" <angelvamart@hotmail.com>`,
        to: 'angelvamart@hotmail.com',
        subject: 'Este es el asunto del correo',
        html: `
        <strong>Nombre:</strong> Luis Angel Vanegas Martinez <br/>
        <strong>E-mail:</strong> angelvamart@hotmail.com  <br/>
        <strong>Mensaje:</strong> este es el mensaje del correo como prueba de que fué enviado
        `
    };

    transporter.sendMail(mailOptions, function (err, result) {
        if (err)
            res.json(err)
        else
            res.json(result)
    });
};

