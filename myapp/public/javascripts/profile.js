$(document).ready(function(){
	$('#about-me-img').on('click', function (e) {
        e.preventDefault();
        $(this).effect( "bounce", { times : 3 }, "slow");
	    var dialog = document.getElementById('my-obj');  
        	dialog.show();
       	 console.log("showing")    
    });
	document.getElementById('clickOff').onclick = function() {  
        dialog.close();
        console.log("closed"); 
    };

	$('#codewars').click(function(){
		$(this).load("https://www.codewars.com/users/peterimoesi");
	});
    
});
