require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();

app.use((error, request, response, next) => {
    console.error('Oh mon dieu ça plante!');
    console.error(error);

    response.status(500).send('{ "merde": true }');
});

app.all('*', (request, response, next) => {
    console.log('CORS Authorized');
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

const conInscRouteur = require('./app/router/conInscRouteur');
const quoteRouteur = require('./app/router/quoteRouter');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(conInscRouteur);
app.use(quoteRouteur);

app.use((request, response, next) => {
   if (!response.headersSent) {
    response.status(202).send();
   } 

   next();
});

//Gestion des sessions
app.use(session({
    secret: 'rZS/;QKoCQ2@jI4zb4>W2#@Le.0CG#',
    resave: true,
    saveUninitialized: true
}));

//Middleware pour stocker les infos de session en local - utililsé à chaque requête
app.use((request, response, next) => {
  response.locals.session = request.session;
  next();  
})

const port = process.env.PORT || 3000 ;
app.listen(port, _ => {
    console.log(`Listening on ${port}`);
});
