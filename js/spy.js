/* gsap  : 각 이미지 순차적으로 나오기 */

const fadeIns = document.querySelectorAll('.fade-in')
console.log(fadeIns)

/* gsap 라이브러리 연결 */
// gsap.to(요소, 지속시간(초), 옵션)

fadeIns.forEach(function (fadeIn, index) {
  gsap.to(fadeIn, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1
  })
})


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

/******************** 섹션별 움직이는 애니메이션 효과 만들기  scrollMagic ***************** */

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

// swiper(요소, { 옵션 })
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
})



new Swiper(".awards .swiper", {
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
