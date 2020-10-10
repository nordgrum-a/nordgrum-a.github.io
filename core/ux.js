//GTM

//Loader
$('body').append('<div class="load"><div><div></div><div><div></div></div><span>Загрузка</span></div><span>©2020 Мир Кровли.<br><span>powered by Mordwerg</span></span></div>');
$(document).ready(function(){$('.load').remove(); $('body').css('overflow-y', 'initial');});

//Initialization
//setTimeout(function() {scroll_p();}, 45000);
$('.hr').addClass('vw');
$('[data-top]').each(function(){var top = $(this).attr('data-top'); $(this).css('margin-top', top + 'rem');});
$('[data-right]').each(function(){var right = $(this).attr('data-right'); $(this).css('margin-right', right + 'rem');});

var scroll_time = 60000;
if ($(window).width() < 720) {
	$('#why-us [data-aos]').attr('data-aos','zoom-in');
	var scroll_time = 90000;
}

//Cart
$('head').append('<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.css">');
$('body').append('<script async src="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.js"></script><div id="snipcart" data-api-key="YmEyNzMwMDQtYzViZS00M2Y3LWJhNmQtOTMyNmFmNzU3ODc2NjM3Mzc2ODUwODYzMzc2MzA2" hidden data-config-add-product-behavior="none"></div><div class="cart-added"><span>добавлено</span><span></span></div>');
document.addEventListener('snipcart.ready', () => {Snipcart.api.session.setCurrency('rub');});

//AOS else $element.removeAttr("animation");
var $aos = $('[data-aos], .hr');
function ciiv(){var wh = $(window).height(); var wtp = $(window).scrollTop(); var wbt = (wtp + wh); $.each($aos, function() {var $element = $(this); var eh = $element.outerHeight(); var etp = $element.offset().top; var ebp = (etp + eh); if ((ebp >= wtp) && (etp <= wbt)) {$element.addClass('aos');} else {}});}
$(window).on('scroll resize', ciiv); $(window).trigger('scroll');

$('[data-aos-dur]').each(function(){var aos_dur = $(this).attr('data-aos-dur'); $(this).css('animation-duration', aos_dur + 's');});

//Form
var submitted=false;

//Nav Hide
var nps = window.pageYOffset; window.onscroll = function() {var ncs = window.pageYOffset; if (nps > ncs) {$('.nav-desktop').css({'top': '0', 'box-shadow': '0 0.125rem 0.25rem 0 rgba(0,0,0,0.125)'});} else {$('.nav-desktop').css({'top': '-3.5rem', 'box-shadow': 'initial'});} nps = ncs;}

//Nav Mob
function nav_mob_shop() {
	nav_mob_close(); $('body').css('overflow-y', 'hidden'); $('#nav-mob-1-c').addClass('nav-mob-active'); $('#nav-mob-1').attr('onClick','nav_mob_close();');}
function nav_mob() {
	nav_mob_close(); $('body').css('overflow-y', 'hidden'); $('#nav-mob-2-c').addClass('nav-mob-active'); $('#nav-mob-2').html(''); $('#nav-mob-2').css({'font-size': '1.25rem', 'line-height': 'initial', 'letter-spacing': 'initial', 'margin-left': '0.3rem'}); $('#nav-mob-2').attr('onClick','nav_mob_close();');}
function nav_mob_contact() {
	nav_mob_close(); $('body').css('overflow-y', 'hidden'); $('#nav-mob-3-c').addClass('nav-mob-active'); $('#nav-mob-3').attr('onClick','nav_mob_close();');}
$('.nav-mob .snipcart-checkout').click(function(){nav_mob_close();});
$('.snipcart-add-item').click(function(){$('.cart-added').css('animation','cart-added 2s ease-in-out'); setTimeout(function() {$('.cart-added').css('animation','initial');}, 2000);});

function nav_mob_close() {
	$('body').css('overflow-y', 'initial'); $('.nav-mob > div:first-child > div').removeClass('nav-mob-active');
	$('#nav-mob-1').attr('onClick','nav_mob_shop();');
	$('#nav-mob-2').attr('onClick','nav_mob();'); $('#nav-mob-2').html('<br><br>'); $('#nav-mob-2').css({'font-size': '0.625rem', 'line-height': '0.425rem', 'letter-spacing': '-0.2rem', 'margin-left': 'initial'});
	$('#nav-mob-3').attr('onClick','nav_mob_contact();');}

//Nav
function totop() {$(window).scrollTop($('body').offset().top);}
function tobottom() {$(window).scrollTop($('footer').offset().top);}

//Demonstration
$('body').append('<a class="stop-demo mdl2" href="javascript:scroll_p();"></a>');
$('footer').after('<audio src="media/mp3/music.mp3" loop></audio>');

var audio = $('audio[loop]'); var elem = document.querySelector('html, body');

function scroll() {audio.currentTime = 0; audio.trigger('play'); audio.prop('volume', 0.5); $('.stop-demo').css('top', '2rem'); $('html').css('scroll-behavior', 'auto'); $('html, body').animate({scrollTop: $('footer').offset().top}, scroll_time); toggleFullScreen(elem);}

function scroll_p() {audio.trigger('pause'); $('.stop-demo').css('top', '-10rem'); $('html').css('scroll-behavior', 'smooth'); $('html, body').queue([]).stop(); toggleFullScreen(elem);}

function toggleFullScreen(elem) {if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {if (elem.requestFullScreen) {elem.requestFullScreen();} else if (elem.mozRequestFullScreen) {elem.mozRequestFullScreen();} else if (elem.webkitRequestFullScreen) {elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);} else if (elem.msRequestFullscreen) {elem.msRequestFullscreen();}} else {if (document.cancelFullScreen) {document.cancelFullScreen();} else if (document.mozCancelFullScreen) {document.mozCancelFullScreen();} else if (document.webkitCancelFullScreen) {document.webkitCancelFullScreen();} else if (document.msExitFullscreen) {document.msExitFullscreen();}}}

//Share
function share() {if (navigator.share) {navigator.share({title: document.title, text: document.querySelector("meta[name='description']").getAttribute("content"), url: window.location.href}).then(() => {console.log('Ready!');}) .catch(console.error);} else {console.log('Error...');}}