var form = document.querySelector('#addForm');
var item = document.querySelector('#items');

//  adding event listener of submit 
form.addEventListener('submit' , addItem);
//  adding delete event listner
item.addEventListener('click',removeItem);


//  additem function
function addItem(e){
    e.preventDefault();

    // taking input value and storin in newItem
    var newItem = document.querySelector('#item').value;

    // creating a li for storing item in ul
    var li = document.createElement('li');
    // adding the class
    li.className = 'list-group-item';
    // adding the text and append it to li
    li.appendChild(document.createTextNode(newItem));

    // create a delete button
    var deleteButton = document.createElement('button');
    var editButton = document.createElement('button');

    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    editButton.className = 'btn btn-primary btn-sm float-right edit';

    deleteButton.appendChild(document.createTextNode('x'));
    editButton.appendChild(document.createTextNode('Edit'));

    // append it to li
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    //  appending the li to the ul
    item.appendChild(li);
}   

// remove item function
function removeItem(e){
    console.log(1);
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li =e.target.parentElement;
            item.removeChild(li);
        }
    }
}