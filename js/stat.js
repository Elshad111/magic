'use strict';
(function(){
	var WIDTH_CLOUD = 420;
	var HEIGHT_CLOUD = 270;
	var CLOUD_X = 100;
	var CLOUD_Y = 10;
	var GAP = 10;
	var FONT_GAP = 20;
	var TEXT_X = 120;
	var TEXT_Y = 40;
	var BAR_WIDTH = 80;
	var BAR_HEIGHT = 260;
	var SQUARE_Y = 90;

	var renderCloud = function(ctx, x, y, color){
		ctx.fillStyle = color;
		ctx.fillRect(x, y, WIDTH_CLOUD, HEIGHT_CLOUD);	
	};

	var getMaxElement = function(arr){
		var maxElement = arr[0];
		for(var i = 0; i < arr.length; i++){
			if(maxElement < arr[i]){
				maxElement = arr[i];
			}
		}
		return maxElement;
	};

	var showMessage = function(ctx, text, x, y, color){
		ctx.font = '16px PT Mono';
		ctx.fillStyle = color;
		ctx.fillText(text, x, y);
	};

	var getRandom = function(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	window.renderStatistics = function(ctx, names, times){
		renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
		renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
		showMessage(ctx, 'Ура вы победили!', TEXT_X, TEXT_Y, '#000');
		showMessage(ctx, 'Список результатов:', TEXT_X, TEXT_Y + FONT_GAP, '#000');
		var maxTime = getMaxElement(times); 
		var squareHeight;
		for(var i = 0; i < names.length; i++){
			squareHeight = Math.round((150 / Math.round(maxTime)) * Math.round(times[i]));
			showMessage(ctx, names[i], TEXT_X + FONT_GAP + (BAR_WIDTH + GAP) * i, BAR_HEIGHT, '#000');
			showMessage(ctx, Math.round(times[i]), TEXT_X + FONT_GAP + (BAR_WIDTH + GAP) * i, (150 - squareHeight) + 85, '#000');
			ctx.fillStyle = names[i] == "Вы" ? "red" : "#000";
			ctx.fillRect(TEXT_X + FONT_GAP + (BAR_WIDTH + GAP) * i, (150 - squareHeight) + SQUARE_Y, TEXT_Y, squareHeight);
		}
	}
})();
 