const contactDataMapper = require('../db/contactDataMapper');


module.exports = {

    contactForm: async(request, response) => {
        
        const dataForm = request.body;
        
        const mail = {
            
            from: "cgauthier.dev@gmail.com", //dataForm.mail,

            to: "test.projet.transport.de.fret@gmail.com", //exploitation@transportstdr.fr"
            subject: dataForm.subject,

            html: `Mail du contact : ${dataForm.mailContact} . 
            Contenu du message : ${dataForm.comment}`
        };

        await contactDataMapper.sendMailContact(mail);
        
        response.status(201).json(" Le mail de contact a bien été envoyé ");

    }
}