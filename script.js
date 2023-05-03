
const passwordBox = {
    element: document.querySelector("#password"),
    span: document.querySelector("input#password+span")
}

const passwordConfirmBox = {
    element: document.querySelector("#confirm-password"),
    span: document.querySelector("input#confirm-password + span")
}

function applyStyling(inputBox) {

    inputBox.element.classList.add('pw-no-match');
    inputBox.span.classList.add('span-pw-no-match');
    
}

function resetStyling(inputBox) {
    inputBox.element.classList.remove('pw-no-match');
    inputBox.span.classList.remove('span-pw-no-match');
}


function onPasswordFieldChange() {
    switch (passwordBox.element.value) {
        case "": resetStyling(passwordBox); return;
        case passwordConfirmBox.element.value: resetStyling(passwordConfirmBox); resetStyling(passwordBox); return;
        default: applyStyling(passwordBox);
    }
}

function onConfirmPasswordFieldChange() {
    switch (passwordConfirmBox.element.value) {
        case "": resetStyling(passwordConfirmBox); return;
        case passwordBox.element.value: resetStyling(passwordConfirmBox); resetStyling(passwordBox); return;
        default: applyStyling(passwordConfirmBox);
    }
}

passwordBox.element.addEventListener('input', onPasswordFieldChange);
passwordConfirmBox.element.addEventListener('input',onConfirmPasswordFieldChange);
