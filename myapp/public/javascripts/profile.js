$(document).ready(function(){
	

	if($('.nav-left').css('display') !== 'none') {
		$('#about-me-img').on('click', function (e) {
        e.preventDefault();
        $(this).effect( "bounce", { times : 3 }, "slow");
  
        	setTimeout(function(){$('#my-obj').show()}, 1000);
       	 console.log("showing")    
    });
	document.getElementById('clickOff').onclick = function() {  
        $('#my-obj').hide();
        console.log("closed"); 
    };
	
	$('#codewars').click(function(){
		$(this).load("https://www.codewars.com/users/peterimoesi");
	});
	}
    console.log($('#about-me-bio').css('display') == 'none')
});
