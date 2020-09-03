const client = require('./db');

module.exports = {
    
    
    updateName: async (newName,user) => {
        await client.query(`
            UPDATE "user" SET "name" = $1 , "updated_at" = now() WHERE id = $2`,
            [
                newName.content,
                user.id
            ]
        );
    },

    updatePhone: async (newPhone,user) => {
        await client.query(`
            UPDATE "user" SET "phone" = $1 , "updated_at" = now() WHERE id = $2`,
            [
                newPhone.content,
                user.id
            ]
        );
    },


    updateSiret: async (newSiret,user) => {
        await client.query(`
            UPDATE "user" SET "siret" = $1 , "updated_at" = now() WHERE id = $2`,
            [
                newSiret.content,
                user.id
            ]
        );
    },


    userSoftDelete : async (user) => {
        await client.query(`
            UPDATE "user" SET "active" = 'f', "updated_at" = now() WHERE id = $1`,
            [
                user.id
            ]
        
        );
    }

}

    // 
// }updatePhone: async (data) => {
    //     await client.query(`
    //         UPDATE "user"
    //         SET "phone" = $1`,[data]);
    // },
    // updatePassword: async (data) => {
    //     await client.query(`
    //         UPDATE "user"
    //         SET "password" = $1`,[data]);
    // },       
    // updateMail: async (data) => {
    //     await client.query(`
    //         UPDATE "user"
    //         SET "mail" = $1`,[data]);
    // },
    // updateSiret: async (data) => {
    //     await client.query(`
    //         UPDATE "user"
    //         SET "siret" = $1`,[data]);
    // },
    // updated_at: async (data) => {
    //     await client.query(`
    //         UPDATE "user"
    //         SET "updated_at" = NOW()`);
    // },  