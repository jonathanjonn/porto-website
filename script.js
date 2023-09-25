const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("fix", window.scrollY > 100)
});