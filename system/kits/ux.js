//Loader
$('body').prepend('<div class="loader"><div></div><div></div><span>Загрузка</span><span>Электро Поинт | Сарапул</span></div>');
$(document).ready(function(){$('.loader').remove(); swiper();});

//GTM
$('head').append('<script async src="https://www.googletagmanager.com/gtag/js?id=UA-172173285-1"></script>');
window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-172173285-1');

//Cart data-config-add-product-behavior="none"
$('head').append('<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.css">');
$('body').append('<script async src="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.js"></script><div id="snipcart" data-api-key="NGIwYzY2MGQtNDY1Yi00ZDI5LWI1YjItYjk2MjgzYmY4NGUxNjM3MzkwNDYxOTE0Njg4NTEy" hidden></div>');
document.addEventListener('snipcart.ready', () => {
    Snipcart.api.session.setCurrency('rub');
    //if ($('.snipcart-items-count').text() == '0') {$('.snipcart-items-count').html('пусто');}
});

//GSAP
$('body').append('<script src="libs/gsap.js"></script>');

//Swiper
$('body').append('<script src="libs/swiper.js" defer></script>');
function swiper() {
    var swiper = new Swiper('.swiper-container', {
        speed: 1000, parallax: true, direction: 'vertical',
        mousewheel: true, keyboard: {enabled: true,},
        navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',},
        pagination: {el: '.swiper-pagination', type: 'fraction',},
        scrollbar: {el: '.swiper-scrollbar',},
        breakpoints: {720: {direction: 'horizontal', slidesPerView: 2, slidesPerGroup: 2},},
    });
    $('.swiper-button-prev').focus();
    $('.swiper-pagination-fraction').html('<span class="swiper-pagination-current">E</span><div></div><span class="swiper-pagination-total">P</span>');
}
$('.slide-num').attr('data-swiper-parallax', '-175%');

//Init
var scroll_time = 60000;
var nav_left = '16rem';
if ($(window).width() > 720) {$('body').append('<div class="cursor"></div><div class="circle"><div></div></div>');}
if ($(window).width() < 720) {var scroll_time = 90000; $('.page-nav, .social').remove(); var nav_left = '0';}

//Nav Hide
var nps = window.pageYOffset;
if ($(window).width() < 720) {window.onscroll = function() {var ncs = window.pageYOffset; if (nps > ncs) {$('header').css('top', '0');} else {$('header').css('top', '-4rem');} nps = ncs;}}

function nav() {$('header > div').addClass('active').attr('onclick', 'nav_c();'); $('header, header > nav').addClass('active');}
function nav_c() {$('header > div').removeClass('active').attr('onclick', 'nav();'); $('header, header > nav').removeClass('active');}

//Global
$('.hr').addClass('vw');
$('[data-top]').each(function(){var top = $(this).attr('data-top'); $(this).css('margin-top', top + 'rem');});
$('[data-right]').each(function(){var right = $(this).attr('data-right'); $(this).css('margin-right', right + 'rem');});

//Cursor
function moveCursor(e) {TweenLite.to($('.cursor'), 0, {css: {left: e.pageX, top: e.pageY}});} $(window).on('mousemove', moveCursor);
function moveCircle(e) {TweenLite.to($('.circle'), 0.5, {css: {left: e.pageX, top: e.pageY}});} $(window).on('mousemove', moveCircle);

$('a, button, input, .snipcart-add-item, header > div, .swiper-button-next, .swiper-button-prev').hover(function(){$('.cursor, .circle').addClass('hover');}, function(){$('.cursor, .circle').removeClass('hover');});

//Parallax
$(document).mousemove(function(e){parallaxIt(e, "[parallax=follow]", 50); parallaxIt(e, "[parallax=unfollow]", -50); parallaxIt(e, "[parallax=follow-x2]", 100); parallaxIt(e, "[parallax=unfollow-x2]", -100);});
function parallaxIt(e, target, movement){var $this = $("body"); var relX = e.pageX - $this.offset().left; var relY = e.pageY - $this.offset().top; TweenMax.to(target, 1, {x: (relX - $this.width() / 2) / $this.width() * movement, y: (relY - $this.height() / 2) / $this.height() * movement});}
$(document).mousemove(function(event){$("[parallax=angle]").each(function(index, element){var xPos = (event.clientX/$(window).width())-0.5, yPos = (event.clientY/$(window).height())-0.5, box = element; TweenLite.to(box, 1, {rotationY: xPos * -100, rotationX: yPos * 100, ease: Power1.easeOut,});})});

//Forms
var submitted=false;
$('form').keypress(function(e) {if (e.keyCode == 13) {return false;} else {}});

//Connection Directive
$('body').attr('ononline','online();'); $('body').attr('onoffline','offline();');
$('body').append('<audio preload id="online" src="https://electro-point.net/media/mp3/online.mp3"></audio>');
$('body').append('<audio preload id="offline" src="https://electro-point.net/media/mp3/offline.mp3"></audio>');
function onon() {$('#online').trigger('play');}
function onoff() {$('#offline').trigger('play');}

function online() {
	onon();
	$('input[type=button]').removeAttr('onclick');
	$('input[type=button]').attr('type','submit');
	$('[name=theme-color]').attr('content','#6FDEDE');
}
function offline() {
	onoff();
	$('input[type=submit]').attr('onclick','onoff();');
	$('input[type=submit]').attr('type','button');
	$('[name=theme-color]').attr('content','#DE0000');
}

//Share
function share() {if (navigator.share) {navigator.share({title: document.title, text: document.querySelector("meta[name='description']").getAttribute('content'), url: window.location.href}).then(() => {console.log('Ready!');}) .catch(console.error);} else {console.log('Error...');}}