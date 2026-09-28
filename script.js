const button=document.querySelector(".menu-btn"),menu=document.querySelector(".menu");
button.addEventListener("click",()=>{const open=menu.classList.toggle("open");button.setAttribute("aria-expanded",open);button.textContent=open?"✕":"☰"});
document.querySelectorAll(".menu a").forEach(a=>a.addEventListener("click",()=>{menu.classList.remove("open");button.setAttribute("aria-expanded","false");button.textContent="☰"}));
document.getElementById("year").textContent=new Date().getFullYear();