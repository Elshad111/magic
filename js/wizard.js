"use strict";
(function(){
	var coatColor;
	var eyesColor;
	var wizards = [];

	var getRank = function(wizard){
		var rank = 0;

		if(wizard.colorCoat === coatColor){
			rank += 2;
		}
		if(wizard.colorEyes === eyesColor){
			rank += 1;
		}
		return rank;
	};

	var namesComparator = function(left, right){
		if(left > right){
			return 1;
		}else if(left < right){
			return -1;
		}else{
			return 0;
		}
	};

	var updateWizards = function(){
		window.render(wizards.sort(function(left, right){
			var rankDiff = getRank(right) - getRank(left);
			if(rankDiff === 0){
				rankDiff = namesComparator(left.name, right.name);
			}
			return rankDiff;
		}));
	};

	var lastTimeout;
	window.wizard = {
		onEyesChange: function(color){
			eyesColor = color;
			if(lastTimeout){
				window.clearTimeout(lastTimeout);
			}
			lastTimeout = window.setTimeout(function(){
				updateWizards();
			}, 300);
		},

		onCoatChange: function(color){
			coatColor = color;
			if(lastTimeout){
				window.clearTimeout(lastTimeout);
			}
			lastTimeout = window.setTimeout(function(){
				updateWizards();
			}, 300);
		}
	};

	var onSuccess = function(data){
		wizards = data;
		updateWizards();
	};

	var errorHandler = function(errorMessage){
		var node = document.createElement('div');
		node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red';
		node.style.position = 'absolute';
		node.style.left = 0;
		node.style.right = 0;
		node.style.fontSize = '30px';
		node.textContent = errorMessage;
		document.body.insertAdjacentElement('afterend', node);
	}

	var URL = 'https://js.dump.academy/code-and-magick/data';
	window.backend.load(URL, onSuccess, errorHandler);
})();