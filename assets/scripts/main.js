function addAnalytics() { let body = document.getElementsByTagName("body")[0]; let tag = document.createElement("script");
	tag.type = "text/javascript";
	tag.async = true;
	tag.src = "https://www.googletagmanager.com/gtag/js?id=G-B4XDV10TVN"; let script = document.createElement("script"); let code = document.createTextNode("window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-B4XDV10TVN');");
	script.appendChild(code);
	body.appendChild(tag);
	body.appendChild(script);
	body.classList.add("cookies"); }
const delayFor = (milliseconds) => { return new Promise(resolve => { setTimeout(resolve, milliseconds); }); }
const getCookie = (name) => { let value = `; ${document.cookie}`; let parts = value.split(`; ${name}=`); if (parts.length === 2) return parts.pop().split(';').shift(); }
const setCookie = (name, value, days) => {
	let expires = "";
	if (days) { let date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toUTCString(); }
	document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
const scrollIntoViewWithOffset = (selector, offset) => { window.scrollTo({ behavior: 'smooth', top: document.querySelector(selector).getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset }); }
const menu = document.querySelector("body > header input");
const dialog = document.querySelector("body > dialog");
const btn_submit = dialog.querySelector("body > dialog button[type='submit']");
const btn_cancel = dialog.querySelector("body > dialog button[value='cancel']");
const cookie = { ok: "Okay", no: "No way! (Unfortunately do I need a cookie to remind myself not to bother you about cookies anymore.) #irony" }
let cookies = getCookie('cookies');
if (cookies) { if (cookies === cookie.ok) { document.cookie = setCookie("cookies", cookie.ok, 30);
		addAnalytics(); } else { document.cookie = setCookie("cookies", cookie.no, 30); } } else { dialog.setAttribute("open", "");
	btn_submit.addEventListener("click", function() { dialog.removeAttribute("open");
		document.cookie = setCookie("cookies", cookie.ok, 30);
		addAnalytics(); });
	btn_cancel.addEventListener("click", function() { dialog.removeAttribute("open");
		document.cookie = setCookie("cookies", cookie.no, 30); }); }
const btn_begin = document.querySelector("button[name='begin'");
if (btn_begin) { btn_begin.addEventListener("click", async function() { scrollIntoViewWithOffset("main > header + *", 0);
		await delayFor(300);
		document.body.classList.add("clear"); }); }
let scroll = { buffer: 8, delta: 0, position: 0, offset: 0, start: 60 }
window.addEventListener('scroll', (e) => {
	scroll.offset = (window.scrollY || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
	scroll.delta += scroll.offset - scroll.position;
	if (scroll.delta < (-1 * scroll.buffer) || scroll.position < scroll.start) { document.body.classList.remove("clear");
		scroll.delta = 0; } else if (scroll.delta > scroll.buffer && scroll.position > scroll.start) { if (menu.checked === false) { document.body.classList.add("clear");
			scroll.delta = 0; } }
	scroll.position = scroll.offset;
	if (scroll.position < 80) { document.body.classList.remove("clear"); };
});
if ("serviceWorker" in navigator) { navigator.serviceWorker.register("/assets/scripts/worker.js"); };