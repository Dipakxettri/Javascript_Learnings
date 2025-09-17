//  Promises 1
// const promises = new Promise((resolve,reject) => {

//     setTimeout(() => {
//         console.log("Timeout is complited");
//         resolve();
//     },2000)
// });

// promises.then(() => {
//     console.log("The promises is complited");
// })


// Promises 2
// new Promise((resolve,reject) =>{
//     setTimeout(()=> {
//         console.log("2nd Timeout is complited");
//         resolve();
//     },2000)
// }).then(() => {
//     console.log("The 2nd Promises is complited");
// })


// Promises 3
// new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve({username:"Deepak"});
//     },2000)
// }).then((user) => {
//     console.log(user);

// })


// Promises 4
// new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let error = false;
//         if(error){
//             console.log("Promise got an error");
//             reject();
//         }else{
//             console.log("Promise runs sucessfully");
//             resolve({username:"Deepak",age:19});
//         }
//     },2000)
// }).then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch(() => {
//     console.log("error");
// }).finally(() => {
//     console.log("Promise got either resolve or rejected");
// })


// Promises 5
// const PromiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (error) {
//             console.log("Promise got an error");
//             reject();
//         } else {
//             console.log("Promise runs sucessfully");
//             resolve();
//         }
//     }, 2000)
// });

// async function cunsumePromise() {
//     try {
//         const response = await PromiseFive;
//         console.log(response);

//     } catch (error) {
//         console.log("error");
//     }
// }
// cunsumePromise();


// Fetching data from API with async/await:
// async function fetchData(){
//     try {
//         const response = await fetch("https://api.github.com/users/Dipakxettri");
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Errorr");
        
//     }
// }
// console.log("hiii");
// fetchData();
// console.log("hiii");


// Fetching data from API with .then.catch:
fetch("https://api.github.com/users/Dipakxettri")
.then((response)=> {
    return response.json();
}) 
.then((data) => {
    console.log(data);
    
})
.catch((reject) => {
    console.log("Something went wrong");
})


// free APIS:
// https://jsonplaceholder.typicode.com/posts
// https://api.github.com/users/Dipakxettri
// https://fakestoreapi.com/products
