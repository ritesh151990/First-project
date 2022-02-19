var form= document.getElementById('addForm');
var itemList=document.getElementById('items');
form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems)
function addItem(e){
    e.preventDefault();
    //get input value
    var newItem=document.getElementById('item').value;
    
    //create new li element
    var li=document.createElement('li');
    //add class
    li.className='list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(` Itemname : ${newItem}`));
    itemList.appendChild(li);
    var newDescription=document.getElementById('description').value;
    
  
    li.appendChild(document.createTextNode(`   Description : ${newDescription}`));
    itemList.appendChild(li);
  
//create delete button element
var deleteButton=document.createElement('button')
var editButton=document.createElement('button')
//add classes.delete button
editButton.id='btn btn-danger btn-sm float-right delete';
deleteButton.id= 'btn btn-danger btn-sm float-right delete';
deleteButton.appendChild(document.createTextNode('X'));
editButton.appendChild(document.createTextNode('Edit'));
li.appendChild(deleteButton);
itemList.appendChild(li);
li.appendChild(editButton);
itemList.appendChild(li)
}
//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
  if(confirm('Are You Sure')){
      var li=e.target.parentElement;
      console.log(li);
      itemList.removeChild(li);
             }

    }
}
function filterItems(e){
    //convert text to lowercase
    var text=e.target.value.toLowerCase();
     
    var items=itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item)   {
        var itemName= item.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }


    });
};



