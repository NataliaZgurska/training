import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */document.querySelector("#box");document.querySelector("#decrease");document.querySelector("#increase");const r=document.querySelector(".js-square");r.addEventListener("click",n);let e=parseInt(getComputedStyle(box).width),t=parseInt(getComputedStyle(box).height);function n(o){if(o.target.nodeName=="BUTTON"){if(console.log("довжина сторони =",e,"px"),o.target.id==="decrease")if(e===10){alert("Розмір квадарата мінімальний");return}else e-=10,t-=10;else if(e===500){alert("Розмір квадарата максимальний");return}else e+=10,t+=10;box.style.width=`${e}px`,box.style.height=`${t}px`,box.style.backgroundColor=l()}}function l(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}
//# sourceMappingURL=commonHelpers6.js.map
