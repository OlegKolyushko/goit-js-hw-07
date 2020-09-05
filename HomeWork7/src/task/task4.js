const counterRef = document.querySelector('#counter');
const valueRef = counterRef.querySelector('#value');


let counterValue = 0;


counterRef.addEventListener('click', countFunc);

function decrement(){
    counterValue-=1;
    
};

function increment(){
    counterValue+=1;
};


function countFunc(event){
    const act = event.target.getAttribute('data-action');
    if(act === 'decrement'){
        decrement();
    };
    if(act === 'increment'){
        increment();
    };
    valueRef.textContent = counterValue;

};




