var ul = document.getElementById('lists'),
	add = document.getElementById('add'),
	remove = document.getElementById('removeAll'),
	costs = [];
	

	add.onclick = function(){
		addLi(ul);
		total();
		removeEdit();
	}

	function addLi(targetUi) {
		var itemText = document.getElementById('addItem').value,
			li = document.createElement('li'),
			costText = document.getElementById('addCost').value,
			itemNode = document.createTextNode(itemText + '');
			costNode = document.createTextNode(costText);
		document.getElementById('addCost').value = "";
		document.getElementById('addItem').value = "";

		if(itemText.length === 0 || costText.length === 0) {
			alert("1 or 2 input field is incomplete");
			return false;
		}

		if(isNaN(parseInt(costText)) === true) {
			console.log(costText);
			alert("Cost field only accepts numbers");
			return false;
		}
		costs.push(parseInt(costText));


		//$('li').append("Item: " + itemNode);
		//$('li').append("Cost: " + costNode);
		//li.appendChild("Item: " + itemNode.data);
		//li.appendChild("Cost: " + costNode.data);
		//$(targetUi).append(li);
		//targetUi.appendChild(li);
		$(targetUi).append('<div class = "col-xs-12 col-lg-6 col-xs-offset-1 lit"><span class = "lits ">Item :</span> ' + itemNode.data + ' <span class = "lits col-xs-offset-1">Cost :</span> ' + costNode.data 
			+  
			'<span id = "glyphicon-remove" class = "glyphicon edit-remove glyphicon-remove"></span>' + '</div>' 
			 );
			//li = document.getElementsByClassName('lit');

	//	$('.lit').append('<span class = "glyphicon glyphicon-edit"></span>');
		//$(li).append(removeButton);


		var removeButton = document.getElementById('glyphicon-remove');
		var editButton = document.getElementsByClassName('glyphicon-edit');

	removeButton.setAttribute('onclick', 'removeEdit(this);');

	}




	function total() {
		
		document.getElementById('total').innerHTML = "Total: ";
		tot = document.getElementById('total')
		totalResults = costs.reduce(function(a, b){return a + b;});
		console.log(totalResults);
		totalNode = document.createTextNode(totalResults);
		$(tot).append(totalNode.data);
		//tot.appendChild(totalResults);
		//
	}


	remove.onclick = function(){
		ul.innerHTML = "";
		document.getElementById('total').innerHTML = "Total: ";
	};

	removeEdit = function(xx) {
		var parent = xx.parentElement;
		parent.parentElement.removeChild(parent);
	}