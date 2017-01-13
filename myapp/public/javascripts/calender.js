$('#usr').datepicker({});

function date() {
	var date = new Date(); 
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	dt = " " + days[date.getDay()] + " " + (date.getMonth() + 1) + ", " + date.getFullYear();
	$('#usr').attr('placeholder', dt)
	console.log(dt)
}
date();