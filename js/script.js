console.log("Cześć");

let button = document.querySelector(".section__button--delete");
let image = document.querySelector(".section__image");

button.addEventListener("click", () => {

    image.classList.toggle("js-section__withoutImage");

    if (image.classList.contains("js-section__withoutImage")) {
        button.innerHTML = "Przywróć zdjęcie";

    } else {
        button.innerHTML = "Usuń zdjęcie";

    }

});



let check = document.querySelector(".table__cell--check");

check.addEventListener("click", () => {

    check.classList.toggle(".table__imageItem--yes");

    if (check.classList.contains(".table__imageItem--yes")) {
        console.log('TU DZIALA');
        check.innerHTML = "<img class='table__imageItem--yes' src='https://cdn.pixabay.com/photo/2012/04/16/12/28/mark-35780_960_720.png' alt='Niezaliczony'>"
    } else {
        check.innerHTML = "<img class='table__imageItem' src='https://cdn.pixabay.com/photo/2013/07/12/12/44/cancel-146131_960_720.png' alt='Niezaliczony'>"
    }

});
