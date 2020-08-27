const client = require('./db');

module.exports = {
        /**
            @async
            @function findUser
            @description  find a user in the database
            @param {object} - the request.body
            @returns {object} user.rows[0]
            @example conInscDataMapper.findUser(body)
        */
    findUser: async (body) => {
        const user = await client.query('SELECT * FROM "user" WHERE "mail"= $1', [body.mailLogin]);
        return user.rows[0];
    },
        /**
            @async
            @function addBillAddress
            @description  add a new bill address in the database
            @param {object} - bodyAddress (pro or part)
            @returns {object} newBillAddress
            @example conInscDataMapper.addBillAddress(bodyAddressPro)
        */
    addBillAddress : async (bodyAddress) => {
        
        const newBillAddress = await client.query(
            'INSERT INTO "bill_address" ("main", "complement","postal_code","city") VALUES ($1,$2,$3,$4) RETURNING "id"',
            [
             `${bodyAddress.billNumber} ${bodyAddress.billTrack} ${bodyAddress.billStreet}`,//result.bill_address , //! A changer " a diviser par 3 "
             bodyAddress.billComplement ,
             bodyAddress.postalCode ,
             bodyAddress.city
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
            result.passwordSignUpPro ,
            result.mailSignUpPro ,
            result.phonePro ,
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
            `${result.firstNameSignUpPart}  ${result.nameSignUpPart}` ,
            result.passwordSignUpPart ,
            result.mailSignUpPart ,
            result.phone ,
            "part" ,
            billAddressId.id
            ] 
        )
    }    

}