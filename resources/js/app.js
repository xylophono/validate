import validateDate from './validateDate.js';

let form = document.querySelector('#mainform');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    let date = document.querySelector('#dateinput').value;
    
    if(validateDate(date)) {
        alert(date + ' is valid');
    }

    else {
        alert(date + ' is invalid');
    }
});