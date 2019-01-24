'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open'); 
var setupClose = setup.querySelector('.setup-close');
var setupUser = setup.querySelector('.setup-user-name');
var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
	.content.querySelector('.setup-similar-item');
var setupSimilarList = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var onPopupEscPress = function(evt){
	if(evt.keyCode === 27){
		closePopup();
	}
};
var getRandom = function(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

var openPopup = function(){
	setup.classList.remove('hidden');
	document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function(){
	setup.classList.add('hidden');
	document.removeEventListener('keydode', onPopupEscPress);
};

setupOpen.addEventListener('click', openPopup);
setupOpen.addEventListener('keydown', function(evt){
	if(evt.keyCode === 13){
		openPopup();
	}
});
setupClose.addEventListener('click', function(){
	if(setupUser == document.activeElement){
		return;
	}
	else{
		closePopup();
	}
});
setupClose.addEventListener('keydown', function(evt){
	if(evt.keyCode === 13){
		closePopup();
	}
});
wizardCoat.addEventListener('click', function(){
	wizardCoat.style.fill = coatColor[getRandom(0, 5)];
});
wizardEyes.addEventListener('click', function(){
	wizardEyes.style.fill = eyesColor[getRandom(0, 4)];
});
wizardFireball.addEventListener('click', function(){
	wizardFireball.style.background = fireballColor[getRandom(0, 4)];
});

var wizards = [
	{
		name: names[getRandom(0, 7)] + ' ' + surnames[getRandom(0, 7)],
		coatColor: coatColor[getRandom(0, 5)],
		eyesColor: eyesColor[getRandom(0, 4)]
	},
	{
		name: names[getRandom(0, 7)] + ' ' + surnames[getRandom(0, 7)],
		coatColor: coatColor[getRandom(0, 5)],
		eyesColor: eyesColor[getRandom(0, 4)]
	},
	{
		name: names[getRandom(0, 7)] + ' ' + surnames[getRandom(0, 7)],
		coatColor: coatColor[getRandom(0, 5)],
		eyesColor: eyesColor[getRandom(0, 4)]
	},
	{
		name: names[getRandom(0, 7)] + ' ' + surnames[getRandom(0, 7)],
		coatColor: coatColor[getRandom(0, 5)],
		eyesColor: eyesColor[getRandom(0, 4)]
	}
];

var getWizard = function(wizard){
	var getWizardElement = similarWizardTemplate.cloneNode(true);
	getWizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
	getWizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
	getWizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

	return getWizardElement;
};

for(var i = 0; i < wizards.length; i++){
	fragment.appendChild(getWizard(wizards[i]));
}
setupSimilarList.appendChild(fragment);
setup.querySelector('.setup-similar').classList.remove('hidden');