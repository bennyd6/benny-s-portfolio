document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

ScrollReveal({
    reset:true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('#intro',{delay:500});

// ScrollReveal().reveal('#about-heading',{delay:500,origin:'top'});
ScrollReveal().reveal('#navbar', { delay: 500,origin: 'right' });
// ScrollReveal().reveal('.punchline', { delay: 2000 });


// window.addEventListener('scroll',rev);

// function rev(){
//     var reveals=document.querySelectorAll('.rev');
//     for(var i=0;i<rev.length;i++){
//         var windowheight=window.innerHeight;
//         var revealtop=reveals[i].getBoundingClientRect().top;
//         var revealpoint= 150;
//         if(revealtop<windowheight-revealpoint){
//             reveals[i].classList.add('active');
//         }
//         else{
//             reveals[i].classList.remove('active');
//         }
//     }
// }