// let elList = document.querySelector('.list');
async function Data(){
    let res = await fetch('https://642682b4d24d7e0de471791d.mockapi.io/mir/users');
    let data = await res.json();
    console.log(data, 3);
    return data;
}
Data();
async function renderUi(){
    let arr = await Data();
    arr.forEach(item=>{
        let elLi = document.createElement('li');
        elLi.setAttribute('class', 'card my-3');
        elLi.innerHTML = `
            <li class="list-group-item">${item.name}</li>
            <li class="list-group-item">${item.phone}</li>
            <li class="list-group-item">${item.product}</li>
        `
        elList.append(elLi);
    });
}
renderUi();
