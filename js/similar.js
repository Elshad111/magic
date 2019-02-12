'use strict';
(function(){
	var similarWizardTemplate = document.querySelector('#similar-wizard-template')
		.content.querySelector('.setup-similar-item');
	var setupSimilarList = window.setup.setup.querySelector('.setup-similar-list');
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

		var sameCoatAndEyesWizards = wizards.filter(function(it){
			return it.colorCoat === coatColor && it.colorEyes === eyesColor;
		});

		var sameCoatWizards = wizards.filter(function(it){
			return it.colorCoat === coatColor;
		});
		var sameEyesWizards = wizards.filter(function(it){
			return it.colorEyes === eyesColor;
		});

		window.render(sameCoatWizards.concat(sameEyesWizards).concat(wizards));

		var filteredWizards = sameCoatAndEyesWizards;
		filteredWizards = filteredWizards.concat(sameCoatWizards);
		filteredWizards = filteredWizards.concat(sameEyesWizards);
		filteredWizards = filteredWizards.concat(wizards);

		var uniqueWizards = filterWizards.filter(function(it, i){
			return filterWizards.indexOf(it) === it;
		});

		window.render(uniqueWizards);
	};

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

	var successHandler = function(wizard){
		var getWizardElement = similarWizardTemplate.cloneNode(true);
		getWizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
		getWizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
		getWizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
		return getWizardElement;
	}

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
		// var fragment = document.createDocumentFragment();
		// for(var i = 0; i < 4; i++){
		// 	fragment.appendChild(successHandler(data[i]))
		// }
		// setupSimilarList.appendChild(fragment);
		// window.setup.setup.querySelector('.setup-similar').classList.remove('hidden');
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