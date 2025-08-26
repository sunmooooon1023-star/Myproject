
  document.body.classList.add('scroll-block');

  setTimeout(() => {
  document.querySelector('.sub_text > h2').classList.add('animate');
  document.querySelector('.sub_text > img').classList.add('animate');
}, 1000);
  setTimeout(() => {
  document.querySelector('.sub_text > span').classList.add('animate');
}, 1400);

  setTimeout(() => {
  document.querySelector('.main_line').classList.add('animate');
  document.querySelector('.main_text').classList.add('animate');
}, 2600);

  setTimeout(() => {
    document.body.classList.remove('scroll-block');
  }, 7000);




  /* section01 동작구현 */
const leftli = document.querySelectorAll('.sec01_list li');
const rightdiv = document.querySelectorAll('.sec01_rightbox');

leftli.forEach(item => {
  item.addEventListener('click', () => {
    const clickli = item.getAttribute('data-tab');

    // li 활성화 토글
    leftli.forEach(li => li.classList.remove('active'));
    item.classList.add('active');
    

    // 모든 .sec01_rightbox 숨기고, 해당 id만 표시
    rightdiv.forEach(div => div.style.display = 'none');
    document.getElementById(clickli).style.display = 'block';
  });
});



