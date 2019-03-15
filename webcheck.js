let username = 'loc1234'
let password = 'APC  THIS IS SOMETHING  '

// console.log(password.length);
// console.log(username.toUpperCase());
// console.log(password.toLocaleLowerCase());
// console.log(password.trim());   //CLEAR THE BOTH side of white spaces


let userChecker = function(user) {
    if ((user.includes(123))&&(user.length>6)) {
        return true;
    }
    return false;
}

console.log(userChecker(username));

let passChecker = function(pass) {
    if ((pass.includes('APC'))&&(pass.length>8)) {
        return true;
    }
    return false;
}
console.log(passChecker(password));

