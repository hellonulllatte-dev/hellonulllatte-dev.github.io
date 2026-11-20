// FICTIONAL GOODS: Cigarette profiles are fictional; prices match in-game PACK_DATA.
// Taste meters and TAR/NICOTINE values are creative catalog settings, not measurements.
// Drink copy is preserved from the cyberpunk beverage catalogue.
const products = [
  {
    category: 'cigarettes',
    name: "ACE",
    image: 'images/goods/cigarettes/cigarette1.png',
    type: "REGULAR", format: 'BOX', contents: 20,
    tar: 14, nicotine: 1.2, price: 540,
    taste: { body: 5, aroma: 3, sharp: 2 },
    tagline: "REGULAR / 14mg",
    en: "A regular cigarette with full-bodied tobacco character and a distinct toasted aroma. This standard blend offers a robust flavor profile and a mellow finish.",
    ja: "しっかりとしたコクと、たばこ本来の香ばしさを楽しめるレギュラータイプ。重厚感のある味わいと、落ち着いた後味が特徴のスタンダードモデル。"
  },
  {
    category: 'cigarettes',
    name: "SILVER THEORY ORIGINAL",
    image: 'images/goods/cigarettes/cigarette2.png',
    type: "REGULAR", format: 'BOX', contents: 20,
    tar: 8, nicotine: 0.7, price: 600,
    taste: { body: 3, aroma: 3, sharp: 4 },
    tagline: "REGULAR / 8mg",
    en: "The original SILVER THEORY blend is designed to balance aroma and tobacco intensity. Its clean flavor profile and smooth finish define the series.",
    ja: "香りと吸いごたえのバランスを追求した、SILVER THEORYシリーズのオリジナルモデル。雑味を抑えたクリアな味わいと、なめらかな後味が特徴です。"
  },
  {
    category: 'cigarettes',
    name: "SILVER THEORY ONE",
    image: 'images/goods/cigarettes/cigarette3.png',
    featuredBy: 'ワン',
    type: "REGULAR", format: 'BOX', contents: 20,
    tar: 1, nicotine: 0.1, price: 600,
    taste: { body: 1, aroma: 2, sharp: 5 },
    tagline: "REGULAR / 1mg",
    en: "The 1mg edition of SILVER THEORY. Based on the original blend profile, it offers a lighter tobacco character and a crisp finish.",
    ja: "SILVER THEORYシリーズの1mgモデル。オリジナルの香味設計をベースに、軽やかな吸い心地とすっきりとした後味に仕上げました。"
  },
  {
    category: 'cigarettes',
    name: "FOX",
    image: 'images/goods/cigarettes/cigarette4.png',
    type: "REGULAR", format: 'BOX', contents: 20,
    tar: 6, nicotine: 0.5, price: 470,
    taste: { body: 2, aroma: 3, sharp: 4 },
    tagline: "REGULAR / 6mg",
    en: "A regular cigarette combining moderate body with a gentle aroma. Its straightforward flavor profile is characterized by a light tobacco character and a clean finish.",
    ja: "ほどよいコクと穏やかな香りを組み合わせたレギュラータイプ。軽快な吸い心地と、癖の少ないすっきりとした味わいが特徴です。"
  },
  {
    category: 'cigarettes',
    name: "SIESTA BITE MENTHOL",
    image: 'images/goods/cigarettes/cigarette5.png',
    featuredBy: 'メンソ',
    type: "MENTHOL", format: 'BOX', contents: 20,
    tar: 5, nicotine: 0.4, price: 580,
    taste: { body: 2, aroma: 3, sharp: 5 },
    tagline: "MENTHOL / 5mg",
    en: "A menthol cigarette with a pronounced cooling sensation and a crisp finish. The blend is designed to balance menthol freshness with tobacco flavor.",
    ja: "爽快なメンソール感と、すっきりとした吸い心地が特徴。清涼感とたばこの風味のバランスを重視したメンソールタイプです。"
  },
  {
    category: 'cigarettes',
    name: "MUSE",
    image: 'images/goods/cigarettes/cigarette6.png',
    type: "AROMA", format: 'BOX', contents: 20,
    tar: 7, nicotine: 0.6, price: 550,
    taste: { body: 2, aroma: 5, sharp: 2 },
    tagline: "AROMA / 7mg",
    en: "An aromatic cigarette distinguished by its sweet, expressive scent. A distinctive blend combining a rich fragrance with a mellow tobacco character.",
    ja: "特徴的な甘い香りが広がるアロマタイプのシガレット。豊かな芳香とまろやかな吸い心地を組み合わせた、個性のある香味設計です。"
  },
  {
    category: 'cigarettes',
    name: "EMBER RICH BLEND",
    image: 'images/goods/cigarettes/cigarette7.png',
    featuredBy: 'ブラック',
    type: "RICH BLEND", format: 'BOX', contents: 20,
    tar: 12, nicotine: 1.0, price: 680,
    taste: { body: 5, aroma: 5, sharp: 2 },
    tagline: "RICH BLEND / 12mg",
    en: "A rich blend developed with carefully selected tobacco leaves, emphasizing full body and layered aroma. Its deep flavor profile is accompanied by a lingering finish.",
    ja: "厳選した葉たばこをブレンドし、豊かなコクと奥行きのある香りを追求したリッチブレンド。深みのある味わいと、余韻の残る後味が特徴です。"
  },
  {
    category: 'cigarettes',
    name: "BLUE SWING",
    image: 'images/goods/cigarettes/cigarette8.png',
    type: "REGULAR", format: 'BOX', contents: 20,
    tar: 11, nicotine: 0.9, price: 560,
    taste: { body: 4, aroma: 4, sharp: 3 },
    tagline: "REGULAR / 11mg",
    en: "A regular cigarette with a substantial body and balanced toasted notes. The blend emphasizes the relationship between a rich aroma and pronounced tobacco character.",
    ja: "しっかりとしたコクと、ほどよい香ばしさが特徴のレギュラータイプ。豊かな香味と吸いごたえのバランスにこだわった一本です。"
  },
  {
    category: 'cigarettes',
    name: "RIVET HEART ORIGINAL",
    image: 'images/goods/cigarettes/cigarette9.png',
    type: "REGULAR", format: 'BOX', contents: 20,
    tar: 10, nicotine: 0.8, price: 590,
    taste: { body: 4, aroma: 4, sharp: 3 },
    tagline: "REGULAR / 10mg",
    en: "The original RIVET HEART blend is characterized by pronounced tobacco intensity and a full aroma. Its flavor profile is built around a rich body and balanced fragrance.",
    ja: "しっかりとした吸いごたえと、豊かな香りが特徴のオリジナルモデル。コクのある味わいをベースに、香味のバランスを整えました。"
  },
  {
    category: 'cigarettes',
    name: "RIVET HEART LIGHT",
    image: 'images/goods/cigarettes/cigarette10.png',
    featuredBy: 'ライト',
    type: "REGULAR", format: 'BOX', contents: 20,
    tar: 6, nicotine: 0.5, price: 590,
    taste: { body: 2, aroma: 4, sharp: 4 },
    tagline: "REGULAR / 6mg",
    en: "A lighter variation of RIVET HEART ORIGINAL. It retains the series’ characteristic aroma while offering a gentler tobacco profile and a cleaner finish.",
    ja: "RIVET HEART ORIGINALの香味を受け継いだライトモデル。シリーズの特徴である香りを活かしながら、軽やかな吸い心地に仕上げました。"
  },
  {
    category: 'cigarettes',
    name: "RALLY LOAD ORIGINAL",
    image: 'images/goods/cigarettes/cigarette11.png',
    featuredBy: 'レギュラー',
    type: "REGULAR", format: 'BOX', contents: 20,
    tar: 12, nicotine: 1.0, price: 530,
    taste: { body: 4, aroma: 3, sharp: 3 },
    tagline: "REGULAR / 12mg",
    en: "The standard RALLY LOAD model is a regular cigarette with a robust body and pronounced tobacco intensity. The blend emphasizes a traditional tobacco flavor.",
    ja: "豊かなコクと力強い吸いごたえが特徴のレギュラータイプ。オーソドックスなたばこ本来の風味を大切にした、RALLY LOADシリーズのスタンダードモデルです。"
  },
  {
    category: 'cigarettes',
    name: "RALLY LOAD LIGHT",
    image: 'images/goods/cigarettes/cigarette12.png',
    type: "REGULAR", format: 'BOX', contents: 20,
    tar: 8, nicotine: 0.7, price: 530,
    taste: { body: 3, aroma: 3, sharp: 4 },
    tagline: "REGULAR / 8mg",
    en: "A lighter edition based on the flavor profile of RALLY LOAD ORIGINAL. It combines moderate body and aroma with a smoother, cleaner finish.",
    ja: "RALLY LOAD ORIGINALの風味をベースに、吸い心地を軽やかに仕上げたライトモデル。ほどよいコクと香りを備えた、バランスのよい味わいが特徴です。"
  },

  {
    category: 'drinks',
    name: 'RAM-ne',
    image: 'images/goods/drinks/drink1.png',
    tagline: 'Refresh your memory.',
    en: `Refresh your memory.\n\nFLAVOR: RAMUNE SODA\n\nA crisp, sparkling ramune soda for when your thoughts need a refresh.\n\nNOTICE: Does not increase available memory.`,
    ja: `記憶を、もっと軽やかに。\n\nフレーバー：ラムネソーダ\n\n爽快なラムネ風味の炭酸飲料。思考が重くなった午後のリフレッシュに。\n\n※メモリの空き容量は増えません。`
  },
  {
    category: 'drinks',
    name: 'C://DER',
    image: 'images/goods/drinks/drink2.png',
    tagline: 'Cooling complete. Rebooting.',
    en: `Cooling complete. Rebooting.\n\nFLAVOR: ICE CIDER\n\nClear sweetness and a sharp sparkling finish. A cold drink for an overheated afternoon.\n\nRECOMMENDED OPERATING TEMPERATURE: 4–8°C. Human cooling performance is not guaranteed.`,
    ja: `冷却完了。再起動します。\n\nフレーバー：アイスサイダー\n\nクリアな甘さとシャープな炭酸刺激。オーバーヒートした午後に、冷たい一本。\n\n推奨動作温度：4〜8℃。人体の冷却性能は保証対象外です。`
  },
  {
    category: 'drinks',
    name: 'NULL LATTE',
    image: 'images/goods/drinks/drink3.png',
    tagline: 'Nothing, just for you.',
    en: `Nothing, just for you.\n\nFLAVOR: NULL\n\nFlavor data could not be loaded, but the product is functioning normally.\n\nNOTICE: Restarting will not change the flavor.`,
    ja: `何もない、をあなたに。\n\nフレーバー：NULL\n\n味覚データの読み込みに失敗しましたが、製品は正常です。\n\n※再起動しても味は変わりません。`
  },
  {
    category: 'drinks',
    name: 'DEBUG TEA',
    image: 'images/goods/drinks/drink4.png',
    tagline: 'Unknown issue? Take a break.',
    en: `Unknown issue? Take a break.\n\nFLAVOR: HERBAL TEA\n\nA refreshing herbal tea for when your thoughts get stuck in a loop.\n\nKNOWN ISSUE: May cause the sensation that a problem has been solved.`,
    ja: `原因不明の不具合に、ひと息。\n\nフレーバー：ハーブティー\n\nすっきりとしたハーブの香り。複雑な思考を整理したいときの一杯。\n\n既知の不具合：問題が解決したような気分になる場合があります。`
  },
  {
    category: 'drinks',
    name: 'BYTE CHOCO',
    image: 'images/goods/drinks/drink5.png',
    tagline: 'Sweetness, compressed.',
    en: `Sweetness, compressed.\n\nFLAVOR: CHOCOLATE DRINK\n\nRich chocolate flavor, densely packed into every sip. Install a little sweetness into your day.\n\nNOTICE: Download cannot be paused once started.`,
    ja: `甘さを、高密度に圧縮。\n\nフレーバー：チョコレートドリンク\n\nとろりと濃厚なチョコレートの風味。ひとくちごとに甘さをインストール。\n\n※ダウンロードの一時停止には対応しておりません。`
  },
  {
    category: 'drinks',
    name: 'SLEEP MODE',
    image: 'images/goods/drinks/drink6.png',
    tagline: 'Please close all active tasks.',
    en: `Please close all active tasks.\n\nFLAVOR: VANILLA MILK\n\nA gently sweet, vanilla-scented milk drink for the end of a long day.\n\nWARNING: Unsaved work detected.`,
    ja: `すべてのタスクを終了してください。\n\nフレーバー：バニラミルク\n\nほんのりバニラが香る、やさしい甘さの夜向けミルクドリンク。\n\n警告：未保存の作業があります。`
  },
  {
    category: 'drinks',
    name: 'PING PEACH',
    image: 'images/goods/drinks/drink7.png',
    tagline: 'Connection to peach established.',
    en: `Connection to peach established.\n\nFLAVOR: PEACH SODA\n\nA lightly sparkling soda bursting with the aroma of juicy peaches.\n\nPING 12ms / PACKET LOSS 0% / PEACH 100%`,
    ja: `桃との接続を確立しました。\n\nフレーバー：ピーチソーダ\n\nジューシーな桃の香りが弾ける、軽やかな炭酸飲料。\n\nPING 12ms / PACKET LOSS 0% / PEACH 100%`
  },
  {
    category: 'drinks',
    name: '?',
    image: 'images/goods/drinks/drink8.png',
    tagline: 'Error 404: Flavor not found.',
    en: `Error 404: Flavor not found.\n\nFLAVOR: UNKNOWN\n\nProduct data could not be retrieved. Sales will continue as scheduled.\n\nSTATUS: UNKNOWN / MANUFACTURER: NULL / LAST UPDATED: NO RECORD`,
    ja: `Error 404: Flavor not found.\n\nフレーバー：UNKNOWN\n\n商品情報の取得に失敗しました。なお、販売は継続されています。\n\n状態：UNKNOWN / 製造元：NULL / 最終更新：記録なし`
  }
];

