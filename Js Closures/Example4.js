// Example - 4
function takePowerAndReturnFunctionOfCube(power){
    return function cube(number){
        console.log(number**power); 
    }
}

const a = takePowerAndReturnFunctionOfCube(3);
a(4)

