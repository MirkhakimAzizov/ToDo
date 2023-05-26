let arr;
async function dataBase() {
    const response = await fetch('https://642682b4d24d7e0de471791d.mockapi.io/mir/users');
    const database = await response.json();
    arr = database;
}

dataBase(data, PAGE_API, index, sortName);
searchFun();

function renderUi(arr) {
    if (arr && arr.length > 0) {
        arr.forEach(item => {
                    let elLi = document.createElement('li');
                    elLi.setAttribute('class', 'card');
                    elLi.innerHTML = `
      
      
        `
            fragment.append(elLi);
        });
        elList.innerHTML = '';
        elList.append(fragment);
    }
}
