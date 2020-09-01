module.exports = {
    showFormName: () => {
        const formName = document.getElementById('formName');
        formName.classList.remove("is-hidden");
    },
    
    hideForm: (element) => {
        element.classlist.add("is-hidden");
    },
    
    addListenerToActions:()=>{
                let modifyName = document.getElementById('modifyName');
                modifyName.addEventListener('Click', showFormName())
    }
}