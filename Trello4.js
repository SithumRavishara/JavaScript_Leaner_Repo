// const mytodos = ['buy bread','go to gym','go to uni']

// console.log(mytodos.indexOf('buy bread'));
//console.log(mytodos.indexOf('buy Bread'));
//console.log(mytodos[mytodos.indexOf('buy Bread')]);

const thisfirst = [{
     title:'go to gym',
     todo:false
},{
    title:'buy bread',
    todo:false
},{
    title:'sleeping',
    todo:true
}]

// let getindex = thisfirst.findIndex(function(todo,index) {
//     console.log(todo);
    
//     return todo.title==='sleeping'
// })

// console.log(getindex);


// const findtodo = function(mytodo,title) {
//     const index = mytodo.findIndex(function(todos,index){
//     return todos.title.toLowerCase()===title.toLowerCase()

//     })
//     return thisfirst[index]
// }

// let printme = findtodo(thisfirst,'go to GYm')

// console.log(printme);


const findtodo = function(mytodo,title) {
    const index = mytodo.find(function(todos,index){
    return todos.title.toLowerCase()===title.toLowerCase()

    })
    return console.log(thisfirst[index]);
    thisfirst[index]
}

let printme = findtodo(thisfirst,'go to GYm')

// console.log(printme);