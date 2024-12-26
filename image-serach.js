import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as m}from"./assets/vendor-I1I71QQ2.js";const u="47865988-0e202f3c070f6317e288e8f49";function g(t){const r=new URLSearchParams({key:u,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>{console.error(e)})}const h=({webformatURL:t,largeImageURL:r,tags:e,likes:o,views:s,comments:c,downloads:l})=>{const i=document.createElement("li");return i.classList.add("gallery-item"),i.innerHTML=`
    <a href="${r}" class="gallery-item-link">
        <img class="gallery-item-image" src="${t}" alt="${e}" loading="lazy" />
    </a>
    <div class="info">
        <p class="info-item">
            <b>Likes</b>
            ${o}
        </p>
        <p class="info-item">
            <b>Views</b>
            ${s}
        </p>
        <p class="info-item">
            <b>Comments</b>
            ${c}
        </p>
        <p class="info-item">
            <b>Downloads</b>
            ${l}
        </p>
    </div>
    `,i},p=t=>{const r=t.map(h),e=document.createDocumentFragment();return e.append(...r),e},a=document.querySelector(".image-search-form"),n=document.querySelector(".gallery");a.addEventListener("submit",t=>{t.preventDefault(),n.innerHTML="";const r=a.elements.searchTerm.value.trim();g(r).then(e=>{if(console.log(e),e.totalHits===0){f(),a.reset();return}n.appendChild(p(e.hits)),a.reset()})});function f(){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}
//# sourceMappingURL=image-serach.js.map
