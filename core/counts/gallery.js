$('[modal=black]').addClass('modal').click(function(){var src = $(this).attr('src'); var modal; function removeModal(){modal.remove(); $('body').off('keyup.modal-close');} modal = $('<div>').css({background: 'rgba(16,18,20,0.95) url('+src+') no-repeat center', backgroundSize: 'contain', width:'100%', height:'100%', position:'fixed', zIndex:'1000', top:'0', left:'0', cursor: 'zoom-out'}).click(function(){removeModal();}).appendTo('body');});

$('[modal=white]').addClass('modal-white').click(function(){var src = $(this).attr('src'); var modal; function removeModal(){modal.remove(); $('body').off('keyup.modal-close');} modal = $('<div>').css({background: 'rgba(251,253,255,0.95) url('+src+') no-repeat center', backgroundSize: 'contain', width:'100%', height:'100%', position:'fixed', zIndex:'1000', top:'0', left:'0', cursor: 'zoom-out'}).click(function(){removeModal();}).appendTo('body');});

$('[modal=pink]').addClass('modal-white').click(function(){var src = $(this).attr('src'); var modal; function removeModal(){modal.remove(); $('body').off('keyup.modal-close');} modal = $('<div>').css({background: 'rgba(249,198,205,0.95) url('+src+') no-repeat center', backgroundSize: 'contain', width:'100%', height:'100%', position:'fixed', zIndex:'1000', top:'0', left:'0', cursor: 'zoom-out'}).click(function(){removeModal();}).appendTo('body');});

$('[modal=red]').addClass('modal-white').click(function(){var src = $(this).attr('src'); var modal; function removeModal(){modal.remove(); $('body').off('keyup.modal-close');} modal = $('<div>').css({background: 'rgba(222,0,0,0.95) url('+src+') no-repeat center', backgroundSize: 'contain', width:'100%', height:'100%', position:'fixed', zIndex:'1000', top:'0', left:'0', cursor: 'zoom-out'}).click(function(){removeModal();}).appendTo('body');});