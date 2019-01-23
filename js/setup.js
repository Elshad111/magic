'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
	.content.querySelector('.setup-similar-item');
var setupSimilarList = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandom = function(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

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
userDialog.querySelector('.setup-similar').classList.remove('hidden');