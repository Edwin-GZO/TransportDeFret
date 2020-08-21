const conInscDataMapper = require('../db/conInscDataMapper');

module.exports = {

    connectionUser: async (request,response) => {
    
        const body = request.body;
       
        const user = await conInscDataMapper.findUser(body);

        if (!user) {
            
            response.status(404).json({isLogged:false , error:"Utilisateur non trouvé"});
            console.log(" Erreur Connexion : Mauvais Identifiant")
            return;
        }

        if (body.password !== user.password) {

            response.status(401).json({isLogged:false , error:"Mauvais Mot de Passe"});
            console.log(" Erreur Connexion : Mauvais Mot de Passe")
            return;
        }
      
        request.session.login = body.mail;

        if (!request.session.login) {
            response.status(401).json({isLogged: false , error:" Pas de session" });
            console.log(" Erreur : Aucune session ")
        };
        
        console.log(" Connexion : Identifiant & Mot de Passe Correct")

        response.status(200).json({isLogged: true , message:" Connexion Utilisateur Acceptée", name : user.name});

    },


    insertUserPro: async (request, response) => {

        const body = request.body;
       
        console.log(body);

        const checkUser = await conInscDataMapper.findUser(body);

        if (checkUser) {
            response.status(401).json({ error : " Utilisateur déjà existant veuillez vous connecter "});
        }

        const newBillAddress = await conInscDataMapper.addBillAddress(body);
        await conInscDataMapper.addUserPro(body,newBillAddress)

        request.session.login = body.mail;

        if (!request.session.login) {
            response.status(401).json({isLogged: false , error:" Pas de session" });
            console.log(" Erreur : Aucune session ")
        };
        
        console.log("Création : Utilisateur Professionnel enregistré")
        response.status(201).json({isLogged: true , message: "Utilisateur enregistré" });

    },

    insertUserPart: async (request, response,next) => {

        const body = request.body;
       
        console.log(body);

        const checkUser = await conInscDataMapper.findUser(body);

        if (checkUser) {
            response.status(401).json({ error : " Utilisateur déjà existant veuillez vous connecter "});
        }

        const newBillAddress = await conInscDataMapper.addBillAddress(body);
        await conInscDataMapper.addUserPart(result,newBillAddress)

        request.session.login = body.mail;

        if (!request.session.login) {
            response.status(401).json({isLogged: false , error:" Pas de session" });
            console.log(" Erreur : Aucune session ")
        };
        
        console.log("Création : Utilisateur Particulier enregistré")     
        response.status(201).json({isLogged: true , message: "Utilisateur Particulier enregistré" });
       
    },

}

// Lucas_Moreau@hotmail.fr
// nHScj9_r_Halbb0 