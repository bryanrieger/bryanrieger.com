const banner = document.querySelector("body > header.banner"); 
const menu = document.querySelector("body > nav.menu");
const input_switch = document.querySelector("input[id=switch]");
const label_switch = document.querySelector("label[for=switch]");
const label_svg = label_switch.querySelector("svg use");
const label_span = label_switch.querySelector("span");
const label_text = label_span.innerText;
function init() {
	label_switch.addEventListener("click", function (e) {
		label_svg.setAttribute("href", (input_switch.checked) ? "#switch_open" : "#switch_close");
		label_span.innerText = (input_switch.checked) ? label_text : "Close";
	});
	document.addEventListener('click', (event) => {
		if (( !banner.contains(event.target) && !menu.contains(event.target)) && input_switch.checked) {
			input_switch.checked = false;
			label_svg.setAttribute("href", "#switch_open" );
			label_span.innerText = label_text;
		}
	});
}
(document.readyState === "loading") ? document.addEventListener("DOMContentLoaded", init) : init();