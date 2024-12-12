// Example - 1
function outerFunction(){
    function innerFunction(){
        console.log("Hello World !");
    }
    return innerFunction;
}

const ans = outerFunction();
console.log(ans);
ans()