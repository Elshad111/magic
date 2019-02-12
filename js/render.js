"use strict";
(function(){
	var wizardTemplate = document.querySelector("#similar-wizard-template").content.querySelector('.setup-similar-item');
	var fragment = document.createDocumentFragment();

	var renderWizard = function(wizard){
		var wizardElement = wizardTemplate.cloneNode(true);

		wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
		wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
		wizardElement.querySelector('.setup-similar-label').textContent =  wizard.name;

		return wizardElement;
	};

	var similar = document.querySelector('.setup-similar');
	var similarList = document.querySelector('.setup-similar-list');

	window.render = function(data){
		var takeNumber = data.length > 4 ? 4 : data.length;
		for(var i = 0; i < takeNumber; i++){
			fragment.appendChild(renderWizard(data[i]));
		}
		similarList.appendChild(fragment);
		similar.classList.remove('hidden');
	};
})();