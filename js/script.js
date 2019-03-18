/*jshint esversion: 6 */
/*global window */
/* jshint browser: true */
/* jshint node: true */
/* jshint maxlen: 550 */
/* jshint ignore:start */



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


})

const ulList = document.getElementById("nav"),
         list = ulList.getElementsByClassName("nav-item");
const links = document.getElementById('stw');
const ln = document.getElementById('ln');
const banners = document.getElementById('ban');
const personalData = document.getElementById('detal-per');


for (let i = 0; i < ulList.childElementCount; i++) {
    list[i].addEventListener("click", function(event) {
        event.preventDefault();

        if (this.textContent === 'General' ) {
            links.classList.remove('hidden');
            banners.classList.add('hidden');
            ln.classList.add('hidden');
            personalData.classList.add('hidden');
        } else if (this.textContent === 'Links') {
            links.classList.add('hidden');
            ln.classList.remove('hidden');
            banners.classList.remove('show');
            personalData.classList.add('hidden');
        } else if (this.textContent === 'Banners') {
            banners.classList.remove('hidden');
            ln.classList.add('hidden');
            banners.classList.add('show');
            personalData.classList.add('hidden');
        } else if (this.textContent === 'Personal Deta') {
            ln.classList.add('hidden');
            links.classList.add('hidden');
            banners.classList.remove('show');
            banners.classList.add('hidden');
            personalData.classList.remove('hidden');
        } else {
           links.classList.remove('hidden');
        }

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
    let myTr = myDiv.getElementsByTagName('tr');
const myBanner = document.getElementById('banner');
    let myCol = myBanner.getElementsByTagName('tr');

getHover(myDiv, myTr);

getHover(myBanner,myCol);




function getHover(mainItem, mainCol) {
    for(let i = 0; i< mainCol.length; i++) {
        mainCol[i].addEventListener("mousemove", function checkHover() {
            let hovered = isHover(mainItem);
            let current = document.getElementsByClassName("icon-ok");
            if (hovered && current.length > 0) {
                current[0].className = current[0].className.replace(" icon-ok", "");
            }
            this.className += " icon-ok";
        })

        mainCol[i].addEventListener("mouseleave", function checkHover() {
            let hovered = isHover(mainItem);

            if (! hovered) {
                this.classList.remove('icon-ok');
            }
        })
    }
}


function toggleMenu(visible) {
    document.querySelector('header').classList.toggle('show', visible);
    document.querySelector('table').classList.toggle('font', visible);
    document.querySelector('#nav-icon1').classList.remove('hamburger-left"', visible);
}

document.querySelector('#nav-icon1').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
});

/*jshint ignore:end*/