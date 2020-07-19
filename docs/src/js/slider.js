var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 


//    for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//         if (i === slideIndex) {
//   dots[i].className = "dot active";
// } else {
//   dots[i].className = "dot";
// }
//   }

var dotActive = document.querySelector('.dot.active');
if (dotActive == null) { // if no dot active...
    document.querySelector('.dot').classList.add("active");
} else { // remove current active and set it to next ele
    dotActive.classList.remove("active");
    (dotActive.nextElementSibling || document.querySelector('.dot')).classList.add("active");
}
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}