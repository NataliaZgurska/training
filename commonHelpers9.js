import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const s=document.querySelector(".js-target"),l=document.querySelector(".element"),u=document.querySelector(".js-btn");let n;const d=100;u.addEventListener("click",f);function f(e){e.preventDefault(),n=1,l.innerHTML="",console.log("create rounds"),a(),i()}function a(){let e=[],o='<div class="round"></div>';for(let r=0;r<5;r++)e.push(o);let t=e.join("");l.insertAdjacentHTML("beforeend",t)}function g(){n+=1,a(),i()}function i(){n>=d?c.unobserve(s):c.observe(s)}const v=function(e,o){e.forEach(t=>{t.isIntersecting&&(g(),console.log("loadMore"))})},c=new IntersectionObserver(v);
//# sourceMappingURL=commonHelpers9.js.map