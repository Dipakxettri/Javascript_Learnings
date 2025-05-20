
let age = Number(prompt("Enter your age"));
let group;

switch (true) {
  case (age <= 12):
    group = "Child";
    break;
  case (age <= 19):
    group = "Teen";
    break;
  case (age <= 59):
    group = "Adult";
    break;
  default:
    group = "Senior";
}
console.log(group);



let os = prompt("Enter OS");

switch (os.toLowerCase()) {
  case "windows":
    console.log("You are using Windows OS.");
    break;
  case "macos":
    console.log("You are using macOS.");
    break;
  case "linux":
    console.log("You are using Linux.");
    break;
  default:
    console.log("Unknown operating system.");
}



let month = Number(prompt("Enter Months in index"));
let season;

switch (month) {
  case 12:
  case 1:
  case 2:
    season = "Winter";
    break;
  case 3:
  case 4:
  case 5:
    season = "Spring";
    break;
  case 6:
  case 7:
  case 8:
    season = "Summer";
    break;
  case 9:
  case 10:
  case 11:
    season = "Autumn";
    break;
  default:
    season = "Invalid month";
}
console.log(season);


let sport = prompt("Enter Sports name");

switch (sport.toLowerCase()) {
  case "football":
    console.log("Football is played with 11 players on each team.");
    break;
  case "cricket":
    console.log("Cricket is played with a bat and ball.");
    break;
  case "basketball":
    console.log("Basketball has 5 players per team.");
    break;
  default:
    console.log("Unknown sport.");
}



let planet = prompt("Enter planets name");

switch (planet.toLowerCase()) {
  case "earth":
    console.log("Earth is the only planet known to support life.");
    break;
  case "mars":
    console.log("Mars is known as the Red Planet.");
    break;
  case "jupiter":
    console.log("Jupiter is the largest planet in the solar system.");
    break;
  default:
    console.log("Unknown planet.");
}


let item = prompt("Enter item name");
let price;

switch (item.toLowerCase()) {
  case "burger":
    price = 150;
    break;
  case "pizza":
    price = 250;
    break;
  case "coffee":
    price = 100;
    break;
  default:
    price = "Item not available";
}
console.log(`Price: ${price}`);


let units = Number(prompt("Enter Unit"));
let rate;

switch (true) {
  case (units <= 50):
    rate = units * 5;
    break;
  case (units <= 150):
    rate = units * 7;
    break;
  case (units <= 250):
    rate = units * 10;
    break;
  default:
    rate = units * 15;
}
console.log(`Total bill: Rs. ${rate}`);




let country = prompt("Enter Country name");
let taxRate;

switch (country.toUpperCase()) {
  case "US":
    taxRate = 0.07;
    break;
  case "UK":
    taxRate = 0.2;
    break;
  case "IN":
    taxRate = 0.18;
    break;
  default:
    taxRate = 0;
}
console.log(`Tax rate: ${taxRate * 100}%`);


let department = prompt("Enter name");
switch (department) {
  case "bca":
    console.log("Bachelor in Computer Applications - IT and programming.");
    break;
  case "cs":
    console.log("Computer Science - Theory and development.");
    break;
  case "bba":
    console.log("Bachelor in Business Administration.");
    break;
  default:
    console.log("Department not recognized.");
}


let username = prompt("Enter Username");
let password = prompt("Enter Password");

switch (username.toLowerCase()) {
  case "admin":
    console.log(password === "admin123" ? "Welcome Admin" : "Wrong password");
    break;
  case "teacher":
    console.log(password === "teach456" ? "Welcome Teacher" : "Wrong password");
    break;
  case "student":
    console.log(password === "stud789" ? "Welcome Student" : "Wrong password");
    break;
  default:
    console.log("Invalid user");
}


let coupon = prompt("Enter Coupen");
let discount;

switch (coupon.toUpperCase()) {
  case "SAVE10":
    discount = "10% off";
    break;
  case "SAVE20":
    discount = "20% off";
    break;
  case "FREESHIP":
    discount = "Free Shipping";
    break;
  default:
    discount = "Invalid coupon";
}
console.log(discount);