var form_order = $('form[type=shop]');
form_order.attr('action','https://docs.google.com/forms/d/e/1FAIpQLSfW5-M4sMSAr_w-GuMrAPbAQxibesACeAE4cY-1x-L15uGsPg/formResponse');
form_order.attr('method','post'); form_order.attr('onsubmit','submitted=true;');
form_order.attr('target','shop-submit'); form_order.attr('oninput','total.value=parseInt(amount.value)*parseInt(price.value)');
$('body').append('<iframe name="shop-submit" onload="if(submitted) {form_order_st5();}"></iframe>');

function to_form() {$('#order').css('display', 'inline-block'); $('body').css('overflow-y', 'hidden'); $('div[type=shop]').css({'display': 'flex', 'position': 'fixed', 'top': '0', 'left': '0', 'width': '100%', 'height': '100%'}); $('[step=1] > audio').trigger('play');}
$('form[type=shop]').click(function() {var price = parseInt($('#price').val()); var amount = parseInt($('#amount').val()); $('#total-price').val(price*amount);});
function from_form() {$('div[type=shop]').css('display','none');  $('body').css('overflow-y', 'initial'); $('[step] > audio').trigger('pause'); $('[step=2], [step=3], [step=4], [step=5]').css({'position': 'absolute', 'left': '400vw'}); $('[step=1]').css({'position': 'relative', 'left': '0'});}

function form_order_st2_1()
{$('[step=2]').css({'position': 'absolute', 'left': '-400vw'}); $('[step=1]').css({'position': 'relative', 'left': '0'});}
function form_order_st2()
{$('[step=1]').css({'position': 'absolute', 'left': '-400vw'}); $('[step=2]').css({'position': 'relative', 'left': '0'}); $('[step=1] > audio').trigger('pause'); $('[step=2] > audio').trigger('play');}
function form_order_st3()
{$('[step=2]').css({'position': 'absolute', 'left': '-400vw'}); $('[step=3]').css({'position': 'relative', 'left': '0'}); $('[step=2] > audio').trigger('pause'); $('[step=3] > audio').trigger('play');}
function form_order_st3_2()
{$('[step=3]').css({'position': 'absolute', 'left': '400vw'}); $('[step=2]').css({'position': 'relative', 'left': '0'});}
function form_order_st4()
{$('[step=3]').css({'position': 'absolute', 'left': '-400vw'}); $('[step=4]').css({'position': 'relative', 'left': '0'}); $('[step=3] > audio').trigger('pause'); $('[step=4] > audio').trigger('play'); $('#city, #street, #home').attr('required',''); $('#delivery').attr('value','Да');}
function form_order_st4_3()
{$('[step=4]').css({'position': 'absolute', 'left': '400vw'}); $('[step=3]').css({'position': 'relative', 'left': '0'}); $('#city, #street, #home').removeAttr("required"); $('#delivery').attr('value','Нет');}
function form_order_st5()
{$('[step=3], [step=4]').css({'position': 'absolute', 'left': '-400vw'}); $('[step=5]').css({'position': 'relative', 'left': '0'}); $('[step=4] > audio').trigger('pause'); $('[step=5] > audio').trigger('play');}

var prod = $('#product'); var price = $('#price');

$('form[type=shop] input[type=submit]').bind( 'click', function() {ga('send', 'event', 'input', 'click', 'submit');});

//Plans
function plan_yota_1() {to_form(); prod.val('Yota - Эконом'); price.val('610'); $('#total').html('610');}
function plan_yota_2() {to_form(); prod.val('Yota - Премиум'); price.val('660'); $('#total').html('660');}
function plan_yota_3() {to_form(); prod.val('Yota - Бизнес'); price.val('890'); $('#total').html('890');}
function plan_yota_4() {to_form(); prod.val('Yota - Премьер'); price.val('1140'); $('#total').html('1140');}
function plan_yota_5() {to_form(); prod.val('Yota - Тест'); price.val('100'); $('#total').html('100');}

function plan_rt_1() {to_form(); prod.val('Ростелеком - Эконом (Наш Ростелеком M)'); price.val('150'); $('#total').html('150');}
function plan_rt_2() {to_form(); prod.val('Ростелеком - Эконом+ (Наш Ростелеком L)'); price.val('230'); $('#total').html('230');}
function plan_rt_3() {to_form(); prod.val('Ростелеком - Бизнес (Наш Ростелеком XL)'); price.val('400'); $('#total').html('400');}
function plan_rt_4() {to_form(); prod.val('Ростелеком - Бизнес+ (Наш Ростелеком Бизнес)'); price.val('450'); $('#total').html('450');}
function plan_rt_5() {to_form(); prod.val('Ростелеком - Бизнес A'); price.val('1070'); $('#total').html('1070');}
function plan_rt_6() {to_form(); prod.val('Ростелеком - Бизнес B'); price.val('1030'); $('#total').html('1030');}
function plan_rt_7() {to_form(); prod.val('Ростелеком - Энтерпрайз'); price.val('1200'); $('#total').html('1200');}

