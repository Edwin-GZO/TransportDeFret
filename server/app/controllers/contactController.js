const contactDataMapper = require('../db/contactDataMapper');


module.exports = {
    contactForm: async(request, response, next) => {
        
        const dataForm = request.body;

        
        
        const mail = {
            //from: "cgauthier.dev@gmail.com",//dataForm.mail,
            to: "cgauthier.dev@gmail.com",//"test.projet.transport.de.fret@gmail.com", //exploitation@transportstdr.fr"
            subject:dataForm.subject + " - Adresse de réponse : " + "cgauthier.dev@gmail.com",
            html:dataForm.comment
        };

        await contactDataMapper.sendMailContact(mail);
        response.status(201).json
        
        
    }
}