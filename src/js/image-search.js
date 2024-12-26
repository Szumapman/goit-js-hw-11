"use strict"

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// to use a different image source, just create new functions getPictures and createGallery and change these two imports
import { getPictures } from "./get-pixabay-pictures"; 
import { createGallery } from "./create-pixabay-gallery";

const form = document.querySelector(".image-search-form");
const gallery = document.querySelector(".gallery");
const modalLightbox = new SimpleLightbox(".gallery-item-link", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,  
});

form.addEventListener("submit", evt => {
    evt.preventDefault();
    gallery.innerHTML = "";
    const searchTerm = form.elements.searchTerm.value.trim();

    getPictures(searchTerm).then(response => {
        if (response.totalHits === 0) {
            noMatchingResults();
            form.reset();
            return;
        }
        gallery.appendChild(createGallery(response.hits));
        modalLightbox.refresh();
        form.reset();
    });

});

function noMatchingResults() {
    iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
    });
}
