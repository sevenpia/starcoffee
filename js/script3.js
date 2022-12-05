// 검색영역 - 검색버튼
/* const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')
searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})
 */


//검색창 제어
// 검색존 설정(.search) : 검색존에 클릭이 일어나면 포커스 실행시키고  ==  포커스되면 돋보기 모양 없어지도록 한다.
// searchInputEl : 인풋영역에 포커스가 일어나면 placeholde 설정.

const searchEl = document.querySelector('.search')
const searchInputEl = document.querySelector('.search input')

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})


// 메인이미지 순차적으로 나타나기
// 나타날 요소들을 하나씩 반복해서 처리!
// 각 요소들을 순서대로(delay) 보여지게 함!
// gsap.to(요소, 지속시간(초), 옵션)

/* const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
}) */


// gsap.to(요소, 지속시간(초), 옵션)
const fadeEls = document.querySelectorAll('.visual .fade-in')
console.log(fadeEls)
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  })
})

/* const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1
  })
}) */


// awards swiper
new Swiper('.awards .swiper', {
  autoplay: {
    delay: 1000
  },
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})
