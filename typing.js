let user=document.querySelector('#Typing_aria');
let result=document.querySelector('.store_text');
// console.log(user);
user.addEventListener("input", function(){
    // console.log(user.value);
    // result.value=user.value;
    result.innerHTML=user.value;
}) 
