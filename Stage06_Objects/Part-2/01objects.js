 //singletone Object:
// const tinderUser = new Object()

// non singletone Object:
const tinderUser = {}

// adding some things:
tinderUser.id = "1234";
tinderUser.name = "Deepak";

console.log(tinderUser);

// object of object
const regularUser = {
    email: "deepak56@gmail.com",
    fullname :{
        userfullname: {
            firstname: "Deepak",
            lastname: "Ghimire"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname);

