const allGalleryItems = document.querySelectorAll('.item');
const modalBody = modal.querySelector(".modal__body");
const closeButton = modal.querySelector(".close");

allGalleryItems.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector('#modal').style.display = "flex";
        document.querySelector('body').style.overflow = "hidden";
        let content = item.innerHTML;
        modalBody.innerHTML = content;
    })
})

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    document.querySelector('body').style.overflow = "auto";
});


           