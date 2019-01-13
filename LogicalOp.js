// && - AND Operator
// || - OR Operator

let IsVerified = false
let IsLogged = false
var DonePayments = true
var IsGuest = false

if (IsVerified&&IsLogged&&DonePayments) {
    console.log('Wellcome to the Heaven!')
    console.log('Please be make ur sign.')
}if ( IsVerified || !IsGuest) {
    console.log("Allow for the Access.")
} else {
    console.log('Please be Verified..!')
}