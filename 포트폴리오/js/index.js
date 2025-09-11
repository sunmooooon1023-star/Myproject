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
}, 11000);




setTimeout(() => {
  document.querySelector('.main_right').classList.add('blur-left');
  document.querySelector('.main_left_text').classList.add('blur-out');
  document.querySelector('.move').classList.add('center');  // 기존 animate 유지, center만 추가
}, 7500);



});


/* about */

// 플러그인 등록 필수
gsap.registerPlugin(ScrambleTextPlugin);

const st = new SplitType('.scramble', { types: 'chars', charClass: 'char' });

st.chars.forEach(char => {
  char.dataset.orig = char.textContent;
  const delay = Math.random() * 3;
  gsap.to(char, {
    delay: delay,
    duration: 15,
    scrambleText: {
      text: char.dataset.orig,
      chars: "upperAndLowerCase",
      revealDelay: 0.1
    },
    ease: "none"
  });
});




