
// Theme SetUp:
const toggle = document.querySelector("#toggleB");
const calc = document.querySelector(".calc");

toggle.addEventListener("click", () => {
    let text = toggle.innerHTML;
    if (text === "Dark") {
        calc.style.backgroundColor = "black";
        toggle.innerHTML = "White"
    }
    else if (text === "White") {
        calc.style.backgroundColor = "white";
        toggle.innerHTML = "Dark"
    }
})


//Logic:
const display = document.querySelector("#displayF");
const btnN = document.querySelectorAll(".buttonN");
const btnO = document.querySelectorAll(".buttonO");
const btnE = document.querySelector(".buttonE");
const btnC = document.querySelector(".buttonC");
const btnCE = document.querySelector(".buttonCE");

btnN.forEach((el) => {
    el.addEventListener("click", (e) => {
        let num = e.target.innerHTML;
        display.value += num;
    });
});

btnO.forEach((el2) => {
    el2.addEventListener("click", (e2) => {

        let operator = e2.target.innerHTML;
        if (operator === "x") operator = "*";
        if (operator === "÷") operator = "/";
        display.value += operator;
    });
});

btnE.addEventListener("click", () => {

    if (display.value.length != 0) {
        try {
            display.value = eval(display.value);
        } catch (err) {
            display.value = "Error";
        }
    }
    else{
        display.value = "";
    }


});

btnCE.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

btnC.addEventListener("click", () => {

    display.value = "";
});
