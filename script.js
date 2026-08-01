const background = document.getElementById("background-box")

document.addEventListener("mousemove", (e) => {
    let xRatio = (e.clientX / window.innerWidth) - 0.5;
    let yRatio = (e.clientY / window.innerHeight) - 0.5;

    let x = xRatio * 50;
    let y = yRatio * 50;

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

const timestamp = new Date().getTime();

fetch('status.txt?t=${timestamp}', { cache: 'no-store' })
    .then(response => response.text())
    .then(text => {
        const bubble = document.getElementById('thought-bubble');
        
        if (text.trim() !== "") {
            bubble.innerText = text;
            bubble.style.opacity = 1;
        }
    })
    .catch(error => {
        console.log("Status file not found or couldn't be loaded.");
    });
