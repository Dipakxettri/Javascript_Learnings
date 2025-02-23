// function with an objects:
const jsLearner = {
    name: "Deepak",
    "full name": "Deepak Ghimire",
    age: 18,
    location: "Gulmi",
    email: "dipak56@gmail.com",
}

// treeting function as variable:
jsLearner.greeting = function(){
    console.log("Hello Js");
}

jsLearner.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}

console.log(jsLearner.greeting());
console.log(jsLearner.greetingTwo());
