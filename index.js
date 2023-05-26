"use strict";
fetch('https://642682b4d24d7e0de471791d.mockapi.io/mir/users')
      .then(response => response.json())
      .then(json => console.log(json))
