
var hght = 500/400;
var xx = 0;
var yy = 0;
var dir = "right";
var snake = [[3,3], [4,3], [5,3], [6, 3]];
var STEP = 23.5;
var foodie; 
	var a;
	var b;
	var c;
	var d;
	var snakeLast;


$(document).ready(function(){
	

function grrd (n) {
	for (var i = 0; i < n; i++) {
		$('.gird').append('<div class = "rows"></div>');
	};

	for (var j = 0; j < n; j++) {
		$('.rows').append('<div class = "cols"></div>');
	}

}
grrd(40);

	$('.rows').css('height', hght + 'vh');

	
	$('.cols').css('height', hght + 'vh');
//	$('.gird').append('<div id = "me"></div>');

	//$('.gird').append('<div id = "lunch"></div>');

cont = document.querySelector('.container');
luke = document.querySelector('.lunchie');

	function food () {

				foodie = [];
				
				a = Math.floor((Math.random() * 22) + 2);
				b = Math.floor((Math.random() * 30) + 5);

				foodie.push(a);
				foodie.push(b);

			$('.lunchie').append('<div class = "lunch" style = "top:' + foodie[0] * 2 + 'vh; left:' + foodie[1] * 2 + '%"></div>');

			c = foodie[0];
			d = foodie[1];
			snakeLast = []; snakeLast.push(d); snakeLast.push(c);
			
		}
	food();

	function drawSnake () {
		
		cont.innerHTML = '';
		snake.forEach(function (piece) {

			cont.innerHTML += '<div class="snake-piece" style = "top:' + piece[1] * 2 + 'vh; left:' + piece[0] * 2 + '%"></div>'; 
		})


	}
	
	function eatFood() {

		if (foodie[0] == tail[1] && foodie[1] == tail[0]) {
			luke.innerHTML = '';
			
			snake.unshift(snakeLast);
			food();

		}
	}

		//eatFood();
	

	function logic () {
		 tail = snake.shift();
		var head = snake[snake.length - 1];

		tail[0] = head[0] + xx;
        tail[1] = head[1] + yy;
 
        snake.push(tail);

        eatFood();
			}

	function endGame() {

		if ((tail[0] === 39 || tail[1] === 24) || (tail[0] === 1 || tail[1] === 1)) {
			clearInterval(stop);
			$('.info').show();
		}


	}

	document.addEventListener("keydown", function (event) {
		e = event.keyCode;

		if (e == 38) { 
				dir = "up";
		}

		else if (e == 39) {
			dir = "right";
		}

		else if (e == 37) {
			dir = "left";
		}

		else if (e == 40) {
			dir = "down";
		}

		if (dir === "up") {
			yy = -1;
			xx = 0;
		}
		
		else if (dir === "down") {
			yy = 1;
			xx = 0;
		}

		else if (dir === "right") {
			yy = 0;
			xx = 1;
		}

		else if (dir === "left") {
			yy = 0;
			xx = -1;
		}


	}, false);

	function yes () {
		console.log (foodie + "vs" + tail);
	}

	setInterval (function () { drawSnake();
	}, 66);

	var stop = setInterval (function () { logic(); 
	}, 250);

	setInterval (function () {
		endGame();
	}, 5)
});

