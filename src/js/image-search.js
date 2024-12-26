"use strict"

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getPictures } from "./get-pixabay-pictures";
import { createGallery } from "./create-gallery";

const form = document.querySelector(".image-search-form");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", evt => {
    evt.preventDefault();
    gallery.innerHTML = "";
    const searchTerm = form.elements.searchTerm.value.trim();

    getPictures(searchTerm).then(response => {
        console.log(response);
        if (response.totalHits === 0) {
            noMatchingResults();
            form.reset();
            return;
        }
        gallery.appendChild(createGallery(response.hits));
        form.reset();
    });

});

function noMatchingResults() {
    iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
    });
}