// looping into objects - does't work method like for map and arrays
const obj = {
    'user1' : 'Dipak',
    'user2' : 'shyam'
}

for (const key in obj) {
    console.log(`${key} is ${obj[key]}`);
}
