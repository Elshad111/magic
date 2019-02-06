'use strict';
(function(){
	window.backend = {
		load: function(url, onSuccess, onError){
			var xhr = new XMLHttpRequest();
			xhr.responseType = 'json';
			xhr.addEventListener('load', function(){
				if(xhr.status == 200){
					onSuccess(xhr.response);
				}else{
					onError("Статус ответа : " + xhr.status + " " + xhr.statusText);
				}
			});

			xhr.addEventListener('error', function(){
				onError('Произошла ошибка соединения');
			});

			xhr.addEventListener('timeout', function(){
				onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
			});

			xhr.timeout = 10000; // 10 seconds

			xhr.open('GET', url);
			xhr.send();
		},

		upload: function(url, data, onSuccess){
			var xhr = new XMLHttpRequest();
			xhr.responseType = 'json';

			xhr.addEventListener('load', function(){
				onSuccess(xhr.response);
			});

			xhr.open('POST', url);
			xhr.send(data);
		}
	};
})();

(function(){
	var similarWizardTemplate = document.querySelector('#similar-wizard-template')
		.content.querySelector('.setup-similar-item');
	var setupSimilarList = window.setup.setup.querySelector('.setup-similar-list');

	var successHandler = function(wizard){
		var getWizardElement = similarWizardTemplate.cloneNode(true);
		getWizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
		getWizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
		getWizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
		return getWizardElement;
	}

	var renderError = function(errorMessage){
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
		var fragment = document.createDocumentFragment();
		for(var i = 0; i < 4; i++){
			fragment.appendChild(successHandler(data[i]))
		}
		setupSimilarList.appendChild(fragment);
		window.setup.setup.querySelector('.setup-similar').classList.remove('hidden');
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
	window.backend.load('https://js.dump.academy/code-and-magick/data', onSuccess, renderError);
})();