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
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your actual EmailJS details
    emailjs.sendForm('service_pc83xkd', 'template_ehmc7zu', contactForm, 'YinkD68PwcjFiy3R7')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully';
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
            contactForm.reset()},
            ()=>{
                contactForm.textContent ='Message not sent(service error)'
            })
        };

contactForm.addEventListener('submit', sendEmail);
/*                      scroll uip ---------------------*/
const scrollUp=()=>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                           :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
/* scroll sections active link  */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; // Fixed navigation offset
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]'); // Ensure proper quotes

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link'); // Fixed variable name
        } else {
            sectionClass.classList.remove('active-link'); // Corrected case for classList
        }
    });
};

window.addEventListener('scroll', scrollActive);
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme='ri-sun-line'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const getCurrentTheme=()=> document.body.classList.contains(darkTheme) ? 'dark' :'light'
const getCurrentIcon=()=> themeButton.classList.contains(iconTheme) ? 'ti-moon-line' :'ri-sun-line'
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' :'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}
themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*==============CROLL REVEAL ANIMATION =====================*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay: 200,
    reset :true
})
sr.reveal('.home__perfil, .about__image,.contact__mail',{origin:'right'})
sr.reveal('.home__name, .home__info,.about__container .section__title-1 ,.about__info.contact__social, .contact__data',{origin:'left'})
sr.reveal('.services__card, .projects__card',{interval:100})