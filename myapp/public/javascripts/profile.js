$(document).ready(function(){
	$('#about-me-img').on('click', function (e) {
        e.preventDefault();
        $(this).effect( "bounce", { times : 3 }, "slow");
    });
});
