
document.querySelectorAll('a[href]').forEach(link => {
	const url = new URL(link.href, window.location.href);

	// 同じサイト内のHTMLページだけを対象にする
	if (
		url.origin !== window.location.origin ||
		!url.pathname.endsWith(".html")
	) {
		return;
	}

	link.addEventListener("click", event => {
		if (
			event.ctrlKey ||
			event.metaKey ||
			event.shiftKey ||
			event.altKey ||
			event.button !== 0 ||
			link.target === "_blank"
		) {
			return;
		}

		event.preventDefault();

		document.body.classList.add("page-leaving");

		setTimeout(() => {
			window.location.href = link.href;
		}, 250);
	});
});
