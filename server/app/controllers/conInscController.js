const conInscDataMapper = require('../db/conInscDataMapper');
const validator = require("email-validator");

module.exports = {

    connectionUser: async (request,response) => {
    
        const body = request.body;
        
        const validMail = validator.validate(body.mailLogin)

        if (!validMail) {
            
            response.status(400).json({isLogged:false , error:"Mail non valide"});
            console.log(" Erreur Connexion : Mail au Mauvais Format")
            return;
        }

        const user = await conInscDataMapper.findUser(body);

        if (!user) {
            
            response.status(404).json({isLogged:false , error:"Utilisateur non trouvé"});
            console.log(" Erreur Connexion : Mauvais Identifiant")
            return;
        }

        if (body.passwordLogin !== user.password) {

            response.status(401).json({isLogged:false , error:"Mauvais Mot de Passe"});
            console.log(" Erreur Connexion : Mauvais Mot de Passe")
            return;
        }
    
        request.session.login = body.mailLogin;

        if (!request.session.login) {
            response.status(401).json({isLogged: false , error:" Pas de session" });
            console.log(" Erreur : Aucune session ")
        };
        
        console.log(" Connexion : Identifiant & Mot de Passe Correct")

        response.status(200).json({isLogged: true , message:" Connexion Utilisateur Acceptée", name : user.name});

    },

    insertUserPro: async (request, response) => {

        const body = request.body;
        const bodyAddressPro = {
            "billNumber": request.body.billNumberSignUpPro,
            "billTrack": request.body.billTrackSignUpPro,
            "billStreet": request.body.billStreetSignUpPro,
            "billComplement": request.body.billComplementSignUpPro,
            "city": request.body.citySignUpPro,
            "postalCode": request.body.postalCodeSignUpPro
        }
        const bodyMailUser = {
            "mailLogin" : request.body.mailSignUpPro,
        }
        //console.log ('bodyaddress',bodyAddressPro);
            // Changement !
        const validMail = validator.validate(body.mailSignUpPro)

        if (!validMail) {
            
            response.status(400).json({isLogged:false , error:"Mail non valide"});
            console.log(" Erreur Connexion : Mail au Mauvais Format")
            return;
        }

        const checkUser = await conInscDataMapper.findUser(bodyMailUser);

        if (checkUser) {
            response.status(401).json({ error : " Utilisateur déjà existant veuillez vous connecter "});
        }

        const newBillAddress = await conInscDataMapper.addBillAddress(bodyAddressPro);
        await conInscDataMapper.addUserPro(body,newBillAddress)

        request.session.login = body.mailSignUpPro;

        if (!request.session.login) {
            response.status(401).json({isLogged: false , error:" Pas de session" });
            console.log(" Erreur : Aucune session ")
        };
        
        console.log("Création : Utilisateur Professionnel enregistré")
        response.status(201).json({isLogged: true , message: "Utilisateur enregistré" });

    },

    insertUserPart: async (request, response,next) => {

        const body = request.body;
        const bodyAddressPart = {
            "billNumber": request.body.billNumberSignUpPart,
            "billTrack": request.body.billTrackSignUpPart,
            "billStreet": request.body.billStreetSignUpPart,
            "billComplement": request.body.billComplementSignUpPart,
            "city": request.body.citySignUpPart,
            "postalCode": request.body.postalCodeSignUpPart
        }
        const bodyMailUser = {
            "mailLogin" : request.body.mailSignUpPart,
        }

        const validMail = validator.validate(body.mailSignUpPart)
  
        if (!validMail) {
            
            response.status(400).json({isLogged:false , error:"Mail non valide"});
            console.log(" Erreur Connexion : Mail au Mauvais Format")
            return;
        }

        const checkUser = await conInscDataMapper.findUser(bodyMailUser);

        if (checkUser) {
            response.status(401).json({ error : " Utilisateur déjà existant veuillez vous connecter "});
        }

        const newBillAddress = await conInscDataMapper.addBillAddress(bodyAddressPart);
        await conInscDataMapper.addUserPart(body,newBillAddress)

        request.session.login = body.mailSignUpPart;

        if (!request.session.login) {
            response.status(401).json({isLogged: false , error:" Pas de session" });
            console.log(" Erreur : Aucune session ")
        };
        
        console.log("Création : Utilisateur Particulier enregistré")     
        response.status(201).json({isLogged: true , message: "Utilisateur Particulier enregistré" });
       
    },

}