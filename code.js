// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if (typeof name !== 'string'){
        return 'Hello, World!';
    } else if (name === ''){
        return 'Hello, World!';
    } else if(!isNaN(name)){
        return 'Hello, World!';
    }
 return 'Hello, ' + name + '!';
}

function isFive(number){
    number = parseInt(number);
    if(number === 5){
        return true;
    } else {
        return false;
    }
}

function isEven(input){
    if (!isNaN(input)) {
        input = Math.abs(parseInt(input));
    } else {
        return false;
    }
    return input % 2 === 0;
    // if(input % 2 === 0) {
    //     return true;
    // } else if (input === Infinity) {
    //     return false;
    // } else if (typeof input === 'boolean') {
    //     return false;
    // } else {
    //     return false;
    // }
}

