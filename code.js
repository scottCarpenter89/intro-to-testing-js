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

function isVowel(input) {
    if (typeof input !== 'string') {
        return false;
    } else {
        input = input.toLowerCase();
    }
    switch (input){
        case 'a':
             return true;
             break;
        case 'e':
            return true;
            break;
        case 'i':
            return true;
            break;
        case 'o':
            return true;
            break;
        case 'u':
            return true;
            break;
        case 'y':
            return true;
            break;
        case undefined:
            return false;
            break;
        default:
            return false;
            break;
    }

}

console.log(isVowel('A'));
