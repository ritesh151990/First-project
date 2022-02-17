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

var item = document.querySelectorAll('li');
item[1].style.color='green';
console.log(item);
//item[1].style.backgroundColor='green';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
odd[i].style.backgroundColor='green';
}

