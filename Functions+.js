let myAdder = function(num1,num2){
     let added = num1+num2
     return added;
}

console.log(myAdder(2,3));

let mymultiplyer = function(num1,num2,num3){
    let result = num1*num2*num3
    return result;

}

let guestuser = function(name = 'sithum',coursecounter = 12){
    return 'Hi! '+name+" your course count is "+coursecounter

}

console.log(guestuser('miraji',2));
