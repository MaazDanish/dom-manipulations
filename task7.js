// let's learn parent node child node sibling node
var item = document.querySelector('#items');
// console.log(item.parentNode.parentNode.parentNode);
// item.parentNode.style.background = 'green';

// parentElemenet
// item.parentElement.style.background = 'yellow';
// console.log(item.parentElement.parentElement);

// childrens ---->>>> use children instead of childNode

// console.log(item.childNodes);
// console.log(item.children);
// item.children[1].style.background = 'yellow';

// firstchild -- this will aslo include white space or blacn spaces --> Dont use it
// console.log(item.firstChild); 

// firstelementchild will not include any spaces so USE IT
// console.log(item.firstElementChild);
// item.firstElementChild.textContent = 'item list 21'; 

// lastNode --> this will also include white spaces
// lastElementnode
// console.log(item.lastChild)
// console.log(item.lastElementChild);

//  siblings --- nextsiblings is also include white spaces  ---> nextelementsiblings
// console.log(item.nextSibling);
// console.log(item.nextElementSibling);

// siblings -- previous siblings also include spaces
// console.log(item.previousSibling);
// console.log(item.previousElementSibling);
// item.previousElementSibling.textContent = 'Previous Siblings';

// --------------------------------------------------------------------------------
// create a new elemenet
var newDiv = document.createElement('div');

// add class and id
newDiv.className = 'hello';
newDiv.id = 'hello1';
// console.log(newDiv);

newDiv.setAttribute('title','helloa');
// console.log(newDiv);

//  add text 
var newDivText = document.createTextNode('Created a node using js');

//  append it 
newDiv.appendChild(newDivText);

//  inserting in html
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv,h1);

//  creating li
var li = document.createElement('li');


li.className ='list-group-item'
console.log(li);

var liText = document.createTextNode('Hello');
li.appendChild(liText);

var ul = document.querySelector('#items');
var Li = document.querySelector('.list-group-item'); 

li.style.fontSize = '30px';
li.style.background = 'yellow';
li.style.fontWeight = 'bold';


ul.insertBefore(li,Li);