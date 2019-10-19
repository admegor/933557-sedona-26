var link = document.querySelector(".call-to-action__button");
var popup = document.querySelector(".form");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    

    if (!popup.classList.contains("form-hidden")) {
        popup.classList.add("form-hidden");
        popup.classList.remove('form-show');
           
    } else {
        popup.classList.add("form-show"); 
        popup.classList.remove('form-hidden');
    }
    
});