const quoteDataMapper = require('../db/quoteDatamapper') ;
const contactDataMapper = require('../db/contactDataMapper') ;
const moment = require('moment') ;

module.exports = {

    test: async (request, response, next) => {
        response.send('hello world');
        console.log(moment().format('LLLL')," Coucou petite perruche  ")
    },

    getAllQuotes: async (request, response, next) => {
        
        const userID = request.params.user_id;
        console.log('UserID',userID);

        const quotes = await quoteDataMapper.findAllQuotesForUserId(userID);

        console.log({quotes});

        response.status(200).json({quotes});

    },

    addQuote : async (request, response, next) => {
        
        const quoteBody = request.body;
       
        await quoteDataMapper.createQuote(quoteBody);
        await quoteDataMapper.createSenderAddress(quoteBody);
        await quoteDataMapper.createReceiverAddress(quoteBody);      
        
        dateNow = moment().format('LLLL') ;

        const mail = {
            
            // <table cellspacing="0" cellpadding="0" border="0">
            // <tbody><tr>
            // <td>
            // <a href="http://www.twitter.com/">
            //     <img data-src="images/tw.gif" alt="Twitter" style="display: block;" width="38" height="38" border="0">
            // </a>
            // </td>
            // <td style="font-size: 0; line-height: 0;" width="20"> </td>
            // <td>
            // <a href="http://www.twitter.com/">
            //     <img data-src="images/fb.gif" alt="Facebook" style="display: block;" width="38" height="38" border="0">
            // </a>
            // </td>
            // </tr>
            // </tbody></table>
            
            from: "cgauthier.dev@gmail.com", //dataForm.mail,

            to: "test.projet.transport.de.fret@gmail.com", //exploitation@transportstdr.fr"
            subject: `Demande de devis du ${datenow} ` ,

            html: 

            `<table cellspacing="0" cellpadding="0" border="0">
                <strong> Description du Colis </strong>
                    <ul>
                        <li> Nombre(s) de palette(s) : ${quoteBody.paletteNumberQuotePro} </li>
                        <li> Poids : ${quoteBody.weightQuotePro} </li>
                        <li> Longueur : ${quoteBody.weightQuotePro} </li>
                    </ul>
            
            
            <tbody><tr>
            <td>
            <strong>Adresse de Chargement</strong>
            <a href="http://www.twitter.com/">
                <img data-src="images/tw.gif" alt="Twitter" style="display: block;" width="38" height="38" border="0">
            </a>
            </td>
            <td style="font-size: 0; line-height: 0;" width="20"> </td>
            <td>
            <strong>Adresse de Livraison<strong>
            <a href="http://www.twitter.com/">
                <img data-src="images/fb.gif" alt="Facebook" style="display: block;" width="38" height="38" border="0">
            </a>
            </td>
            </tr>
            </tbody></table>`

            `<br /><strong>Desccription du colis :</strong> ${quoteBody.loadNumberQuotePro}<strong>Adresse de chargement :</strong> ${quoteBody.loadNumberQuotePro} ${quoteBody.loadTrackQuotePro} ${quoteBody.loadTrackQuotePro} <br /> <strong>Nom du contact :</strong> ${quoteBody.nameContact} <br /><br />  
            <strong>Contenu du message :</strong> ${quoteBody.commentContact}`
        };

        await contactDataMapper.sendMailContact(mail);
        
        console.log(moment().format('LLLL')," Creation : Devis Complet ");
        response.status(201).json("Le formulaire de devis a bien été transmis par Mail ");
    }
}