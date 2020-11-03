let hamburgur_btn = document.querySelector(".hamburgur-btn").addEventListener("click", slide);
let exit = document.querySelector(".exit").addEventListener("click", slide);;
let right_aside = document.querySelector(".right-aside");

function slide() {
    right_aside.classList.toggle("right-aside-transition");
}