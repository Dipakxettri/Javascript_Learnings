
// Note : The child function can take any values from parent but parent can't!

function one(){
    const username = "Deepak"

    function two(){
        const website = "GitHub"
        console.log(username);
        
    }
    // console.log(website) 

    // two() 
}

one()

// Note : new can access a normal function before inilization but a function on variable can't  