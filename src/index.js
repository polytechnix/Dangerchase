const GameViewport = {
	WIDTH: 384,
	HEIGHT: 224,
	SCALE: 2
};

window.onload = function() {
	const canvasSection = document.querySelector('canvas');
	const canvasContext = canvasSection.getContext('2d');

	canvasSection.style.width = `${GameViewport.WIDTH * GameViewport.SCALE}px`;
	canvasSection.style.height = `${GameViewport.HEIGHT * GameViewport.SCALE}px`;

	canvasContext.strokeStyle = 'red';
	canvasContext.moveTo(0, 0);
	canvasContext.lineTo(canvasSection.width, canvasSection.height);
	canvasContext.moveTo(canvasSection.width, 0);
	canvasContext.lineTo(0, canvasSection.height);
	canvasContext.stroke();
}
