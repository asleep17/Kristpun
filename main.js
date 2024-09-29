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
/* remove menu mobile */
const navLink=document.querySelectorAll('.nav__link')

const linkAction=() =>{
    const navMenu=document.getElementById('nav-menu')
    // when we click on each nav__link,we removethe show-class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction));
/*-------------------------------SHADOW HEADER ----------------------*/
const shadowHeader = ()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classlist.add('shadow-header')
                       : header.classlist.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)