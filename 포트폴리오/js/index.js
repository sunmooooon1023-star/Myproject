window.addEventListener('DOMContentLoaded', () => {

  document.documentElement.classList.add('scroll-block'); // <html>
  document.body.classList.add('scroll-block');            // <body>

  setTimeout(() => {
    document.querySelector('.main_left_text > h2').classList.add('animate');
    document.querySelector('.main_left > img').classList.add('animate');
  }, 1000);

  setTimeout(() => {
    document.querySelector('.main_left_text > span').classList.add('animate');
  }, 1400);

  setTimeout(() => {
    document.querySelector('.main>.main_right>.main_line').classList.add('animate');
    document.querySelector('.main>.main_right>.main_right_top > img').classList.add('animate');
    document.querySelector('.main>.main_right>.main_right_bottom > img').classList.add('animate');
  }, 2600);

  document.querySelectorAll('.scrollText').forEach(el => {
    el.textContent = el.textContent.repeat(50);
  });

  setTimeout(() => {
    document.documentElement.classList.remove('scroll-block');
    document.body.classList.remove('scroll-block');
  }, 7000);
});


/* about */

// 플러그인 등록 필수
gsap.registerPlugin(ScrambleTextPlugin);

// 텍스트 분할 및 스크램블 예시
const st = new SplitType('p', { types: 'chars', charClass: 'char' });
st.chars.forEach(char => char.dataset.orig = char.textContent);

// 애니메이션 예시: 5초 동안 스크램블 후 복원
st.chars.forEach((char, i) => {
  const delay = Math.random() * 3;
  gsap.to(char, {
    delay,
    duration: 17,
    scrambleText: {
      text: char.dataset.orig,
      chars: "upperAndLowerCase",
      revealDelay: 0.1
    },
    ease: "none"
  });
});