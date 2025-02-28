const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( (button) => {
    button.addEventListener("click", (event) =>{
        if(event.target.id === "gray"){
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id === "white"){
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id === "black"){
            body.style.backgroundColor = event.target.id;
        }
        else{
            body.style.backgroundColor = event.target.id;
        }
    })
})
