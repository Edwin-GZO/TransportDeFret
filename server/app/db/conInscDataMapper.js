const client = require('./db');

module.exports = {

    findUser: async (body) => {
        const user = await client.query('SELECT * FROM "user" WHERE "mail"= $1', [body.email]);
        return user.rows[0];
    },

    //  connectedUser: async (result,response) => {

           
    //     const connectedUser = {
    //             mail:result.email,
    //             name:result.name,
    //             message: "User connected"
    //         };
    //         console.log('connectedUser',connectedUser);
    //      return connectedUser;
    // },

    addBillAddress : async (result) => {
        
        const newBillAddress = await client.query(
            'INSERT INTO "bill_address" ("main", "complement","postal_code","city") VALUES ($1,$2,$3,$4) RETURNING "id"',
            [
            result.main ,
            result.complement ,
            result.postal_code ,
            result.city
            ] 
            
        );
        console.log(newBillAddress.rows[0]);  
        return newBillAddress.rows[0]
        // Renvoyer l'information au controlleur => newBillAddress.rows[0]
    },

    addUserPro : async (result,billAddressId) => {
        await client.query(
            'INSERT INTO "user" ("name", "password","mail","phone","type","siret","bill_address_id")VALUES ($1,$2,$3,$4,$5,$6,$7)',
            [
            result.name ,
            result.password ,
            result.mail ,
            result.phone ,
            result.type ,
            result.siret,
            billAddressId.id
            ] 
        )
    },

    addUserPart : async (result,billAddressId) => {
        await client.query(
            'INSERT INTO "user" ("name", "password","mail","phone","type","bill_address_id")VALUES ($1,$2,$3,$4,$5,$6,$7)',
            [
            result.name ,
            result.password ,
            result.mail ,
            result.phone ,
            result.type ,
            billAddressId.id
            ] 
        )
    }    

}