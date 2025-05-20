function object(obj) {
    let array = [];
    
    for (const key in obj) {
        array.push(key)
    }

    return array.join(" ");
    
}

let obj1 = {
    name:"deepak",
    age:18
};

console.log(object(obj1));
