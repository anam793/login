const myForm=document.querySelector('#myform');
const nameInput=document.querySelector('#name');
const emailinput=document.querySelector('#email');
const passwordInput=document.querySelector('#password');
myForm.addEventListener('submit', onSubmit);


function onSubmit(e){


    if(nameInput.value===''||emailinput.value===''||passwordInput.value===''){
        alert('please enter fields.');
    }else{
        console.log('success'); 
        nameInput.value='';
        emailinput.value='';
        passwordInput.value='';
    }
}