const dialog = document.getElementById('goods-dialog');
const dialogVisual = document.getElementById('dialog-visual');
const dialogName = document.getElementById('dialog-name');
const dialogKind = document.getElementById('dialog-kind');
const dialogEn = document.getElementById('dialog-en');
const dialogJa = document.getElementById('dialog-ja');

// Additional catalogue information is displayed for cigarettes only.
// Injected here so the user's customized gallery.css does not need to be replaced.
const cigaretteStyle = document.createElement('style');
cigaretteStyle.textContent = `
  .goods-cigarette-details { margin: 5px 0 10px; }
  .goods-cigarette-type { font-size: 11px; letter-spacing: .08em; color: var(--accent); margin-bottom: 8px; }
  .goods-cigarette-specs { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:6px; padding: 8px 0; border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
  .goods-cigarette-spec { min-width:0; }
  .goods-cigarette-spec-label { display:block; font-size:10px; letter-spacing:.04em; opacity:.7; }
  .goods-cigarette-spec-value { display:block; font-size:15px; font-weight:bold; line-height:1.4; }
  .goods-cigarette-taste-title { font-size:10px; letter-spacing:.12em; margin:9px 0 5px; color:var(--accent); }
  .goods-cigarette-taste-row { display:grid; grid-template-columns:35px minmax(0,1fr) 25px; align-items:center; gap:9px; margin:3px 0; }
  .goods-cigarette-taste-label, .goods-cigarette-taste-score { font-size:11px; }
  .goods-cigarette-taste-score { text-align:right; opacity:.7; }
  .goods-cigarette-taste-meter { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:3px; }
  .goods-cigarette-taste-cell { height:8px; background:var(--line); border-radius:2px; opacity:.35; }
  .goods-cigarette-taste-cell.is-on { background:var(--accent); opacity:1; }
  #goods-dialog.is-cigarette .goods-dialog-copy h3 { margin:6px 0 7px; font-size:23px; line-height:1.25; }
  #goods-dialog.is-cigarette .goods-dialog-copy p { margin:7px 0; line-height:1.45; font-size:12px; }
  #goods-dialog.is-cigarette .goods-dialog-en { font-style:normal; }
  #goods-dialog.is-cigarette .goods-dialog-inner { gap:22px; }
  @media (max-width:650px) {
    #goods-dialog.is-cigarette .goods-dialog-inner { gap:12px; }
    #goods-dialog.is-cigarette .goods-dialog-copy h3 { font-size:21px; }
    .goods-cigarette-spec-value { font-size:13px; }
  }
`;
document.head.append(cigaretteStyle);


