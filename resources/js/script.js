// const hamburger = document.querySelector('.hamburger');
// const nav__menu = document.querySelector('.nav__menu');

// const mob_nav_btn = document.querySelector('.mob_nav_btn');


// hamburger.addEventListener('click', mobileMenu);
// // mob_nav_btn.addEventListener('click', rm_MobileMenu);


// function mobileMenu(){
//     hamburger.classList.toggle("is-active");
//     nav__menu.classList.toggle("is-active");
// }


/*======== MENU SHOW ==========*/
const hamburger = document.querySelector('.hamburger'),
      toggleMenu = document.querySelector('.nav__menu'),
      closeMenu = document.querySelectorAll('.nav-close');

/*======== SHOW (IS-ACTIVE) =======*/
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle("is-active");
    toggleMenu.classList.toggle("is-active");
})

/*======== HIDDEN ===========*/
closeMenu.forEach(n => n.addEventListener('click', ()=>{
    toggleMenu.classList.remove("is-active");
    hamburger.classList.toggle("is-active");
}))