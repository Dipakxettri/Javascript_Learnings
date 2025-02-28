const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const resultsV = document.querySelector("#results")

    if(height === "" || height < 0 || isNaN(height)){
        resultsV.innerHTML = "Please give a valid height";
    }
    
    else if(weight === "" || weight < 0 || isNaN(weight)){
        resultsV.innerHTML = "Please give a valid weight";
    }

    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        resultsV.innerHTML = `<span>${bmi}</span>`
    }

})
    