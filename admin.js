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
        elLi.setAttribute('class', 'card my-3 py-2 px-4 bg-secondary position-relative');
        elLi.innerHTML = `
            <li class="list-group-item text-primary">Name: ${item.name}</li>
            <li class="list-group-item">Phone: ${item.phone}</li>
            <li class="list-group-item">Product: ${item.product}</li>
            <span class="position-absolute" style="top: 5px; right: 5px;">ID: ${item.id}</span>
            let elBtn = document.createElement('button');
            elBtn.setAttribute('class', 'btn my-1');
            if(item.st){
               elBtn.setAttribute('class', 'btn-primary );
               elBtn.innerHTML = 'Bajarildi';
            } else {
                elBtn.setAttribute('class', 'btn-primary );
                elBtn.innerHTML = 'Bajarilmadi';
            }
        `
        elList.append(elLi);
    });
        let elLi = document.createElement('li');
        elLi.setAttribute('class', 'card my-3 py-2 px-4 bg-secondary');
        elLi.innerHTML = `Jami buyutmalar soni: ${arr.length}`
        elList.append(elLi);
}
renderUi();
