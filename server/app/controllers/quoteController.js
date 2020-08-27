const quoteDataMapper = require('../db/quoteDatamapper');

module.exports = {

    test: async (request, response, next) => {
        response.send('hello world');
        console.log(" Coucou petite perruche  ")
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
        console.log("quoteBody", quoteBody)

        await quoteDataMapper.createQuote(quoteBody);
        await quoteDataMapper.createSenderAddress(quoteBody);
        await quoteDataMapper.createReceiverAddress(quoteBody); 
        
        
        response.status(201).json(" Le formulaire de devis a bien été envoyé ");
    
    }
}