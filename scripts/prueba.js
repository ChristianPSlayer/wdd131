
const DAYS = 6;
const LIMIT = 30;

let studentReport = [11, 42, 33, 64, 29, 37, 44];

for(let i = 0; i < studentReport.length; i++){
     if(studentReport[i] < LIMIT){
        console.log(studentReport[i]);
    }

}
   
let i = 0;
while (i < studentReport.length){
    if(studentReport[i] < LIMIT){
        console.log(studentReport[i]);
    }
    i++;
}

studentReport.forEach(function (elemet){
    if(elemet < LIMIT){
        console.log(elemet)
    }
});

for (let i in studentReport){
    if(studentReport[i]< LIMIT){
        console.log(studentReport[i]);
    }
}
let day = 7;