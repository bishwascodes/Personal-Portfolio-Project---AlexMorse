document.addEventListener("DOMContentLoaded", (event) => {
    // hero section
    let defaultStage = document.getElementById("default-stage");
    let form2ndStage = document.getElementById("form-2nd-step");
    let formNameEmailStage = document.getElementById("form-name-email-stage");
    let formLastStage = document.getElementById("form-last-stage");
    let contactAlexButton = document.getElementById("contact-alex-btn");
    let preSendMsgButton = document.getElementById("pre-send-msg-btn");
    let sendMsgButton = document.getElementById("send-msg-btn");
    let sendMsgAgainButton = document.getElementById("send-msg-again-btn");
    let messageBox = document.getElementById("contact-alex-message");
    let nameField = document.getElementById("name-field");
    let emailField = document.getElementById("email-field");

    let formFields = [messageBox, nameField, emailField];
    formFields.forEach((item)=>{
        item.addEventListener("input", e=>{
            e.target.style.borderColor = "white";
        })
    })

    messageBox.addEventListener("focus", (e) => {
        document.querySelector(".form-caption").classList.add("d-none");
    })

    messageBox.addEventListener("blur", (e) => {
        console.log(e.target);
        if (e.target.value.length <= 0) document.querySelector(".form-caption").classList.remove("d-none");
    })

    contactAlexButton.addEventListener("click", e => {
        defaultStage.classList.remove("active");
        form2ndStage.classList.add("active");
    })

    let isNameValid = name => {
        if (typeof name !== 'string') {
            return false;
        }

        if (name.trim() === '') {
            return false;
        }

        const nameRegex = /^[a-zA-Z\s'-]+$/;
        return nameRegex.test(name);
    }

    let isEmailValid = email => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    preSendMsgButton.addEventListener("click", e => {
        if (messageBox.value.length < 10) {
            messageBox.style.border = "1px solid red";
        } else {
            form2ndStage.classList.remove("active");
            formNameEmailStage.classList.add("active");
        }

    })

    sendMsgButton.addEventListener("click", e => {
        let nameValue = nameField.value.trim();
        let emailValue = emailField.value.trim();
        if(!isNameValid(nameValue)){
            nameField.style.border = "1px solid red";
        }
        if(!isEmailValid(emailValue)){
            emailField.style.border = "1px solid red";
        }
        if(!isEmailValid(emailValue) || !isNameValid(nameValue)){
            return null;
        }
        formNameEmailStage.classList.remove("active");
        formLastStage.classList.add("active");
    })

    sendMsgAgainButton.addEventListener("click", e => {
        formLastStage.classList.remove("active");
        form2ndStage.classList.add("active");
    })

});