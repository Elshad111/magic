"use strict";
(function(){
	var wizardTemplate = document.quereySelector("#similar-wizard-template");

	var renderWizard = function(wizards){
		var element = wizardTemplate.content.cloneNode(true);

		var wizardElement = element.querySelector('.wizard');
		wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
		wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
		element.querySelector('.setup-similar-label').textContent =  wizard.name;

		return element;
	};

	var similar = document.querySelector('.setup-similar');
	var similarList = document.querySelector('setup-similar-list');

	window.render = function(data){
		var takeNumber = data.length > 4 ? 4 : data.length;
		similarList.innerHtml = "";
		for(var i = 0; i < takeNumber; i++){
			similar.appendChild(renderWizard(data[i]));
		}

		similar.classList.remove('hidden');
	};
})();