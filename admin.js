let elList = document.querySelector('.list');
async function Data(){
    let res = await fetch('https://642682b4d24d7e0de471791d.mockapi.io/mir/users');
    let data = await res.json();
    console.log(data, 1);
}
Data();
function renderUi(arr){
    arr.forEach(item=>{
        let elLi = document.createElement('li');
        elLi.innerHTML = `
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
        `
        elList.append(elLi);
    });
}
