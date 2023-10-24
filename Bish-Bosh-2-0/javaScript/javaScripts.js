//already implied in classes and modules when use of them, forces declaration of variables.
//'use strict';

// Best practise declare a const object for global variables to reduce clutter.
/* const app = {
    rename1: 'value',
    rename2: 'value',
    rename3: 'value'
}; */



export function BishBosh(number,bish,bosh){
    if ((number % bish == 0) && (bosh % 4 == 0)) {
        //change to return
        return 'Bish-Bosh';
    }
    else if ((number % bish) == 0) {
        //change to return
        return 'Bish';
    } 
    else if ((number % bosh) == 0) {
        //change to return
         return 'Bosh';
    }
    else {
        //change to return
        return number;
    }

}



