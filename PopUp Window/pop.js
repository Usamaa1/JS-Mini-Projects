var parent = document.querySelector(".modal-parent"),
btn = document.querySelector(".btn"),
X = document.querySelector(".X");
section = document.querySelector("section")

btn.addEventListener("click", appear);

function appear(){
     parent.style.display = "block";
     section.style.filter = "blur(6px)";
}
X.addEventListener("click", dissaper);

function dissaper(){
    parent.style.display = "none";
    section.style.filter = "blur(0)"
}
 parent.addEventListener("click", dissaperP)
 function dissaperP(e){
     if (e.target.className == "modal-parent") {
         parent.style.display = "none";
         section.style.filter = "blur(0)";
     }
 }