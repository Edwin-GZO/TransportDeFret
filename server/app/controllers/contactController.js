const contactDataMapper = require('../db/contactDataMapper');
const moment = require('moment') ;
moment.locale('fr'); 

module.exports = {

    contactForm: async(request, response) => {
        
        try {
        
            const dataForm = request.body;
        
            const mail = {
                
                message: "formulaire de contact" ,
                from: "tdr_site@gmail.com" , //dataForm.mail,
    
                to: "ed.granzotto@gmail.com" , //exploitation@transportstdr.fr"
                subject: dataForm.subjectContact,
    
                html: 
                `<table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td>
                            <strong>Mail du contact </strong>
                                <p>
                                    <ul>
                                        <li> ${dataForm.mailContact}</li>
                                    </ul> 
                                </p>                              
                            </td>
                            <td style="font-size: 0; line-height: 0;" width="100"> </td>
                            <td>
                                <strong>Nom du contact</strong>
                                <p>
                                    <ul>   
                                        <li> ${dataForm.nameContact}</li>
                                    </ul>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <br />
                <strong> Contenu du message </strong>
                <p>
                    ${dataForm.commentContact} 
                </p>`
    
            };
    
            await contactDataMapper.sendMailContact(mail);

            response.status(201).json(" Le mail de contact a bien été envoyé ");

        } catch (error) {
        
        console.trace(moment().format('LLLL'), error) ;
        response.status(500).send(error) ;
        
        }

    }
}