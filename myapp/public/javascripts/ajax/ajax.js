$(document).ready(function(){
	var search = document.getElementById('search_box');
	var $title;
	var rawJsondata;
	var refinedJsondata; 
	var $actors;
	var $directors;
	var $genre;
	var $language;
	var $poster;

	var xx;

	xx = 1;



function yHandler () {
		var sect = document.getElementById('sect');
		var contentHeight = sect.offsetHeight; //get content height
		var yOffset = window.pageYOffset; //get vertical scroll position
		var y = yOffset + window.innerHeight;

		if(y >= contentHeight) {
			sect.innerHTML += '<div class = "newData"></div>';
			xx += 1;
			getMoreContent();
		}
	}

	window.onscroll = yHandler;

	function getMoreContent() {

		/*var yhttp = new XMLHttpRequest();
		yhttp.onreadystatechange = function() {
			if(this.readyState == 4 & this.status == 200) {
				rawJsondata = this.responseText;
				refinedJsondata = JSON.parse(rawJsondata);

			for(var i in refinedJsondata.Search){
					movie = refinedJsondata.Search[i];

					if(movie.Poster == "N/A") {
						movie.Poster = "http://sd.keepcalm-o-matic.co.uk/i/keep-calm-i-m-not-available.png";
					}
					$('.newData').append('<div class="mov"></div>');
					$('.newData').append('<img class="img-rounded" src ='+ movie.Poster + ' alt = "Image not available">');
					$('.newData').append('<div class = "movie_info">' + movie.Title + ' (' + movie.Year + ')' + '</div>')		
				}


			}
		}
		urll = 'http://www.omdbapi.com/?s=' + document.querySelector('#search_box').value +'&type=movie&r=json&page=' + xx
		yhttp.open("GET", urll, false);
	  	yhttp.send(); */
		
			$(function (){
		$.ajax({
			type: 'GET',
			url: 'http://www.omdbapi.com/?s=' + document.querySelector('#search_box').value +'&type=movie&r=json&page=' + xx,
			dataType: "json",
			success: function(data) {
				for(var i in data.Search){
						movie = data.Search[i];

						if(movie.Poster == "N/A") {
							movie.Poster = "http://sd.keepcalm-o-matic.co.uk/i/keep-calm-i-m-not-available.png";
						}
						$('.newData').append('<div class="mov"></div>');
						$('.newData').append('<img class="img-rounded" src ='+ movie.Poster + ' alt = "Image not available">');
						$('.newData').append('<div class = "movie_info">' + movie.Title + ' (' + movie.Year + ')' + '</div>')		
					}							
			}
		})
	})
	}

	function results() {
		$('header').css('height', '70px');
		$('header').html($('#form'));
		$('#form').css({
			"width": "30%",
			"position": "relative",
			"top": "-115px",
			"height": "10px",
			"display": "inline",
		})
	}

//get ajax results
	function loadDoc(url) {
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	
	     rawJsondata = this.responseText;
	     refinedJsondata = JSON.parse(rawJsondata);	

	     if(refinedJsondata.Response == "False") {

	     	results();
			$('section').html('<div id = "txt_box">No movie was found</div')
			
	     }

	    } 
	  };
	  xhttp.open("GET", url, true);
	  xhttp.send();
	  
	}

//add ajax results to page
	function appendResults() {
		results();
		url = 'http://www.omdbapi.com/?s=' + document.querySelector('#search_box').value +'&type=movie&r=json&page=' + xx;
		loadDoc(url);
		
			$('title').html(search.value);

			//$('section').empty();
			
			for(var i in refinedJsondata.Search){
				movie = refinedJsondata.Search[i];

				
				;

				if(movie.Poster == "N/A") {
					movie.Poster = "http://sd.keepcalm-o-matic.co.uk/i/keep-calm-i-m-not-available.png";
				}
				$('section').append('<div class="mov"></div>');
				$('section').append('<img class="img-rounded" src ='+ movie.Poster + ' alt = "Image not available">');
				$('section').append('<div class = "movie_info">' + movie.Title + ' (' + movie.Year + ')' + '</div>')
			}

		/*	mustAche = function (data) {
					var template = $('#ajaxx').html();
					var html = Mustache.to_html(template, data);
					$('section').html(html);
				}
			mustAche(refinedJsondata);*/
			
	}
	

	$('#srch').on('click', function(){
		appendResults();
		
	})

/*	function yHandler () {
		var sect = document.getElementById('sect');
		var contentHeight = sect.offsetHeight; //get content height
		var yOffset = window.pageYOffset; //get vertical scroll position
		var y = yOffset + window.innerHeight;

		if(y >= contentHeight) {
			sect.innerHTML += '<div class = "newData"></div>';
			xx += 1;
			
			appendResults()
		}
		
	}

	window.onscroll = yHandler; 

$('#srch').click(function(){	
	results();
		
		$(function (){
		$.ajax({
			type: 'GET',
			url: 'http://www.omdbapi.com/?s=' + search.value +'&type=movie&r=json&page=' + xx,
			dataType: "json",
			success: function(data) {
				if(data.Response == "False") {
					console.log("ERROR");
					$('section').empty();
					$('section').append('<div id = "txt_box">No movie was found</div')
				} else {
					$('title').empty();
					$('title').append(search.value);

					$('section').empty();

					for(var i in data.Search){
						movie = data.Search[i];

						if(movie.Poster == "N/A") {
							movie.Poster = "http://sd.keepcalm-o-matic.co.uk/i/keep-calm-i-m-not-available.png";
						}
						$('section').append('<div class="mov"></div>');
						$('section').append('<img class="img-rounded" src ='+ movie.Poster + ' alt = "Image not available">');
						$('section').append('<div class = "movie_info">' + movie.Title + ' (' + movie.Year + ')' + '</div>')
					}
					$("<button type = 'button' id ='next' class= 'btn btn-primary btn-lg'>Next</button>").insertAfter("section");
					
				}

			},
			error: function(data){
				console.log( "Error: " + data.Error);
			}
		});
	})
	});*/
});