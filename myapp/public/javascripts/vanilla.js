var ul = document.getElementById('lists'),
	add = document.getElementById('add'),
	remove = document.getElementById('removeAll'),
	costs = [];


	add.onclick = function(){
		total();
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
		costs.push(parseInt(costText))

		//$('li').append("Item: " + itemNode);
		//$('li').append("Cost: " + costNode);
		//li.appendChild("Item: " + itemNode.data);
		//li.appendChild("Cost: " + costNode.data);
		//$(targetUi).append(li);
		//targetUi.appendChild(li);
		$(targetUi).append('<li class = "lit"><span class = "lits">Item :</span> ' + itemNode.data + ' <span class = "lits">Cost :</span> ' + costNode.data + '</li>');
	}

	function total() {
		addLi(ul);
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
