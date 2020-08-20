const conInscDataMapper = require('../db/conInscDataMapper');

module.exports = {
    
    connectionUser: async (request,response) => {
    
        const body = request.body;
        const user = await conInscDataMapper.findUser(body);

        if (!user) {
                 
            response.status(404).json({isLogged:false, error:"User not found"});
            return;
        }

        if (body.password !== user.password) {
 
            response.status(401).json({isLogged:false, error:"Bad password"});
            return;

        }
        
        
        
        response.json({isLogged: true , message:" OK User and Password"});
        //creer une session
        request.session.login = body.mail;
        
        //pour rediriger vers la dernière page visitée
        //response.redirect(request.session.history.filter(page => page !== '/login').pop());

    },

    insertUserPro: async (request, response) => {

        
        const result = request.body;
        console.log(result);

        const newBillAddress = await conInscDataMapper.addBillAddress(result);

        console.log("ID : " , newBillAddress);

        await conInscDataMapper.addUserPro(result,newBillAddress)

        response.status(201).json({isLogged: true });
        //creer une session
        request.session.login = result.mail;
        response.redirect('/');
        //pour rediriger vers la dernière page visitée
        //response.redirect(request.session.history.filter(page => page !== '/login').pop());
    },

    insertUserPart: async (request, response,next) => {

        
        const result = request.body;
        console.log(result);

        const newBillAddress = await conInscDataMapper.addBillAddress(result);

        console.log("ID : " , newBillAddress);

        await conInscDataMapper.addUserPart(result,newBillAddress)

        response.status(201).json({isLogged: true });
        //creer une session
        request.session.login = result.mail;
        if(!request.session.login){
            response.status(404).json({error:"invalid session"});
        }
        next();
        //pour rediriger vers la dernière page visitée
        //response.redirect(request.session.history.filter(page => page !== '/log
    },

    checkLogin: (request, response, next) => {

        // S"il n'y a pas de login alors on redirige vers la page de connection
        if(!request.session.login){
            response.redirect('/login');
        }
        next();

    },

    test: (_, response) => {
        response.send('hello Cédric')
    }
}

// Lucas_Moreau@hotmail.fr
// nHScj9_r_Halbb0 