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
