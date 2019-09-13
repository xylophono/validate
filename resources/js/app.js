import validateDate from './validateDate.js';

let form = document.querySelector('#mainform');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    let date = document.querySelector('#dateinput').value;

    let output = date + ' is <strong>' + (validateDate(date) ? 'valid' : 'invalid') + '</strong>.'

    document.querySelector('.form__result').innerHTML = output;
});