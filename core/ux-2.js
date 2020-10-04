//GTM
$('head').append('<script async src="https://www.googletagmanager.com/gtag/js?id=UA-172173285-1"></script>');
window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-172173285-1');

//Modules


//Nav-Desktop
$('body').prepend('<nav class="desktop"><div class="dropdown"><span class="mdl2"></span><div><a href="https://electro-point.net/">Главная</a><a href="https://electro-point.net/about">О Нас</a><a href="https://electro-point.net/contact">Контакты</a></div></div><div class="dropdown"><span class="mdl2"></span><div><span>Магазин</span><a href="https://electro-point.net/shop/plans">Сим-Карты</a><a href="https://electro-point.net/shop/modems">Модемы</a></div></div><a href="https://electro-point.net/blog" class="mdl2"></a><a href="javascript:scroll();" class="mdl2"></a><div class="mdl2"><a href="javascript:totop();"></a><a href="javascript:tobottom();"></a><a href="javascript:shareit();"></a></div></nav>');

//Nav-Mob
$('nav.desktop').after('<nav class="mob"><a href="https://electro-point.net/">electro point</a><span>■■■<br>■■■<br>■■■</span><div><span></span><span>Навигация</span><div><a href="https://electro-point.net/"><span></span><span>Главная</span></a><a href="https://electro-point.net/about"><picture><source type="image/webp" srcset="https://electro-point.net/media/webp/icon-2.webp"><source type="image/png" srcset="https://electro-point.net/media/png/icon-2.png"><img src="https://electro-point.net/media/png/icon-2.png" alt="Безлимитный интернет и модемы в Сарапуле - Electro Point"></picture><span>О Нас</span></a><a href="https://electro-point.net/contact"><span></span><span>Контакты</span></a><a href="https://electro-point.net/shop"><span></span><span>Магазин</span></a><a href="https://electro-point.net/blog"><span></span><span>Блог</span></a></div><span>Действия</span><div><a href="javascript:shareit();"><span></span><span>Поделиться</span></a><a href="javascript:totop();"><span></span><span>Вверх</span></a><div></div><a href="javascript:scroll();"><span></span><span>Демонстрация</span></a><a href="javascript:tobottom();"><span></span><span>Вниз</span></a></div></div></nav>');

function totop() {$(window).scrollTop($('body').offset().top);}
function tobottom() {$(window).scrollTop($('footer p').offset().top);}

$('nav.mob').after('<nav class="static"><a href="https://electro-point.net/">Главная</a><a href="https://electro-point.net/shop">Магазин</a><a href="https://electro-point.net/about">О Нас</a><a href="https://electro-point.net/contact">Контакты</a></nav>');

//Social
$('nav.static').after('<div class="social"><a href="https://fb.me/ElectroPointSarapul" rel="external noopener"></a><a href="https://instagram.com/electro_point_sarapul" rel="external noopener"></a><a href="https://vk.com/electro_point_sarapul" rel="external noopener"></a></div>');
$('div.social > a').attr('class','fa');

//Aside
$('section, article').after('<aside><div><div><fieldset class="newsletters"><legend>Подписка</legend><form action="https://docs.google.com/forms/d/e/1FAIpQLScFZoMaJFPjeQPVqjTKpS5brZZady5-7aR5L4DACqw5586yOA/formResponse" method="post" onsubmit="submitted=true;" target="newsletters-submit"><label for="newsletters">Будьте в курсе новых акций и товаров</label><input id="newsletters" name="entry.510172427" type="email" maxlength="32" placeholder="Введите ваш email" required><input type="submit" value="ОК"></form><iframe name="newsletters-submit" onload="if(submitted) {alert("Теперь вы будете получать уведомления при появлении новых товаров, акций и специальных предложений. Чтобы отписаться, просто свяжитесь с нами.");}"></iframe></fieldset></div></div><div class="hd"></div><div><div><fieldset class="share"><legend>Поделиться</legend><span>Понравилось?<br>Расскажи друзьям!</span><a class="btn" href="javascript:share();">Поделиться</a></fieldset></div></div></aside>');

//Footer
$('aside').after('<footer><p>Имеются вопросы? Свяжитесь с нами <a href="tel:+79058741414">+7 (905) 874 14-14</a> ПН-ПТ с 8:00-17:00. Консультация <a href="mailto:info@electro-point.net">info@electro-point.net</a></p><p>©2020 Electro Point. Все права защищены.</p><div><a href="https://electro-point.net/legal/privacy-policy" rel="license">Конфиденциальность</a><span>|</span><a href="https://electro-point.net/legal/terms-and-conditions" rel="license">Условия и Положения</a></div></footer>');

//Demo
$('body').append('<a class="stop-demo mdl2" href="javascript:scroll_p();"></a>');
$('footer').after('<audio src="https://electro-point.net/media/mp3/music-2.mp3" loop></audio>');

//Quick
$('body').append('<div type="chat"><span></span><ul><li>свяжитесь</li><li><a href="tel:+79058741414">Позвонить</a></li><li><a href="https://api.whatsapp.com/send?phone=79058741414" rel="external noopener">WhatsApp</a></li><li><a href="viber://chat?number=79058741414" rel="external noopener">Viber</a></li><li><span>социальные сети</span></li><li><a href="https://vk.com/electro_point_sarapul" rel="external noopener">Вконтакте</a></li><li><a href="https://instagram.com/electro_point_sarapul" rel="external noopener">Инстаграм</a></li><li><a href="https://fb.me/ElectroPointSarapul" rel="external noopener">Фейсбук</a></li><li><span mdl2></span></li></ul></div>');

