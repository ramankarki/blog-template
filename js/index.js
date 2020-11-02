let hamburgur_btn = document.querySelector(".hamburgur-btn").addEventListener("click", run);
let aside = document.querySelector(".aside-right");

function run() {
    aside.classList.toggle("aside-transition");

}
