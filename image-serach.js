import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as g,i as r}from"./assets/vendor-5ObWk2rO.js";const f="data:image/svg+xml,%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='%23fafafb'%20d='M9.080%200.292c0.187-0.187%200.441-0.292%200.706-0.292h12.428c0.265%200%200.519%200.105%200.706%200.292l8.788%208.788c0.187%200.187%200.292%200.441%200.292%200.706v12.428c0%200.265-0.105%200.519-0.292%200.706l-8.788%208.788c-0.187%200.187-0.441%200.292-0.706%200.292h-12.428c-0.265%200-0.519-0.105-0.706-0.292l-8.788-8.788c-0.187-0.187-0.292-0.441-0.292-0.706v-12.428c0-0.265%200.105-0.519%200.292-0.706l8.788-8.788zM10.2%202l-8.2%208.2v11.6l8.2%208.2h11.6l8.2-8.2v-11.6l-8.2-8.2h-11.6z'%3e%3c/path%3e%3cpath%20fill='%23fafafb'%20d='M9.292%209.292c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076c0.132%200%200.262%200.026%200.383%200.076s0.232%200.124%200.325%200.217l5.292%205.294%205.292-5.294c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076c0.131%200%200.262%200.026%200.383%200.076s0.232%200.124%200.325%200.217c0.093%200.093%200.167%200.203%200.217%200.325s0.076%200.252%200.076%200.383-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325l-5.294%205.292%205.294%205.292c0.093%200.093%200.167%200.203%200.217%200.325s0.076%200.252%200.076%200.383-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325s-0.203%200.167-0.325%200.217c-0.121%200.050-0.252%200.076-0.383%200.076s-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217l-5.292-5.294-5.292%205.294c-0.093%200.093-0.203%200.167-0.325%200.217s-0.252%200.076-0.383%200.076-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217s-0.167-0.203-0.217-0.325c-0.050-0.121-0.076-0.252-0.076-0.383s0.026-0.262%200.076-0.383c0.050-0.121%200.124-0.232%200.217-0.325l5.294-5.292-5.294-5.292c-0.093-0.093-0.167-0.203-0.217-0.325s-0.076-0.252-0.076-0.383c0-0.132%200.026-0.262%200.076-0.383s0.124-0.232%200.217-0.325z'%3e%3c/path%3e%3c/svg%3e",u="47865988-0e202f3c070f6317e288e8f49";function d(t){const s=new URLSearchParams({key:u,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});return fetch(`https://pixabay.com/api/?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>{console.error(e)})}const y=({webformatURL:t,largeImageURL:s,tags:e,likes:n,views:m,comments:h,downloads:p})=>{const a=document.createElement("li");return a.classList.add("gallery-item"),a.innerHTML=`
    <a href="${s}" class="gallery-item-link">
        <img class="gallery-item-image" src="${t}" alt="${e}" loading="lazy" />
    </a>
    <ul class="info">
        <li>
            <p class="info-item-title">Likes</p>
            <p class="info-item-stats">${n}</p>
        </li>
        <li>
            <p class="info-item-title">Views</p>
            <p class="info-item-stats">${m}</p>
        </li>
        <li>
            <p class="info-item-title">Comments</p>
            <p class="info-item-stats">${h}</p>
        </li>
        <li>
            <p class="info-item-title">Downloads</p>
            <p class="info-item-stats">${p}</p>
        </li>            
    </ul>
    `,a},w=t=>{const s=t.map(y),e=document.createDocumentFragment();return e.append(...s),e},i=document.querySelector(".image-search-form"),c=document.querySelector(".gallery"),o=document.querySelector(".loader-container"),v=new g(".gallery-item-link",{captions:!0,captionsData:"alt",captionDelay:250});let l=null;i.addEventListener("submit",t=>{t.preventDefault(),o.classList.toggle("hidden"),l=document.querySelector(".iziToast"),l&&r.hide({transitionOut:"fadeOutUp"},l),c.innerHTML="";const s=i.elements.searchTerm.value.trim();d(s).then(e=>{e.totalHits===0?L():(c.appendChild(w(e.hits)),v.refresh()),i.reset(),o.classList.toggle("hidden")}).catch(e=>console.log("Error:",e))});function L(){r.show({iconUrl:f,message:"Sorry, there are no images matching<br>your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"white",progressBarColor:"#B51B1B",theme:"dark"})}
//# sourceMappingURL=image-serach.js.map
