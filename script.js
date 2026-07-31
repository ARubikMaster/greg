const background = document.getElementById("background-box")

document.addEventListener("mousemove", (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let width  = background.offsetWidth;
    let height = background.offsetHeight;

    let x = screen.width/2-width/2+mouseX/10;
    let y = screen.height/2-height/2+mouseY/10;

    background.style.transform = `translate(${x}px, ${y}px)`;
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    for (var j = 0; j < coll.length; j++) {
        if (coll[j] !== this) {
            coll[j].classList.remove("active");
            coll[j].nextElementSibling.style.maxHeight = null;
        }
    }

    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
