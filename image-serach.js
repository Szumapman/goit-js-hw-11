import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as m,i as p}from"./assets/vendor-5ObWk2rO.js";const u="47865988-0e202f3c070f6317e288e8f49";function f(t){const a=new URLSearchParams({key:u,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});return fetch(`https://pixabay.com/api/?${a}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>{console.error(e)})}const g=({webformatURL:t,largeImageURL:a,tags:e,likes:n,views:l,comments:o,downloads:c})=>{const s=document.createElement("li");return s.classList.add("gallery-item"),s.innerHTML=`
    <a href="${a}" class="gallery-item-link">
        <img class="gallery-item-image" src="${t}" alt="${e}" loading="lazy" />
    </a>
    <ul class="info">
        <li>
            <p class="info-item-title">Likes</p>
            <p class="info-item-stats">${n}</p>
        </li>
        <li>
            <p class="info-item-title">Views</p>
            <p class="info-item-stats">${l}</p>
        </li>
        <li>
            <p class="info-item-title">Comments</p>
            <p class="info-item-stats">${o}</p>
        </li>
        <li>
            <p class="info-item-title">Downloads</p>
            <p class="info-item-stats">${c}</p>
        </li>            
    </ul>
    `,s},h=t=>{const a=t.map(g),e=document.createDocumentFragment();return e.append(...a),e},i=document.querySelector(".image-search-form"),r=document.querySelector(".gallery"),y=new m(".gallery-item-link",{captions:!0,captionsData:"alt",captionDelay:250});i.addEventListener("submit",t=>{t.preventDefault(),r.innerHTML="";const a=i.elements.searchTerm.value.trim();f(a).then(e=>{if(e.totalHits===0){d(),i.reset();return}r.appendChild(h(e.hits)),y.refresh(),i.reset()})});function d(){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}
//# sourceMappingURL=image-serach.js.map
