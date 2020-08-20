const quoteDataMapper = require('../db/quoteDatamapper');

module.exports = {

    getAllQuotes: async (request, response, next) => {
        
        const userID = request.params.user_id;
        console.log(userID);

        const quotes = await quoteDataMapper.findAllQuotesForUserId(userID);

        console.log({quotes});

        response.json({quotes});

    },

    addQuote : (request, response, next) => {
        
        const quoteBody = request.body;

        // await quoteDataMapper.createQuote(quoteBody);

        

    }


}