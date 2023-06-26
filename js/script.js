var btn = document.getElementById("btnlist")
var nav = document.getElementById("navbar")
var parentservice = document.getElementById("parentservice")
var cancel = document.getElementById("cancel")
var title = document.getElementById("title")
var def = document.getElementById("definition")
var pic = document.getElementById("pic_service")

btn.addEventListener("click", function(){
    btn.classList.toggle("active")
    nav.classList.toggle("active")
    headtop.classList.toggle("active")
})

nav.addEventListener('click', function(){
    nav.classList.remove("active");
    btn.classList.remove("active");
})
show =  function(e){
    parentservice.classList.add("active");
    title.innerHTML = e.getAttribute("service");
    def.innerHTML = e.getAttribute("definition");
    pic.src= e.getAttribute("picture")
}

cancel.addEventListener("click", function(){
    parentservice.classList.remove("active")
})



