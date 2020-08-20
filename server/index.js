require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();

app.use((error, request, response, next) => {
    console.error('Erreur à la connexion');
    console.error(error);

    response.status(500).send('{ "Ok connexion": true }');
});

app.all('*', (request, response, next) => {
    // console.log('Autorisation du protocole COR');
    response.setHeader('Access-Control-Allow-Origin', request.header('Origin') || '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    const requestedHeaders = request.header('Access-Control-Request-Headers');
    if (requestedHeaders) {
        response.setHeader('Access-Control-Allow-Headers', requestedHeaders);
    }

    response.setHeader('Access-Control-Allow-Credentials', 'true');
    // ligne 31       headers: {'Content-Type': 'application/json'},    
    next();
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());





// Gestion des sessions
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

// app.use((request,response, next) => {

//     response.locals.username = request.session.username;

//     next();
// });



//! Middleware pour stocker les infos de session en local - utililsé à chaque requête
app.use((request, response, next) => {
    // console.log(request)
    
  response.locals.session = request.session;
    
  next();  

})

const conInscRouteur = require('./app/router/conInscRouteur');
const quoteRouteur = require('./app/router/quoteRouter');

app.use(conInscRouteur);
app.use(quoteRouteur);



//! Juste pour le TEST 

// app.use((request, response, next) => {
//     if (!response.headersSent) {
//      response.status(202).send();
//     } 
 
//     next();
//  });

const port = process.env.PORT || 8080 ;
app.listen(port, _ => {
    console.log(`Listening on ${port}`);
});
