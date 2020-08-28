const client = require('./db');
const mailer = require('nodemailer');
const moment = require('moment') ;

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
                console.log(moment().format('LLLL')," Erreur lors de l'envoi du mail");
                console.log("Descriptif erreur Echec envoi du mail", error );
            } else {
                console.log(moment().format('LLLL'),` Mail envoyé avec succès pour le ${mail.message} `)
                
            }
            smtpTransport.close();

        });
    }
}