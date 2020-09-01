module.exports = {
    
    loadData: () => {

        // const modifyName = document.getElementById('modify_NAME');
        // const formName = document.getElementById('form_NAME');
        // const validateName = document.getElementById('validate_NAME');
        // modifyName.addEventListener('click', userDataMapper.showForm(formName));
        // validateName.addEventListener('click', userDataMapper.hideForm(formName));

        // const modifyPhone = document.getElementById('modify_PHONE');
        // const formPhone = document.getElementById('form_PHONE');
        // const validatePhone = document.getElementById('validate_PHONE');
        // modifyPhone.addEventListener('click', userDataMapper.showForm(formPhone));
        // validatePhone.addEventListener('click', userDataMapper.hideForm(formPhone));


        // const modifyPassword = document.getElementById('modify_PASSWORD');
        // const formPassword = document.getElementById('form_PASSWORD');
        // const validatePassword = document.getElementById('validate_PASSWORD');
        // modifyPassword.addEventListener('click', userDataMapper.showForm(formPassword));
        // validatePassword.addEventListener('click', userDataMapper.hideForm(formPassword));

        // const modifyMail = document.getElementById('modify_MAIL');
        // const formMail = document.getElementById('form_MAIL');
        // const validateMail = document.getElementById('validate_MAIL');
        // modifyMail.addEventListener('click', userDataMapper.showForm(formMail));
        // validateMail.addEventListener('click', userDataMapper.hideForm(formMail));

        // const modifySIRET = document.getElementById('modify_SIRET');
        // const formSIRET = document.getElementById('form_SIRET');
        // const validateSIRET = document.getElementById('validate_SIRET');
        // modifySIRET.addEventListener('click', userDataMapper.showForm(formSIRET));
        // validateSIRET.addEventListener('click', userDataMapper.hideForm(formSIRET));

        
    },
    
    
    showForm: (element) => {
        element.classList.remove("is-hidden");
    },
    hideForm: (element) => {
        element.classlist.add("is-hidden");
    },
    
}