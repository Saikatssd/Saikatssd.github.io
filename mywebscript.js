
// Skills section
//  $('.skills-content').waypoint(function() {
//     $('.progress .progress-bar').each(function() {
//       $(this).css("width", $(this).attr("aria-valuenow") + '%');
//     });
//   }, {
//     offset: '80%'
//   });


//Navbar onScroll active
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }

        // if(window.pageYOffset>sec.offsetTop-50){
        //     sec.classList.add('active');
        // }else{
        //     sec.classList.remove('active');
        // }
    });
};

let mobileNav = document.querySelector('.mobile-nav-toggle');
let header = document.getElementById('header');
let mobileNavIcon = document.querySelector('.mobile-nav-toggle i');

if (window.innerWidth >= '1200px') {
    header.style.left = '0rem';
}

mobileNav.addEventListener('click', () => {
    mobileNavIcon.classList.toggle('fa-xmark');
    // alert(mobileNavIcon.getAttribute('class'))
    if (mobileNavIcon.getAttribute('class') == 'fa-sharp fa-solid fa-bars') {
        header.style.left = '-30rem';

    }
    else {

        header.style.left = '0rem';
        // document.body.addEventListener('click', () => {
        //     header.style.left = '-30rem';
        // })
    }

})

