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