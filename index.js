import{a as m,S as d,i}from"./assets/vendor-DEZpR2tN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="49529656-94d7c85de64fba179c64deed7",g="https://pixabay.com/api/";function p(o){const t={key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9};return m.get(g,{params:t}).then(s=>s.data.hits)}let y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function l(o,t){return`
    <li class="text-li">
      <h3 class="title">${o}</h3>
      <p class="text">${t}</p>
    </li>
  `}function h(o){const t=document.querySelector(".gallery"),s=o.map(a=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a.largeImageURL}">
            <img class="gallery-image" src="${a.webformatURL}" alt="${a.tags}" />
          </a>
          <ul class="text-ul">
            ${l("Likes",a.likes)}
            ${l("Views",a.views)}
            ${l("Comments",a.comments)}
            ${l("Downloads",a.downloads)}
          </ul>
        </li>
      `).join("");t.innerHTML=s,y.refresh()}function c(){const o=document.querySelector(".gallery");o.innerHTML=""}const F=document.querySelector(".form"),L=document.querySelector(".input"),u=document.querySelector(".loader");F.addEventListener("submit",o=>{o.preventDefault();const t=L.value.trim();if(!t){c(),i.show({message:"Please enter a search query.",messageColor:"#FFFFFF",position:"topRight",color:"#ef4040",timeout:3e3});return}c(),u.classList.remove("hidden"),p(t).then(s=>{s.length===0?i.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",position:"topRight",color:"#ef4040",timeout:3e3}):h(s)}).catch(s=>{i.show({title:"Error",message:s.message||"An unexpected error occurred",messageColor:"#FFFFFF",position:"topRight",color:"#ef4040",timeout:3e3})}).finally(()=>{u.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
