
let arry = [
    { name:"deepak", id:2 },
    { name:"Hari", id:8 },
];

arry.forEach(element => {
   for (const el in element) {
    console.log(element[el]);
    
   }    
});