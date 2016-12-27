

$(document).ready(function(){

	var m = 0;
	var addNote = function(){
		var newNote = document.getElementById('newNote');
		$(newNote).click(function(){
			m += 1;
			$('.main').append('<div class = "notes"><div class = "note-title"><input type="text" class="form-control nt-title"></div> <div class = "note-text-area"><textarea class="form-control comment" rows="5"></textarea></div></div>');
			$('.notes').draggable();
			$('.notes').resizable({
				start:function(event,ui){
			            ui.element.css('position','absolute');
			        }
			});
		})

	}
	addNote();
/*
	$(function() {  
		$('.notes').hover(function(){
		    $(this).css({
		    			'height' : '300px',
		    			'width' : '300px'
		    			});
		    }, function(){
		    $(this).css({
		    			'height' : '100px',
		    			'width' : '100px'
		    			});
		});
	})
*/

})