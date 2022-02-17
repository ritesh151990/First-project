//var title= document.getElementsByClassName('title');

//console.log(title);
//title[0].style.fontSize='xx-large';
//title[0].style.color='green';
//var list= document.getElementsByClassName('list-group-item');
//list[2].style.color='green';


//var li=document.getElementsByTagName('li');

//for(let i=0;i<li.length;i++)
   // li[i].style.fontWeight='bold';
//var item=document.querySelector('.list-group-item');
//item.style.color='red';

//var item = document.querySelectorAll('li');
//item[1].style.color='green';
//console.log(item);
//item[1].style.backgroundColor='green';
//var odd=document.querySelectorAll('li:nth-child(odd)');
//for(var i=0;i<odd.length;i++){
//odd[i].style.backgroundColor='green';
//}
//var itemList=document.querySelector('#items');
//parent node
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='grey';


//console.log(itemList.parentNode);
//itemList.parentElement.style.backgroundColor='grey';
//itemList.children[1].style.backgroundColor='yellow';
//first element child
//itemList.lastElementChild.textContent='Hello 4';
var newDiv=document.createElement('div');
newDiv.className='Hello';
newDiv.id='hello1';
newDiv.setAttribute('title','Hello Div');
var newDivtext=document.createTextNode('Hello World');
newDiv.appendChild(newDivtext);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
newDiv.style.fontsize='30px';
container.insertBefore(newDiv,h1);

var newDiv1=document.createElement('div')
console.log(newDiv1);
newDiv1.className='Hi';
newDiv1.id='Hi1';
newDiv1.setAttribute('title','hello');
var newDiv1Text= document.createTextNode('Hello');
newDiv1.appendChild(newDiv1Text);
var contain=document.querySelector('#items');
console.log(contain);
var h2=document.querySelector('ul .list-group-item');
console.log(h2);
contain.insertBefore(newDiv1,h2);
