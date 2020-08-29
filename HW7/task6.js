const inputRef = document.querySelector('#validation-input');


inputRef.onblur = function(){
    if(this.value.length > this.getAttribute('data-length')){
        this.classList.remove('valid');
        this.classList.add('invalid');
    }else if(this.value.length < this.getAttribute('data-length')) {
        this.classList.remove('valid');
        this.classList.add('invalid');

    }else{
        this.classList.remove('invalid')
        this.classList.add('valid');
    }
}