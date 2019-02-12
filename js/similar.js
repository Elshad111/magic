'use strict';
(function(){
	var getWizardElement = window.setup.setup.querySelector('.setup-wizard');
	var wizardCoatElement = window.setup.setup.querySelector('.wizard-coat');
	var wizardEyesElement = window.setup.setup.querySelector('.wizard-eyes');

	var EYES_COLORS = [
		'red',
		'orange',
		'yellow', 
		'green', 
		'lightblue',
		'blue',
		'purple'
	];

	var COAT_COLORS = [
		'rgb(101, 137, 164)', 
		'rgb(241, 43, 107)', 
		'rgb(146, 100, 161)', 
		'rgb(56, 159, 117)', 
		'rgb(215, 210, 55)', 
		'rgb(0, 0, 0)',
	];

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

	window.wizard.onEyesChange = function(color){
		eyesColor = color;
		updateWizards();
	}

	window.wizard.onCoatChange = function(color){
		coatColor = color;
		updateWizards();
	}

	var getRandomElement = function(array){
		var randomElementIndex = Math.floor(Math.random() * array.length);
		return array[randomElementIndex];
	}

	wizardCoatElement.addEventListener('click', function(){
		var newColor =  getRandomElement(COAT_COLORS);
		this.style.fill = newColor;
		coatColor = newColor;
		updateWizards();
	});

	wizardEyesElement.addEventListener('click', function(){
		var newColor = getRandomElement(COAT_COLORS);
		this.style.fill = newColor;
		eyesColor = newColor;
		updateWizards();
	});

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

	var onSuccess = function(data){
		wizards = data;
		window.render(wizards);
	};

	var onError = function(message){
		console.log(message);
	};

	var form = window.setup.setup.querySelector('.setup-wizard-form');
	form.addEventListener('submit', function(evt){
		window.backend.upload('https://js.dump.academy/code-and-magick', new FormData(form), function(){
			window.setup.setup.classList.add('hidden');
		});
		evt.preventDefault();
	});
	window.backend.load('https://js.dump.academy/code-and-magick/data', onSuccess, errorHandler);
})();