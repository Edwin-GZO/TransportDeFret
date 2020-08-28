const client = require('./db');

module.exports = {

    findUser: async (body) => {

        try {
        
            const user = await client.query('SELECT * FROM "user" WHERE "mail"= $1', [body.mailLogin]);
            return user.rows[0];

        } catch (error) {
            
            console.trace(moment().format('LLLL'), error) ;
            response.status(500).send(error) ;

        }
    },

    addBillAddress : async (bodyAddress) => {
        
        try {
            
            await client.query('INSERT INTO "bill_address" ("main", "complement","postal_code","city") VALUES ($1,$2,$3,$4) RETURNING "id"',
                [
                 `${bodyAddress.billNumber} ${bodyAddress.billTrack} ${bodyAddress.billStreet}`,
                 bodyAddress.billComplement ,
                 bodyAddress.postalCode ,
                 bodyAddress.city
                ] 
            );

        } catch (error) {
            
            console.trace(moment().format('LLLL'), error) ;
            response.status(500).send(error) ;

        }

        const newBillAddress = await client.query(
            'INSERT INTO "bill_address" ("main", "complement","postal_code","city") VALUES ($1,$2,$3,$4) RETURNING "id"',
            [
             `${bodyAddress.billNumber} ${bodyAddress.billTrack} ${bodyAddress.billStreet}`,
             bodyAddress.billComplement ,
             bodyAddress.postalCode ,
             bodyAddress.city
            ] 
            
        );

        return newBillAddress.rows[0]
        // Renvoyer l'information au controlleur => newBillAddress.rows[0]
    },

    addUserPro : async (result,billAddressId) => {

        try {
        
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

        } catch (error) {
        
            console.trace(moment().format('LLLL'), error) ;
            response.status(500).send(error) ;

        }
    },

    addUserPart : async (result,billAddressId) => {

        try {
        
            await client.query(

                'INSERT INTO "user" ("name", "password","mail","phone","type","bill_address_id")VALUES ($1,$2,$3,$4,$5,$6)',
                [
                `${result.firstNameSignUpPart}  ${result.nameSignUpPart}` ,
                result.passwordSignUpPart ,
                result.mailSignUpPart ,
                result.phoneSignUpPart ,
                "part" ,
                billAddressId.id
                ] 
            )

        } catch (error) {
        
            console.trace(moment().format('LLLL'), error) ;
            response.status(500).send(error) ;
        
        }    
    }
}