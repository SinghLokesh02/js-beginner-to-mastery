
function debounce(func,delay){
    let timerId;
    return (...args)=>{
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func(...args)
        }, delay);
    }
}


const searchFunction = text => {
    console.log(`Seaching the text : ${text}`);;
}

const debounceFunction = debounce(searchFunction,100);
debounceFunction("h")
debounceFunction("he")
debounceFunction("hey")
debounceFunction("hey ")
debounceFunction("hey I ")
debounceFunction("hey I am")
debounceFunction("hey I am ")
debounceFunction("hey I am lokesh")
