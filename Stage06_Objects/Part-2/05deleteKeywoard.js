
const obj = {
    name : "deepak",
    age : 18
};

delete obj.age; //Delets the age 

for (const key in obj) {
    console.log(key);
    
}