// the values should be same in map

const map = new Map()
map.set('IN', "India")
map.set('NEP', "Nepal")

console.log(map);

// looping into map:
for(const key of map){
    console.log(key);
    
}
// or - Recommended
for(const [key,value] of map){
    console.log(key, ":-", value);
    
}