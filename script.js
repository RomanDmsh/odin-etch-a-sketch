function createPoint() {
	const div = document.createElement('div');
	div.className = 'point';
	div.addEventListener('mouseover', () => {
		div.classList.add('selected');
	});
	return div;
}

function createArray() {
	let divArray = [];
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			divArray.push(createPoint(canvas));
		}
	}
	canvas.append(...divArray);
}
function resizePoints() {
	let css = document.styleSheets[0];
	let cssline;
	for (let i = 0; i < css.cssRules.length; i++) {
		if (css.cssRules[i].selectorText === ':root') {
			cssline = css.cssRules[i];
			break;
		}
	}
	cssline.style.setProperty('--lines', length);
}
function customSize() {
	let customLength = Number(document.querySelector('#length').value);
	if (!isNaN(customLength) && customLength > 0) {
		let children = document.querySelectorAll('.point');
		for (let i = 0; i < children.length; i++) {
			canvas.removeChild(children[i]);
		}
		length = customLength;
		createArray();
		resizePoints();
	} else alert('Wrong value, accepts positive non-zero numbers only');
}
function customColor() {
	let colorPicker = document.querySelector('#colorPicker');
	let css = document.styleSheets[0];
	let cssline;
	for (let i = 0; i < css.cssRules.length; i++) {
		if (css.cssRules[i].selectorText === ':root') {
			cssline = css.cssRules[i];
			break;
		}
	}
	cssline.style.setProperty('--background-color', colorPicker.value);
}

const canvas = document.querySelector('.canvas');
let length = 20;
createArray();
resizePoints();

document.querySelector('#confirmButton').addEventListener('click', () => {
	customSize();
	customColor();
});
