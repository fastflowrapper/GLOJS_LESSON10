'use strict';

let books = document.querySelector('.books'),
    booksCollection = books.querySelectorAll('.book'),
    book1 = booksCollection[1],
    book2 = booksCollection[0],
    book3 = booksCollection[4],
    book4 = booksCollection[3],
    book5 = booksCollection[5],
    book6 = booksCollection[2];
    
books.prepend(book6);
books.prepend(book5);
books.prepend(book4);
books.prepend(book3);
books.prepend(book2);
books.prepend(book1);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
document.body.style.backgroundRepeat = 'repeat';
document.body.style.backgroundSize = '30%';

book3.querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';

document.querySelector('.adv').remove();

let book2Chapters = book2.querySelector('ul').querySelectorAll('li');
book2Chapters[10].before(book2Chapters[2]);
book2Chapters[3].after(book2Chapters[8]);
book2Chapters[3].after(book2Chapters[6]);

let book5Chapters = book5.querySelector('ul').querySelectorAll('li');
book5Chapters[4].after(book5Chapters[2]);
book5Chapters[7].after(book5Chapters[5]);
book5Chapters[1].after(book5Chapters[9]);

let book6Chapter8 = document.createElement('li');
book6Chapter8.textContent = 'Глава 8: За пределами ES6';
book6.querySelectorAll('li')[9].before(book6Chapter8);
