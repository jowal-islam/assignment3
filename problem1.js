
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

// problem 04 (Delete / Store)

var fileName = "pdfData.jpg";

if(fileName.includes("pdf")||
   fileName.includes("docx")||
   fileName.includes("#")
){
    console.log('Store');
}else{
    console.log('Delete')
}