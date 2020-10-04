function mts_discount() {$('[type=mts-discount]').css('display', 'flex'); $('body').css('overflow-y', 'hidden'); $('[type=mts-discount-1] audio').trigger('play');}
function mts_discount_exit()
{
	$('[type=mts-discount]').css('display', 'none');
	$('[type=mts-discount] input').val('');
	$('[type=mts-discount] output').text('0');
	$('[type=mts-discount-1]').css('display', 'block'); $('[type=mts-discount-2], [type=mts-discount-3]').css('display', 'none');
	$('[type=mts-discount-3] span').css('animation-name', 'initial');
	$('body').css('overflow-y', 'initial');
}
function mts_discount_2() {$('[type=mts-discount-2]').css('display', 'block');}
function mts_discount_3() {$('[type=mts-discount-1], [type=mts-discount-2]').css('display', 'none'); $('[type=mts-discount-3]').css('display', 'block'); $('[type=mts-discount-3] span').css('animation-name', 'zoom-in'); $('[type=mts-discount-3] audio').trigger('play');}