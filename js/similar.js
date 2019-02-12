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

	// var onError = function(message){
	// 	console.log(message);
	// };

	var form = window.setup.setup.querySelector('.setup-wizard-form');
	form.addEventListener('submit', function(evt){
		window.backend.upload('https://js.dump.academy/code-and-magick', new FormData(form), function(){
			window.setup.setup.classList.add('hidden');
		});
		evt.preventDefault();
	});
})();