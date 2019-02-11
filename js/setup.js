'use strict';
(function(){
	window.setup = {
		setup : document.querySelector('.setup'),
		getRandom : function(min, max){
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	};	
})();
(function(){
	var setupOpen = document.querySelector('.setup-open'); 
	var setupClose = window.setup.setup.querySelector('.setup-close');

	var onPopupEscPress = function(evt){
		if(evt.keyCode === 27){
			closePopup();
		}
	};
	var openPopup = function(){
		window.setup.setup.classList.remove('hidden');
		document.addEventListener('keydown', onPopupEscPress);
	};
	var closePopup = function(){
		window.setup.setup.classList.add('hidden');
		window.setup.setup.removeAttribute('style');
		document.removeEventListener('keydode', onPopupEscPress);
	};
	setupOpen.addEventListener('click', openPopup);
	setupOpen.addEventListener('keydown', function(evt){
		if(evt.keyCode === 13){
			openPopup();
		}
	});
	setupClose.addEventListener('click', function(){
		closePopup();
	});
	setupClose.addEventListener('keydown', function(evt){
		if(evt.keyCode === 13){
			closePopup();
		}
	});
})();

// (function(){
	// var setupUser = window.setup.setup.querySelector('.setup-user-name');
	// var wizardCoat = window.setup.setup.querySelector('.setup-wizard .wizard-coat');
	// var wizardEyes = window.setup.setup.querySelector('.setup-wizard .wizard-eyes');
	// var wizardFireball = window.setup.setup.querySelector('.setup-fireball-wrap');

	// var similarWizardTemplate = document.querySelector('#similar-wizard-template')
	// 	.content.querySelector('.setup-similar-item');
	// var setupSimilarList = document.querySelector('.setup-similar-list');
	// var fragment = document.createDocumentFragment();

	// var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
	// var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
	// var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
	// var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
	// var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
	// var counter = 0;

	// var changeWizard = function(arr){
	// 	counter++;
	// 	if(counter > arr.length - 1){
	// 		counter = 0;
	// 	}
	// 	return arr[counter];
	// };	

	// wizardCoat.addEventListener('click', function(){
	// 	wizardCoat.style.fill = changeWizard(coatColor);
		//wizardCoat.style.fill = coatColor[window.setup.getRandom(0, 5)];
	// });
	// wizardEyes.addEventListener('click', function(){
	// 	wizardEyes.style.fill = changeWizard(eyesColor);
		//wizardEyes.style.fill = eyesColor[window.setup.getRandom(0, 4)];
	// });
	// wizardFireball.addEventListener('click', function(){
	// 	wizardFireball.style.background = changeWizard(fireballColor);
		//wizardFireball.style.background = fireballColor[window.setupgetRandom(0, 4)];
	// });

	// var wizards = [
	// 	{
	// 		name: names[window.setup.getRandom(0, 7)] + ' ' + surnames[window.setup.getRandom(0, 7)],
	// 		coatColor: coatColor[window.setup.getRandom(0, 5)],
	// 		eyesColor: eyesColor[window.setup.getRandom(0, 4)]
	// 	},
	// 	{
	// 		name: names[window.setup.getRandom(0, 7)] + ' ' + surnames[window.setup.getRandom(0, 7)],
	// 		coatColor: coatColor[window.setup.getRandom(0, 5)],
	// 		eyesColor: eyesColor[window.setup.getRandom(0, 4)]
	// 	},
	// 	{
	// 		name: names[window.setup.getRandom(0, 7)] + ' ' + surnames[window.setup.getRandom(0, 7)],
	// 		coatColor: coatColor[window.setup.getRandom(0, 5)],
	// 		eyesColor: eyesColor[window.setup.getRandom(0, 4)]
	// 	},
	// 	{
	// 		name: names[window.setup.getRandom(0, 7)] + ' ' + surnames[window.setup.getRandom(0, 7)],
	// 		coatColor: coatColor[window.setup.getRandom(0, 5)],
	// 		eyesColor: eyesColor[window.setup.getRandom(0, 4)]
	// 	}
	// ];

	// var getWizard = function(wizard){
	// 	var getWizardElement = similarWizardTemplate.cloneNode(true);
	// 	getWizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
	// 	getWizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
	// 	getWizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

	// 	return getWizardElement;
	// };

	// for(var i = 0; i < wizards.length; i++){
	// 	fragment.appendChild(getWizard(wizards[i]));
	// }
	// setupSimilarList.appendChild(fragment);
	// window.setup.setup.querySelector('.setup-similar').classList.remove('hidden');
// })();