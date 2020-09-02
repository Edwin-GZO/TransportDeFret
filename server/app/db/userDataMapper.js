const client = require('./db');

module.exports = {
    
    
    updatePhone: async (data) => {
        await client.query(`
            UPDATE "user"
            SET "phone" = $1`,[data]);
    },
    updatePassword: async (data) => {
        await client.query(`
            UPDATE "user"
            SET "password" = $1`,[data]);
    },       
    updateMail: async (data) => {
        await client.query(`
            UPDATE "user"
            SET "mail" = $1`,[data]);
    },
    updateSiret: async (data) => {
        await client.query(`
            UPDATE "user"
            SET "siret" = $1`,[data]);
    },
    updated_at: async (data) => {
        await client.query(`
            UPDATE "user"
            SET "updated_at" = NOW()`);
    },  
}