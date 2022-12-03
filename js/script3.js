// 나타날 요소들을 하나씩 반복해서 처리!
// 각 요소들을 순서대로(delay) 보여지게 함!

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


const youEls = document.querySelectorAll('.youtube .fade-in')
youEls.forEach(function (youEl, index) {
  gsap.to(youEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1
  })
})