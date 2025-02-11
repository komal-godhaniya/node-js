const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport
    ({
        service: "gmail",
        auth: {
            user: "komalgodhaniya1@gmail.com",
            pass: "fphwfrmeixkdmbzo",
        }
    })

module.exports.sendotp = (to, otp) => {
    let mailoption = {
        from: "komalgodhaniya1@gmail.com",
        to: to,
        subject: " your password reset otp is here",
        text: `your otp is ${otp}`,
    }
    transport.sendMail(mailoption, (err) => {
        err ? console.log(err) : console.log("otp sended successfully")
    })
}