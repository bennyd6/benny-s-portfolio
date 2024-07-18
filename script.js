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

function rev(){
    var reveals=document.querySelectorAll('.rev');
    for(var i=0;i<rev.length;i++){
        var windowheight=window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top;
        var revealpoint= 150;
        if(revealtop<windowheight-revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const message = document.getElementById('message').value;

    const contact = { name, email, mobileNumber, message };

    fetch('http://localhost:8080/api/contact/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
    })
    .then(response => response.json())
    .then(data => {
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}



// function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "cadheshbenny@gmail.com",
//         Password : "password",
//         To : 'cadheshbenny@gmail.com',
//         From : document.querySelector("#email"),
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );

// }
