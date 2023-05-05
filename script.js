console.log("Hello world");


//set current year
const yearEL = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;


//Make mobile navugation working
const btnNavEL = document.querySelector('btn-mobile-nav');
const headerEL = document.querySelector('.header');
btnNavEL.addEventListener('click',function(){
    headerEL.classList.toggle('nav-open');
})