// TV anime appearance information belongs to the cigarette lineup only.
// Set this when the work's official page has been published (example: 'games.html#shigarl').
// Leave blank until the real destination exists; no placeholder link is clickable.

const SHIGARL_OFFICIAL_URL = 'https://unityroom.com/games/supatto-cigirls';

const shigarlStyle = document.createElement('style');
shigarlStyle.textContent = `
  .goods-media-information { padding: 13px 0 14px; margin: -6px 0 23px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .goods-media-information-label { display:block; color:var(--accent); font-size:10px; letter-spacing:.12em; margin-bottom:5px; }
  .goods-media-information-title { font-size:15px; line-height:1.5; font-weight:bold; margin:0 0 5px; }
  .goods-media-information-copy { font-size:12px; line-height:1.7; margin:0; }
  .goods-media-information-link { display:inline-block; margin-top:6px; color:var(--text); font-size:12px; text-decoration:underline; text-underline-offset:3px; }
  .goods-media-information-link:hover { color:var(--accent); }
  .goods-media-information-pending { display:block; font-size:11px; margin-top:6px; opacity:.65; }
  #cigarette-grid .goods-featured-note { display:block; border-top:1px solid var(--line); padding-top:7px; margin-top:9px; font-size:11px; color:var(--accent); line-height:1.5; }
`;
document.head.append(shigarlStyle);

