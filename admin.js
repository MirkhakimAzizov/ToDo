// let elList = document.querySelector('.list');
async function Data(){
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await res.json();
    console.log(data, 2);
    renderUi(data);
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
