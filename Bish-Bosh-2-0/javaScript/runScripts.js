
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
    
    app.Click = true;
    
});

inputForm['Span'].addEventListener('change', function (e) {
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

console.log(`${app.Click} ${app.Span} ${app.Bish} ${app.Bosh}`);

if (app.Click === true){

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


/* function bishBosh() {
     for (let i = 1; i <= 101; i++) {
         if ((i % 3 == 0) && (i % 4 == 0)) {
             //list Bish-Bosh
             console.log('Bish-Bosh');
         }
         else if ((i % 3) == 0) {
             //list Bish
             console.log('Bish');
         } 
         else if ((i % 4) == 0) {
          //list Bish
          console.log('Bosh');
         }
         else {
             //list number // ´${i}´??
             console.log(i);
         }
 
     }
 } */

