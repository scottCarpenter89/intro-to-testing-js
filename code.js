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
    if(input % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

