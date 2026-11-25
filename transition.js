
// bfcacheから復元されたとき、遷移用の非表示状態を残さない。
function resetPageLeaving() {
	document.body.classList.remove("page-leaving");
}

window.addEventListener("pageshow", resetPageLeaving);
window.addEventListener("pagehide", resetPageLeaving);

document.querySelectorAll('a[href]').forEach(link => {
	const url = new URL(link.href, window.location.href);

	// 同じサイト内のHTMLページだけを対象にする
	if (
		link.matches(".toy-card") ||
		url.origin !== window.location.origin ||
		(url.pathname === window.location.pathname && url.search === window.location.search) ||
		!url.pathname.endsWith(".html")
	) {
		return;
	}

	link.addEventListener("click", event => {
		if (
			event.defaultPrevented ||
			link.hasAttribute("download") ||
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
