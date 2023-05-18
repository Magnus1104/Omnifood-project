console.log("Hello world");


//set current year
const yearEL = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;


//Make mobile navugation working
const btnNavEL = document.querySelector('.btn-mobile-nav');
const headerEL = document.querySelector('.header');
btnNavEL.addEventListener('click',function(){
    headerEL.classList.toggle("nav-open");
})

//toogle will remove the class if it is there and if it is not there then it will add that
// toogle('class') class is not written with dot


//Sticky Navigation

const sectionHeroEL = document.querySelector('.section-hero');
const obs = new IntersectionObserver(
    function(entries){
        const ent = entries[0];
        console.log(ent);

        if(ent.isIntersecting === false){
            document.body.classList.add('sticky');
        }

        if(ent.isIntersecting === true){
            document.body.classList.remove("sticky")
        }

    },
    //in the viewport
    {
        root:null,
        threshold:0,
        rootMargin:"-80px",
    }
    );
obs.observe(sectionHeroEL);



