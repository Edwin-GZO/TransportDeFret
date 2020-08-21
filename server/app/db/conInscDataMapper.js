const client = require('./db');

module.exports = {

    findUser: async (body) => {
        const user = await client.query('SELECT * FROM "user" WHERE "mail"= $1', [body.mail]);
        return user.rows[0];
    },

    addBillAddress : async (result) => {
        
        const newBillAddress = await client.query(
            'INSERT INTO "bill_address" ("main", "complement","postal_code","city") VALUES ($1,$2,$3,$4) RETURNING "id"',
            [
            result.bill_address ,
            result.complement ,
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
            result.password ,
            result.mail ,
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
            result.password ,
            result.mail ,
            result.phone ,
            "part" ,
            billAddressId.id
            ] 
        )
    }    

}