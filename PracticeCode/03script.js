
let grade = prompt("Enter Grade");

switch (grade) {
    case "A+":
    case "A":
    case "a":
    case "a+":
        console.log("Excellent");
        break;

    case "B+":
    case "B":
    case "b":
    case "b+":
        console.log("Great");
        break;


    case "C+":
    case "C":
    case "c":
    case "c+":
        console.log("Good");
        break;


    case "D+":
    case "D":
    case "d":
    case "d+":
        console.log("Average");
        break;

    case "E":
    case "e":
        console.log("Bad");
        break;



    case "F":
    case "f":
        console.log("Fail");
        break;

    default:
        console.log("Incorrect a Input");
        

        

}