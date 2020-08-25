const contactDataMapper = require('../db/contactDataMapper');


module.exports = {

    contactForm: async(request, response) => {
        
        const dataForm = request.body;
        
        const mail = {
            
            from: "cgauthier.dev@gmail.com", //dataForm.mail,

            to: "test.projet.transport.de.fret@gmail.com", //exploitation@transportstdr.fr"
            subject: dataForm.subjectContact,

            html: `<strong>Mail du contact :</strong> ${dataForm.mailContact} <br /> <strong>Nom du contact :</strong> ${dataForm.nameContact} <br /><br />  
            <strong>Contenu du message :</strong> ${dataForm.commentContact}`
        };

        await contactDataMapper.sendMailContact(mail);
        
        response.status(201).json(" Le mail de contact a bien été envoyé ");

    }
}