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
  let myObj_serialized =JSON.stringify(myObj);
  
  localStorage.setItem('User-Details', myObj_serialized);
  let myObj_deserialized=JSON.parse(localStorage.getItem('User-Details'));
  console.log(myObj_deserialized);
    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
