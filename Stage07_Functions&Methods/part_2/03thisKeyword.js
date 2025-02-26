const user = {
    username: "Deepak",
    price: 800,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Hari"
// user.welcomeMessage() 
//value is changed

console.log(this) //returns empity array {}

function func(){
    console.log(this);
}

func() //returns differnt things


