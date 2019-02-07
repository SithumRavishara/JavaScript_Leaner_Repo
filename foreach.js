const days = ['mon','tue','wde','thu','fri','sat','sun']

// console.log(days[0]);

// let greeting = function() {
//     console.log('Hello! there how re u?');
    
// }

days.forEach(function(day) {
         console.log(day);
        
 })

 days.forEach(function(day,index) {
    console.log(`starts with ${index+1} -- ${day}`);
   
})

const months = ['jan','feb','mar','apr','may','june','july','agu','sep','oct','nov','dec']


months.forEach(function(month,index) {
    console.log(`\n It's ${index+1} month -- ${month}`);
   
})

