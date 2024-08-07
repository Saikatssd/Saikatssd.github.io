
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

function emailSend() {

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "username",
        Password: "password",
        To: 'them@website.com',
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}

document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.project-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                toggle.querySelector('.arrow').textContent = '▲';
            } else {
                content.style.display = 'none';
                toggle.querySelector('.arrow').textContent = '▼';
            }
        });
    });
});


//Animate on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const scrollElements = document.querySelectorAll('.scrollAnimate');
scrollElements.forEach((e1) => observer.observe(e1));

const scroll2Elements = document.querySelectorAll('.scrollAnimate2');
scroll2Elements.forEach((e1) => observer.observe(e1));
