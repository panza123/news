let inputBox = document.querySelector('#input-box');
let open = document.querySelector('#open');
let invalid = document.querySelector('#letter')
let hidden = document.querySelector('.hidden')
let article = document.querySelector('article')
let changeEmail = document.querySelector('#changemail')
let close = document.querySelector('#close');

console.log(close)

open.addEventListener('click',e =>{
 e.preventDefault();
//  when the wrong email is input in the wrong way
    if(!inputBox.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
        letter.innerText = 'invalid email';
        inputBox.style.backgroundColor = 'hsl(4, 94%, 87%)'
        inputBox.style.color = 'red'
        return false;
        
    }
    // when the mail is correct pop message will display
  else{
    e.preventDefault();
    letter.innerText = '';
    hidden.style.display = 'block'
    changeEmail.textContent = inputBox.value
    article.style.display = 'none'
   return true;

  }
})
// when popup display in other to go back the maain page
close.addEventListener('click',e =>{
  e.preventDefault();
  hidden.style.display = 'none'
  article.style.display = 'block'
  article.style.display = 'flex'
}) 