// Keep media information in the listing so the product detail modal stays compact.
const cigaretteGrid = document.getElementById('cigarette-grid');
if (cigaretteGrid) {
  const mediaInformation = document.createElement('aside');
  mediaInformation.className = 'goods-media-information';
  mediaInformation.setAttribute('aria-label', 'メディア掲載情報');

  const label = document.createElement('span');
  label.className = 'goods-media-information-label';
  label.textContent = 'MEDIA INFORMATION';

  const title = document.createElement('p');
  title.className = 'goods-media-information-title';
  title.textContent = 'TVアニメ『スパっと！シがーる』登場銘柄のご案内';

  const description = document.createElement('p');
  description.className = 'goods-media-information-copy';
  description.textContent = '本ラインアップの一部銘柄が、TVアニメ『スパっと！シがーる』の作中に登場しています。各商品の愛用キャラクターは、以下の商品一覧をご覧ください。';

mediaInformation.append(label, title, description);

if (SHIGARL_OFFICIAL_URL.trim()) {
  const officialLink = document.createElement('a');
  officialLink.className = 'goods-media-information-link';
  officialLink.href = SHIGARL_OFFICIAL_URL;

  // 別タブで開く
  officialLink.target = '_blank';
  officialLink.rel = 'noopener noreferrer';

  officialLink.textContent = '『スパっと！シがーる』公式ページ →';
  mediaInformation.append(officialLink);
} else {
    const pending = document.createElement('span');
    pending.className = 'goods-media-information-pending';
    pending.textContent = '『スパっと！シがーる』公式ページ：準備中';
    mediaInformation.append(pending);
  }
  cigaretteGrid.before(mediaInformation);
}
const cigaretteDetails = document.createElement('div');
cigaretteDetails.className = 'goods-cigarette-details';
// Place specifications after the product title; HTML edits are unnecessary.
dialogName.insertAdjacentElement('afterend', cigaretteDetails);

