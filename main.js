const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);


function onSubmit(e) {
  e.preventDefault();
  if(nameInput.value === '' || emailInput.value === '') {

    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
} else {
  const name=nameInput.value;
  const email=emailInput.value;
 // localStorage.setItem('Name',name);
 // localStorage.setItem('Email',email);
  let myObj={
    Name:name,
    Email :email
  };

       axios.post('https://crudcrud.com/api/c0f959936a4d407d86d994ea934f3133/appointmentData',myObj)
       .then((response) =>{
        showNewUserOnScreen(response.data);
         console.log(response);
       })
       .catch((err) => {
         console.log(err);
       })
  //localStorage.setItem(myObj.Email, JSON.stringify(myObj));
       //nameInput.value = '';
      // emailInput.value = '';
     
        
        
        
     // showNewUserOnScreen(myObj);
     

  }
}
const obj1= JSON.parse(localStorage.getItem('ritesh151990@gmail.com'));

function showNewUserOnScreen(user) {

  const parentNode=document.getElementById('listOfUsers');
  const childHTML= `<li id='${user._id}'> ${user.Name} - ${user.Email}
   <button style='background-color:skyblue' onclick=editUser('${user.Name}','${user.Email}','${user._id}')>
   EDIT</button><button style='background-color:wheat' onclick=deleteUser('${user._id}')>DELETE</button> </li>`;
  parentNode.innerHTML =parentNode.innerHTML+ childHTML;
  
 }


document.addEventListener('DOMContentLoaded', ()=>{
axios.get('https://crudcrud.com/api/c0f959936a4d407d86d994ea934f3133/appointmentData')
 .then((response)=>{
   
   for( var i=0; i<response.data.length;i++){
     showNewUserOnScreen(response.data[i]);
   }
 })
 .catch((err) =>{
   console.log(err);
 })

  // Object.keys(localStorage).forEach((key) => {
   //   stringifiedDetailsOfPeople = localStorage.getItem(key);
     // detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
  //    showNewUserOnScreen(detailsOfPeople);
    //  });
});
function editUser(name,emailId,userId){
     document.getElementById('name').value=name;
     document.getElementById('email').value=emailId;
          deleteUser(userId);

}
 function deleteUser(userId){
   axios.delete(`https://crudcrud.com/api/c0f959936a4d407d86d994ea934f3133/appointmentData/${userId}`)
   .then((response)=>{
     console.log(response);
    removeUserFromScreen(userId);
   })
   .catch((err) =>{
     alert(err);
   })
   //localStorage.removeItem(emailId);
  // console.log(emailId);
   // removeUserFromScreen(emailId);
   
   }
   function removeUserFromScreen(userId){
   const parentNode=document.getElementById('listOfUsers');
   const childNodeToBeDeleted=document.getElementById(userId);
   parentNode.removeChild(childNodeToBeDeleted);
   }
