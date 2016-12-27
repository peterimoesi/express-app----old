$('#usr').datepicker({});

function date() {
	var date = new Date(); 
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	dt = " " + days[date.getDay()] + " " + date.getMonth() + ", " + date.getFullYear();
	$('input[type=text]').attr('placeholder', dt)
	console.log(dt)
}
date();