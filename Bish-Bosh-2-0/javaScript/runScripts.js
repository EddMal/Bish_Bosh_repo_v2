
//already implied in classes and modules when use of them, forces declaration of variables.
//'use strict';

// include function:
 import { BishBosh } from './javaScripts.js';

// Create reference to button from index.html
const btn0 = document.querySelector('#btn0');
const liResult = document.querySelector('#Result');
const inputForm = document.querySelector('#Bish-Bosh-Form');


//Create reference constants for creating and adding element to list.
const node = document.createElement("li");


// Best practise declare a const object for global variables to reduce clutter.
const app = {
    Span: null,
    Bish: null,
    Bash: null,
    Click: false
};

console.log('Start');

inputForm['btn0'].addEventListener('click', function (e) {
   e.preventDefault();

   liResult.replaceChildren('');
   
    app.Click = true;
    
    console.log(`${app.Click} ${app.Span} ${app.Bish} ${app.Bosh}`)

    if (app.Click === true){
        

        //console.log(`${app.Click} ${app.Span} ${app.Bish} ${app.Bosh}`);
        for (let i = 1; i <= app.Span; i++) {

            
            let li = document.createElement('li'); 
            li.innerText = BishBosh(i,app.Bish,app.Bosh);
    
            console.log(li.innerText);
    
            console.log(li);
    
            console.log(liResult);

            
    
            liResult.appendChild(li);

            
        }
    
        app.Click = false;
       
    }
    
});

inputForm['Span'].addEventListener('click', function (e) {
    
    app.Span = e.target.value;
    console.log(e.target.value);
});

inputForm['Bish'].addEventListener('change', function (e) {
    app.Bish = e.target.value;
    console.log(e.target.value);
});

inputForm['Bosh'].addEventListener('change', function (e) {

    app.Bosh = e.target.value;
    console.log(e.target.value);
});



