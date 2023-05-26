"use strict";
let user = {
  name: 'John',
  password: 'Smith',
  id: 18,
};

let elBtn = document.querySelector(".post-btn");
let elName = document.querySelector("name-input");
let elPhone = document.querySelector("phone-input");
let elProduct = document.querySelector("product-input");
let elForm = document.querySelector("el-form");

elForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log("submit");
  let value1 = elName.value;
  console.log(value1);
});

// elBtn.addEventListener("click", (e)=>{
// e.preventDefault();
//   let value1 = elName.value;
//   console.log(value1);
// });

fetch('https://642682b4d24d7e0de471791d.mockapi.io/mir/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
})
fetch('https://642682b4d24d7e0de471791d.mockapi.io/mir/users')
      .then(response => response.json())
      .then(json => console.log(json));
