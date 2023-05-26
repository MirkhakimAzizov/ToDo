"use strict";
let user = {
  name: 'John',
  password: 'Smith',
  id: 18,
};

let response = await fetch('https://642682b4d24d7e0de471791d.mockapi.io/mir/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json();
console.log(result);
