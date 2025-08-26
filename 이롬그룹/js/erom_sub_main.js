/* 전체메뉴 */

$('.main_menu').on('mouseover', 'li', function () {
    $(this).children('.hover_menu').stop().slideDown(300);
})
$('.main_menu').on('mouseleave', 'li', function () {
    $(this).children('.hover_menu').stop().slideUp(300);
})

$('.Allmenu').on('click', function () {
    $('.click_menu').stop().slideDown(300);
})
$('.btn_x').on('click', function () {
    $('.click_menu').stop().slideUp(300);
})




/* sec01_click01 */
$('.section01 > .sec01_text > ul >li:nth-child(2)>i').on('click', function () {
    const $click_up = $('.section01 > .sec01_click01');
    const $i = $(this);

    if ($click_up.css('display') === 'none') {
        $click_up.stop().slideDown(),
            $i.css({
                transform: 'rotate(180deg)'
            })
    } else {
        $click_up.stop().slideUp(),
            $i.css({
                transform: 'rotate(0deg)'
            })
    }
})

/* sec01_click02 */

$('.section01 > .sec01_text > ul >li:last-child>i').on('click', function () {
    const $click_up = $('.section01 > .sec01_click02');
    const $i = $(this);

    if ($click_up.css('display') === 'none') {
        $click_up.stop().slideDown(),
            $i.css({
                transform: 'rotate(180deg)'
            })
    } else {
        $click_up.stop().slideUp(),
            $i.css({
                transform: 'rotate(0deg)'
            })
    }
})










/* footer */
$('.footer_top>li>.footer_right>li>i').on('click', function () {
    const $click_up = $('.sectionlast > footer .click_up');
    const $i = $(this);

    if ($click_up.css('display') === 'none') {
        $click_up.stop().slideDown(),
            $i.css({
                transform: 'rotate(180deg)'
            })
    } else {
        $click_up.stop().slideUp(),
            $i.css({
                transform: 'rotate(0deg)'
            })
    }
})
