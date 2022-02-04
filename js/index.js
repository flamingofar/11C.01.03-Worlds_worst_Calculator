/** @format */

"use strict;";

const firstNumberInput = document.querySelector("#firstnumber");
const secondNumberInput = document.querySelector("#secondnumber");
const operatorInput = document.querySelector("#operator");
const clearBtn = document.querySelector("#clear");
const calculateBtn = document.querySelector("#calculate");
const resultsList = document.querySelector("#results");
const rounding = document.querySelector("#rounding #decimals");
const doRound = document.querySelector("#doround");

let firstNumber, secondNumber, operator, result;

window.addEventListener("DOMContentLoaded", setup);

function setup() {
	operatorInput.value = "add";
	rounding.value = "0";
	doRound.checked = false;
	clearResults();

	resultsList.textContent = "";
	calculateBtn.addEventListener("click", calculate);
	clearBtn.addEventListener("click", clearResults);
}

function calculate() {
	// Read first number
	firstNumber = parseFloat(firstNumberInput.value);
	// Read second number and convert to number
	secondNumber = parseFloat(secondNumberInput.value);
	// Read operator
	operator = operatorInput.value;
	// Calculate based on operator
	switch (operator) {
		case "add":
			result = firstNumber + secondNumber;
			break;
		case "sub":
			result = firstNumber - secondNumber;
			break;
		case "mul":
			result = firstNumber * secondNumber;
			break;
		case "div":
			result = firstNumber / secondNumber;
			break;
	}

	// Rounding on wether doRound is checked
	if (doRound.checked) {
		// Show result with rounding
		resultsList.innerHTML += `<li>${result.toFixed(rounding.value)}</li>`;
		firstNumberInput.value = result;
	} else {
		// Show result in results list
		resultsList.innerHTML += `<li>${result}</li>`;
		firstNumberInput.value = result;
	}
	resultsList.scrollTop = resultsList.scrollHeight;
}

function clearResults() {
	// Clear
	resultsList.textContent = "";
	firstNumberInput.value = "0";
	secondNumberInput.value = "0";
}
