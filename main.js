(()=>{"use strict";var e=document.querySelector(".info__descripton");fetch("https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1").then((function(e){return e.json()})).then((function(t){e.textContent=t}));var t=document.querySelectorAll(".menu__link[data-goto]"),o=document.querySelector(".menu__icon"),n=document.querySelector(".menu__container"),c=document.querySelector(".main");if(o&&o.addEventListener("click",(function(e){o.classList.toggle("menu__icon_active"),n.classList.toggle("menu__container_active"),c.classList.toggle("main_lock")})),t.length>0){function i(e){var t=e.target;if(t.dataset.goto&&document.querySelector(t.dataset.goto)){var i=document.querySelector(t.dataset.goto).getBoundingClientRect().top+scrollY-document.querySelector("header").offsetHeight;o.classList.contains("menu__icon_active")&&(o.classList.remove("menu__icon_active"),n.classList.remove("menu__container_active"),c.classList.remove("main_lock")),window.scrollTo({top:i,behavior:"smooth"}),e.preventDefault()}}t.forEach((function(e){e.addEventListener("click",i)}))}})();