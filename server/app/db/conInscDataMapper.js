const client = require('./db');

module.exports = {

    findUser: async (body) => {
 
        const user = await client.query('SELECT * FROM "user" WHERE "mail"= $1', [body.mailLogin]); 
        return user.rows[0];

    },

    addBillAddress : async (bodyAddress) => {
        
        await client.query('INSERT INTO "bill_address" ("main", "complement","postal_code","city") VALUES ($1,$2,$3,$4) RETURNING "id"',
            [
                `${bodyAddress.billNumber} ${bodyAddress.billTrack} ${bodyAddress.billStreet}`,
                bodyAddress.billComplement ,
                bodyAddress.postalCode ,
                bodyAddress.city
            ]);

        const newBillAddress = await client.query('INSERT INTO "bill_address" ("main", "complement","postal_code","city") VALUES ($1,$2,$3,$4) RETURNING "id"',
            [
                `${bodyAddress.billNumber} ${bodyAddress.billTrack} ${bodyAddress.billStreet}`,
                bodyAddress.billComplement ,
                bodyAddress.postalCode ,
                bodyAddress.city
            ]
        );

        return newBillAddress.rows[0]
    },

    addUserPro : async (result,billAddressId) => {

        await client.query('INSERT INTO "user" ("name", "password","mail","phone","type","siret","bill_address_id")VALUES ($1,$2,$3,$4,$5,$6,$7)',
            [
            result.societe ,
            result.passwordSignUpPro , 
            result.mailSignUpPro ,
            result.phoneSignUpPro ,
            "pro" ,
            result.siret,
            billAddressId.id
            ] 
        )
    },

    addUserPart : async (result,billAddressId) => {

        await client.query('INSERT INTO "user" ("name", "password","mail","phone","type","bill_address_id")VALUES ($1,$2,$3,$4,$5,$6)',
            [
            `${result.firstNameSignUpPart}  ${result.nameSignUpPart}` ,
            result.passwordSignUpPart , 
            result.mailSignUpPart ,
            result.phoneSignUpPart ,
            "part" ,
            billAddressId.id
            ] 
        )
    }
}