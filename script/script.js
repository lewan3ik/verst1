let menu = document.querySelector("header ul");
let menuToggle = document.querySelector(".menu-tooggle");

menuToggle.addEventListener("click", function(e){
    menu.classList.toggle("show-menu");
    menuToggle.classList.toggle("active");
});


window.addEventListener('resize',function(){
    if(this.window.innerWidth > 720 && menu.classList.contains('show-menu')){
        menu.classList.remove('show-menu');
        menuToggle.classList.remove("active");
    }
});