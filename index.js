document.title = 'Title Changed';
let header = document.querySelector('#main-header');
header.style.borderBottom = ' solid 5px #ff0700';

let addItems = document.querySelector('.title');
addItems.style.fontWeight = 'bold';
addItems.style.color = 'green';

let item = document.querySelectorAll('.list-group-item');
console.log(item[2]);
item[2].style.color = 'green';
item.style.fontWeight = 'bolder';

