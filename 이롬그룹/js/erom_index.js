$(function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 3000
        }
    });
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
/*  */
    $('.section01 > ul > li').on('mouseover', function () {
        $(this).children('.move').css({
            transform: 'translateY(-20px)',
            transition: 'all 0.4s'
        })
        $(this).children('.more').css({
            opacity: '1',
            transition: 'all 0.4s',
        })
        $(this).children('.move').children('h3').css({
            color: '#004f4a'
        })
    })
    /*  */
    $('.section01 > ul > li').on('mouseleave', function () {
        $(this).children('.move').css({
            transform: 'translateY(0)',
            transition: 'all 0.4s'
        })
        $(this).children('.more').css({
            opacity: '0',
            transition: 'all 0.4s'
        })
        $(this).children('.move').children('h3').css({
            color: '#666'
        })
    })
/* footer */
    $('.footer_top>li>.footer_right>li>i').on('click', function () {
        const $click_up = $('.sectionlast > footer .click_up');
        const $i = $(this);

        if($click_up.css('display') === 'none') {
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



})

