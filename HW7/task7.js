const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', inputRange);
function inputRange(e){
    spanRef.style.fontSize = e.currentTarget.value + 'px';
}