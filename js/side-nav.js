let hamburgur_btn = document.querySelector(".hamburgur");
let exit = document.querySelector(".exit");
let right_aside = document.querySelector(".fixed-right-aside");

function slide() {
    right_aside.classList.toggle("right-aside-transition");
    document.querySelector("body").classList.toggle("stop-scrolling");
}

hamburgur_btn.addEventListener("click", slide);
exit.addEventListener("click", slide);
