const dashBoardUserModule = {

    base_url : "http://localhost:3000",

    init: function () {
     console.log('Initialisation DasHBoardModule');
     dashBoardUserModule.addListenerToActions();
     
    },
    
    addListenerToActions:()=>{

        // Rajoute les events listeners sur le Crayon !
        const modifyName = document.getElementById('modifyName');
        modifyName.addEventListener('click',dashBoardUserModule.showFormName);

        const modifyPhone = document.getElementById('modifyPhone');
        modifyPhone.addEventListener('click',dashBoardUserModule.showFormPhone);

        // const modifyPassword = document.getElementById('modifyPassword');
        // modifyPassword.addEventListener('click',dashBoardUserModule.showFormPassword);

        const modifyMail = document.getElementById('modifyMail');
        modifyMail.addEventListener('click',dashBoardUserModule.showFormMail);

        const modifySiret = document.getElementById('modifySiret');
        modifySiret.addEventListener('click',dashBoardUserModule.showFormSiret);



        //click sur le bouton valider du formulaire (input)
        const validateName = document.getElementById('validateName');
        validateName.addEventListener('click',dashBoardUserModule.submitName);

        const validatePhone = document.getElementById('validatePhone');
        validatePhone.addEventListener('click',dashBoardUserModule.submitPhone);
        // const validatePassword = document.getElementById('validatePassword');
        // validatePassword.addEventListener('click',dashBoardUserModule.submitPassword);
        const validateMail = document.getElementById('validateMail');
        validateMail.addEventListener('click',dashBoardUserModule.submitMail);

        const validateSiret = document.getElementById('validateSiret');
        validateSiret.addEventListener('click',dashBoardUserModule.submitSiret);

        const deleteUser = document.getElementById('deleteUser');
        deleteUser.addEventListener('click',dashBoardUserModule.submitDelete);
    },

    //pour faire apparaitre les input
    
    showFormName: ()=>{
        const formName = document.getElementById('formName');
        formName.classList.remove('is-hidden');
        
        const dataName = document.getElementById('dataName');
        dataName.classList.add('is-hidden');
        
    },
    showFormPhone: ()=>{
        const formPhone = document.getElementById('formPhone');
        formPhone.classList.remove('is-hidden');

        const dataPhone = document.getElementById('dataPhone');
        dataPhone.classList.add('is-hidden');
    },
    // showFormPassword: ()=>{
    //     const formPassword = document.getElementById('formPassword');
    //     formPassword.classList.remove('is-hidden');
        
    // },
    showFormMail: ()=>{
        const formMail = document.getElementById('formMail');
        formMail.classList.remove('is-hidden');

        const dataMail = document.getElementById('dataMail');
        dataMail.classList.add('is-hidden');
    },
    showFormSiret: ()=>{
        const formSiret = document.getElementById('formSiret');
        formSiret.classList.remove('is-hidden');

        const dataSiret = document.getElementById('dataSiret');
        dataSiret.classList.add('is-hidden');
    },

    //pour faire disparaitre les input
    submitName: async (event)=>{

        event.preventDefault();

        const validateName = document.getElementById('formName');
        validateName.classList.add('is-hidden');

        const dataName = document.getElementById('dataName');
        dataName.classList.remove('is-hidden');

        const inputName = document.getElementById('inputName');
        
        dataName.textContent = inputName.value;

        console.log(inputName.value)
   
    },


    submitPhone: (event)=>{
        event.preventDefault();
        const validatePhone = document.getElementById('formPhone');
        validatePhone.classList.add('is-hidden');
        const dataPhone = document.getElementById('dataPhone');
        dataPhone.classList.remove('is-hidden');
        const inputPhone = document.getElementById('inputPhone');
        dataPhone.textContent = inputPhone.value;
    },

    // submitPassword: (event)=>{
    //     event.preventDefault();
    //     const validatePassword = document.getElementById('formPassword');
    //     validatePassword.classList.add('is-hidden');
        
    // },

    submitMail: (event)=>{
        event.preventDefault();
        const validateMail = document.getElementById('formMail');
        validateMail.classList.add('is-hidden');
        const dataMail = document.getElementById('dataMail');
        dataMail.classList.remove('is-hidden');
        const inputMail = document.getElementById('inputMail');
        dataMail.textContent = inputMail.value;
    },

    submitSiret: (event)=>{
        event.preventDefault();
        const validateSiret = document.getElementById('formSiret');
        validateSiret.classList.add('is-hidden');
        const dataSiret = document.getElementById('dataSiret');
        dataSiret.classList.remove('is-hidden');
        const inputSiret = document.getElementById('inputSiret');
        dataSiret.textContent = inputSiret.value;
    },

}

document.addEventListener('DOMContentLoaded', dashBoardUserModule.init );
console.log(document);