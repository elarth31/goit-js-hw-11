import{S as d,i as m}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h="https://pixabay.com/api/",f="46767628-a1a0fbec2a5b02d371c47f484";async function y(o){const s=new URLSearchParams({key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});try{const t=await fetch(`${h}?${s}`);if(console.log(t),!t.ok)throw new Error("Network response was not ok");return(await t.json()).hits}catch(t){console.error("Error fetching images:",t)}}function g(o){return o.map(({webformatURL:s,largeImageURL:t,tags:a,likes:e,views:r,comments:n,downloads:p})=>`<li class="gallery-item">
            <a class="gallery-link" href="${t}">
                <img
                    class="gallery-image"
                    src="${s}"
                    alt="${a}"
                    width="360"
                />
            </a>
            <div class="thumb-block">
                <div class="block">
                    <h2 class="title">Likes</h2>
                    <p class="amount">${e}</p>
                </div>
                <div class="block">
                    <h2 class="title">Views</h2>
                    <p class="amount">${r}</p>
                </div>
                <div class="block">
                    <h2 class="title">Comments</h2>
                    <p class="amount">${n}</p>
                </div>
                <div class="block">
                    <h2 class="title">Downloads</h2>
                    <p class="amount">${p}</p>
                </div>
            </div>
        </li>`).join("")}const u=document.querySelector(".js-search"),c=document.querySelector(".gallery"),i=document.querySelector(".loader"),b=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});i.style.display="none";u.addEventListener("submit",v);function v(o){o.preventDefault(),c.innerHTML="",i.style.display="block";const s=o.target.elements.search.value.trim();if(!s){i.style.display="none",l("Please enter a search term!");return}y(s).then(t=>{if(i.style.display="none",!t.length){l("Sorry, there are no images matching your search query. Please try again!");return}c.innerHTML=g(t),b.refresh(),u.reset()}).catch(t=>{i.style.display="none",console.error(t),l("An error occurred. Please try again later.")})}function l(o){m.error({title:"Error",message:o,position:"topRight"})}
//# sourceMappingURL=index.js.map
