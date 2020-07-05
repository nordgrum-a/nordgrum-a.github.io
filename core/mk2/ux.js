//GTM
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K966XWP');
$('body').append('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K966XWP"></iframe></noscript>');

//AOS
var $aos = $('[aos], [hr]');
var $window = $(window);
function ciiv(){var wh = $window.height(); var wtp = $window.scrollTop(); var wbt = (wtp + wh); $.each($aos, function() {var $element = $(this); var eh = $element.outerHeight(); var etp = $element.offset().top; var ebp = (etp + eh); if ((ebp >= wtp) && (etp <= wbt)) {$element.attr('animation','');} else {$element.removeAttr("animation");}});}
$window.on('scroll resize', ciiv); $window.trigger('scroll');

function audio() {var audio = document.getElementById("audio"); audio.play(); audio.volume = 0.375;}

function share() {if (navigator.share) {navigator.share({title: document.title, text: document.querySelector("meta[name='description']").getAttribute("content"), url: window.location.href}).then(() => {console.log('Ready!');}) .catch(console.error);} else {console.log('Error...');}}