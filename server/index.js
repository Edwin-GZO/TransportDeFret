require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();

// Gestion des sessions
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

app.use((error, request, response, next) => {
    
    // if (error instanceof UnrauthrorizedError()) {
    //     response.status(403).send('zefopàik,zefoik,0');
    // }

    console.error('Erreur à la connexion');
    console.error(error);

    response.status(500).send('{"Ok connexion": true}');
});

app.all('*', (request, response, next) => {
    console.log('Autorisation du protocole COR');
    response.setHeader('Access-Control-Allow-Origin', request.header('Origin') || '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    const requestedHeaders = request.header('Access-Control-Request-Headers');
    if (requestedHeaders) {
        response.setHeader('Access-Control-Allow-Headers', requestedHeaders);
    }

    response.setHeader('Access-Control-Allow-Credentials', 'true');
     
    next();
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const conInscRouteur = require('./app/router/conInscRouteur');
const quoteRouteur = require('./app/router/quoteRouter');


// Middleware qui vérifie que le USER est connection
// app.route('/api/user*'
// app.route(/^(\/api\/user.*|\/)/, (request, response, next) => {
//     if (!request.session.login) {
//         console.log(" Error : pas de Login session ")
//         response.status(401).json({ isLogged: false });
//     } else {
//         next();
//     }
// });

app.use(conInscRouteur);
app.use(quoteRouteur);


const port = process.env.PORT || 8080 ;
app.listen(port, _ => {
    console.log(`Listening on ${port}`);
});