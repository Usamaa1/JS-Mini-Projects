document.querySelector(".slider").addEventListener("input",
function(){
    document.querySelector(".original-image").style.width = this.value + "%";
}
);