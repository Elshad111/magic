'use strict';

(function(){
	var setupDialogElement = document.querySelector('.setup');
	var dialogHandle = setupDialogElement.querySelector('.upload');
	// document.addEventListener('mousemove', function(event){
	// 	console.log(event);
	// });

	dialogHandle.addEventListener('mousedown', function(evt){
		evt.preventDefault();
		var startCoords = {
			x: evt.clientX,
			y: evt.clientY
		};
		var dragget = false;
		var onMouseMove = function(moveEvt){
			moveEvt.preventDefault();
			dragget = true;
			var shift = {
				x: startCoords.x - moveEvt.clientX,
				y: startCoords.y - moveEvt.clientY
			};
			startCoords = {
				x: moveEvt.clientX,
				y: moveEvt.clientY
			};
			console.log((setupDialogElement.offsetLeft - shift.x));
			if((setupDialogElement.offsetLeft - shift.x) <= 400){
				setupDialogElement.style.left = '400px';
			}else if((setupDialogElement.offsetTop - shift.y) <= 0){
				setupDialogElement.style.top = '0px';
			}else{
				setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
				setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';
			}
			
		};

		var onMouseUp = function(upEvt){
			upEvt.preventDefault();
			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mouseup', onMouseUp);
			if(dragget){
				var onClickPreventDefault = function(evt){
					evt.preventDefault();
					dialogHandle.removeEventListener('click', onClickPreventDefault);
				};
				dialogHandle.addEventListener('click', onClickPreventDefault);
			}
		};
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	});
}());