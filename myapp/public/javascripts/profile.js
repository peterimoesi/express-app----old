$(document).ready(function(){
	$('#about-me-img').on('click', function (e) {
        e.preventDefault();
        $(this).effect( "bounce", { times : 3 }, "slow");
	    var dialog = document.getElementById('my-obj');  
        	setTimeout(function(){dialog.show()}, 1000);
       	 console.log("showing")    
    });
	document.getElementById('clickOff').onclick = function() {  
        document.getElementById('my-obj').close();
        console.log("closed"); 
    };

	$('#codewars').click(function(){
		$(this).load("https://www.codewars.com/users/peterimoesi");
	});
    
});
