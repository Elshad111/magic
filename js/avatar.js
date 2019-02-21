'use strict';
(function(){
	var FILE_TYPES = ['jpeg', 'jpg', 'png', 'gif'];

	var fileChooser = document.querySelector('.upload input[type=file]');
	var preview = document.querySelector('.setup-user-pic');
	console.log(preview.name);

	fileChooser.addEventListener('change', function(){
		var file = fileChooser.files[0];
		var fileName = file.name.toLowerCase();
		//console.log(file.name);

		var matches = FILE_TYPES.some(function(it){
			return fileName.endsWith(it);
		});

		if(matches){
			var reader = new FileReader();
			reader.addEventListener('load', function(){
				preview.src = reader.result;
			});

			reader.readAsDataURL(file);
		}else{
			alert('Неверный формат файла!');
		}
	});
})();