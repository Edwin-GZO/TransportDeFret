const conInscDataMapper = require('../db/conInscDataMapper') ;
const validator = require("email-validator") ;
const moment = require('moment') ;
moment.locale('fr'); 
const bcrypt = require('bcrypt');
const saltRounds = 10;
const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[_!@#$%^&*]).{8,16}$/;

module.exports = {

    connectionUser: async (request,response) => {

        try {
            
            const body = request.body;
        
            const validMail = validator.validate(body.mailLogin)
    
            // Vérification de la validité du Mail 
            if (!validMail) {
                
                response.status(400).json({isLogged:false , error:"Mail non valide"});
                console.log(moment().format('LLLL')," Erreur Connexion : Mail au Mauvais Format")
                return;
            }
    
            const user = await conInscDataMapper.findUser(body);
            
            // Est ce que l'utilisateur existe ?
            if (!user || user.active == false) {
                
                response.status(404).json({isLogged:false , error:"Utilisateur non trouvé"});
                console.log(moment().format('LLLL')," Erreur Connexion : Mauvais Identifiant")
                return;
            }

            // Vérification de l'adéquation du mot de passe saisie / Celui en base de données
            const compareOK = await bcrypt.compare(body.passwordLogin, user.password)
            
            if (!compareOK) {

                response.status(401).json({isLogged:false , error:" Mauvais Mot de Passe"});
                console.log(moment().format('LLLL')," Erreur Connexion : Mauvais Mot de Passe")

                return;
            }
        
            request.session.login = body.mailLogin;
    
            if (!request.session.login) {

                response.status(401).json({isLogged: false , error:" Pas de session" });
                console.log(moment().format('LLLL'), " Erreur : Aucune session ")

                return;
            };
            
            console.log(moment().format('LLLL') ," Connexion : Identifiant & Mot de Passe Correct")
    
            response.status(200).json({isLogged: true , message:" Connexion Utilisateur Acceptée", name : user.name});

        } catch (error) {
            
            console.trace(moment().format('LLLL'), error) ;
            response.status(500).send(error) ;
        }
    },

    insertUserPro: async (request, response) => {

        try {
              
            const body = request.body;

            // console.log(body);

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
        
            const validMail = validator.validate(body.mailSignUpPro)
    
            if (!validMail) {
    
                console.log(moment().format('LLLL')," Erreur Connexion : Mail au Mauvais Format")
                response.status(400).json({isLogged:false , error:"Mail non valide"});
                return;
            }
    
            const checkUser = await conInscDataMapper.findUser(bodyMailUser);
    
            if (checkUser) {
    
                console.log(moment().format('LLLL')," Erreur Connexion : Utilisateur déjà existant")
                response.status(401).json({ error : " Utilisateur déjà existant veuillez vous connecter "});
                return
            }
    
            const newBillAddress = await conInscDataMapper.addBillAddress(bodyAddressPro);

            const uncryptedPasswordUser = body.passwordSignUpPro

            // Vérification du respect de la contrainte MOT DE PASSE
            if (!(passwordRegExp.test(uncryptedPasswordUser))) {
            
                response.status(400).json({isLogged:false , error:" Le Mot de Passe ne respecte pas la contrainte"});
                console.log(moment().format('LLLL')," Erreur : Le Mot de Passe ne respecte pas la contrainte")
                return
              }

            const hashedPassword = bcrypt.hashSync(uncryptedPasswordUser, saltRounds);

            body.passwordSignUpPro = hashedPassword ;
        
            await conInscDataMapper.addUserPro(body,newBillAddress)
                
            request.session.login = body.mailSignUpPro;
    
            if (!request.session.login) {
    
                console.log(moment().format('LLLL')," Erreur : Aucune session ");
                response.status(401).json({isLogged: false , error:" Pas de session" });
            };
            
            console.log(moment().format('LLLL'), " Création : Utilisateur Professionnel enregistré")
            response.status(201).json({isLogged: true , message: " Utilisateur enregistré " });

        } catch (error) {
            
            console.trace(moment().format('LLLL'), error) ;
            response.status(500).send(error) ;

        }
    },

    insertUserPart: async (request, response,next) => {

        try {
            
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
                
                console.log(moment().format('LLLL')," Erreur Connexion : Mail au Mauvais Format")
                response.status(400).json({isLogged:false , error:"Mail non valide"});
                return;
            }
    
            const checkUser = await conInscDataMapper.findUser(bodyMailUser);
    
            if (checkUser) {
                
                console.log(moment().format('LLLL'), " Erreur Connexion : Utilisateur déjà existant")
                response.status(401).json({ error : " Utilisateur déjà existant veuillez vous connecter "});
            }
    
            const newBillAddress = await conInscDataMapper.addBillAddress(bodyAddressPart);

            const uncryptedPasswordUser = body.passwordSignUpPart

            // Vérification du respect de la contrainte MOT DE PASSE
            if (!(passwordRegExp.test(uncryptedPasswordUser))) {
            
                response.status(400).json({isLogged:false , error:" Le Mot de Passe ne respecte pas la contrainte"});
                console.log(moment().format('LLLL')," Erreur : Le Mot de Passe ne respecte pas la contrainte")
                return
              }

            const hashedPassword = bcrypt.hashSync(uncryptedPasswordUser, saltRounds);

            body.passwordSignUpPart = hashedPassword ;

            await conInscDataMapper.addUserPart(body,newBillAddress)
    
            request.session.login = body.mailSignUpPart;
 
    
            if (!request.session.login) {
                response.status(401).json({isLogged: false , error:" Pas de session" });
                console.log(" Erreur : Aucune session ")
            };
            
            console.log(moment().format('LLLL'), " Création : Utilisateur Particulier enregistré")     
            response.status(201).json({isLogged: true , message: " Utilisateur Particulier enregistré " });

        } catch (error) {
            
            console.trace(moment().format('LLLL'), error) ;
            response.status(500).send(error) ;

        }
    },
    
    checkLogged : async (request, response) => {

        if (!request.session.login) {
            response.status(401).json({isLogged: false , error:" Pas de session" });
            console.log(" CheckLogged : Erreur Aucune session ") }

        else {
            response.status(201).json(request.session.login)
            console.log(request.session.login) ;
        }

    },

    logOutUser : async (request, response) => {
        
        try {
        
            request.session.destroy();
            console.log(moment().format('LLLL'), " Supression de la session")     
            response.status(201).json({isLogged: false , message: " Utilisateur Déconnecté " });

        } catch (error) {
        
            console.trace(moment().format('LLLL'), error) ;
            response.status(500).send(error) ;
               
        }
    }
}