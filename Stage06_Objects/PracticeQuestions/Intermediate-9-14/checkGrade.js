
let arry = [
    {name:"Deepak", grade:'A'},
    {name:"Hari", grade:'B'},
    {name:"Reya", grade:'A'},
    {name:"Gita", grade:'E'},
];

arry.forEach(element => {
    for (const key in element) {
        if(key == "grade"){
            if(element[key] == 'A'){
                console.log(element.name);
            }   
        }
    }       
    });


// shorter
arry.forEach(element => {
    if(element.grade === 'A'){
        console.log(element.name);
    }
    
});