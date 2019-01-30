'use strict';

(function(){
	var dialogHandle = window.setup.setup.querySelector('.upload');
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
			if((window.setup.setup.offsetLeft - shift.x) <= 400){
				window.setup.setup.style.left = '400px';
			}else if((window.setup.setup.offsetTop - shift.y) <= 0){
				window.setup.setup.style.top = '0px';
			}else if((window.setup.setup.offsetLeft - shift.x) > screen.width){
				window.setup.setup.style.left = screen.width + 'px';
			}else if((window.setup.setup.offsetTop - shift.y) > screen.height){
				window.setup.setup.style.top = screen.height + 'px';
			}else{
				window.setup.setup.style.top = (window.setup.setup.offsetTop - shift.y) + 'px';
				window.setup.setup.style.left = (window.setup.setup.offsetLeft - shift.x) + 'px';
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