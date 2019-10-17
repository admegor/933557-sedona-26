var link = document.querySelector(".call-to-action__button");
var popup = document.querySelector(".form");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("form-show");
});