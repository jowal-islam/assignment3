
// // problem -01 (Divide the Asset)
// var area = 800;
// var perArea = area /2;
// console.log(perArea);

// // problem - 02 (Cycle or laptop)
// var money = 9999;

// if(money >= 25000){
//     console.log('Laptop');
// }else if(money >= 10000){
//     console.log('Cycle');
// }else {
//     console.log('Chocolate');
// }

// // problem -03 (Medicine planner)
// var LastDay = 11;

// for(var day = 1; day <= LastDay; day++){
//    if(day % 3 === 0){
//      console.log( day , '- medicine');
//    }else{
//      console.log(day,'- rest')
//    }
// }

// // problem 04 (Delete / Store)

// var fileName = "pdfData.jpg";

// if(fileName.includes("pdf")||
//    fileName.includes("docx")||
//    fileName.includes("#")
// ){
//     console.log('Store');
// }else{
//     console.log('Delete')
// }

// // problem-05 
// // format = name + roll + . + depertment + @ph.ac.bd
// var student = {
//     name: "jowel",
//     roll: 20,
//     depertment : "cse"
// }
// var email = student.name + student.roll + "." + student.depertment + "@ph.ac.bd";
// console.log(email);


// problem - 06 : Current selary
var experience = 40;
var startigSalary = 30000;
var increaseRate = 0.05;
var finalSalary = 0;
for (let i = 1; i <= experience; i++){
    startigSalary = startigSalary * (1 + increaseRate);
    finalSalary = startigSalary;
}
console.log(finalSalary.toFixed(2));