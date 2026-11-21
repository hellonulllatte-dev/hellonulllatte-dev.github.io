
const POSTS = [
	{
    date: "2026-11-21",
    category: "note",
    title: "PLAYGROUNDを公開しました！",
    description: "ちいさな遊びと実験を集めるPLAYGROUNDを追加しました。効果音や会話送りアイコンを作れるWeb Toyを3つ公開中。無料で遊べます！",
    url: "playground.html"
	},
	{
		date: "2026-11-20",
		category: "note",
		title: "CASTページ制作中！",
		description: "キャラクターを並べるページを作っています。分類は「お姉さん」と「それ以外」。",
		url: ""
	},
	{
		date: "2026-10-30",
		category: "postmortem",
		title: "Slapjam #2 初参加・制作振り返り",
		description: "初めて海外の48時間ゲームジャムに参加！『WHY CAN'T I RUN?!』の制作と、結果発表、そして反省点を振り返りました。",
		url: "posts/slapjam-2.html"
	}
];

function getSortedPosts() {
	return [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
}

function createPostCard(post) {
	const article = document.createElement("article");
	article.className = "devlog-card";
	article.dataset.category = post.category;

	const meta = document.createElement("div");
	meta.className = "devlog-meta";

	const time = document.createElement("time");
	time.dateTime = post.date;
	time.textContent = post.date.replaceAll("-", ".");

	const category = document.createElement("span");
	category.textContent = post.category.toUpperCase();

	meta.append(time, category);

	const title = document.createElement("h3");
	title.textContent = post.title;

	const description = document.createElement("p");
	description.textContent = post.description;

	article.append(meta, title, description);

	if (post.url) {
		const link = document.createElement("a");
		link.href = post.url;
		link.className = "devlog-readmore";
		link.textContent = post.category === "note" && post.url === "playground.html"
    	? "Explore →"
    	: "Read more →";
		article.append(link);
	}

	return article;
}
