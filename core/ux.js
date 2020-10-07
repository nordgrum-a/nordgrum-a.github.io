//GTM


//Initialization
$('.hr').addClass('vw');
$('[data-top]').each(function(){var top = $(this).attr('data-top'); $(this).css('margin-top', top + 'rem');});
$('[data-right]').each(function(){var right = $(this).attr('data-right'); $(this).css('margin-right', right + 'rem');});

//Load
$(document).ready(function(){$('.load').remove(); $('body').css('overflow-y', 'initial');});

//AOS else $element.removeAttr("animation");
var $aos = $('[data-aos], .hr');
function ciiv(){var wh = $(window).height(); var wtp = $(window).scrollTop(); var wbt = (wtp + wh); $.each($aos, function() {var $element = $(this); var eh = $element.outerHeight(); var etp = $element.offset().top; var ebp = (etp + eh); if ((ebp >= wtp) && (etp <= wbt)) {$element.addClass('aos');} else {}});}
$(window).on('scroll resize', ciiv); $(window).trigger('scroll');

$('[data-aos-dur]').each(function(){var aos_dur = $(this).attr('data-aos-dur'); $(this).css('animation-duration', aos_dur + 's');});

//Cursor
if ($(window).width() > 720) {$('body').append('<span class="cursor"></span><div class="circle"></div>');}
function moveCursor(e) {TweenLite.to($('.cursor'), 0.125, {css: {left: e.pageX, top: e.pageY}});} $(window).on('mousemove', moveCursor);
function moveCircle(e) {TweenLite.to($('.circle'), 0.675, {css: {left: e.pageX, top: e.pageY}});} $(window).on('mousemove', moveCircle);

$('a, button').hover(function(){$('.cursor').css('color', 'white'); $('.circle').css({'background-color': 'rgba(72,205,196,0.5)', 'border': 'none'});}, function(){$('.cursor').css('color', '#48CDC4'); $('.circle').css({'background-color': 'transparent', 'border': 'solid 0.05rem white'});});

//Parallax
$(document).mousemove(function(e){
	parallaxIt(e, '[data-parallax=follow]', 50);
	parallaxIt(e, '[data-parallax=unfollow]', -50);
	parallaxIt(e, '[data-parallax=follow-x2]', 100);
	parallaxIt(e, '[data-parallax=unfollow-x2]', -100);
});
function parallaxIt(e, target, movement){var $this = $('body'); var relX = e.pageX - $this.offset().left; var relY = e.pageY - $this.offset().top; TweenMax.to(target, 1, {x: (relX - $this.width() / 2) / $this.width() * movement, y: (relY - $this.height() / 2) / $this.height() * movement});}
$(document).mousemove(function(event){$('[data-parallax=angle]').each(function(index, element){var xPos = (event.clientX/$(window).width())-0.5, yPos = (event.clientY/$(window).height())-0.5, box = element; TweenLite.to(box, 1, {rotationY: xPos * -50, rotationX: yPos * 50, ease: Power1.easeOut,});})});

//Form
var submitted=false;

//Nav Hide
var nps = window.pageYOffset; window.onscroll = function() {var ncs = window.pageYOffset; if (nps > ncs) {$('.nav-desktop').css({'top': '0', 'box-shadow': '0 0.125rem 0.25rem 0 rgba(0,0,0,0.125)'});} else {$('.nav-desktop').css({'top': '-3.5rem', 'box-shadow': 'initial'});} nps = ncs;}

//Nav Mob
function nav_mob_close() {$('.nav-mob > div:first-child > div').css({'height': '0', 'opacity': '0', 'pointer-events': 'none'});}

$('.nav-mob > div:last-child > span:nth-of-type(1)').click(function(){nav_mob_close();});
$('.nav-mob > div:last-child > span:nth-of-type(2)').click(function(){nav_mob_close(); $('.nav-mob > div:first-child > div:nth-child(1)').css({'height': '100vh', 'opacity': '1', 'pointer-events': 'initial'});});
$('.nav-mob > div:last-child > span:nth-of-type(3)').click(function(){nav_mob_close(); $('.nav-mob > div:first-child > div:nth-child(2)').css({'height': '100vh', 'opacity': '1', 'pointer-events': 'initial'});});
$('.nav-mob > div:last-child > span:nth-of-type(4)').click(function(){nav_mob_close(); $('.nav-mob > div:first-child > div:nth-child(3)').css({'height': '100vh', 'opacity': '1', 'pointer-events': 'initial'});});
$('.nav-mob > div:last-child > span:nth-of-type(5)').click(function(){nav_mob_close(); $('.nav-mob > div:first-child > div:nth-child(4)').css({'height': '100vh', 'opacity': '1', 'pointer-events': 'initial'});});

//Nav
function totop() {$(window).scrollTop($('body').offset().top);}
function tobottom() {$(window).scrollTop($('footer p').offset().top);}

//Demonstration
$('body').append('<a class="stop-demo mdl2" href="javascript:scroll_p();"></a>');
$('footer').after('<audio src="https://mirkrovli18.ru/media/mp3/music.mp3" loop></audio>');

var audio = $('audio[loop]'); var elem = document.querySelector('html, body');
function scroll() {audio.trigger('play'); audio.prop('volume', 0.375); $('.stop-demo').css('top', '2rem'); $('html').css('scroll-behavior', 'auto'); $('html, body').animate({scrollTop: $('footer p').offset().top}, 90000); toggleFullScreen(elem);}

function scroll_p() {audio.trigger('pause'); $('.stop-demo').css('top', '-10rem'); $('html').css('scroll-behavior', 'smooth'); $('html, body').queue([]).stop(); toggleFullScreen(elem);}

function toggleFullScreen(elem) {if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {if (elem.requestFullScreen) {elem.requestFullScreen();} else if (elem.mozRequestFullScreen) {elem.mozRequestFullScreen();} else if (elem.webkitRequestFullScreen) {elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);} else if (elem.msRequestFullscreen) {elem.msRequestFullscreen();}} else {if (document.cancelFullScreen) {document.cancelFullScreen();} else if (document.mozCancelFullScreen) {document.mozCancelFullScreen();} else if (document.webkitCancelFullScreen) {document.webkitCancelFullScreen();} else if (document.msExitFullscreen) {document.msExitFullscreen();}}}

//Share
function share() {if (navigator.share) {navigator.share({title: document.title, text: document.querySelector("meta[name='description']").getAttribute("content"), url: window.location.href}).then(() => {console.log('Ready!');}) .catch(console.error);} else {console.log('Error...');}}