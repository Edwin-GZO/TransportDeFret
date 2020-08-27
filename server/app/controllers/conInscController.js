/**
    @file controller for login and signup (Pro and Part) forms
    @author Edwin GRANZOTTO - Cédric GAUTHIER
 */ 

/**
    @const conInscDataMapper
    @description '../db/conInscDataMapper' the dataMapper 
    @type {require}
*/
const conInscDataMapper = require('../db/conInscDataMapper');

/**
    @const validator
    @description "email-validator" to check if a string is an emailaddress 
    @type {require}
*/

const validator = require("email-validator");

module.exports = {

    
    /**
        @async
        @function connectionUser
        @description to connect a user
        @param {} request - the request
        @param {} response - the response
        @returns {number} response.status 400 if validMail = false /
        response.status 404 if mail is not in the database /
        response.status 401 if password is not in the database /
        response.status 401 if session is not open /
        response.status 200 if it is OK
        @returns {object} {isLogged:false , error:"Mail non valide"} if response.status 400 if validMail = false /
        {isLogged:false , error:"Utilisateur non trouvé"} if mail is not in the database /
        {isLogged:false , error:"Mauvais Mot de Passe"} if password is not in the database /
        {isLogged: false , error:"Pas de session" } if session is not open /
        {isLogged: true , message:"Connexion Utilisateur Acceptée", name : user.name} if it is OK
        @returns {void} " Erreur Connexion : Mail au Mauvais Format" if response.status 400 if validMail = false /
        " Erreur Connexion : Mauvais Identifiant" if mail is not in the database /
        " Erreur Connexion : Mauvais Mot de Passe" if password is not in the database /
        " Erreur : Aucune session " if session is not open /
        " Connexion : Identifiant & Mot de Passe Correct" if it is OK
    */
    
    connectionUser: async (request,response) => {
        /**
            @const body
            @description request.body
            @type {object}
        */
        
        const body = request.body;
        
        
        
        /**
            @function validate
            @description  to check if a string is an emailaddress
            @param {string} - the string to check
            @returns {boolean} validMail
            @example validator.validate(body.mailLogin)
        */

        /**
            @const validMail
            @description the result of validator.validate(body.mailLogin)
            @type {boolean}
        */

        const validMail = validator.validate(body.mailLogin)

        if (!validMail) {
            
            response.status(400).json({isLogged:false , error:"Mail non valide"});
            console.log(" Erreur Connexion : Mail au Mauvais Format")
            return;
        }
        
        

        /**
            @const user
            @description the result of await conInscDataMapper.findUser(body)
            @type {object}

        */
        
        const user = await conInscDataMapper.findUser(body);

        if (!user) {
            
            response.status(404).json({isLogged:false , error:"Utilisateur non trouvé"});
            console.log(" Erreur Connexion : Mauvais Identifiant")
            return;
        }

        /**
            @const body.passwordLogin
            @description password filled in Login form
            @type {string}
        */
        /**
            @const user.password
            @description password of a user in the database 
            @type {string}
        */



        if (body.passwordLogin !== user.password) {

            response.status(401).json({isLogged:false , error:"Mauvais Mot de Passe"});
            console.log(" Erreur Connexion : Mauvais Mot de Passe")
            return;
        }
    
        /**
            @const request.session.login
            @description login of session = body.mailLogin
            @type {string}
        */
        /**
            @const body.mailLogin
            @description mail filled in Login form 
            @type {string}
        */

        request.session.login = body.mailLogin;

        if (!request.session.login) {
            response.status(401).json({isLogged: false , error:"Pas de session" });
            console.log(" Erreur : Aucune session ")
        };
        
        console.log(" Connexion : Identifiant & Mot de Passe Correct")

        response.status(200).json({isLogged: true , message:"Connexion Utilisateur Acceptée", name : user.name});

    },

    /**
        @async 
        @function insertUserPro
        @description to add a user pro in the database
        @param {} request - the request
        @param {} response - the response
        @returns {number} response.status 400 if validMail=false /
        response.status 401 if mail is already in the database /
        response.status 401 if session is not open (request.session.login=false)/
        response.status 201 if the insert in database is ok
        @returns {object} {"is logged": false , error:"Mail non valide"} if response.status = 400 / 
        { error : " Utilisateur déjà existant veuillez vous connecter "} if response.status = 401 /
        {isLogged: false , error:" Pas de session" } if session is not open (request.session.login=false)/
        {isLogged: true , message: "Utilisateur enregistré" } if the insert in database is ok /
        @return {void} " Erreur Connexion : Mail au Mauvais Format" if response.status = 400 /
        " Erreur : Aucune session " if session is not open (request.session.login=false)/
        "Création : Utilisateur Professionnel enregistré" if the insert in database is ok /
        

    */

    insertUserPro: async (request, response) => {
         /**
            @const body
            @description request.body
            @type {object}
        */
        const body = request.body;
        
        /**
        @const bodyAddressPro
        @description billaddress informations for a pro user / 
        .billNumber : Street number filled in the SignUpPro form = request.body.billNumberSignUpPro / 
        .billTrack : Street type filled in the SignUpPro form = request.body.billTrackSignUpPro / 
        .billStreet : Street name filled in the SignUpPro form = request.body.billStreetSignUpPro /
        .billComplement : Complement of address filled in the SignUpPro form = request.body.billComplementSignUpPro /
        .city : city filled in the SignUpPro form = request.body.citySignUpPro /
        .postalCode : Post code filled in the SignUpPro form = request.body.postalCodeSignUpPro /
        @type {object}
        */
        
        const bodyAddressPro = {
            "billNumber": request.body.billNumberSignUpPro,
            "billTrack": request.body.billTrackSignUpPro,
            "billStreet": request.body.billStreetSignUpPro,
            "billComplement": request.body.billComplementSignUpPro,
            "city": request.body.citySignUpPro,
            "postalCode": request.body.postalCodeSignUpPro
        }
        
        /**
        @const bodyMailUser
        @description .mailLogin : email address filled int the SignUpPro form = request.body.mailSignUpPro
        @type {object}
        */
        
        const bodyMailUser = {
            "mailLogin" : request.body.mailSignUpPro,
        }
        //console.log ('bodyaddress',bodyAddressPro);
            // Changement !
        
        /**
            @const validMail
            @description the result of validator.validate(body.mailLogin)
            @type {boolean}
        */
        const validMail = validator.validate(body.mailSignUpPro)

        if (!validMail) {
            
            response.status(400).json({isLogged:false , error:"Mail non valide"});
            console.log(" Erreur Connexion : Mail au Mauvais Format")
            return;
        }

        /**
            @const checkUser
            @description the result of await conInscDataMapper.findUser(bodyMailUser)
            @type {object}

        */
        
        const checkUser = await conInscDataMapper.findUser(bodyMailUser);

        if (checkUser) {
            response.status(401).json({ error : " Utilisateur déjà existant veuillez vous connecter "});
        }

        

        /**
            @const newBillAddress
            @description the result of await conInscDataMapper.addBillAddress
            @type {object}

        */


        const newBillAddress = await conInscDataMapper.addBillAddress(bodyAddressPro);
        
        /**
            
            @function addUserPro
            @description  add a new bill address in the database
            @param {object} - bodyAddressPro
            @returns {object} newBillAddress
            @example conInscDataMapper.addBillAddress(bodyAddressPro)
        */
        
        
        
        
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