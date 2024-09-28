/* to show menu */
const navMenu=document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
/*  Menu show  Validate if const exists*/
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
} 
/* menu hiddem  */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')

    })
}