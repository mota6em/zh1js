const bookContainerEl = document.querySelector('#container');
const errorEl = document.querySelector('#error');
const searchInputEl = document.querySelector('#searchInput');

searchInputEl.addEventListener('input' , function() {
    if(searchInputEl.value > books.length || isNaN(searchInputEl.value)){
        errorEl.innerText = `A megadott azonosítójú könyv nem létezik, kérjük adjon meg egy másik azonosítót.`;
    }
    else {
        errorEl.innerHTML = '';
    }
    books.forEach(book => {
        if(book.id == searchInputEl){
            book.classList.add('selected');
        }
    });
})

function putBooksIntoContainer(){
    books.forEach((book, index)=>{
        rowDiv = document.createElement('div');
        rowDiv.className = "row";
        rowDiv.id = `book-${index}`;
        div1 = document.createElement('div');
        div1.innerText = `${book.id}`;
        div2 = document.createElement('div');
        div2.innerText = `${book.title}`;
        div3 = document.createElement('div');
        div3.innerText = `${book.release}`;
        div4 = document.createElement('div');
        spanEl = document.createElement('span');
        spanEl.className = 'year';
        spanEl.innerText = '2011';
        div4.append(spanEl);

        rowDiv.append(div1);
        rowDiv.append(div2);
        rowDiv.append(div3);
        rowDiv.append(div4);
        bookContainerEl.append(rowDiv);
    })
}
putBooksIntoContainer();

