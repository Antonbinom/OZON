(()=>{"use strict";(()=>{const e=document.getElementById("cart"),t=document.querySelector(".cart"),o=t.querySelector(".cart-close");document.body.addEventListener("click",(c=>{c.preventDefault(),c.target===e?t.style.display="flex":c.target!==o&&c.target!==t||(t.style.display="")}))})(),fetch("https://ozon-e21c6-default-rtdb.firebaseio.com/goods.json").then((e=>e.json())).then((e=>console.log(e)))})();