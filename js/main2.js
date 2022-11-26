// 요소 순서대로 나타나기
// const fadeEls = document.querySelectorAll('.visual .fade-in');

// 매개변수 a(이름 아무거나), b(index)
// fadeEls.forEach(function (fadeEl, index) {
// 반복요소 1초 옵션 객체데이터
/*   gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,   // 0.7 1.4 2.1 2.8
    opacity: 1
  })
}); */

// 요소 순서대로 나타나기
/* const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
})
 */

// 메인 비주얼이미지 - 요소 순서대로 나타나기

const fadeEls = document.querySelectorAll('.visual .fade-in');
console.log(fadeEls);

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  })
})

// 화살표함수 
/* fadeEls.forEach((fadeEl, index) =>
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  })
) */


/* 공지사항 swiper  */
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
})

/* Swpier (선택자, 옵션) */
/* new Swiper('.notice-line .swiper-container ', {
  direction: 'vertical',
  autoplay: true,
  loop: true
}) */

/* 프로모션 swiper */
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  slideBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})

/* 어워즈  */
new Swiper('.awards .swiper-container', {
  // autoplay: true,
  autoplay: {
    delay: 1000
  },
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5
})

/* 프로모션 보여지기 토글만들기  */

const prEl = document.querySelector('.promotion');
const toggleBtn = document.querySelector('.upload_icon');

let isHidePr = false;

toggleBtn.addEventListener('click', function () {
  isHidePr = !isHidePr;
  if (isHidePr) {
    // 숨김처리
    prEl.classList.add('hide');
  } else {
    // 보임처리
    prEl.classList.remove('hide');
  }
})


// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})


/* 관리할 요소들 검색 */

