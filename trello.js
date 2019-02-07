const mytodos = []

mytodos.push('progremming 10 AM')
mytodos.push('learmimg javascript')
mytodos.push('Going lectures')

mytodos.forEach(function(todo,index) {
    console.log(`Your task NO.${index + 1} is ${todo}`);
    
});

//---------------------------------------------------------------------------------

let Markmaker = function(currentmarks,totalMarks) {
    let precentage = (currentmarks/totalMarks)*100

    let Grade 
    if (precentage>80) {
        Grade = " A ";
    } else if(precentage>60) {
        Grade = " B ";
    }else if(precentage>50){
        Grade = " C ";
    }else if(precentage>35){
        Grade = " S ";
    }else{
        Grade = " F ";
    }
    return`Hi there your Grade is ${Grade} and precentage is ${precentage} !`
}

let result = Markmaker(92,100)
console.log(result);



