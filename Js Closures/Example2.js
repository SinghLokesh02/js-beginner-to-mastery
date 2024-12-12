// Example - 2

function printFullName(firstName,lastName){
    function printName(){
        console.log(firstName + lastName);   
    }
    return printName;
}

const ans = printFullName("Lokesh","Singh");
ans()
