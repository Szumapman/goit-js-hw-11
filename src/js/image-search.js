"use strict"

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import toastErrorIcon from "../img/toast-error.svg";

// to use a different image source, just create new functions getPictures and createGallery and change these two imports
import { getPictures } from "./get-pixabay-pictures"; 
import { createGallery } from "./create-pixabay-gallery";

const form = document.querySelector(".image-search-form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader-container");
const modalLightbox = new SimpleLightbox(".gallery-item-link", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,  
});
let toast = null;

form.addEventListener("submit", evt => {
    evt.preventDefault();
    loader.classList.toggle("hidden");
    toast = document.querySelector('.iziToast');
    if (toast) {
        iziToast.hide({
            transitionOut: 'fadeOutUp'
        }, toast);
    }
    
    gallery.innerHTML = "";
    const searchTerm = form.elements.searchTerm.value.trim();
    getPictures(searchTerm).then(response => {
        if (response.totalHits === 0) {
            noMatchingResults();
        } else {
            gallery.appendChild(createGallery(response.hits));
            modalLightbox.refresh();
        }
        form.reset();
        loader.classList.toggle("hidden");
    }).catch(error => console.log("Error:", error));
});

function noMatchingResults() {
    iziToast.show({
        iconUrl: toastErrorIcon,
        message: "Sorry, there are no images matching<br>your search query. Please try again!",
        position: "topRight",
        backgroundColor: "#EF4040",
        messageColor: "white",
        progressBarColor: "#B51B1B",
        theme: "dark",
    });
}
