const createGalleryItem = ({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
    const galleryItem = document.createElement("li");
    galleryItem.classList.add("gallery-item");
    galleryItem.innerHTML = `
    <a href="${largeImageURL}" class="gallery-item-link">
        <img class="gallery-item-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
    </a>
    <div class="info">
        <p class="info-item">
            <b>Likes</b>
            ${likes}
        </p>
        <p class="info-item">
            <b>Views</b>
            ${views}
        </p>
        <p class="info-item">
            <b>Comments</b>
            ${comments}
        </p>
        <p class="info-item">
            <b>Downloads</b>
            ${downloads}
        </p>
    </div>
    `;
    return galleryItem;
};

export const createGallery = (images) => {
    const imgs = images.map(createGalleryItem);

    const fragment = document.createDocumentFragment();
    fragment.append(...imgs);
    return fragment;
};