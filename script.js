const countValue=document.querySelector('#counter')

// here const variable is taking an object, and we are 
// changing the content of that object

const increment=() =>{
// get value from UIen it is cooonverted to integer

    // here the innertext takes string and th
    let value = parseInt(countValue.innerText); 
    // Value Update
    value=value+1;
    // Vallue set in UI
    countValue.innerText = value;
};

const decrement=() => {
    // get value from UI
    
        let value = parseInt(countValue.innerText);
        // Value Update
        value=value-1;
        // Value set in UI
        countValue.innerText = value;
    };