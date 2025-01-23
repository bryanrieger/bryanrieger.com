const headerElement = document.querySelector("body > header"); 
const navElement = document.querySelector("body > nav");

const inputSwitch = document.querySelector("input[id=switch]");
const labelSwitch = document.querySelector("label[for=switch]");
const labelSVG = labelSwitch.querySelector("svg use");
const labelSpan = labelSwitch.querySelector("span");

const icon_path = labelSVG.getAttribute("href").split('#')[0];
const label_text = labelSpan.innerText;

function init() {
	labelSwitch.addEventListener("click", function (e) {
		labelSVG.setAttribute("href", (inputSwitch.checked) ? icon_path + "#switch_open" : icon_path + "#switch_close");
		labelSpan.innerText = (inputSwitch.checked) ? label_text : "Close";
	});
	document.addEventListener('click', (event) => {
		if (( !headerElement.contains(event.target) && !navElement.contains(event.target)) && inputSwitch.checked) {
			inputSwitch.checked = false;
			labelSVG.setAttribute("href", icon_path + "#switch_open" );
			labelSpan.innerText = label_text;
		}
	});
}
(document.readyState === "loading") ? document.addEventListener("DOMContentLoaded", init) : init();