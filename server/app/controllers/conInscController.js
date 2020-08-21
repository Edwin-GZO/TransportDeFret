const conInscDataMapper = require('../db/conInscDataMapper');

module.exports = {

    connectionUser: async (request,response) => {
    
        const body = request.body;
       
        const user = await conInscDataMapper.findUser(body);

        if (!user) {
            
            response.status(404).json({isLogged:false, error:"Utilisateur non trouvé"});
            console.log(" Erreur Connexion : Mauvais Identifiant")
            return;
        }

        if (body.password !== user.password) {

            response.status(401).json({isLogged:false, error:"Mauvais Mot de Passe"});
            console.log(" Erreur Connexion : Mauvais Mot de Passe")
            return;
        }
      

        request.session.login = body.email;

        if (!request.session.login) {
            response.redirect('/');
        };
        
        console.log(" Connexion : Identifiant & Mot de Passe Correct")

        //! Ne pas toucher au dessus !

        //creer une session

        request.session.login = body.mail;

        // request.session.login = body.mail; //! Ne fonctionne pas ! 

        
        //pour rediriger vers la dernière page visitée
        //response.redirect(request.session.history.filter(page => page !== '/login').pop());

        response.status(200).json({isLogged: true , message:" Connexion Utilisateur Acceptée"});
    },

    insertUserPro: async (request, response) => {

        // Vérifier que le mec est connecté
        if (!request.session.login) {
            response.status(401).json({ dégage: true });
        }

        const result = request.body;
       
        const mailverif = await conInscDataMapper.findUser(result.mail);

        console.log("lA:", mailverif);
        
        // if (mailverif.mail) {

        //     response.status(401).json({error:"Utilisateur déjà existant veuillez vous connecter "}).redirect('/');
        //     return

        // }

        // const newBillAddress = await conInscDataMapper.addBillAddress(result);
        // await conInscDataMapper.addUserPro(result,newBillAddress)

        // response.status(201).json({message: "Utilisateur enregistré" }).redirect('/');

        // console.log("Création : Utilisateur Professionnel enregistré")
        
        //! Ne pas toucher au dessus !

        //creer une session
        // request.session.login = result.mail; //! Ne fonctionne pas ! 
                //pour rediriger vers la dernière page visitée
        //response.redirect(request.session.history.filter(page => page !== '/login').pop());
    },

    insertUserPart: async (request, response,next) => {

        const result = request.body;
       
        const newBillAddress = await conInscDataMapper.addBillAddress(result);
        await conInscDataMapper.addUserPart(result,newBillAddress)
        
        response.status(201).json({message: "Utilisateur enregistré" }).redirect('/');
       
        console.log("Création : Utilisateur 'Particulier' enregistré")       

        //! Ne pas toucher au dessus !

        // //creer une session
        // request.session.login = result.mail;
        // if(!request.session.login){
        //     response.status(404).json({error:"invalid session"});
        // }
        // next();
        //pour rediriger vers la dernière page visitée
        //response.redirect(request.session.history.filter(page => page !== '/log
    },

    //TODO Gérer la connexion utilisateur
    
    checkLogin: (request, response, next) => {

        // S"il n'y a pas de login alors on redirige vers la page de connection
        if(!request.session.login){
            response.redirect('/login');
        }
        next();

    },

}

// Lucas_Moreau@hotmail.fr
// nHScj9_r_Halbb0 