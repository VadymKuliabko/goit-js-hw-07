import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector(".gallery");

const imageMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class = "gallery__item">
  <a class = "gallery__link" href = "${original}">
  <img 
  class = "gallery__image"
  src="${preview}"
  data-source ="${original}"
  alt = "${description}"/>
  </a>
  </div>`;
  })
  .join("");

galleryContainerRef.insertAdjacentHTML("beforeend", imageMarkup);

function openModalWindow(currentImageUrl, currentImageAlt) {
  const modalImage = basicLightbox.create(
    `<div class="modal">
            <img
            class="galerry__image"
            src="${currentImageUrl}"
            alt="${currentImageAlt}"
            />
        </div>`,
    closeModalImage
  );
  modalImage.show();
}

const closeModalImage = {
  onShow: (modalImage) => {
    modalImage.element().querySelector("img").onClick = modalImage.close;
    window.addEventListener("keydown", onEscKeyPress);
    function onEscKeyPress(event) {
      if (event.code === "Escape") {
        window.removeEventListener("keydown", onEscKeyPress);
        modalImage.close();
      }
    }
  },
};

function galleryContainerClick(event) {
  event.preventDefault();

  const galleryCardRef = event.target.classList.contains("gallery__image");
  if (!galleryCardRef) {
    return;
  }

  const currentImageUrl = event.target.dataset.source;
  const currentImageAlt = event.target.alt;

  openModalWindow(currentImageUrl, currentImageAlt);
}

galleryContainerRef.addEventListener("click", galleryContainerClick);
