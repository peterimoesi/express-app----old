$(document).ready(function(){
	$('#about-me-img').on('click', function (e) {
        e.preventDefault();
        $(this).effect( "bounce", { times : 3 }, "slow");
    });

	$('#codewars').click(function(){
		$(this).load("https://www.codewars.com/users/peterimoesi");
	})
    
});
