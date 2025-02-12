export default {
		breadcrumbs: (data) => {
			// yes, this is an ugly hack, but it works. :)
			let pages = data.page.url.toString().replace(/\/+$/, '').split('/');
			let path = "";
			(pages[0] == "") ? pages[0] = "home" : false ;
			for (let i = 0; i < pages.length; i++) {
				let page = pages[i];
				const title = page.charAt(0).toUpperCase() + page.slice(1);
				pages[i] = {};
				path = path + "/" + page.replace(/home/g, '');
				pages[i].path = path.replace(/\/\/+/g, '/')
				pages[i].title = title;
			}
			if (pages.length > 1) {
				pages[0].title = "Back";
			}
		    if (pages.length > 2) {
				pages[0].path = pages[1].path;
				pages[2].path = pages[pages.length - 1].path;
				pages[2].title = pages[pages.length - 1].title;
				pages.length = 3;
			}
			if (Number(pages[pages.length - 1].title) > 0) { pages.length = 2; }
			return (pages);
		}
};