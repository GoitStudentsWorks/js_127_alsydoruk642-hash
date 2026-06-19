import{S as K,N as X,P as z,A as pe,a as g,b as M,R as ge}from"./assets/vendor-DgsDRJCq.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function fe(){document.addEventListener("click",e=>{const n=e.target.closest('a[href^="#"]');if(!n)return;e.preventDefault();const t=n.getAttribute("href"),s=document.querySelector(t);if(!s)return;const i=s.getBoundingClientRect().top+window.scrollY;document.scrollingElement.scrollTo({top:i,behavior:"smooth"})})}function be(){window.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".fade-in-element").forEach((n,t)=>{setTimeout(()=>{n.classList.add("visible")},t*200)})})}const y=document.querySelector(".about-us"),m=new K(y.querySelector(".about-us-swiper"),{modules:[X,z],navigation:{nextEl:y.querySelector(".about-us-button-next"),prevEl:y.querySelector(".about-us-button-prev")},pagination:{el:y.querySelector(".about-us-swiper-pagination"),clickable:!0,dynamicBullets:window.innerWidth<768}});window.addEventListener("resize",()=>{m.update(),m.params.pagination.dynamicBullets=window.innerWidth<768,m.pagination.destroy(),m.pagination.init(),m.pagination.render(),m.pagination.update()});new pe(".accordion-container",{duration:300,showMultiple:!1});const Ae="https://paw-hut.b.goit.study/api";async function ye(e){const n=await fetch(`${Ae}/orders`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),t=await n.json();if(!n.ok)throw new Error((t==null?void 0:t.message)||`HTTP error ${n.status}`);return t}const he=document.querySelector(".app-modal-close"),h=document.querySelector(".backdrop-order"),B=document.querySelector(".app-modal-form"),v=document.querySelector(".modal-button"),I=document.querySelector("#name"),L=document.querySelector("#phone"),ve=document.querySelector("#comment"),C=document.querySelectorAll(".modal-field");let Z=null;function Le(e){Z=e,B.reset(),v.disabled=!0,C.forEach(n=>n.classList.remove("error")),h.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function k(){h.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}he.addEventListener("click",k);h.addEventListener("click",e=>{e.target===h&&k()});document.addEventListener("keydown",e=>{e.key==="Escape"&&k()});function J(e,n){const t=n.value.trim()!=="";return e.classList.toggle("error",!t),t}function O(){const e=J(C[0],I),n=J(C[1],L);v.disabled=!(e&&n)}I.addEventListener("input",O);L.addEventListener("input",O);B.addEventListener("submit",async e=>{if(e.preventDefault(),O(),v.disabled)return;const n=L.value.trim();function t(r){return/^[0-9]{12}$/.test(r)}if(!t(n)){g.fire({icon:"error",title:"Невірний номер",text:"Телефон має містити 12 цифр без + і пробілів"});return}const s={name:I.value.trim(),phone:L.value.trim(),animalId:Z},i=ve.value.trim();i&&(s.comment=i);try{const r=await ye(s);g.fire({icon:"success",title:"Заявку відправлено!",text:`Ваш номер замовлення: ${r.orderNum}`,confirmButtonText:"OK"}),B.reset(),v.disabled=!0,C.forEach(o=>o.classList.remove("error")),k()}catch{g.fire({icon:"error",title:"Помилка!",text:"Не вдалося відправити заявку",confirmButtonText:"OK"})}});const _="https://paw-hut.b.goit.study",Ce="/api/categories",Se="/api/animals";async function we(){return(await M.get(_+Ce)).data}async function ee(e,n,t){const s={page:n,limit:t};return e!=="all"&&(s.categoryId=String(e)),(await M.get(_+Se,{params:s})).data}let a=1,p=1,d=8,x="all",q=0,l=0;const f=document.querySelector(".pet-list-categories"),b=document.querySelector(".pet-list-cards"),u=document.querySelector(".pet-list-more-btn"),c=document.querySelector(".pet-list-pagin"),S=document.querySelector(".loader");f&&f.addEventListener("click",Ie);u&&u.addEventListener("click",Oe);c&&c.addEventListener("click",Pe);function P(e){g.fire({icon:"error",title:e})}function te(e){g.fire({title:e})}function Ee(){u&&(u.classList.remove("hidden"),u.blur())}function ne(){u&&u.classList.add("hidden")}function ke(e){if(c){let n=`<button type="button" class="pet-list-pagin-btn left disabled">
        <svg width="24" height="24">
          <use href="/js_127_alsydoruk642-hash/sprite.svg#icon-arrow_left"></use>
        </svg>
      </button>`,t=1;for(;t<=e&&t<=3;)n+=`<button type="button" class="pet-list-pagin-num 
      ${t===1?" active":""}" data-idx="${t-1}">${t}</button>`,t++;e>3&&(n+=`<span class="pet-list-pagin-dot">...</span>
        <button type="button" class="pet-list-pagin-num" data-idx="3">${e}</button>`),n+=`<button type="button" class="pet-list-pagin-btn right 
      ${e<=1?"disabled":""}">
        <svg width="24" height="24">
          <use href="/js_127_alsydoruk642-hash/sprite.svg#icon-arrow_right"></use>
        </svg>
      </button>`,c.innerHTML=n,c.classList.remove("hidden")}}function Be(){c&&c.classList.add("hidden")}function se(){S&&S.classList.remove("hidden")}function ie(){S&&S.classList.add("hidden")}function xe(){return window.innerWidth<1366?8:9}function ae(){a<p?Ee():te("В базі даних більше нема карток")}function qe(e){window.scrollBy({top:q*e,behavior:"smooth"})}function oe(){b&&(b.innerHTML="")}async function Me(){if(f)try{const n=(await we()??[]).map(t=>`<button
                type="button"
                class="pet-list-categories-btn" aria-label="${t.name}"
                data-id="${t._id}"
            >
                ${t.name}
            </button>`).join("");f.innerHTML=`<button
            type="button"
            class="pet-list-categories-btn active" aria-label="Всі категорії"
            data-id="all"
        >
            Всі
        </button>
        ${n}`}catch{P("Помилка завантаження категорій хвостиків")}}function re(e){const n=(e??[]).map(t=>`
      <li class="pet-list-card-item" data-id="${t._id}">
        <img class="pet-list-card-img" src="${t.image}" alt="${t.name}" />

        <p class="pet-list-card-type">${t.species}</p>
        <p class="pet-list-card-name">${t.name}</p>

        <ul class="pet-list-card-filter">
          ${(t.categories??[]).map(s=>`<li class="pet-list-card-filter-item">${s.name}</li>`).join("")}
        </ul>

        <div class="pet-list-card-age-gender">
          <p class="pet-list-card-age">${t.age}</p>
          <p class="pet-list-card-gender">${t.gender}</p>
        </div>

        <p class="pet-list-card-about">${t.shortDescription}</p>

        <button type="button" class="pet-list-card-more-btn" aria-label="Дізнатись більше про ${t.name}">
          Дізнатись більше
        </button>
      </li>
    `).join("");b&&b.insertAdjacentHTML("beforeend",n)}async function ce(e){x=e,a=1,d=xe(),ne(),Be(),se(),oe();try{const n=await ee(x,a,d);if(n.animals.length===0){te("В базі даних нема карток за цією категорією");return}p=Math.ceil(n.totalItems/d),re(n.animals),d===8?ae():ke(p);const t=document.querySelector(".pet-list-card-item");t?q=t.getBoundingClientRect().height:q=0}catch{P("Помилка завантаження карток тваринок")}finally{ie()}}async function le(){d===8&&(a+=1),ne(),se();try{const e=await ee(x,a,d);re(e.animals),d===8&&(qe(1),ae())}catch{P("Помилка завантаження карток тваринок")}ie()}function Ie(e){const n=e.target.closest(".pet-list-categories-btn");if(!n)return;const t=f.querySelector(".active");t&&t.classList.remove("active"),n.classList.add("active");const s=n.dataset.id;ce(s)}function Oe(){le()}function Pe(e){const n=a,t=e.target.closest("button");if(!t)return;const s=c.querySelector(".pet-list-pagin-btn.left"),i=c.querySelector(".pet-list-pagin-btn.right"),r=c.querySelector(".pet-list-pagin-num.active"),o=c.querySelectorAll(".pet-list-pagin-num");t===o[o.length-1]&&(a=Number(t.textContent),l=o.length-1,a>3&&(o[2].textContent=a-1,o[1].textContent=a-2,o[0].textContent=a-3)),t.classList.contains("left")?(a-=1,a===1?s.classList.add("disabled"):s.classList.remove("disabled"),i.classList.remove("disabled"),l>0?(o[l].classList.remove("active"),l--,o[l].classList.add("active")):(o[0].textContent=a,o[1].textContent=a+1,o[2].textContent=a+2)):t.classList.contains("right")?(a+=1,a===p?i.classList.add("disabled"):i.classList.remove("disabled"),s.classList.remove("disabled"),l<2||a===p?(o[l].classList.remove("active"),l++,o[l].classList.add("active")):(o[2].textContent=a,o[1].textContent=a-1,o[0].textContent=a-2)):t!==r&&(r.classList.remove("active"),t.classList.add("active"),a=Number(t.textContent),a>1?s.classList.remove("disabled"):s.classList.add("disabled"),a!=p?i.classList.remove("disabled"):i.classList.add("disabled"),l=t.dataset.idx),n!==a&&(oe(),le(),b.scrollIntoView({behavior:"smooth"}))}const Ue="https://paw-hut.b.goit.study";async function Te(e=1,n=6){return(await M.get(`${Ue}/api/feedbacks?limit=${n}&page=${e}`)).data.feedbacks}const Qe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAABmklEQVR4AaSU4XGCYAyGkyBU8Y8j4ATVDcoGHQEnaJ2gI/ScQDtBR2g3qBvoCPyxclKTJqgUBIWz3xENH+/7XC75gKDFIq+3Is9ftZBCI9Bx/EcADAAggE73ARpWI5BJnk4MRHw55Zf+G4DdQCF5VVnuuqNLMNu/CiSXKhURutoCs9bHFWA3AJS8uoJdW6DPChvFlBy3G+kE5xbo9j5QJ2pBHulUs2EU9ZYP7Jlp0PO/jp538ztuPyIBelVVZGE9Qp2ohd5fvUyDAKOjx9oQCcqcGHgKAjH8c4kyUHBCkCYLhjQUkPWtTAFYizL26WZxGEqaLoXkJmgGIw5BGVbQAWhZkqxldzcWkU+7bROmFd8bg3pP+j9gthPHxDjL0hY/Yto4jovSMyCAENadvaInz6lGWwUC3+eOhkRqtBUgYrVCOxIW5/yDdjAo7peBdZ8nwZn0vaE4PFbjm0b56iSlj0UJSER5/2yCzBxyunkGa7xOknffERMPpXBmycHLQN7DMhOjTCXdhvCTVI+QgmW3HbLwRNuwZMHSC/ELAAD//8Y0jPIAAAAGSURBVAMAqX+jof1XbtgAAAAASUVORK5CYII=",Ye="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAACOElEQVR4AYxU7XEaQQx90vkuGP+5Es4VxHRgKohLgAoCFWRSQcYVQCqwO7A7MKkAUkHuj2OGC6s87X0M2Aa8s0Lak/TQSu9O8YGl2flSs/7yA6E4CZgk/RtACgAFznrXOLFOAga1ry2GiHxr7UP6BGCvIEhdlaGMdppe4cg6CqipthXNAfkJLpWULaBxYB8B7BUQi9UFDd+Dbe8bDLaAvubwWmmS9kac4MxF0vMH4URdNFNOVQqD3WO9XuHf+tHMHgmQu89jJOs/NTl3np+kFyM16A8GjVxE5Fo4URee4QCmNnXbxRIbU8ere4wAV02Ot2FkYjMNCFMYSnAZdQhhyCtehs1fseplGKujL25WyucjisQYxu7mislYUa3nAdWQV1uJIFfVGdYx/fgPY1RlBuYYsDJibKvneT2UqlrwahGUKAV79AAcbrz7NBPGeI8JpmEIYjB3503hdWzzaeB9o6PQNJlQv7s10olgHJL1s8FuW+oKu7Sy1CC3fjSEz67fE+M1/bl5bFmWbrfyChAwlcg9gf5Ct/IcyPP2KCa/3WYPY6zbrbwFbCoLkci9wnmm2eaPC7l35/2rffzzJrYFc/0GUMjF6JDkC3v15Genk4tAbjiwpdIHLvcBeU6z2/uAu58nsYlTAia3dpFdWhIGzIqk5is5oV3vs/Xex2IPkBzsemKcYCR59TyBN54sIKFHTmiDrWo0QBM5DBi2WMRgsWl8S/j+tomdJrBtXi6DhTHbsAgmHbjH/AcAAP//LuSXeQAAAAZJREFUAwBvSgOwSGZkYgAAAABJRU5ErkJggg==",Ve="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAACLklEQVR4AZxU7XXaQBCcXVkyH39IB7iCQAWGDpIKgiuIXQFJBYQKbFfgpALTQUgFUML9ccxDsJs5CdlgY/DLvVtp7252bvZOK8U7mmb1mWaN2TugOEqYJI1PgLTdfY6TWg9H2lFCU/8aORx+KyLD6B+yI4S1NklKVXntp0A6SNPOfxNqqluKQoBgrJLyCN6mPKCw1oZ4j2fnVbgtsx/0eQRco7Ova5LWBrzB62iS1u+FNxpNM+WtSkxZngNDoD+OaxEjWeP3JuYuxidpc6AOHRE0oJIvItIT3mg0zoFzlbrqDVv+/UYTV++75xfEfPe13MKZj/i1GuyKgyBskWTbOCWbcfXeDPlaLObI8ylWi0mSAC5+Li4XinxxY8j7Dp8TFrvzwY09vuke7kx1aMDIffV5nT/clJfCnYoUStJCTVRHO8imaXPEXQeu1i/UEl0S0gFT8OVpl9ImHJJLYGbEc7Sn62n90mEdb2TdGFtBngmLmRDUZBxdEkPYor/P3OXcIzaEsL3+ghBwlbIyNigS71UpwB99gY0hrwlhH+MCrSASNvrsrRYfT93MJky5wj7NvyJkfKWQIkqcO4Kky5mmdX6zmypZ1aYlttXCVtsl3Pd7chl7MzvzxLo81A+skvuEFQGEwOOY4GSx87PYIVTVSh0imGn1LX+4ZGyIN8kKGRg/ERMbsvTuQOWayNuEtsbU4XMW0ZXnj/1YBVvZlG7xeT2eccNfVNw2l3m5UD7/AQAA//+4Hc+AAAAABklEQVQDAML/+aGwEbCEAAAAAElFTkSuQmCC",je=document.querySelector(".success-stories-list");function $e(e){const n=e.map(s=>`
        <li class="swiper-slide success-stories-list-item">
          <div class="success-stories-rate"
           data-rate="${s.rate}">
          </div>

          <p class="success-stories-text">
            ${s.description}
          </p>

          <h3 class="success-stories-author">
            ${s.author}
          </h3>
        </li>
      `).join("");je.insertAdjacentHTML("beforeend",n),document.querySelectorAll(".success-stories-rate").forEach(s=>{new ge(s,{score:Number(s.dataset.rate),readOnly:!0,starOn:Qe,starOff:Ye,starHalf:Ve}).init()});const t=new K(".mySwiper",{modules:[X,z],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:window.innerWidth>768},slidesPerView:1,breakpoints:{768:{dynamicBullets:!0,slidesPerView:2,spaceBetween:32}}});window.addEventListener("resize",()=>{t.update(),t.params.pagination.dynamicBullets=window.innerWidth>768,t.pagination.destroy(),t.pagination.init(),t.pagination.render(),t.pagination.update()})}async function Ne(){try{const e=await Te();$e(e)}catch(e){console.log(e)}}function Re(e){const n=document.querySelector(".animal-backdrop");if(!n)return;n.innerHTML=`
    <div class="animal-modal">
      <button type="button" class="animal-modal-close" aria-label="Close modal">
        &times;
      </button>

      <div class="animal-modal-thumb">
        <img src="${e.img}" alt="${e.name}" class="animal-modal-img" />
      </div>

      <div class="animal-modal-info">
        <p class="animal-modal-type">${e.type}</p>
        <h2 class="animal-modal-title">${e.name}</h2>

        <div class="animal-modal-meta">
          <p class="animal-modal-info-data age">${e.age}</p>
          <p class="animal-modal-info-data gender">${e.gender}</p>
        </div>

        <div class="animal-modal-scroll-container">
          
          <div class="animal-modal-details-block">
            <p class="animal-detail-label">Опис:</p>
            <p class="animal-detail-text">${e.description}</p>
          </div>
          
          <div class="animal-modal-details-block">
            <p class="animal-detail-label">Здоров'я:</p>
            <p class="animal-detail-text">${e.health}</p>
          </div>

          <div class="animal-modal-details-block">
            <p class="animal-detail-label">Поведінка:</p>
            <p class="animal-detail-text">${e.behavior}</p>
          </div>
          
        </div>
        
        <button type="button" class="animal-modal-btn">Взяти додому</button>
      </div>
    </div>
  `,n.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),n.querySelector(".animal-modal-close").addEventListener("click",w),n.addEventListener("click",Fe),window.addEventListener("keydown",de);const t=n.querySelector(".animal-modal-btn");t&&t.addEventListener("click",()=>{w();const s=document.querySelector(".backdrop-order");s?(s.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),Le(e._id)):console.warn("Бекдроп з класом .backdrop-order не знайдено на сторінці.")})}function w(){const e=document.querySelector(".animal-backdrop");e&&(e.classList.add("is-hidden"),e.innerHTML=""),document.body.classList.remove("no-scroll"),window.removeEventListener("keydown",de)}function Fe(e){e.target===e.currentTarget&&w()}function de(e){e.code==="Escape"&&w()}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".pet-list-cards");e&&e.addEventListener("click",n=>{var r,o,U,T,Q,Y,V,j,$,N,R,F,G,H,D,W;const t=n.target.closest(".pet-list-card-more-btn");if(!t)return;const s=t.closest(".pet-list-card")||t.closest("li");if(!s)return;const i={_id:s.dataset.id,img:((r=s.querySelector(".pet-list-card-img"))==null?void 0:r.src)||((o=s.querySelector("img"))==null?void 0:o.src)||"",name:((T=(U=s.querySelector(".pet-list-card-name"))==null?void 0:U.textContent)==null?void 0:T.trim())||"Тваринка",type:((Y=(Q=s.querySelector(".pet-list-card-type"))==null?void 0:Q.textContent)==null?void 0:Y.trim())||"Вид",age:((j=(V=s.querySelector(".pet-list-card-age"))==null?void 0:V.textContent)==null?void 0:j.trim())||"Вік",gender:((N=($=s.querySelector(".pet-list-card-gender"))==null?void 0:$.textContent)==null?void 0:N.trim())||"Стать",description:((F=(R=s.querySelector(".pet-list-card-desc"))==null?void 0:R.textContent)==null?void 0:F.trim())||"Ніжний та ласкавий малюк. Дуже любить сидіти на ручках.",health:((H=(G=s.querySelector(".pet-list-card-health"))==null?void 0:G.textContent)==null?void 0:H.trim())||"Здоровий, кастрований, вакцинований. Потребує регулярного вичісування шерсті.",behavior:((W=(D=s.querySelector(".pet-list-card-behavior"))==null?void 0:D.textContent)==null?void 0:W.trim())||"Бажано бути єдиною твариною в сім'ї. Не любить конкуренції за увагу."};Re(i)})});const Ge=document.querySelector("[data-modal-open]"),He=document.querySelector("[data-modal-close]"),E=document.querySelector(".backdrop"),ue=document.querySelector(".mobile-menu"),me=document.body;function De(){E.classList.add("is-open"),me.classList.add("no-scroll"),ue.classList.add("is-open")}function A(){E.classList.remove("is-open"),me.classList.remove("no-scroll"),ue.classList.remove("is-open")}Ge.addEventListener("click",De);He.addEventListener("click",A);E.addEventListener("click",e=>{e.target===E&&A()});document.addEventListener("keydown",e=>{e.key==="Escape"&&A()});const We=document.querySelectorAll(".mobile-menu .menu-friend-btn"),Je=document.querySelectorAll(".mobile-menu a");We.forEach(e=>{e.addEventListener("click",()=>{A()})});Je.forEach(e=>{e.addEventListener("click",()=>{A()})});fe();be();Me();ce("all");Ne();
//# sourceMappingURL=index.js.map
