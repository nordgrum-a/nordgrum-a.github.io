var $email = $('[for=email], #email');
function email() {$email.css('display', 'block'); $('[forid=email-h]').css('display', 'inline-block'); $('[forid=email]').css('display', 'none'); $('#email').attr('required','');}
function email_hide() {$('[forid=email]').css('display', 'inline-block'); $email.css('display', 'none'); $('[forid=email-h]').css('display', 'none'); $('#email').removeAttr("required");}

$("textarea").keyup(function(e) {while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {$(this).height($(this).height()+1);};});