function renderCigaretteDetails(product) {
  cigaretteDetails.replaceChildren();
  if (product.category !== 'cigarettes') {
    cigaretteDetails.hidden = true;
    dialog.classList.remove('is-cigarette');
    return;
  }
  cigaretteDetails.hidden = false;
  dialog.classList.add('is-cigarette');

  const type = document.createElement('div');
  type.className = 'goods-cigarette-type';
  type.textContent = `${product.type} / ${product.format}`;
  cigaretteDetails.append(type);

  const specs = document.createElement('div');
  specs.className = 'goods-cigarette-specs';
  for (const [label, value] of [
    ['TAR', `${product.tar}mg`],
    ['NICOTINE', `${product.nicotine}mg`],
    ['CONTENTS', `${product.contents}本`],
    ['PRICE', `${product.price}G`]
  ]) {
    const spec = document.createElement('div');
    spec.className = 'goods-cigarette-spec';
    const l = document.createElement('span');
    l.className = 'goods-cigarette-spec-label';
    l.textContent = label;
    const v = document.createElement('strong');
    v.className = 'goods-cigarette-spec-value';
    v.textContent = value;
    spec.append(l, v);
    specs.append(spec);
  }
  cigaretteDetails.append(specs);

  const tasteTitle = document.createElement('div');
  tasteTitle.className = 'goods-cigarette-taste-title';
  tasteTitle.textContent = 'TASTE PROFILE';
  cigaretteDetails.append(tasteTitle);
  for (const [label, value] of [
    ['コク', product.taste.body],
    ['香り', product.taste.aroma],
    ['キレ', product.taste.sharp]
  ]) {
    const row = document.createElement('div');
    row.className = 'goods-cigarette-taste-row';
    row.setAttribute('aria-label', `${label}: ${value} / 5`);
    const name = document.createElement('span');
    name.className = 'goods-cigarette-taste-label';
    name.textContent = label;
    const meter = document.createElement('span');
    meter.className = 'goods-cigarette-taste-meter';
    meter.setAttribute('aria-hidden', 'true');
    for (let i = 1; i <= 5; i++) {
      const cell = document.createElement('span');
      cell.className = 'goods-cigarette-taste-cell';
      if (i <= value) cell.classList.add('is-on');
      meter.append(cell);
    }
    const count = document.createElement('span');
    count.className = 'goods-cigarette-taste-score';
    count.textContent = `${value}/5`;
    row.append(name, meter, count);
    cigaretteDetails.append(row);
  }
}

