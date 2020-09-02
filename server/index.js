require('dotenv').config();
const express = require('express') ;
const session = require('express-session') ;
const moment = require('moment') ; 
moment.locale('fr'); 
// moment.timezone("Europe/Paris");

const app = express();

app.set('view engine', 'ejs'); 
app.set('views', './app/views'); 
app.use(express.static(__dirname +'/app/assets'));
console.log(__dirname +'/app/assets');

// Gestion des sessions
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true ,
        // sameSite: 'none' ,
        // secure: true
    }
}));

app.use((error, request, response, next) => {
    
    if (error) {
    console.error('Erreur à la connexion',error);
    } 

    response.status(500).send('{"Ok connexion": true}');

});

app.all('*', (request, response, next) => {
    // console.log('Autorisation du protocole CORs');
    response.header('Access-Control-Allow-Origin', request.header('Origin') || '*');
    response.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
    response.header('Access-Control-Allow-Headers', request.header('Access-Control-Request-Headers') || '*');
    response.header('Access-Control-Allow-Credentials', 'true');
    response.header('Access-Control-Max-Age', '864000');
     
    next();
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const conInscRouter = require('./app/router/conInscRouter');
const quoteRouter = require('./app/router/quoteRouter');
const contactRouter = require('./app/router/contactRouter');
const userRouter = require('./app/router/userRouter');

// Middleware qui vérifie que le USER est connecté
// app.all('*', (request, response, next) => {
//     // console.log(" Vérification par le MiddleWare de Session => ", request.session.login);

//     routePath = request.originalUrl
//     // console.log("Route Path ",routePath)
     
//     const autorisedRoadUser = '/api/user' ; 
//     const autorisedRoadPassword = '/api/user/password' ; 
//     const autorisedRoadSignupPart = '/api/user/signup/part' ;
//     const autorisedRoadSignupPro = '/api/user/signup/pro' ;
//     const autorisedRoadContact = '/api/contact' ; 
//     const autorisedRoadSlach = '/' ;
//     const autorisedRoadCheckSessionLogin = '/api/isLogged' ;
//     const autorisedRoadDashBoardUser = '/api/user/dashboard' ;
//     const autorisedRoadLogOut = '/api/user/logout' 
//     const autorisedRoadQuote = '/api/quote/pro' 

//     if ((
//         autorisedRoadUser == routePath || 
//         autorisedRoadPassword == routePath || 
//         autorisedRoadSignupPart == routePath || 
//         autorisedRoadSignupPro == routePath || 
//         autorisedRoadSlach == routePath || 
//         autorisedRoadContact == routePath || 
//         autorisedRoadCheckSessionLogin == routePath ||
//         autorisedRoadDashBoardUser == routePath ||
//         autorisedRoadLogOut == routePath ||
//         autorisedRoadQuote == routePath )) 
//     {

//         console.log(" Route Autorisée Sans Session ")
//         next();

//     } else if (!request.session.login) {
//         console.log(moment().format('LLLL')," Error : Pas de session Login" );
//         response.status(401).json({ isLogged: false , error : "Pas de session Login " });
//     } else {
//         console.log(moment().format('LLLL'), `Validation session pour ${request.session.login}`);
//         next();
//     }
// });


app.use(conInscRouter);
app.use(quoteRouter);
app.use(contactRouter);
app.use(userRouter);

const port = process.env.PORT || 8080 ;
app.listen(port, _ => {
    console.log(`Listening on ${port}`);
});