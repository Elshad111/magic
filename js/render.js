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
})();