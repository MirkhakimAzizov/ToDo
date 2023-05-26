async function dataBase(arr, api1, api2, api3 = sortName, func = renderUi) {
    const response = await fetch(`${BASE_API}${api1}${api2}&maxResults=6${SORT_API}${api3}`);
    const database = await response.json();
    arr = database.items;
    func(arr);
    pageNumber = database.totalItems;
    pagenation(pageNumber);
    moreInfo(arr);
    basket(arr);
    $('.header__text').textContent = `Showing ${pageNumber} Result(s)`;
}

dataBase(data, PAGE_API, index, sortName);
searchFun();

function renderUi(arr) {
    if (arr && arr.length > 0) {
        arr.forEach(item => {
                    let elLi = document.createElement('li');
                    elLi.setAttribute('class', 'card');
                    elLi.innerHTML = `
        <span class="m-4 card__img rounded-3">
            <img src="${`http://books.google.com/books/content?id=${item.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`}" class="card-img-top p-4 rounded-3" alt="${item.volumeInfo.title}">
        </span>
        <div class="card-body">
            <h5 class="card-title text-dark m-0" title="${item.volumeInfo.title}">${item.volumeInfo.title ? item.volumeInfo.title.slice(0,20) : 'not a title!'}...</h5>
            <p class="card-text m-0 p-0 py-1" title="${item.volumeInfo.authors}">${item.volumeInfo.authors ? item.volumeInfo.authors[0].slice(0,30) : 'not a autor!'}...</p>
            <span class="text d-block mb-2">${item.volumeInfo.publishedDate ? item.volumeInfo.publishedDate.slice(0,4) : 'not a date!'}</span>
            <div class="mb-1 d-flex gap-1 justify-content-between align-items-center">
                <button class="btn btn-warning text-dark w-50" data-basketId=${item.id}>Bookmark</button>
                <button style="background: rgba(13, 117, 255, 0.05)" class="btn btn-light text-primary w-50" data-modalId=${item.id} data-bs-toggle="modal" data-bs-target="#exampleModal">More Info</button>
            </div>
            <a href="${item.volumeInfo.previewLink}" class="btn btn-dark text-light w-100 mt-1" target="_blank">Read</a>
        </div>
        `
            fragment.append(elLi);
        });
        elList.innerHTML = '';
        elList.append(fragment);
    }
}
