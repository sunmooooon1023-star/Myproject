window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('scroll-block');

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

  setTimeout(() => {
    document.body.classList.remove('scroll-block');
  }, 7000);
});
