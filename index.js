// document.title = 'Title Changed';
// let header = document.querySelector('#main-header');
// header.style.borderBottom = ' solid 5px #ff0700';

// let addItems = document.querySelector('.title');
// addItems.style.fontWeight = 'bold';
// addItems.style.color = 'green';

// let item = document.querySelectorAll('.list-group-item');
// console.log(item[2]);
//  by this we cn give style to single element using child
// item[2].style.color = 'green';
// item[0].style.fontWeight = 'bold';

//  to give the style all elements is a single use for loop
// for(let i=0; i<item.length; i++){
//     item[i].style.background ='yellow';
//     item[i].style.color='green';
//     item[i].style.fontWeight='bolder';
// }
// let items = document.getElementsByTagName('li');

let item = document.querySelectorAll('li');
item[1].style.color='green';
item[1].style.fontWeight='bold';
item[1].style.fontSize='30px';
item[2].style.display = 'none';

let odd = document.querySelectorAll('li:nth-child(odd)');
for(let i=0; i<odd.length; i++){
    odd[i].style.background = 'green';
}



