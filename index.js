"use strict";

let elList = document.querySelector(".list");
let todo = [];

const database = async() => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");

    const json = await data.json();
    json.forEach(i => {
        todo.push(i);
    })
    renderUi(todo);

}
database();

function renderUi(arr = todo) {

    arr.forEach(item => {
        let elItem = document.createElement("li");
        elItem.setAttribute("class", "item");
        if (item.completed) {
            elItem.innerHTML = `
        
        <div class="card w-100">
            <div class="card-body bg-info shadow d-flex justify-content-between">
                <h5 class="card-title text-dark">${item.title}</h5>
                <button class="btn btn-primary todo-btn" data-id="${item.id}">Delete</button>
            </div>
        </div>

        `
        } else {
            elItem.innerHTML = `
        
        <div class="card w-100">
            <div class="card-body bg-info shadow d-flex justify-content-between">
                <h5 class="card-title text-dark text-decoration-line-through">${item.title}</h5>
                <button class="btn btn-primary" data-id="${item.id}">Delete</button>
            </div>
        </div>

        `
        }
        elList.append(elItem);
    });

}

elList.addEventListener("click", evt => {

    elList.innerHTML = "";

    evt.preventDefault();
    let id = evt.target.dataset.id;

    if (evt.target.matches(".btn")) {

        todo.forEach(item => {

            if (item.id == id) {
                let index = todo.indexOf(item);
                todo.splice(index, index + 1);
            }

        })

    }
    renderUi(todo);
})