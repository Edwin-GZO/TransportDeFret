const client = require('./db');

module.exports = {

    findUser: async (body) => {
        const user = await client.query('SELECT * FROM "user" WHERE "mail"= $1', [body.mailLogin]);
        return user.rows[0];
    },

    addBillAddress : async (result) => {
        
        const newBillAddress = await client.query(
            'INSERT INTO "bill_address" ("main", "complement","postal_code","city") VALUES ($1,$2,$3,$4) RETURNING "id"',
            [
             `${result.bill_number} + '' +${result.bill_track} + '' + ${result.bill_street}`,//result.bill_address , //! A changer " a diviser par 3 "
            result.bill_complement ,
            result.postal_code ,
            result.city
            ] 
            
        );

        return newBillAddress.rows[0]
        // Renvoyer l'information au controlleur => newBillAddress.rows[0]
    },

    addUserPro : async (result,billAddressId) => {
        await client.query(
            'INSERT INTO "user" ("name", "password","mail","phone","type","siret","bill_address_id")VALUES ($1,$2,$3,$4,$5,$6,$7)',
            [
            result.societe ,
            result.passwordSignUp ,
            result.mailSignUp ,
            result.phone ,
            "pro" ,
            result.siret,
            billAddressId.id
            ] 
        )
    },

    addUserPart : async (result,billAddressId) => {
        await client.query(
            'INSERT INTO "user" ("name", "password","mail","phone","type","bill_address_id")VALUES ($1,$2,$3,$4,$5,$6)',
            [
            result.societe ,
            result.passwordSignUp ,
            result.mailSignUp ,
            result.phone ,
            "part" ,
            billAddressId.id
            ] 
        )
    }    

}