function plan_tele2_1() {to_form(); prod.val('Теле2 - Бизнес S'); price.val('990'); $('#total').html('990');}
function plan_tele2_2() {to_form(); prod.val('Теле2 - Бизнес M'); price.val('1110'); $('#total').html('1110');}
function plan_tele2_3() {to_form(); prod.val('Теле2 - Бизнес L'); price.val('1350'); $('#total').html('1350');}
function plan_tele2_4() {to_form(); prod.val('Теле2 - Компаньон S'); price.val('900'); $('#total').html('900');}

function plan_mts_1() {to_form(); prod.val('МТС - Премиум (Смарт для своих)'); price.val('1900'); $('#total').html('1900');}
function plan_mts_2() {to_form(); prod.val('МТС - Премиум+ (Смарт для своих)'); price.val('2500'); $('#total').html('2500');}
function plan_mts_3() {to_form(); prod.val('МТС - Бизнес M (Умный бизнес M)'); price.val('1449'); $('#total').html('1449');}
function plan_mts_4() {to_form(); prod.val('МТС - Бизнес L (Умный бизнес L)'); price.val('1798'); $('#total').html('1798');}
function plan_mts_5() {to_form(); prod.val('МТС - Бизнес XL (Умный бизнес XL)'); price.val('2098'); $('#total').html('2098');}

function plan_megafon_1() {to_form(); prod.val('Мегафон - Специалист'); price.val('1250'); $('#total').html('1250');}
function plan_megafon_2() {to_form(); prod.val('Мегафон - Эксперт'); price.val('1350'); $('#total').html('1350');}
function plan_megafon_3() {to_form(); prod.val('Мегафон - Менеджер'); price.val('1600'); $('#total').html('1600');}
function plan_megafon_4() {to_form(); prod.val('Мегафон - Руководитель'); price.val('1900'); $('#total').html('1900');}

function plan_beeline_1() {to_form(); prod.val('Билайн - Онлайн'); price.val('950'); $('#total').html('950');}
function plan_beeline_2() {to_form(); prod.val('Билайн - Онлайн+'); price.val('1100'); $('#total').html('1100');}
function plan_beeline_3() {to_form(); prod.val('Билайн - Премиум'); price.val('850'); $('#total').html('850');}
function plan_beeline_a1() {to_form(); prod.val('Билайн - Пчела (Яркое решение 200 - Вариант 2)'); price.val('1200'); $('#total').html('1200');}
function plan_beeline_a2() {to_form(); prod.val('Билайн - Пчела Онлайн (Яркое решение 200 - Вариант 1)'); price.val('1200'); $('#total').html('1200');}
function plan_beeline_a3() {to_form(); prod.val('Билайн - Пчела на Проводе (Яркое решение 200 - Вариант 3)'); price.val('1200'); $('#total').html('1200');}
function plan_beeline_b1() {to_form(); prod.val('Билайн - Оса (Яркое решение 350 - Вариант 2)'); price.val('1350'); $('#total').html('1350');}
function plan_beeline_b2() {to_form(); prod.val('Билайн - Оса Онлайн (Яркое решение 350 - Вариант 1)'); price.val('1350'); $('#total').html('1350');}
function plan_beeline_b3() {to_form(); prod.val('Билайн - Оса на Проводе (Яркое решение 350 - Вариант 3)'); price.val('1350'); $('#total').html('1350');}
function plan_beeline_c1() {to_form(); prod.val('Билайн - Шмель (Яркое решение 600 - Вариант 2)'); price.val('1600'); $('#total').html('1600');}
function plan_beeline_c2() {to_form(); prod.val('Билайн - Шмель Онлайн (Яркое решение 600 - Вариант 1)'); price.val('1600'); $('#total').html('1600');}
function plan_beeline_c3() {to_form(); prod.val('Билайн - Шмель на Проводе (Яркое решение 600 - Вариант 3)'); price.val('1600'); $('#total').html('1600');}
function plan_beeline_d1() {to_form(); prod.val('Билайн - Шершень (Яркое решение 900 - Вариант 2)'); price.val('1900'); $('#total').html('1900');}
function plan_beeline_d2() {to_form(); prod.val('Билайн - Шершень Онлайн (Яркое решение 900 - Вариант 1)'); price.val('1900'); $('#total').html('1900');}
function plan_beeline_d3() {to_form(); prod.val('Билайн - Шершень на Проводе (Яркое решение 900 - Вариант 3)'); price.val('1900'); $('#total').html('1900');}
function plan_beeline_e() {to_form(); prod.val('Билайн - Глава Улья (ЯР 1500)'); price.val('2500'); $('#total').html('2500');}