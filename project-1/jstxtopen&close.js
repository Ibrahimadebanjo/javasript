var accordance  = document.getElementsByClassName("content-container");
for(var i = 0; i < accordance.length; i++) {
    accordance[i].addEventListener("click", function(){
        this.classList.toggle("active");
    })
}