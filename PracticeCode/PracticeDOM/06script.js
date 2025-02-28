const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn-c');
const listC = document.querySelector("ul")
const listNode = document.querySelectorAll("li")
const input = document.querySelector("input")
let item;

// function to add item
const addItems = ( (name) => {
    item = document.createElement("li");
    item.innerHTML = name
    listC.appendChild(item)
})

// function to clear all
const clearItems = (() => {
    listNode.forEach((list) => {
        
    }
    )})



btn.addEventListener("click", () => {
    addItems(input.value)
})


btn2.addEventListener("click", () => {
    clearItems()
})
