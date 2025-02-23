// object literals

// creating object:
const jsLearner = {
    name: "Deepak",
    "full name": "Deepak Ghimire", //can't access using dot.
    age: 18,
    location: "Gulmi",
    email: "dipak56@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday","Friday"]
}

// accessing objects:
console.log(jsLearner.name);
// or
console.log(jsLearner["name"]);
