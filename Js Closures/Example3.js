// Example - 3

function hello(x){
    const a = "Apple";
    const b = "Ball";
    return function(){
        console.log(a,b,x);
    }
}

const ans = hello("Hey")
ans()