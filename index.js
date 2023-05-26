"use strict";
let s = ["name":"MR","password":"27"];
fetch('https://642682b4d24d7e0de471791d.mockapi.io/mir/users', {
      method: "POST",
      body: s,
})
      .then(response => response.json())
      .then(json => console.log(json))
