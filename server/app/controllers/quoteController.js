const quoteDataMapper = require('../db/quoteDatamapper') ;
const contactDataMapper = require('../db/contactDataMapper') ;
const moment = require('moment') ;
moment.locale('fr'); 

module.exports = {

    test: async (request, response, next) => {

        try {
            
            response.status(200).send('Coucou petite perruche !');
            console.log(moment().format('LLLL')," Test : Coucou petite perruche  ")

        } catch (error) {
            
            console.trace(moment().format('LLLL'), error) ;
            response.status(500).send(error) ;

        }
    },

    getAllQuotes: async (request, response, next) => {
        
        try {

            const userID = request.params.user_id;
            console.log('UserID',userID);

            const quotes = await quoteDataMapper.findAllQuotesForUserId(userID);

            console.log({quotes});

            response.status(200).json({quotes});

        } catch (error) {
            
            console.trace(moment().format('LLLL'), error) ;
            response.status(500).send(error) ;

        }
    },

    addQuote : async (request, response, next) => {
        
        try {

            const quoteBody = request.body;

            await quoteDataMapper.createQuote(quoteBody);
            await quoteDataMapper.createSenderAddress(quoteBody);
            await quoteDataMapper.createReceiverAddress(quoteBody);

            const mail = {
            
                message: "formulaire de devis" ,
                from: "tdr_site@gmail.com" , //dataForm.mail,
    
                to: "test.projet.transport.de.fret@gmail.com" , //exploitation@transportstdr.fr"
                subject: `Demande de devis ` ,
    
                html: 
    
                `<table cellspacing="0" cellpadding="0" border="0">
                    <strong> Description du Colis </strong>
                        <p>
                            <ul>
                                <li> Nombre(s) de palette(s) : ${quoteBody.paletteNumberQuotePro} </li>
                                <li> Poids : ${quoteBody.weightQuotePro} Kg</li>
                                <li> Longueur : ${quoteBody.lenghtQuotePro} cm</li>
                                <li> Largeur : ${quoteBody.widthQuotePro} cm</li>
                                <li> Hauteur : ${quoteBody.heightQuotePro} cm</li>
                            </ul>
                        </p>
                        <p>
                            <em> Commentaire :</em>
                            ${quoteBody.commentQuotePro}
                        </p>
                    <tbody>
                        <tr>
                            <td>
                                <strong>Adresse de Chargement</strong>
                                <p>
                                    <ul>   
                                        <li> <em>Contact : ${quoteBody.loadFirstNameQuotePro} ${quoteBody.loadNameQuotePro}</em></li>
                                        <li> <em>Téléphone : ${quoteBody.loadPhoneQuotePro}</em></li>
                                    </ul>
                                    <ul>
                                        <li> Adresse : ${quoteBody.loadNumberQuotePro} ${quoteBody.loadTrackQuotePro} ${quoteBody.loadStreetQuotePro}</li>
                                        <li> Complément : ${quoteBody.loadComplementQuotePro}</li>
                                        <li> Code postal : ${quoteBody.loadPostalCodeQuotePro}</li>
                                        <li> Ville : ${quoteBody.loadCityQuotePro}</li>
                                    </ul>
                                    
                                </p>
                            </td>
                            <td style="font-size: 0; line-height: 0;" width="20">
                            </td>
                            <td>
                                <strong>Adresse de Livraison</strong>
                                <p>
                                    <ul>   
                                        <li> <em>Contact : ${quoteBody.firstNameDeliveryQuotePro} ${quoteBody.nameDeliveryQuotePro}</em></li>
                                        <li> <em>Téléphone : ${quoteBody.deliveryphoneQuotePro}</em></li>
                                    </ul>    
                                    <ul>
                                        <li> Adresse : ${quoteBody.deliveryNumberQuotePro} ${quoteBody.deliveryTrackQuotePro} ${quoteBody.deliveryStreetQuotePro}</li>
                                        <li> Complément : ${quoteBody.deliveryComplementQuotePro}</li>
                                        <li> Code postal : ${quoteBody.deliveryCodeQuotePro}</li>
                                        <li> Ville : ${quoteBody.deliveryCityQuotePro}</li>
                                    </ul>
                                    
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>`  
            };
    
            await contactDataMapper.sendMailContact(mail);
            
            console.log(moment().format('LLLL')," Création : Devis Complet OK > Enregistré en Base de Données ") ;
            response.status(201).json("Le formulaire de devis a bien été transmis par Mail ") ;

        } catch (error) {

            console.trace(moment().format('LLLL'), error) ;
            response.status(500).send(error) ;
        
        }       
    }
}