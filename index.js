import{S as p,i as h}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",f="46767628-a1a0fbec2a5b02d371c47f484";async function y(o){const s=new URLSearchParams({key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=await fetch(`${m}?${s}`);if(!r.ok)throw new Error("Network response was not ok");return(await r.json()).hits}function g(o){return o.map(({webformatURL:s,largeImageURL:r,tags:a,likes:e,views:t,comments:i,downloads:d})=>`<li class="gallery-item">
            <a class="gallery-link" href="${r}">
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
                    <p class="amount">${t}</p>
                </div>
                <div class="block">
                    <h2 class="title">Comments</h2>
                    <p class="amount">${i}</p>
                </div>
                <div class="block">
                    <h2 class="title">Downloads</h2>
                    <p class="amount">${d}</p>
                </div>
            </div>
        </li>`).join("")}const u=document.querySelector(".js-search"),l=document.querySelector(".gallery"),n=document.querySelector(".loader"),b=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});n.style.display="none";u.addEventListener("submit",v);function v(o){o.preventDefault(),l.innerHTML="",n.style.display="block";const s=o.target.elements.search.value.trim();if(!s){n.style.display="none",c("Please enter a search term!");return}y(s).then(r=>{if(n.style.display="none",!r.length){c("Sorry, there are no images matching your search query. Please try again!");return}l.innerHTML=g(r),b.refresh(),u.reset()}).catch(r=>{n.style.display="none",console.error(r),c("An error occurred. Please try again later.")})}function c(o){h.error({title:"Error",message:o,position:"topRight"})}
//# sourceMappingURL=index.js.map
