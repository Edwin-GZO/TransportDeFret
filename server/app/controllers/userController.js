const userDataMapper = require('../db/userDataMapper') ; // useless ?
const conInscDataMapper = require('../db/conInscDataMapper');
const contactDataMapper = require('../db/contactDataMapper');
//const dashBoardUserModule = require('../assets/dashBoardUserModule');
const moment = require('moment') ;
moment.locale('fr');


module.exports = {

    // modifyPassword: async (request, response, next) => {

    //     try {

    //         const mailLoginId = request.body;

    //         const user = await conInscDataMapper.findUser(mailLoginId);

    //         const mail = {

    //             message: "Mot de passe Oublié" ,
    //             from: "tdr_site@gmail.com" , //dataForm.mail,

    //             to: user.mail , //exploitation@transportstdr.fr"
    //             subject: "Renvoi du Mot de Passe - T.D.R. ",

    //             html:
    //             `
    //             <p>
    //             <br />
    //             Bonjour ${user.name} ,
    //             <br />
    //             <br />
    //             Suite à votre demande veuillez trouver votre mot de passe : <strong> ${user.password} </strong>
    //             <br />
    //             <br />
    //             Cordialement La société T.D.R.
    //             </p>
    //             `
    //         };

    //         await contactDataMapper.sendMailContact(mail);

    //         response.status(201).json(" Le mail de renvoi de mot de passe a bien été envoyé ");

    //     } catch (error) {

    //         console.trace(moment().format('LLLL'), error) ;
    //         response.status(500).send(error) ;

    //     }
    // },

    // Affiche le DashBoard pour l'User
    dashBoard: async (request, response) => {

        try {
            
            //dashBoardUserModule.addListenerToActions();
            const body = {mailLogin : request.session.login }

            const user = await conInscDataMapper.findUser(body);
    
            console.log(user) ;

            if (!user) {
                
                response.status(401).json({isLogged: false , error:" Pas de session" });
                console.log(moment().format('LLLL'), " Erreur DashBoard : Aucune session ")
                
            }

            response.render('dashBoardUser',{user});

        } catch (error) {
        
        console.trace(moment().format('LLLL'), error) ;
        response.status(500).send(error) ;
        
        }
    },

    // Permet de modifier le Nom
    nameModif : async (request, response) => {

        try {
    
            console.log(request) ;
            console.log(request.body) ;
            console.log(request.session.login) ;

            const user = await conInscDataMapper.findUser(request.session.login);

            console.log(user) ;

            

        } catch (error) {
        
            console.trace(moment().format('LLLL'), error) ;
            response.status(500).send(error) ;
        
        }
    }
}