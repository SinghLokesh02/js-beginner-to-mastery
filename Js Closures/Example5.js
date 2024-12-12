// Example - 5
function func(){
    let counter = 0;
    return function myFunc(){
        if(counter<1){
            console.log("Hello, You called me !");   
            counter++;         
        }
        else{
            console.log("Mai ek baar already call ho chuka hu.");
        }
    }
}

const one = func();
one()