//Initialization
$('[hr]').attr('vw','');
$('[top]').each(function(){var top = $(this).attr('top'); $(this).css('margin-top', top + 'rem');});
$('[right]').each(function(){var right = $(this).attr('right'); $(this).css('margin-right', right + 'rem');});

var nps = window.pageYOffset;
window.onscroll = function() {var ncs = window.pageYOffset; if (nps > ncs) {$('nav.mob').css('top', '0');} else {$('nav.mob').css('top', '-4rem');} nps = ncs;}

$('nav.mob > div > span:first-child, nav.mob > div > div > a > span:first-child').attr('class','mdl2');
$('nav.mob > span').click(function(){$('nav.mob > div').css('right', '0'); $('body').css('overflow-y', 'hidden');});
$('nav.mob > div a, nav.mob > div > span:first-child').click(function(){$('nav.mob > div').css('right', '-125%'); $('body').css('overflow-y', 'initial');});

//$('').insertBefore('');

//$(document).ready(function() {$('aside').load('../core/aside.html'); $('footer').load('../core/footer.html');});

//AOS $element.removeAttr('animation'); setTimeout(function() {}, 500);
var $aos = $('[data-aos], [hr]');
function ciiv(){var wh = $(window).height(); var wtp = $(window).scrollTop(); var wbt = (wtp + wh); $.each($aos, function() {var $element = $(this); var eh = $element.outerHeight(); var etp = $element.offset().top; var ebp = (etp + eh); if ((ebp >= wtp) && (etp <= wbt)) {$element.addClass('aos');} else {}});}
$(window).on('scroll resize', ciiv); $(window).trigger('scroll');

$('[data-aos-dur]').each(function(){var aos_dur = $(this).attr('data-aos-dur'); $(this).css('animation-duration', aos_dur + 's');});

//Cursor
if ($(window).width() > 512) {$('body').append('<span class="mdl2 cursor"></span><div class="circle"></div>');}
function moveCursor(e) {TweenLite.to($('.cursor'), 0.125, {css: {left: e.pageX, top: e.pageY}});} $(window).on('mousemove', moveCursor);
function moveCircle(e) {TweenLite.to($('.circle'), 0.675, {css: {left: e.pageX, top: e.pageY}});} $(window).on('mousemove', moveCircle);

$('a, button, [modal]').hover(function(){$('.cursor').css('color', 'white'); $('.circle').css({'background-color': 'rgba(111,222,222,0.5)', 'border': 'none'});}, function(){$('.cursor').css('color', '#6FDEDE'); $('.circle').css({'background-color': 'transparent', 'border': 'solid 0.1rem rgba(0,0,0,0.25)'});});

//Parallax
$(document).mousemove(function(e){parallaxIt(e, "[parallax=follow]", 50); parallaxIt(e, "[parallax=unfollow]", -50); parallaxIt(e, "[parallax=follow-x2]", 100); parallaxIt(e, "[parallax=unfollow-x2]", -100);});
function parallaxIt(e, target, movement){var $this = $("body"); var relX = e.pageX - $this.offset().left; var relY = e.pageY - $this.offset().top; TweenMax.to(target, 1, {x: (relX - $this.width() / 2) / $this.width() * movement, y: (relY - $this.height() / 2) / $this.height() * movement});}
$(document).mousemove(function(event){$("[parallax=angle]").each(function(index, element){var xPos = (event.clientX/$(window).width())-0.5, yPos = (event.clientY/$(window).height())-0.5, box = element; TweenLite.to(box, 1, {rotationY: xPos * -100, rotationX: yPos * 100, ease: Power1.easeOut,});})});

//Forms
var submitted=false;
$('form').keypress(function(e) {if (e.keyCode == 13) {return false;} else {}});

//Chat
$('[type=chat] > span').click(function(){$('[type=chat] > ul').css('display', 'inline-block'); $('[type=chat] > span').css('display', 'none');});
$('[type=chat] li [mdl2]').click(function(){$('[type=chat] > ul').css('display', 'none'); $('[type=chat] > span').css('display', 'inline-block');});

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

//Demonstration
var audio = $('audio[loop]'); var elem = document.querySelector('html, body');
function scroll() {audio.trigger('play'); audio.prop('volume', 0.375); $('.stop-demo').css('top', '2rem'); $('html').css('scroll-behavior', 'auto'); $('html, body').animate({scrollTop: $('footer p').offset().top}, 90000); toggleFullScreen(elem);}

function scroll_p() {audio.trigger('pause'); $('.stop-demo').css('top', '-10rem'); $('html').css('scroll-behavior', 'smooth'); $('html, body').queue([]).stop(); toggleFullScreen(elem);}

function toggleFullScreen(elem) {if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {if (elem.requestFullScreen) {elem.requestFullScreen();} else if (elem.mozRequestFullScreen) {elem.mozRequestFullScreen();} else if (elem.webkitRequestFullScreen) {elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);} else if (elem.msRequestFullscreen) {elem.msRequestFullscreen();}} else {if (document.cancelFullScreen) {document.cancelFullScreen();} else if (document.mozCancelFullScreen) {document.mozCancelFullScreen();} else if (document.webkitCancelFullScreen) {document.webkitCancelFullScreen();} else if (document.msExitFullscreen) {document.msExitFullscreen();}}}

//Share
function shareit() {$('aside .share a').css('animation', 'share 0.375s ease-in infinite'); $(window).scrollTop($('aside .share a').offset().top -256);}

function share() {$('aside .share a').css('animation', 'none'); if (navigator.share) {navigator.share({title: document.title, text: document.querySelector("meta[name='description']").getAttribute("content"), url: window.location.href}).then(() => {console.log('Ready!');}) .catch(console.error);} else {console.log('Error...');}}