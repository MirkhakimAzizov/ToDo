"use strict";

let elBtn = document.querySelector(".post-btn");
let elName = document.querySelector(".name-input");
let elPhone = document.querySelector(".phone-input");
let elProduct = document.querySelector(".product-input");
let elForm = document.querySelector(".el-form");

// elForm.addEventListener("submit", (e)=>{
//   e.preventDefault();
//   console.log("submit");
//   let value1 = elName.value;
//   console.log(value1);
// });

elBtn.addEventListener("click", (e)=>{
e.preventDefault();
  let value1 = elName.value;
  let value2 = elPhone.value;
  let value3 = elProduct.value;
//   console.log(value1, value2, value3);
  
if(elName.value == "777" && elPhone.value == "777"){
  window.location.href = "admin.html";
} else if(elName.value && elPhone.value && elProduct.value){

    let user = {
    name: value1,
    phone: value2,
    product: value3,
  };
  
  fetch('https://642682b4d24d7e0de471791d.mockapi.io/mir/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });
  
} else {
  alert("Barcha maydonlarni to'ldirish shart !!!");
}
  
  elName.value = '';
  elPhone.value = '';
  elProduct.value = '';
  
});

fetch('https://642682b4d24d7e0de471791d.mockapi.io/mir/users')
      .then(response => response.json())
      .then(json => console.log(json));
