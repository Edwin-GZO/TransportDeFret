const client = require('./db');

module.exports = {

    // Affiche toutes les quotes d'un USER ( ID )
    findAllQuotesForUserId : async (userID) => {

        console.log(userID)
        const results = await client.query(
            'SELECT * FROM "quote" WHERE quote.id = ANY(ARRAY(SELECT DISTINCT quote_id FROM shipment WHERE shipment.user_id = $1)) AND "active" = \'t\'',
            [userID]);
  
        console.log('result',results.rows);
        return results.rows;
    },

    // Créé un Devis grâce aux informations d'un formulaire
    createQuote : async (quoteBody) => {
        const result = await client.query(
            'INSERT INTO "quote" ("ref_quote","nbr_pallets","distance","price","length","width","height","weight","comments" ',
            [
                quoteBody.ref_quote ,
                quoteBody.nbr_pallets ,
                quoteBody.distance ,
                quoteBody.price ,
                quoteBody.length ,
                quoteBody.width ,
                quoteBody.height ,
                quoteBody.weight ,
                quoteBody.comments
            ]
        )
    },

    // Modifie les informations d'un Devis
    editQuote : async () => {

    },

    // Supprime (soft) une quote en identidiant l'ID
    softDeleteQuote : async () => {

    },

}