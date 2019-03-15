

// let myTodo = {
//       day:"monday",
//       meeting:"joyo",
//       quantity:10,

//    addmeeting : function() {
//        console.log(this)
//    }
// }

// let myTodostwo = {
//     day:0,
//     meeting:0,
//     quantity:15,

//  addmeeting : function() {
//      console.log(this)
//  }
// }

// myTodo.addmeeting();
// myTodostwo.addmeeting();


// let myTodo = {
//       day:"monday",
//       meeting:4,
//       quantity:10,

//    addmeeting : function(meeting) {
//        this.meeting=this.meeting+meeting;
//    },
//    summary : function() {
//        console.log(`Your number of meetings are ${this.meeting}`);
       
//    }
// }

// myTodo.addmeeting(4);
// myTodo.summary()

let myTodo = {
    day:"monday",
    meetings:14,
    meetingdone:10,
    balance:0,

 addmeeting : function(meeting) {
     this.meetings=this.meetings+meeting;
     this.summary()
 },
Donemeetings : function(num) {
    this.meetingdone=this.meetingdone+num;
    this.summary()
},

 summary : function() {
    this.balance = this.meetings-this.meetingdone;
     console.log(`Your remaining number of meetings are ${this.balance}`);
     
 },

 reset : function() {
    this.balance=0
    this.meetingdone=0
    this.meeting=0
    this.day=0
     console.log(this.day);
     console.log(this.meeting);
     console.log(this.meetingdone);
     console.log(this.balance);
     
 }
}

myTodo.addmeeting(5)
myTodo.Donemeetings(2);
//myTodo.reset();