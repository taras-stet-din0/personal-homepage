let acc = document.getElementsByClassName("accordion_item");

for(i = 0; i <= acc.length; i++) {
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
    });
}