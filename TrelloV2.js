

let mytoDo = {
    meetings : 0,
    meetingdone : 0,

}

let addmeeting = function(todo,meet = 0){
    todo.meetings = todo.meetings + meet

}

let meetingDone = function(todo,meet = 0) {
    todo.meetings = todo.meetings - meet
}

let resetDay = function(todo){
    todo.meetings = 0
    todo.meetingdone = 0

}

let getsummeryoftheDay = function (todo) {
    let result = todo.meetings - todo.meetingdone
    return `Your left meetings are ${result}.`
}

addmeeting(mytoDo,5)
addmeeting(mytoDo,3)
console.log(mytoDo);
meetingDone(mytoDo,6)
console.log(mytoDo);
console.log(getsummeryoftheDay(mytoDo));
console.log(mytoDo);

