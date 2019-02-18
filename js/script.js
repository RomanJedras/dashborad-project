
let navIcon = document.getElementById('nav-icon1');
navIcon.addEventListener('click',function () {
    this.classList.toggle('open');
});


const header = document.getElementById("nav");
const btns = header.getElementsByClassName("nav-item");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(event) {
        event.preventDefault();
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}