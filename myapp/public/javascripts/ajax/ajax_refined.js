var searchValue = document.getElementById('search_box');
var title = document.getElementsByTagName('title');
var searchButton = document.getElementById('srch');
var section = document.querySelector('section');
var header = document.querySelector('header');
var form = document.getElementById('form');
var ajaxx = document.getElementById('ajaxx');



//console.log(searchValue.value);

searchButton.onclick = function(){
	//console.log(searchValue.value);
	//title.innerHTML(searchValue.value);
	ajaxCall();
	//showResults()
}

function restructurePage() {
	section.innerHTML = "";
	Object.assign(header.style, {
		height: "70px"
	});
	Object.assign(form.style, {
		top: "-30px"
	});
	Object.assign(section.style, {
		top: "40px",
		height: "auto",
	});
	
}

function ajaxCall() {

url = 'http://www.omdbapi.com/?s=' + searchValue.value +'&type=movie&r=json&page=1';
//url = "http://www.omdbapi.com/?s=frozen&type=movie&r=json&page=1";

	var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if(this.readyState == 4 && this.status == 200) {	
	     rawJsondata = this.responseText;
	     refinedJsondata = JSON.parse(rawJsondata);	
	     console.log(rawJsondata);

	     
	     if(refinedJsondata.Response == "False") {
	     	sectDiv = document.createElement('div');
	     	noMovie = document.createTextNode('No movie was found');
	     	sectDiv.appendChild(noMovie);
	     	section.innerHTML = "";
			section.appendChild(sectDiv);


			
	     } else {
	     	restructurePage();
	     	mustAche = function (data) {
					var template = ajaxx.innerHTML;
					var html = Mustache.to_html(template, data);

					section.innerHTML = html;
				}
			mustAche(refinedJsondata);
	     }

	    } 
	  };
	  
	  xhttp.open("GET", url, true);
	  xhttp.send();
}