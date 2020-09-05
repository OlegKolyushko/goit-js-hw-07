const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');


inputRef.oninput = function(){
    outputRef.innerHTML = inputRef.value
}