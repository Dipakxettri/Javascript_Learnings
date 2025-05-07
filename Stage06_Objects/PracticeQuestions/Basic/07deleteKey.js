
let obj = {
    name:"deepak",
    age:18
};

for (const key in obj) {
    if(key == "name"){
        delete obj[key];
    }
    
}

for (const key in obj) {
    console.log(key);
    
}
