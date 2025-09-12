window.addEventListener('DOMContentLoaded', () => {
  // 초기 스크롤 막기
  document.documentElement.classList.add('scroll-block');
  document.body.classList.add('scroll-block');

  // 순차 애니메이션 예시
  setTimeout(() => {
    document.querySelector('.main_left_text > h2').classList.add('animate');
    document.querySelector('.main_left > svg.move').classList.add('animate');
  }, 1000);

  setTimeout(() => {
    document.querySelector('.main_left_text > span').classList.add('animate');
  }, 1400);

  setTimeout(() => {
    document.querySelector('.main > .main_right > .main_line').classList.add('animate');
    document.querySelector('.main > .main_right > .main_right_top > img').classList.add('animate');
    document.querySelector('.main > .main_right > .main_right_bottom > img').classList.add('animate');
  }, 2600);

  // 스크롤 텍스트 반복 (필요 없으면 삭제 가능)
  document.querySelectorAll('.scrollText').forEach(el => {
    el.textContent = el.textContent.repeat(50);
  });

  // 7초 후 blur 효과, center 효과
  setTimeout(() => {
    document.querySelector('.main_right').classList.add('blur-left');
    document.querySelector('.main_left').classList.add('center');
  }, 7000);

  // 10초 후 스크롤 막기 해제
  setTimeout(() => {
    document.documentElement.classList.remove('scroll-block');
    document.body.classList.remove('scroll-block');
  }, 10000);

  // 섹션 배열
  const sections = [
    document.querySelector('.main'),
    document.querySelector('.about'),
    document.querySelector('.section02'),
    document.querySelector('.section03'),
    document.querySelector('.section04')
  ];

  let currentIndex = 0;
  let isScrolling = false;
  let scrambleStarted = false;

  // 섹션 이동 함수
  function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return;
    isScrolling = true;
    sections[index].scrollIntoView({ behavior: 'smooth' });
    currentIndex = index;
    setTimeout(() => {
      isScrolling = false;
    }, 1500);
  }

  // 클릭 이벤트: about 섹션으로 이동 + scramble 애니메이션 한 번 실행
  const svg = document.querySelector('svg.move');
  const aboutSection = document.querySelector('.about');

  svg.addEventListener('click', () => {
    scrollToSection(1); // about 섹션 인덱스 1
    if (!scrambleStarted) {
      startScramble();
      scrambleStarted = true;
    }
  });
svg.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
  svg.classList.add('clicked');
  svg.classList.add('no-blink'); // 애니메이션 끄기
});

  // 휠 스크롤 제어
  window.addEventListener('wheel', (e) => {
    if (document.documentElement.classList.contains('scroll-block')) {
      e.preventDefault();
      return;
    }
    if (isScrolling) {
      e.preventDefault();
      return;
    }

    if (e.deltaY > 0 && currentIndex < sections.length - 1) {
      e.preventDefault();
      scrollToSection(currentIndex + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      e.preventDefault();
      scrollToSection(currentIndex - 1);
    }
  }, { passive: false });
});

// scramble 애니메이션 함수 (SplitType, GSAP 필요)
function startScramble() {
  const st = new SplitType('.scramble', { types: 'chars', charClass: 'char' });

  st.chars.forEach(char => {
    char.dataset.orig = char.textContent;
    const delay = Math.random();
    gsap.to(char, {
      delay: delay,
      duration: 5,
      scrambleText: {
        text: char.dataset.orig,
        chars: "upperAndLowerCase",
        revealDelay: 0.1
      },
      ease: "none"
    });
  });
}
