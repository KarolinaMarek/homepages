{
    const welcome = () => {
        console.log("Cześć");
    };

    const button = document.querySelector(".section__button--delete");

    const removeImage = () => {
        const image = document.querySelector(".section__image");

        image.classList.toggle("js-section__withoutImage");
        if (image.classList.contains("js-section__withoutImage")) {
            button.innerHTML = "Przywróć zdjęcie";
        } else {
            button.innerHTML = "Usuń zdjęcie";
        }
    };

    const init = () => {
        button.addEventListener("click", removeImage);

        welcome();
    };

    init();
}

{
    const check = document.querySelector(".table__cell--check");

    const checkTrack = () => {

        check.classList.toggle(".table__imageItem--yes");

        if (check.classList.contains(".table__imageItem--yes")) {
            check.innerHTML = "<img class='table__imageItem--yes' src='https://cdn.pixabay.com/photo/2012/04/16/12/28/mark-35780_960_720.png' alt='Niezaliczony'>"
        } else {
            check.innerHTML = "<img class='table__imageItem' src='https://cdn.pixabay.com/photo/2013/07/12/12/44/cancel-146131_960_720.png' alt='Niezaliczony'>"
        }
    };

    check.addEventListener("click", checkTrack);

}