import{a as m,S as g,i as l}from"./assets/vendor-DEZpR2tN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const d="49529656-94d7c85de64fba179c64deed7",f="https://pixabay.com/api/";function p(r){const t={key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9};return m.get(f,{params:t}).then(s=>s.data.hits)}let y=new g(".gallery a",{captionsData:"alt",captionDelay:250});function a(r,t){return`
    <li class="text-li">
      <h3 class="title">${r}</h3>
      <p class="text">${t}</p>
    </li>
  `}function h(r){const t=document.querySelector(".gallery"),s=r.map(i=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i.largeImageURL}">
            <img class="gallery-image" src="${i.webformatURL}" alt="${i.tags}" />
          </a>
          <ul class="text-ul">
            ${a("Likes",i.likes)}
            ${a("Views",i.views)}
            ${a("Comments",i.comments)}
            ${a("Downloads",i.downloads)}
          </ul>
        </li>
      `).join("");t.innerHTML=s,y.refresh()}function c(){const r=document.querySelector(".gallery");r.innerHTML=""}const F=document.querySelector(".form"),L=document.querySelector(".input"),u=document.querySelector(".loader");F.addEventListener("submit",r=>{r.preventDefault();const t=L.value.trim();if(!t){c(),l.show({message:"Please enter a search query.",messageColor:"#FFFFFF",position:"topRight",color:"#ef4040",timeout:3e3,iconUrl:"./img/bi_x-octagon.svg"});return}c(),u.classList.remove("hidden"),p(t).then(s=>{s.length===0?l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",position:"topRight",color:"#ef4040",timeout:3e3,iconUrl:"./img/bi_x-octagon.svg"}):h(s)}).catch(s=>{l.show({title:"Error",message:s.message||"An unexpected error occurred",messageColor:"#FFFFFF",position:"topRight",color:"#ef4040",timeout:3e3,iconUrl:"./img/bi_x-octagon.svg"})}).finally(()=>{u.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