// Preserve the line breaks in the product copy without requiring a CSS change.
dialogEn.style.whiteSpace = 'pre-line';
dialogJa.style.whiteSpace = 'pre-line';

function makeVisual(product) {
  if (product.image) {
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    img.loading = 'lazy';
    return img;
  }
  const placeholder = document.createElement('span');
  placeholder.className = 'goods-placeholder';
  placeholder.textContent = 'IMAGE COMING SOON';
  return placeholder;
}

function showProduct(product) {
  dialogVisual.replaceChildren(makeVisual(product));
  dialogName.textContent = product.name;
  dialogKind.textContent = product.category === 'drinks' ? 'FICTIONAL DRINK' : 'FICTIONAL CIGARETTE';
  renderCigaretteDetails(product);
  // Collapse blank lines so drinks retain the compact modal layout.
  dialogEn.textContent = product.en ? product.en.trim().replace(/\n\s*\n/g, '\n') : 'Description coming soon.';
  dialogJa.textContent = product.ja ? product.ja.trim().replace(/\n\s*\n/g, '\n') : '商品説明は準備中です。';
  dialog.showModal();
}

for (const product of products) {
  const grid = document.getElementById(product.category === 'drinks' ? 'drink-grid' : 'cigarette-grid');
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'goods-card';
  const art = document.createElement('div');
  art.className = 'goods-art';
  art.append(makeVisual(product));
  const title = document.createElement('h4');
  title.textContent = product.name;
  const subtitle = document.createElement('p');
  subtitle.textContent = product.tagline || product.en || 'View package details';
  card.append(art, title, subtitle);
  // Only the five known in-story favorites receive a subtle listing note.
  if (product.category === 'cigarettes' && product.featuredBy) {
    const featureNote = document.createElement('small');
    featureNote.className = 'goods-featured-note';
    featureNote.textContent = `作中愛用キャラクター：${product.featuredBy}`;
    card.append(featureNote);
  }
  card.addEventListener('click', () => showProduct(product));
  grid.append(card);
}

for (const button of document.querySelectorAll('.goods-filter')) {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    for (const other of document.querySelectorAll('.goods-filter')) {
      const active = other === button;
      other.classList.toggle('active', active);
      other.setAttribute('aria-pressed', String(active));
    }
    for (const section of document.querySelectorAll('.goods-category')) {
      section.hidden = filter !== 'all' && section.dataset.category !== filter;
    }
  });
}

document.getElementById('dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
