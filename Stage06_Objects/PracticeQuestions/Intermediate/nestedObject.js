
let userDetail = {
    name : "Deepak",
    address : {
        country:"Nepal",
        village: "Gulmi"
    }


};

// accessing village

for (const key in userDetail.address) {
    if(key == "country"){
     console.log(userDetail.key);
    }
}