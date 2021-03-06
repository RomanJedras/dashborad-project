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


    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    // 1
        type: 'bar',
        options: {
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        }
    },
        data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
            {
                label: "FTD",
                backgroundColor: '#F29E4E',
                borderColor: '#F29E4E',
                data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
            },
            {
                label: "Earned",
                backgroundColor: '#71B374',
                borderColor: '#71B374',
                data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
                // 7
                hidden: true,
            }]
    },
    });


    function closeModal() {
        document.getElementById('overlay').classList.remove('showModal')
    }

    document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal()
    })
})

document.querySelector('#overlay').addEventListener('click', function(e) {
    if(e.target === this) {
      closeModal()
    }
})

document.addEventListener('keyup', function(e) {
    if(e.keyCode === 27) {
      closeModal()
    }
})

let index = '';

  function openModal(index) {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
     modal.classList.remove('showModal')
    });

    document.querySelector('#overlay').classList.add('showModal')

    if (index === 'modal') {
      document.querySelector('.modal').classList.add('showModal');
    }else if (index === 'quit') {
      document.querySelector('#myLogin').classList.add('showModal');
    }
}

    let quitClick = document.querySelector('.components__quit a');

    quitClick.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector('#overlay').classList.add('showModal');
    document.querySelector('#myLogin').classList.add('showModal');
    return false;
});


let button = document.getElementById('modal');

  button.addEventListener('click',function(e) {
    e.stopPropagation();
    e.preventDefault();
    openModal(this.id);
 });

 let quit = document.getElementById('quit');

 quit.addEventListener('click',function(e) {
   e.preventDefault();
   e.stopPropagation();
   openModal(this.id);
 });

 (function(){
   const topbar = document.getElementById('topbar').innerHTML;
   const top = document.getElementById('top');
   top.className = 'nav-horizont menu menu-bt';
   top.insertAdjacentHTML('beforeend',topbar);
 })();

   const ulList = document.getElementById("nav"),
         list = ulList.getElementsByClassName("nav-item");
   const links = document.getElementById('stw');
   const ln = document.getElementById('ln');
   const banners = document.getElementById('ban');
   const personalData = document.getElementById('detal-per');


    for (let i = 0; i < ulList.childElementCount; i++) {
      list[i].addEventListener("click", function(event) {
      event.preventDefault();
      event.stopPropagation();

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
      document.querySelector('#ln').classList.toggle('st', visible);
    }

    document.querySelector('#nav-icon1').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
    });

/*jshint ignore:end*/