const userDataMapper = require('../db/userDataMapper') ; // useless ?
const conInscDataMapper = require('../db/conInscDataMapper');
const contactDataMapper = require('../db/contactDataMapper');
const moment = require('moment') ;
moment.locale('fr'); 
const dashBoardUserModule=require('../modules/dashBoardUserModule');

module.exports = {

    modifyPassword: async (request, response, next) => {

        try {
        
            const mailLoginId = request.body;

            const user = await conInscDataMapper.findUser(mailLoginId);

            const mail = {
                
                message: "Mot de passe Oublié" ,
                from: "tdr_site@gmail.com" , //dataForm.mail,
    
                to: user.mail , //exploitation@transportstdr.fr"
                subject: "Renvoi du Mot de Passe - T.D.R. ",
    
                html: 
                `
                <p>
                <br />
                Bonjour ${user.name} ,
                <br />
                <br />
                Suite à votre demande veuillez trouver votre mot de passe : <strong> ${user.password} </strong> 
                <br />
                <br />
                Cordialement La société T.D.R.     
                </p>
                `
            };
    
            await contactDataMapper.sendMailContact(mail);

            response.status(201).json(" Le mail de renvoi de mot de passe a bien été envoyé ");

        } catch (error) {
        
            console.trace(moment().format('LLLL'), error) ;
            response.status(500).send(error) ;
        
        }

    },

    dashBoard:  async (request, response, next) => {

        try {
            const modifyName = document.getElementById('modify_NAME');
            const formName = document.getElementById('form_NAME');
            const validateName = document.getElementById('validate_NAME');
            modifyName.addEventListener('click', dashBoardUserModule.showForm(formName));
            validateName.addEventListener('click', dashBoardUserModule.hideForm(formName));

            const modifyPhone = document.getElementById('modify_PHONE');
            const formPhone = document.getElementById('form_PHONE');
            const validatePhone = document.getElementById('validate_PHONE');
            modifyPhone.addEventListener('click', dashBoardUserModule.showForm(formPhone));
            validatePhone.addEventListener('click', dashBoardUserModule.hideForm(formPhone));


            const modifyPassword = document.getElementById('modify_PASSWORD');
            const formPassword = document.getElementById('form_PASSWORD');
            const validatePassword = document.getElementById('validate_PASSWORD');
            modifyPassword.addEventListener('click', dashBoardUserModule.showForm(formPassword));
            validatePassword.addEventListener('click', dashBoardUserModule.hideForm(formPassword));

            const modifyMail = document.getElementById('modify_MAIL');
            const formMail = document.getElementById('form_MAIL');
            const validateMail = document.getElementById('validate_MAIL');
            modifyMail.addEventListener('click', dashBoardUserModule.showForm(formMail));
            validateMail.addEventListener('click', dashBoardUserModule.hideForm(formMail));

            const modifySIRET = document.getElementById('modify_SIRET');
            const formSIRET = document.getElementById('form_SIRET');
            const validateSIRET = document.getElementById('validate_SIRET');
            modifySIRET.addEventListener('click', dashBoardUserModule.showForm(formSIRET));
            validateSIRET.addEventListener('click', dashBoardUserModule.hideForm(formSIRET));
            
            
            
            
            
            
            
            
            const bodyMailDashboard = { "mailLogin": request.session.login }; 
            const user = await conInscDataMapper.findUser(bodyMailDashboard);
                //! const profileUser= {
                //!     name: user.rows[0].name,
                //!     mail: user.rows[0].mail,
                //!     phone: user.rows[0].phone,
                //!     siret: user.rows[0].siret,
                //!     type: user.rows[0].type
                //! };
            
            response.render('dashBoardUser')//!,{profileUser});

        } catch (error) {
        
            console.trace(moment().format('LLLL'), error) ;
            response.status(500).send(error) ;
        
        }

    },


}