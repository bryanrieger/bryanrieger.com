export default {
	domain: "bryanrieger.com",
	lang: "en-ca",
	locale: "en_CA",
	language: "English",
	rating: "General",
	title: "Bryan Rieger",
	description: "Bryan Rieger is an illustrator and writier from Montréal, Canada.",
	keywords: "illustration, writing, storytelling, stories, books, comics, picture books, chapter books, children, kids, middle-grade, graphic novels, sequential art, role-playing games, drawing, doodles",
	copyright: "Copyright (c) Bryan Rieger. All rights reserved.",
	author: {
		name: "Bryan Rieger",
		email: "hello@bryanrieger.com",
		social: "@bryanrieger.bsky.social",
		location: {
			city: "Montreal",
			country: "Canada",
		}
	},
	editor: {
		name: "Stephanie Rieger",
		email: "steph@yiibu.com",
		social: "@stephanierieger.bsky.social",
		location: {
			city: "Montreal",
			country: "Canada",
		}
	},
	color: {
		background: "#ffffff",
		scheme: "only light",
		theme: "#ffffff",
	},
	icon: {
		color: "#773FD2",
		ico: "/assets/icons/meta/icon.ico",
		png: "/assets/icons/meta/icon.png",
		svg: "/assets/icons/meta/icon.svg",
		mask: "/assets/icons/meta/mask.svg",
		touch: "/assets/icons/meta/touch.png"
	},
	image: {
		src: "/assets/images/meta/bryanrieger.png",
		alt: "An illustration of a smiliing person in a fish suit."
	},
	logo: "/assets/images/manifest/logo.png",
	preload: [
		{ "src": "/assets/fonts/rooney/regular.woff2", "as": "font", "type": "font/woff2", "crossorigin": "crossorigin" },
		{ "src": "/assets/fonts/rooney/bold.woff2", "as": "font", "type": "font/woff2", "crossorigin": "crossorigin" },
		{ "src": "/assets/fonts/rooney/sans/regular.woff2", "as": "font", "type": "font/woff2", "crossorigin": "crossorigin" },
		{ "src": "/assets/fonts/rooney/sans/bold.woff2", "as": "font", "type": "font/woff2", "crossorigin": "crossorigin" },
		{ "src": "/assets/styles/default.css", "as": "style" },
		{ "src": "/assets/scripts/default.js", "as": "script" }
	],
	schema: {
		context: "https://schema.org",
		type: "Person",
		name: "Bryan Rieger",
		image: "https://bryanrieger.com/assets/images/schema.png",
		url: "https://bryanrieger.com"
	},
	feed: {
		favicon: "/assets/icons/feed/favicon.png",
		icon: "/assets/icons/feed/icon.png",
		json: "/feed.json",
		xml: "/feed.xml"
	},
	tools: {
		code: "Chrome, Code, Eleventy, GitHub, Cloudflare",
		design: "Adobe Creative Cloud, Affinity Designer, Procreate"
	},
	generator: "Handmade with ❤️ in Montréal, Canada.",
	referrer: "no-referrer-when-downgrade",
	robots: "all",
	humans: "/humans.txt",
	manifest: "/manifest.json",
	sitemap: "/sitemap.xml",
	worker: "/assets/scripts/worker.js"
};