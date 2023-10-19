const number1 = document.querySelector(".input__element-1");
const number2 = document.querySelector(".input__element-2");

let sumElement = document.querySelector(".sum__element");

const addButton = document.querySelector(".add-button");
const subtractButton = document.querySelector(".subtract-button")
const divideButton = document.querySelector(".divide-button");
const multiplyButton = document.querySelector(".multiply-button");


addButton.addEventListener("click", ()=>{
	const value1 = parseFloat(number1.value);
	const value2 = parseFloat(number2.value);

	if (!isNaN(value1) && !isNaN(value2)) {
		sumElement.textContent = value1 + value2;
	} else {
		sumElement.textContent = "Invalid input";
	}
});

