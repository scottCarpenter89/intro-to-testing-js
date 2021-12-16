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

function isFive(){

}

