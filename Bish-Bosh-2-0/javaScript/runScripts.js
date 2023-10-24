
//already implied in classes and modules when use of them, forces declaration of variables.
//'use strict';

// include function:
 import { BishBosh } from './javaScripts.js';

// Create reference to button from index.html
const btn1 = document.querySelector('#btn1');
const liResult = document.querySelector('#Result');
const inputForm = document.querySelector('#Bish-Bosh-Form');


//Create reference constants for creating and adding element to list.
const node = document.createElement("li");


// Best practise declare a const object for global variables to reduce clutter.
/* const app = {
    Let1: null,
    Let1: null,
    Let1: null,
    Let1: null
}; */

console.log('Start');

//let li = document.createElement('li');

btn0.addEventListener('click', function (e) {
    let a = new FormData(inputForm);
    let b = [...FormData.entries()];
    console.log(b);
    
    function bishBosh(inputSpan,inputBish,inputBosh) {
        for (let i = 1; i <= Span; i++) {
            
            let li = document.createElement('li'); 
            li.innerText = BishBosh(i,Bish,Bosh);

            console.log(li.innerText);

            console.log(li);

            console.log(liResult);

            liResult.appendChild(li);
        }
       
    }
   
   /*  let li = document.createElement('li'); 

    li.innerText = bishBosh(); 
    console.log(li.innerText);
    
    //app.textLi.appendChild(app.output);
    console.log(li);
    console.log(liResult);
    liResult.appendChild(li);
    //liResult.innerHTML+=`${li.innerText}`; */
});
//liResult.appendChild(li);



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

