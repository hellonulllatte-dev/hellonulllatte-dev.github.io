(() => {
  'use strict';

  const games = [
    {
      id: 'silver-vine-winery', title: 'SILVER VINE WINERY', image: 'images/winery.png', imageAlt: 'Silver Vine Winery',
      description: { ja: '小さくて居心地のよいワイナリー。', en: 'A tiny, cozy winery.' },
      flavors: ['pixel'],
      links: [
        { provider: 'unityroom', href: 'https://unityroom.com/games/matatabi-winery', label: 'unityroom ↗', platforms: [] },
        { provider: 'itch.io', href: 'https://nulllatte.itch.io/silver-vine-winery', label: 'itch.io ↗', platforms: [] }
      ], releaseDate: '2026-10-28', displayOrder: 1,
      devNote: {
        ja: [],
        en: []
      }
    },
    {
      id: 'oneesan-still-sleeping', title: 'お姉さん、まだ寝てて。', image: 'images/ragna.png', imageAlt: 'お姉さん、まだ寝てて。',
      description: { ja: '彼女を起こさないよう、静かに朝食を作ろう！', en: "Make breakfast quietly. Don't wake her up!" },
      flavors: ['pixel-illustration'],
      links: [
        { provider: 'unityroom', href: 'https://unityroom.com/games/oneesan-still-sleeping', label: 'unityroom · Mobile ↗', platforms: ['Mobile'] },
        { provider: 'itch.io', href: 'https://nulllatte.itch.io/oneesan-still-sleeping', label: 'itch.io · PC ↗', platforms: ['PC'] },
        { provider: 'media-kit', href: 'media-kits/ragna.zip', label: 'MEDIA KIT ↓', platforms: [] }
      ], releaseDate: '2026-10-16', displayOrder: 2
    },
    {
      id: 'yamakan-akuma', title: 'ヤマカンアクマ', image: 'images/yamakan.png', imageAlt: 'ヤマカンアクマ',
      description: { ja: '勉強するか、休むか、それとも悪魔の予想を信じるか。', en: "Study, rest, or trust a demon's predictions." },
      flavors: ['digital-illustration'],
      links: [
        { provider: 'unityroom', href: 'https://unityroom.com/games/yamakan-akuma', label: 'unityroom ↗', platforms: [] },
        { provider: 'itch.io', href: 'https://nulllatte.itch.io/yamakan-akuma', label: 'itch.io ↗', platforms: [] }
      ], releaseDate: '2026-10-12', displayOrder: 3
    },
    {
      id: 'censor-valentine', title: '検閲♡おしおきバレンタイン', image: 'images/oshioki.png', imageAlt: '検閲♡おしおきバレンタイン',
      description: { ja: '不機嫌なメイド少年の苦情を、かわいいミュージックビデオの中で検閲しよう。', en: "Censor a grumpy maid boy's complaints in a cute music video." },
      flavors: ['typography'],
      links: [
        { provider: 'unityroom', href: 'https://unityroom.com/games/censor-valentine', label: 'unityroom ↗', platforms: [] },
        { provider: 'media-kit', href: 'media-kits/kujou.zip', label: 'MEDIA KIT ↓', platforms: [] }
      ],
      releaseDate: '2026-11-04', displayOrder: 4
    },
    {
      id: 'wake-me-not', title: 'WAKE ME NOT', image: 'images/wake_me_not.png', imageAlt: 'WAKE ME NOT',
      description: { ja: '夕暮れの駅を舞台にした、小さく不穏な3Dアドベンチャー。', en: 'A tiny, unsettling 3D adventure at a sunset train station.' },
      flavors: ['3d'],
      links: [{ provider: 'unityroom', href: 'https://unityroom.com/games/wake-me-not', label: 'unityroom ↗', platforms: [] }],
      releaseDate: '2026-10-13', displayOrder: 5
    },
    {
      id: 'tsuitayo-shita-3punne', title: '着いたよ。下。三分ね。', image: 'images/3min.png', imageAlt: '着いたよ。下。三分ね。',
      description: { ja: '着替えるまであと3分。彼女は下で待っている。', en: "Three minutes to get dressed. She's waiting downstairs." },
      flavors: ['pixel-illustration'],
      links: [{ provider: 'unityroom', href: 'https://unityroom.com/games/tsuitayo-shita-3punne', label: 'unityroom · Mobile ↗', platforms: ['Mobile'] }],
      releaseDate: '2026-11-12', displayOrder: 6
    },
    {
      id: 'dareda', title: 'だーれだ？', image: 'images/da-reda.png', imageAlt: 'だーれだ？',
      description: { ja: '10人の女の子、ひとつの目隠し。からかっているのは誰？', en: "Ten girls. One blindfold. Guess who's there." },
      flavors: ['typography'],
      links: [{ provider: 'unityroom', href: 'https://unityroom.com/games/dareda', label: 'unityroom · PC ↗', platforms: ['PC'] }],
      releaseDate: '2026-11-01', displayOrder: 7
    },
    {
      id: 'koyoi-kimi-wo-ubaimashou', title: '今宵、君を奪いましょう♡', image: 'images/alba.png', imageAlt: '今宵、君を奪いましょう♡',
      description: { ja: '魅力的な怪盗と謎の黒猫、そして夜へのラブレター。', en: 'A charming thief, a mysterious black cat, and a love letter to the night.' },
      flavors: ['pixel', 'pixel-illustration'],
      links: [
        { provider: 'unityroom', href: 'https://unityroom.com/games/koyoi-kimi-wo-ubaimashou', label: 'unityroom ↗', platforms: [] },
        { provider: 'media-kit', href: 'media-kits/alba.zip', label: 'MEDIA KIT ↓', platforms: [] }
      ],
      releaseDate: '2026-11-23', displayOrder: 8
    },
    {
      id: 'bunny-bar-diorama', title: 'BUNNY BAR DIORAMA', image: 'images/bunny_bar.png', imageAlt: 'Bunny Bar Diorama',
      description: { ja: 'それぞれの夜が流れる小さなバニーバー。座って眺めてみよう。', en: 'A tiny bunny bar where everyone goes about their evening. Sit back and watch.' },
      flavors: ['pixel'],
      links: [{ provider: 'itch.io', href: 'https://nulllatte.itch.io/bunny-bar-diorama', label: 'itch.io ↗', platforms: [] }],
      releaseDate: '2026-11-08', displayOrder: 9
    },
    {
      id: 'supatto-cigirls', title: 'スパっと！シがーる', image: 'images/cigirl.png', imageAlt: 'スパっと！シがーる',
      description: { ja: '猫耳メイド5人、揺れ動く意見、そしてランチの決断。ベン図で遊ぶパズル！', en: 'Five cat-eared maids, shifting opinions, and one lunch decision. A playful Venn diagram puzzle!' },
      flavors: ['digital-illustration'],
      links: [
        { provider: 'unityroom', href: 'https://unityroom.com/games/supatto-cigirls', label: 'unityroom ↗', platforms: [] },
        { provider: 'special-site', href: 'special/shigaaru-special.html', label: 'SPECIAL SITE ↗', platforms: [] }
      ],
      releaseDate: '2026-11-20', displayOrder: 10
    },
    {
      id: 'churyaku-collab-cafe', title: '中略！コラボカフェ', image: 'images/cigirl_cafe.png', imageAlt: '中略！コラボカフェ',
      description: { ja: '猫耳メイド5人と、ひとつのコラボカフェ。小さく楽しいクロスオーバー！', en: 'Five cat-eared maids, one collaboration café. A playful little crossover!' },
      flavors: ['digital-illustration'],
      links: [
        { provider: 'unityroom', href: 'https://unityroom.com/games/churyaku-collab-cafe', label: 'unityroom ↗', platforms: [] },
        { provider: 'special-site', href: 'special/collab-cafe-special.html', label: 'SPECIAL SITE ↗', platforms: [] }
      ],
      releaseDate: '2026-11-17', displayOrder: 11
    },
    {
      id: 'wordland', title: 'ワードランド診断', image: 'images/wordland.png', imageAlt: 'ワードランド診断',
      description: { ja: 'あなたの言葉は、どんな遊園地の乗り物？', en: 'What kind of amusement park ride are your words?' },
      flavors: ['typography'],
      links: [{ provider: 'unityroom', href: 'https://unityroom.com/games/wordland', label: 'unityroom ↗', platforms: [] }],
      releaseDate: '2026-11-11', displayOrder: 12
    },
    {
      id: 'why-cant-i-run', title: "WHY CAN'T I RUN?!", image: 'images/why_can_i_run.png', imageAlt: "WHY CAN'T I RUN?!",
      description: { ja: '何かに追われて全力で走っている。それなのに、どうして速く走れない？！', en: "Something's chasing you. You're running as fast as you can. Why can't you run faster?!" },
      flavors: ['pixel'],
      links: [{ provider: 'itch.io', href: 'https://nulllatte.itch.io/why-cant-i-run', label: 'itch.io ↗', platforms: [] }],
      releaseDate: '2026-10-30', displayOrder: 13,
      jam: { name: "SlapJam AI #2", url: null}
    },
    {
      id: 'i-just-want-to-make-a-small-game', title: '小さなゲームをつくりたい', image: 'images/plune.png', imageAlt: '小さなゲームをつくりたい',
      description: { ja: '規模を削って、かわいさは残す。小さなゲームを作る、小さなゲーム。', en: 'Cut the scope. Keep the cute. A tiny game about making a tiny game.' },
      flavors: ['pixel-illustration'],
      links: [
        { provider: 'unityroom', href: 'https://unityroom.com/games/prune', label: 'unityroom ↗', platforms: [] },
        { provider: 'itch.io', href: 'https://nulllatte.itch.io/i-just-want-to-make-a-small-game', label: 'itch.io ↗', platforms: [] }
      ], releaseDate: '2026-10-25', displayOrder: 14
    },
    {
      id: 'mada-shimenaide', title: 'まだ閉めないで、店主様！', image: 'images/mada_shimenaide.png', imageAlt: 'まだ閉めないで、店主様！',
      description: { ja: '小さなスコアアタックで、お店をもう少しだけ開けておこう。', en: 'Keep the shop open just a little longer in this tiny score-attack game.' },
      flavors: ['pixel-illustration'],
      links: [{ provider: 'unityroom', href: 'https://unityroom.com/games/mada-shimenaide', label: 'unityroom ↗', platforms: [] }],
      releaseDate: '2026-10-21', displayOrder: 15
    },
    {
      id: 'futamoji-mitsuge', title: 'ふた文字、貢げ！', image: 'images/futamoji.png', imageAlt: 'ふた文字、貢げ！',
      description: { ja: '要求の多い悪魔の少女に、ひらがな二文字を捧げよう。反応を見届けて！', en: 'Offer two hiragana characters to a demanding demon girl. See how she reacts!' },
      flavors: ['pixel-illustration'],
      links: [
        { provider: 'unityroom', href: 'https://unityroom.com/games/futamoji-mitsuge', label: 'unityroom ↗', platforms: [] },
        { provider: 'media-kit', href: 'media-kits/futamoji.zip', label: 'MEDIA KIT ↓', platforms: [] }
      ],
      releaseDate: '2026-10-27', displayOrder: 16
    },
    {
      id: 'clunk-or-pass', title: 'CLUNK OR PASS!', image: 'images/clunk-or-pass.png', imageAlt: 'CLUNK OR PASS!',
      description: { ja: 'また勤務、また箱。何かがおかしい。', en: "Another shift. Another box. Something doesn't look right." },
      flavors: ['pixel'],
      links: [{ provider: 'itch.io', href: 'https://nulllatte.itch.io/clunk-or-pass', label: 'itch.io ↗', platforms: [] }],
      releaseDate: '2026-10-24', displayOrder: 17
    },
    {
      id: 'last-one', title: 'LAST ONE', image: 'images/LAST_ONE.png', imageAlt: 'LAST ONE',
      description: { ja: 'バッテリーはひとつ。最後の選択もひとつ。', en: 'One battery. One final choice.' },
      flavors: ['pixel'],
      links: [{ provider: 'itch.io', href: 'https://nulllatte.itch.io/last-one', label: 'itch.io ↗', platforms: [] }],
      releaseDate: '2026-10-24', displayOrder: 18
    },
    {
      id: 'gyutto-call', title: 'ぎゅーっとコール！', image: 'images/cast_sena.png', imageAlt: 'ぎゅーっとコール！',
      description: { ja: 'コールで彼女を応援し、ライブを盛り上げよう！', en: 'Cheer her on and bring the concert to life with your calls!' },
      flavors: ['pixel-illustration', 'typography'],
      links: [{ provider: 'unityroom', href: 'https://unityroom.com/games/gyutto-call', label: 'unityroom ↗', platforms: [] }],
      releaseDate: '2026-11-15', displayOrder: 19
    },
    {
      id: 'heart-question', title: '♡？', image: 'images/heart-question.png', imageAlt: '♡？',
      description: { ja: '曇った窓の向こうに誰かがいる。ノック、ノック。声をかけてみない？', en: 'Someone is behind a foggy window. Knock, knock. Why not say hello?' },
      flavors: ['pixel-illustration'],
      links: [{ provider: 'unityroom', href: 'https://unityroom.com/games/heart-question', label: 'unityroom ↗', platforms: [] }],
      releaseDate: '2026-11-13', displayOrder: 20
    }
  ];

  window.NULLLATTE_GAMES = Object.freeze(games.map(game => Object.freeze(game)));
})();
