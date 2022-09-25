

let hamburger = document.querySelector('.hamburger');

let Activeburger = document.querySelector('.activeburger')

let navMenu = document.querySelector('.nav-menu');

function Bar(){
    hamburger.addEventListener("click", hamburger.classList.add("active"), Activeburger.classList.add("active"), navMenu.classList.add("active"));
}


function removeBar(){
    Activeburger.addEventListener("click", hamburger.classList.remove("active"), Activeburger.classList.remove("active"), navMenu.classList.remove("active"));
}

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    Activeburger.classList.remove("active"); 
    navMenu.classList.remove("active");
}));