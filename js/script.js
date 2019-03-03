

const navIcon = document.getElementById('nav-icon1'),
    sidebar = document.getElementById('sidebar'),
    siteWraper = document.getElementById('stw'),
    linkItem = document.getElementById('ln');

navIcon.addEventListener('click',function () {
    this.classList.toggle('open');
    sidebar.style.display = 'block';
    sidebar.classList.toggle('menu-open');
    siteWraper.classList.toggle('width');
    linkItem.classList.toggle('link-nav');


});


const ulList = document.getElementById("nav"),
         list = ulList.getElementsByClassName("nav-item");
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function(event) {
        event.preventDefault();
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}

function isHover(e) {
    return (e.parentElement.querySelector(':hover') === e);
}

const myDiv = document.getElementById('links');
const myTr = myDiv.getElementsByTagName('tr');

for(let i = 0; i< myTr.length; i++) {
    myTr[i].addEventListener("mousemove", function checkHover() {
        let hovered = isHover(myDiv);
        let current = document.getElementsByClassName("icon-ok");
        if (hovered && current.length > 0) {
            current[0].className = current[0].className.replace(" icon-ok", "");
        }
        this.className += " icon-ok";
    })

    myTr[i].addEventListener("mouseleave", function checkHover() {
        let hovered = isHover(myDiv);

        if (! hovered) {
            this.classList.remove('icon-ok');
        }

    })
}

function toggleMenu(visible) {
    document.querySelector('.menu').classList.toggle('show', visible)
}

// document.querySelector('.hamburger').addEventListener('click', function(e) {
//     e.preventDefault();
//     toggleMenu()
// });