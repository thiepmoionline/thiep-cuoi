// AOS

   //AOS ANIMATION
   AOS.init();
// SCROLLREVEA
var swiper1 = new Swiper(".album-slide", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
 delay: 3000,
},
});


 // FANCY BOX
 Fancybox.bind("[data-fancybox]", {

 });
 
//AUDIO
$(".toggleAudio").on("click",function(){
  $(this).find("i").toggleClass("ri-volume-up-fill")
  audio = $("#audio")
  audio[0].paused ? 
  audio[0].play()
  : 
  audio[0].pause();
})

// auto play audio when user first time click on the page
var isFirstTime = false;
document.addEventListener("click", function() {
  if (isFirstTime) {
    return;
  }
  isFirstTime = true;
  $(".toggleAudio").find("i").addClass("ri-volume-up-fill")
  audio = $("#audio")
  audio[0].play()
})


