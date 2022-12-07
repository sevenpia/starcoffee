/* 
const spyEls = document.querySelectorAll('section.spy-scroll')
console.log(spyEls);

spyEls.forEach(function (spyEl) {

  new ScrollMagic.Scene({
    triiggerElement: spyEl,
    triggerHook: 0.8
  })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
}) */

/******************** 섹션별 움직이는 애니메이션 효과 만들기 ***************** */

spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8
  })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})



/* awards - swiper로 만들기  */

/* new Swiper('.awards .swiper-container', {
  // autoplay: true,
  autoplay: {
    delay: 1000
  },
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev ',
    nextEl: '.awards .swiper-next',
  }
})
 */


new Swiper(".swiper", {
  autoplay: {
    delay: 1500,
  },
  loop: true,
  slidesPerView: 5,
  spaceBetween: 10,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  }
})




/* new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
 */
