//GTM
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K966XWP');
$('body').append('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K966XWP"></iframe></noscript>');

//AOS
var $aos = $('[aos], [hr], [hl]');
var $window = $(window); function ciiv(){var wh = $window.height(); var wtp = $window.scrollTop(); var wbt = (wtp + wh); $.each($aos, function() {var $element = $(this); var eh = $element.outerHeight(); var etp = $element.offset().top; var ebp = (etp + eh); if ((ebp >= wtp) && (etp <= wbt)) {$element.attr('animation','');} else {}});}
$window.on('scroll resize', ciiv); $window.trigger('scroll');

//Cursor
$('body').append('<span mdl2 cursor></span><div circle></div>');
function moveCursor(e) {TweenLite.to($('[cursor]'), 0.125, {css: {left: e.pageX, top: e.pageY}});} $(window).on('mousemove', moveCursor);
function moveCircle(e) {TweenLite.to($('[circle]'), 0.675, {css: {left: e.pageX, top: e.pageY}});} $(window).on('mousemove', moveCircle);
$('a, button').hover(function(){$('[cursor]').css('color', 'white'); $('[circle]').css({'background-color': 'rgba(137,180,248,0.5)', 'border': 'none'});}, function(){$('[cursor]').css('color', '#89B4F8'); $('[circle]').css({'background-color': 'transparent', 'border': 'solid 0.175rem white'});});

//Parallax
$(document).mousemove(function(e){
	parallaxIt(e, "[parallax=move]", 50);
});
function parallaxIt(e, target, movement){var $this = $("body"); var relX = e.pageX - $this.offset().left; var relY = e.pageY - $this.offset().top; TweenMax.to(target, 1, {x: (relX - $this.width() / 2) / $this.width() * movement, y: (relY - $this.height() / 2) / $this.height() * movement});}
$(document).mousemove(function(event){$("[parallax=angle]").each(function(index, element){var xPos = (event.clientX/$(window).width())-0.5, yPos = (event.clientY/$(window).height())-0.5, box = element; TweenLite.to(box, 1, {rotationY: xPos * -100, rotationX: yPos * 100, ease: Power1.easeOut,});})});

function audio() {var audio = document.getElementById("audio"); if (audio.paused) {audio.play(); audio.volume = 0.375;} else audio.pause();}