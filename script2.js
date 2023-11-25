let btns = document.querySelectorAll(".btn");
let div = document.querySelector(".content");

btns.forEach((btn) => {
    btn.addEventListener("click", function () {
        let color = getComputedStyle(btn).backgroundColor;
        div.style.backgroundColor = color;
    });
});