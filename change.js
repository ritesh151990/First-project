var form= document.getElementById('addForm');
var itemList=document.getElementById('items');
form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem);
function addItem(e){
    e.preventDefault();
    //get input value
    var newItem=document.getElementById('item').value;
    //create new li element
    var li=document.createElement('li');
    //add class
    li.className='list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);
//create delete button element
var deleteButton=document.createElement('button')
var editButton=document.createElement('button')
//add classes.delete button
editButton.className='btn btn-danger btn-sm float-right delete';
deleteButton.className= 'btn btn-danger btn-sm float-right delete';
deleteButton.appendChild(document.createTextNode('X'));
editButton.appendChild(document.createTextNode('Edit'));
li.appendChild(deleteButton);
itemList.appendChild(li);
li.appendChild(editButton);
itemList.appendChild(li);
}
//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
  if(confirm('Are You Sure')){
      var li=e.target.parentElement;
      itemList.removeChild(li);
             }

    }
}



