import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector(".gallery");

const imageMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li><a class = "gallery__item" href ="${original}">
    <img class ="gallery__image"
    src = "${preview}"
    alt = "${description}" />
    </a></li>`;
  })
  .join("");

galleryContainerRef.insertAdjacentHTML("beforeend", imageMarkup);

const openLightbox = {
  captionsData: "alt",
  captionDelay: 250,
};

const lightbox = new SimpleLightbox(".gallery__item", openLightbox);
