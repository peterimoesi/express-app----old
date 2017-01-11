var sliderContainer = document.getElementById('slider');
var images = document.getElementsByClassName('pics');
var imgArray = [];
var fb = document.getElementById('fb');
var x;

function sliderLength() {
	for(var i = 0; i < images.length; i++) {
		imgArray.push(i);
	}
}
sliderLength();

function logic() {

	var head = imgArray.pop();
	imgArray.unshift(head);
	//var head = imgArray.pop();
	//arr.unshift
	//console.log(images[0]);

		$('.pics').eq(imgArray[0]).fadeOut('slow');
		$('.pics').eq(imgArray[0]).fadeIn('slow');
}

function slide() {
	logic();
	x = imgArray[0];
	sliderContainer.appendChild(images[x]);
	

}

setInterval(function() {slide()}, 3000);

fb.onclick = function(){
	setTimeout(function (){
		alert("Hi, it's a joke :) That link would always take you to your fb profile");
		console.log("Counting")
	}, 1000);
}

