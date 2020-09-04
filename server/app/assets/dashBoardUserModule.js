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

        const modifySiret = document.getElementById('modifySiret');
        modifySiret.addEventListener('click',dashBoardUserModule.showFormSiret);
       
        //click sur le bouton valider du formulaire (input)
        const validateName = document.getElementById('validateName');
        validateName.addEventListener('submit',dashBoardUserModule.submitName);

        const validatePhone = document.getElementById('validatePhone');
        validatePhone.addEventListener('submit',dashBoardUserModule.submitPhone);

        const validateSiret = document.getElementById('validateSiret');
        validateSiret.addEventListener('submit',dashBoardUserModule.submitSiret);
        
        const deleteUser = document.getElementById('deleteUser');
        deleteUser.addEventListener('click',dashBoardUserModule.submitDelete);

         //confirmation suppression de compte
         let confirmDelete = document.getElementById('confirmDelete');
         confirmDelete.addEventListener('submit',dashBoardUserModule.submitConfirmDelete);
 
         let cancelDelete = document.getElementById('cancelDelete');
         cancelDelete.addEventListener('submit',dashBoardUserModule.submitCancelDelete);
 
         let hideModalDelete = document.getElementById('hideModalDelete');
         hideModalDelete.addEventListener('click', dashBoardUserModule.submitCancelDelete);

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
        // A mettre la validation ( recharger la page avec les nouvelles infos )
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


    submitSiret: (event)=>{

        event.preventDefault();

        const validateSiret = document.getElementById('formSiret');
        validateSiret.classList.add('is-hidden');

        const dataSiret = document.getElementById('dataSiret');
        dataSiret.classList.remove('is-hidden');

        const inputSiret = document.getElementById('inputSiret');

        dataSiret.textContent = inputSiret.value;
    },

    submitDelete: (event) => {
        event.preventDefault();
        let modalDelete = document.getElementById('modalDelete');
        modalDelete.classList.add('is-active');
    },

    submitConfirmDelete: (event) => {
        event.preventDefault();
        let modalDelete = document.getElementById('modalDelete');
        modalDelete.classList.remove('is-active');
        console.log('submitdelete',modalDelete);
    },

    submitCancelDelete: (event) => {
        event.preventDefault();
        let modalDelete = document.getElementById('modalDelete');
        modalDelete.classList.remove('is-active');
    }
}

document.addEventListener('DOMContentLoaded', dashBoardUserModule.init );
console.log(document);