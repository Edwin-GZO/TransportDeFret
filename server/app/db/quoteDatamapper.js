const client = require('./db') ;
const moment = require('moment') ;

module.exports = {

    // Affiche toutes les quotes d'un USER ( ID )
    findAllQuotesForUserId : async (userID) => {

        try {
        
            const results = await client.query(
            'SELECT * FROM "quote" WHERE quote.id = ANY(ARRAY(SELECT DISTINCT quote_id FROM shipment WHERE shipment.user_id = $1)) AND "active" = \'t\'',
            [userID]);
  
            return results.rows;

        } catch (error) {
        
        console.trace(moment().format('LLLL'), error) ;
        response.status(500).send(error) ;
        }

    },

    // Créé un Devis grâce aux informations d'un formulaire
    createQuote : async (body) => {

        try {

            await client.query(
                'INSERT INTO "quote" ("nbr_pallets","distance","price","length","width","height","weight","comments") VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
                [
                    body.paletteNumberQuotePro ,
                    "100",
                    "200" ,
                    body.lenghtQuotePro ,
                    body.widthQuotePro ,
                    body.heightQuotePro ,
                    body.weightQuotePro ,
                    body.commentQuotePro 
                ]
            )
            console.log(moment().format('LLLL')," Devis enregistré OK ")   
            
        } catch (error) {
        
            console.trace(moment().format('LLLL'), error) ;
            response.status(500).send(error) ;
        
        }
    },

    createSenderAddress : async (body) => {
        
        try {

            await client.query(
                'INSERT INTO "sender_address" ("name", "phone", "main", "complement", "postal_code", "city" , "department_id") VALUES ($1,$2,$3,$4,$5,$6,$7)',
                [
                    `${body.loadFirstNameQuotePro} ${body.loadFirstNameQuotePro}` , 
                    body.loadPhoneQuotePro ,
                    `${body.loadNumberQuotePro} ${body.loadTrackQuotePro} ${body.loadStreetQuotePro}` ,
                    body.loadComplementQuotePro ,
                    body.loadPostalCodeQuotePro ,
                    body.loadCityQuotePro ,
                    "13" 
                ] 
            )
            console.log(moment().format('LLLL')," Adresse Envoi OK ")   
            
        } catch (error) {
        
        console.trace(moment().format('LLLL'), error) ;
        response.status(500).send(error) ;
        
        }
        
    },


    createReceiverAddress : async (body) => {


            await client.query(
                'INSERT INTO "sender_address" ("name", "phone", "main", "complement", "postal_code", "city" , "department_id") VALUES ($1,$2,$3,$4,$5,$6,$7)',
                [
                    `${body.nameDeliveryQuotePro} ${body.firstNameDeliveryQuotePro}` , 
                    body.loadPhoneQuotePro ,
                    `${body.deliveryNumberQuotePro} ${body.deliveryTrackQuotePro} ${body.deliveryStreetQuotePro}` ,
                    body.deliveryComplementQuotePro ,
                    body.deliveryCodeQuotePro ,
                    body.deliveryCityQuotePro ,
                    "13"
                ]
            )
            console.log(moment().format('LLLL')," Adresse Reception OK ")     

    },

    // Modifie les informations d'un Devis
    editQuote : async () => {

    },

    // Supprime (soft) une quote en identidiant l'ID
    softDeleteQuote : async () => {

    },

}