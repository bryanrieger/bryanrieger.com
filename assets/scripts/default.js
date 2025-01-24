
const page = {
	header: document.querySelector("body > header"),
	nav: document.querySelector("body > nav")
}
const menu = {
	input: {
		switch: document.querySelector("body > header input[id=switch]"),
	},
	label: {
		span: document.querySelector("body > header label[for=switch] span"),
		svg: {
			use: document.querySelector("body > header label[for=switch] svg use")
		},
		switch: document.querySelector("body > header label[for=switch]")
	}
}

function init() {
	menu.label.text = menu.label.span.innerText;
	menu.label.text_alt = menu.label.span.getAttribute("data-switch");
	menu.label.svg.path = menu.label.svg.use.getAttribute("href").split('#')[0];
	menu.label.svg.id = "#" + menu.label.svg.use.getAttribute("href").split('#')[1];
	menu.label.svg.id_alt = "#" + menu.label.svg.use.getAttribute("data-switch");

	menu.label.switch.addEventListener("click", function (e) {
		menu.label.svg.use.setAttribute("href", (menu.input.switch.checked) ? menu.label.svg.path + menu.label.svg.id : menu.label.svg.path + menu.label.svg.id_alt);
		menu.label.span.innerText = (menu.input.switch.checked) ? menu.label.text : menu.label.text_alt;
	});
	
	document.addEventListener('click', (event) => {
		if (( !page.header.contains(event.target) && !page.nav.contains(event.target)) && menu.input.switch.checked) {
			menu.input.switch.checked = false;
			menu.label.svg.use.setAttribute("href", menu.label.svg.path + menu.label.svg.id );
			menu.label.span.innerText = menu.label.text;
		}
	});
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", init)
} else {
	init();
}

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("/assets/scripts/worker.js");
};