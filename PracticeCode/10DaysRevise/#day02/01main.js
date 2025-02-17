let c = Number(prompt("Enter marks of C: "));
let python = Number(prompt("Enter marks of python:"));
let java = Number(prompt("Enter marks of Java:"));
let dsa = Number(prompt("Enter marks of DSA:"));

let totalMarks = c + python + java + dsa;
let totalMaxMarks = 400;

let grade;
// (totalMrks / totalMaxMrks) * 100;

let percentage = (totalMarks / totalMaxMarks) *100;
if (percentage >= 90 && percentage <=100){
    grade = "A+";
}

else if (percentage >= 80 && percentage <=89){
    grade = "A";
}


else if (percentage >= 70 && percentage <=79){
    grade = "B+";
}


else if (percentage >= 60 && percentage <=69){
    grade = "B";
}

else if (percentage >= 50 && percentage <=59){
    grade = "C+";
}

else if (percentage >= 40 && percentage <=49){
    grade = "C";
}

else{
    grade = "Fail";
}

console.log(grade);



