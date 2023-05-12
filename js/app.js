

// function for order.html
function submit(){
    let select = document.querySelector('#myorder').values;
    let time = document.querySelector('#time').values;
    let location = document.querySelector('#location').values;
    let phone = document.querySelector('#phone').values;
    
   alert("Your order has successfully placed!")
    }

// function for contact.html
    function myContactFunction(){
        let select = document.querySelector('#myorder').values;
        let time = document.querySelector('#time').values;
        let location = document.querySelector('#location').values;
        let phone = document.querySelector('#phone').values;
        let comments = document.querySelector('#myComments').values;
        
       alert("Thank you for your comments!")
        }

        // adding lightbox
    document.addEventListener("DOMContentLoaded", function () {
        const lightbox = document.getElementById("lightbox");
        const lightboxContent = document.getElementById("lightboxContent");
        const lightboxCaption = document.getElementById("lightboxCaption");
        const lightboxClose = document.getElementById("lightboxClose");
        const images = document.getElementsByClassName("lightbox-image");
    
        for (let image of images) {
            image.addEventListener("click", function () {
                lightbox.style.display = "flex";
                lightboxContent.src = image.src;
                lightboxCaption.innerHTML = image.alt;
            });
        }
    
        lightboxClose.addEventListener("click", function () {
            lightbox.style.display = "none";
        });
    
        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                lightbox.style.display = "none";
            }
        });
    });

    //adding fadeIn
    function myFunction() {
        location.reload();
    }

    //adding bounce
    function myBounceFunction() {
        location.reload();
     }

     //setting dark/light theme
let theme = 'dark';
let themeBtn = document.querySelector('#themeBtn');
let themeElems = document.querySelectorAll('.dark');

function ToggleTheme() {
    if(theme == 'dark') {
        theme = 'lite'; // now in lite theme
        for(let i = 0; i < themeElems.length; i++) {
            themeElems[i].setAttribute('class', 'lite');
        }
        // sets the BUTTON text giving them directions!
        themeBtn.innerHTML = 'Dark Mode';
    } 
    else {
        theme = 'dark'; // now in dark theme
        for(let i = 0; i < themeElems.length; i++) {
            themeElems[i].setAttribute('class', 'dark');
        }
        // sets the BUTTON text giving them directions!
        themeBtn.innerHTML = 'Lite Mode';
    }
} // ToggleTheme()