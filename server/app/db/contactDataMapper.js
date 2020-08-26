const client = require('./db');
const mailer = require('nodemailer');

module.exports = {
    
    sendMailContact: async(mail) => {

        const smtpTransport = mailer.createTransport({
            service: "Gmail",
            auth: {
                user: "test.projet.transport.de.fret@gmail.com",
                pass: "13_06_38_TDR"
            }
            });

        await smtpTransport.sendMail(mail, function(error,response){
            
            if(error){
                console.log("Erreur lors de l'envoi du mail");
                console.log(error);
            } else {
                console.log("Mail envoyé avec succès !")
                
            }
            smtpTransport.close();

        });
    }
}
