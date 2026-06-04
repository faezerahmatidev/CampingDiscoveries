const navBtn = document.querySelector(".nav__btn");
let navMenuOpen = document.querySelector(".nav-menu");
let navOpen = false;


navBtn.addEventListener("click", function(){
    if(navOpen){
        navBtn.classList.remove("nav__btn--open");
        navMenuOpen.classList.remove("nav-menu--open");
        navOpen = false;
    }else{
        navBtn.classList.add("nav__btn--open");
        navMenuOpen.classList.add("nav-menu--open");
        navOpen = true;
    }
    
})

const menuLink = document.querySelector(".menu__link");
let menuLinkOpen = false;

menuLink.addEventListener("click", function(){
    if(menuLinkOpen){
        menuLinkOpen.classList.add("menu__link--active");
        // menuLinkOpen.classList.add("menu__link--active::before");
        menuLinkOpen = true;
    }
    else{
        menuLinkOpen.classList.remove("menu__link--active");
        // menuLinkOpen.classList.remove("menu__link--active::before");
        menuLinkOpen = true;
    }
})