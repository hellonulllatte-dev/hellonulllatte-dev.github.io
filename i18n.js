(() => {
  'use strict';

  const STORAGE_KEY = 'nulllatte-language';
  const translations = new Map();
  const add = (ja, en) => translations.set(ja, en);

  // Shared navigation and page furniture.
  add('Home', 'Home'); add('Games', 'Games'); add('Cast', 'Cast'); add('Devlog', 'Devlog');
  add('About', 'About'); add('Gallery', 'Gallery'); add('GALLERY', 'GALLERY'); add('PLAYGROUND', 'PLAYGROUND');
  add('Little games, made with care.', 'Little games, made with care.');
  add('© NULLLATTE — Made with care.', '© NULLLATTE — Made with care.');
  add('ホーム', 'Home'); add('ゲーム', 'Games'); add('キャスト', 'Cast'); add('開発記録', 'Devlog'); add('このサイトについて', 'About'); add('ギャラリー', 'Gallery');
  add('小さなゲームを、心を込めて。', 'Little games, made with care.'); add('© NULLLATTE — 心を込めて制作しています。', '© NULLLATTE — Made with care.');
  add('湯気の立つコーヒーカップ', 'Steaming coffee cup');
  add('Main navigation', 'Main navigation');

  // Home, games, about.
  add('Featured Games', 'Featured Games'); add('注目のゲーム', 'Featured Games');
  add('A tiny, cozy winery.', 'A tiny, cozy winery.'); add('小さくて居心地のよいワイナリー。', 'A tiny, cozy winery.');
  add("Make breakfast quietly. Don't wake her up!", "Make breakfast quietly. Don't wake her up!");
  add('彼女を起こさないよう、静かに朝食を作ろう！', "Make breakfast quietly. Don't wake her up!");
  add('What kind of amusement park ride are your words?', 'What kind of amusement park ride are your words?');
  add('あなたの言葉は、どんな遊園地の乗り物？', 'What kind of amusement park ride are your words?');
  add('View All Games →', 'View All Games →'); add('すべてのゲームを見る →', 'View All Games →');
  add('Latest Devlog', 'Latest Devlog'); add('最新の開発記録', 'Latest Devlog');
  add('View All Posts →', 'View All Posts →'); add('すべての記事を見る →', 'View All Posts →');
  add('小さなゲームを個人制作しています。 ドット絵やイラストを描いたり、 ちょっと変わった遊びを考えたりしています。', 'I make small games on my own. I draw pixel art and illustrations, and dream up slightly unusual ways to play.');
  add('My Games', 'My Games'); add('ゲーム一覧', 'My Games'); add('All', 'All'); add('すべて', 'All');
  add('Pixel Art', 'Pixel Art'); add('ドット絵', 'Pixel Art'); add('Pixel Illustration', 'Pixel Illustration'); add('ドットイラスト', 'Pixel Illustration');
  add('Digital Illustration', 'Digital Illustration'); add('デジタルイラスト', 'Digital Illustration'); add('Typography', 'Typography'); add('タイポグラフィ', 'Typography');
  add('A tiny, unsettling 3D adventure at a sunset train station.', 'A tiny, unsettling 3D adventure at a sunset train station.');
  add('夕暮れの駅を舞台にした、小さく不穏な3Dアドベンチャー。', 'A tiny, unsettling 3D adventure at a sunset train station.');
  add('勉強するか、休むか、それとも悪魔の予想を信じるか。', "Study, rest, or trust a demon's predictions.");
  add('不機嫌なメイド少年の苦情を、かわいいミュージックビデオの中で検閲しよう。', "Censor a grumpy maid boy's complaints in a cute music video.");
  add("Three minutes to get dressed. She's waiting downstairs.", "Three minutes to get dressed. She's waiting downstairs.");
  add('着替えるまであと3分。彼女は下で待っている。', "Three minutes to get dressed. She's waiting downstairs.");
  add("Ten girls. One blindfold. Guess who's teasing you.", "Ten girls. One blindfold. Guess who's there.");
  add('10人の女の子、ひとつの目隠し。からかっているのは誰？', "Ten girls. One blindfold. Guess who's there.");
  add("A charming thief, a mysterious black cat, and a love letter to the night.", "A charming thief, a mysterious black cat, and a love letter to the night.");
  add('魅力的な怪盗と謎の黒猫、そして夜へのラブレター。', "A charming thief, a mysterious black cat, and a love letter to the night.");
  add('A tiny bunny bar where everyone goes about their evening. Sit back and watch.', 'A tiny bunny bar where everyone goes about their evening. Sit back and watch.');
  add('それぞれの夜が流れる小さなバニーバー。座って眺めてみよう。', 'A tiny bunny bar where everyone goes about their evening. Sit back and watch.');
  add('Five cat-eared maids, shifting opinions, and one lunch decision. A playful Venn diagram puzzle!', 'Five cat-eared maids, shifting opinions, and one lunch decision. A playful Venn diagram puzzle!');
  add('猫耳メイド5人、揺れ動く意見、そしてランチの決断。ベン図で遊ぶパズル！', 'Five cat-eared maids, shifting opinions, and one lunch decision. A playful Venn diagram puzzle!');
  add('Five cat-eared maids, one collaboration café. A playful little crossover!', 'Five cat-eared maids, one collaboration café. A playful little crossover!');
  add('猫耳メイド5人と、ひとつのコラボカフェ。小さく楽しいクロスオーバー！', 'Five cat-eared maids, one collaboration café. A playful little crossover!');
  add("Something's chasing you. You're running as fast as you can. Why can't you run faster?!", "Something's chasing you. You're running as fast as you can. Why can't you run faster?!");
  add('何かに追われて全力で走っている。それなのに、どうして速く走れない？！', "Something's chasing you. You're running as fast as you can. Why can't you run faster?!");
  add('Cut the scope. Keep the cute. A tiny game about making a tiny game.', 'Cut the scope. Keep the cute. A tiny game about making a tiny game.');
  add('規模を削って、かわいさは残す。小さなゲームを作る、小さなゲーム。', 'Cut the scope. Keep the cute. A tiny game about making a tiny game.');
  add('Keep the shop open just a little longer in this tiny score-attack game.', 'Keep the shop open just a little longer in this tiny score-attack game.');
  add('小さなスコアアタックで、お店をもう少しだけ開けておこう。', 'Keep the shop open just a little longer in this tiny score-attack game.');
  add('Offer two hiragana characters to a demanding demon girl. See how she reacts!', 'Offer two hiragana characters to a demanding demon girl. See how she reacts!');
  add('要求の多い悪魔の少女に、ひらがな二文字を捧げよう。反応を見届けて！', 'Offer two hiragana characters to a demanding demon girl. See how she reacts!');
  add("Another shift. Another box. Something doesn't look right.", "Another shift. Another box. Something doesn't look right.");
  add('また勤務、また箱。何かがおかしい。', "Another shift. Another box. Something doesn't look right.");
  add('One battery. One final choice.', 'One battery. One final choice.'); add('バッテリーはひとつ。最後の選択もひとつ。', 'One battery. One final choice.');
  add('Cheer her on and bring the concert to life with your calls!', 'Cheer her on and bring the concert to life with your calls!');
  add('コールで彼女を応援し、ライブを盛り上げよう！', 'Cheer her on and bring the concert to life with your calls!');
  add('Someone is behind a foggy window. Knock, knock. Why not say hello?', 'Someone is behind a foggy window. Knock, knock. Why not say hello?');
  add('曇った窓の向こうに誰かがいる。ノック、ノック。声をかけてみない？', 'Someone is behind a foggy window. Knock, knock. Why not say hello?');
  add('過去作品は少しずつ追加していきます。', 'More past works will be added over time.');
  add('More past works will be added over time.', 'More past works will be added over time.');
  add('A little about me.', 'A little about me.'); add('自己紹介', 'A little about me.');
  add('ぬるらて / Indie Game Developer', 'NULLLATTE / Indie Game Developer');
  add('小さなゲームを個人制作しています。', 'I make small games on my own.');
  add('ドット絵を描いたり、イラストを描いたり、', 'I draw pixel art and illustrations,');
  add('ちょっと変わった遊びを考えたりしています。', 'and dream up slightly unusual ways to play.');
  add('小さなゲームを個人制作しています。 ドット絵を描いたり、イラストを描いたり、 ちょっと変わった遊びを考えたりしています。', 'I make small games on my own. I draw pixel art and illustrations, and dream up slightly unusual ways to play.');
  add('Tools', 'Tools'); add('制作ツール', 'Tools'); add('Find me at', 'Find me at'); add('リンク', 'Find me at');

  // Cast and devlog.
  add('Meet the Cast', 'Meet the Cast'); add('キャラクター紹介', 'Meet the Cast');
  add('The faces of NULLLATTE.', 'The faces of NULLLATTE.'); add('NULLLATTEの登場人物たち。', 'The faces of NULLLATTE.');
  add('お姉さん', 'Ladies'); add('Ladies', 'Ladies'); add('それ以外', 'Others'); add('Others', 'Others');
  add('And more to come...', 'And more to come...'); add('まだまだ増えます…', 'And more to come...');
  add('ほかのキャラクターも少しずつ追加していきます。', 'More characters will be added over time.');
  add('More characters will be added over time.', 'More characters will be added over time.'); add('APPEARS IN', 'APPEARS IN'); add('登場作品', 'APPEARS IN');
  add('趣味は競馬', 'Horse racing is his hobby.'); add('外車で唐突にやってきて、連れ出してくれるお姉さん。', 'A confident woman who shows up out of nowhere in a foreign car and takes you out for a drive.');
  add('ヒモを甘やかしているお姉さん。', 'A woman who spoils her freeloading partner.'); add('苦情ばかり言っている', 'Always complaining.');
  add('二文字の貢物を毎日要求してくる悪魔。', 'A demon who demands a two-character offering every day.');
  add('二文字の貢物を毎日要求してくる悪魔の妹。', 'A little devil who demands two-character offerings every day.');

  add('美しいものなら節操なく口説く怪盗。白薔薇が好きなキザなお姉さん。', 'A dashing lady thief who shamelessly flirts with anyone or anything beautiful. She loves white roses.');
  add('Bunny Barの常連。百合ハーレムの女王。', 'A Bunny Bar regular and queen of a yuri harem.');
  add('3人組アイドルユニットWHITEの青担当のお姉さん。', 'The blue member of the three-person idol unit WHITE.');
  add('Notes from the kitchen.', 'Notes from the kitchen.'); add('制作の舞台裏。', 'Notes from the kitchen.');
  add('PLAYGROUNDを公開しました！', 'PLAYGROUND is now open!');
  add('ちいさな遊びと実験を集めるPLAYGROUNDを追加しました。効果音や会話送りアイコンを作れるWeb Toyを3つ公開中。無料で遊べます！', 'PLAYGROUND, a collection of small toys and experiments, is now open. Three free Web Toys for making sound effects and dialogue icons are available!');
  add('CASTページ制作中！', 'CAST page in progress!');
  add('キャラクターを並べるページを作っています。分類は「お姉さん」と「それ以外」。', 'I am building a page for the cast, divided into “Ladies” and “Others.”');
  add('キャラクターを並べるページを作っています。 分類は「お姉さん」と「それ以外」。', 'I am building a page for the cast, divided into “Ladies” and “Others.”');
  add('Slapjam #2 初参加・制作振り返り', 'My First Slapjam #2: A Postmortem');
  add('初めて海外の48時間ゲームジャムに参加！『WHY CAN’T I RUN?!』の制作と、結果発表、そして反省点を振り返りました。', 'My first international 48-hour game jam: a look back at making WHY CAN’T I RUN?!, the results, and what I learned.');
  add("初めて海外の48時間ゲームジャムに参加！『WHY CAN'T I RUN?!』の制作と、結果発表、そして反省点を振り返りました。", "My first international 48-hour game jam: a look back at making WHY CAN'T I RUN?!, the results, and what I learned.");
  add('Explore →', 'Explore →'); add('遊んでみる →', 'Explore →'); add('Read more →', 'Read more →'); add('続きを読む →', 'Read more →');

  // Devlog article: Slapjam #2.
  add('初めて海外の48時間ゲームジャム', 'I joined an international 48-hour game jam,'); add('「Slapjam #2」', '“Slapjam #2,”'); add('に参加しました！', 'for the first time!');
  add('テーマは', 'The theme was'); add('制作したのは『WHY CAN’T I RUN?!』。', 'I made WHY CAN’T I RUN?!'); add("制作したのは『WHY CAN'T I RUN?!』。", "I made WHY CAN'T I RUN?!");
  add('何かに追いかけられているのに、思うように走れない。', 'Something is chasing you, but you cannot run the way you want.');
  add('そんな夢の中の嫌な感覚をゲームにした作品です。', 'The game turns that awful feeling from a dream into an experience.');
  add('何かに追いかけられているのに、思うように走れない。 そんな夢の中の嫌な感覚をゲームにした作品です。', 'Something is chasing you, but you cannot run the way you want. The game turns that awful feeling from a dream into an experience.');
  add('走りたいのに、走れない。', 'You want to run, but you cannot.'); add('悪夢を体験する短編ゲーム。', 'A short game about experiencing a nightmare.');
  add('走れない夢をゲームにしたかった', 'I wanted to turn the dream of not being able to run into a game');
  add('夢の中で必死に逃げようとしているのに、なぜか足が遅い。', 'In a dream, you are desperately trying to escape, but somehow your legs are slow.');
  add('うまく動けない。', 'You cannot move properly.');
  add('夢の中で必死に逃げようとしているのに、なぜか足が遅い。 うまく動けない。', 'In a dream, you are desperately trying to escape, but somehow your legs are slow. You cannot move properly.');
  add('あの感覚を再現したくて、操作の不自由さや、不安定な映像、', 'To recreate that feeling, I used awkward controls, unstable visuals,');
  add('耳障りな音などを盛り込みました。', 'and grating sounds.');
  add('あの感覚を再現したくて、操作の不自由さや、不安定な映像、 耳障りな音などを盛り込みました。', 'To recreate that feeling, I used awkward controls, unstable visuals, and grating sounds.');
  add('特に音については、頭がおかしくなりそうな不快な音を延々と流すという、', 'In particular, I made the game play a harsh, almost maddening sound on a loop—');
  add('なかなか容赦のない作りに。', 'a rather unforgiving design.'); add('悪夢なので。', 'Because it is a nightmare.');
  add('特に音については、頭がおかしくなりそうな不快な音を延々と流すという、 なかなか容赦のない作りに。', 'In particular, I made the game play a harsh, almost maddening sound on a loop—a rather unforgiving design.');
  add('48時間という制限の中でなんとか完成させ、', 'I somehow finished it within the 48-hour limit'); add('無事に提出できました。', 'and submitted it successfully.');
  add('48時間という制限の中でなんとか完成させ、 無事に提出できました。', 'I somehow finished it within the 48-hour limit and submitted it successfully.');
  add('結果発表！ ビジュアル48位', 'Results: 48th in Visual Appeal'); add('ジャムの結果はこちら。', 'Here are the jam results.');
  add('項目', 'Category'); add('順位', 'Rank'); add('スコア', 'Score'); add('48位', '48th'); add('111位', '111th'); add('137位', '137th'); add('139位', '139th');
  add('評価は4件。', 'The game received four ratings.'); add('何より嬉しかったのは、ビジュアル部門で48位になれたこと！', 'What pleased me most was placing 48th in Visual Appeal!');
  add('悪夢の雰囲気や画面の見せ方にはこだわったので、', 'I put a lot of care into the nightmare atmosphere and visual presentation,');
  add('そこが比較的高く評価されたのは素直に嬉しいです。', 'so I was genuinely happy that those aspects were rated relatively highly.');
  add('悪夢の雰囲気や画面の見せ方にはこだわったので、 そこが比較的高く評価されたのは素直に嬉しいです。', 'I put a lot of care into the nightmare atmosphere and visual presentation, so I was genuinely happy that those aspects were rated relatively highly.');
  add('一方で、面白さは139位。', 'On the other hand, Fun placed 139th.'); add('これについては、作った本人も納得するところがあります。', 'As its creator, I can understand why.');
  add('これはゲームというより映画だった', 'It was more like a film than a game');
  add('今回、一番優先したのは「夢の中で走れない不快感」を表現することでした。', 'My highest priority was expressing the discomfort of being unable to run in a dream.');
  add('でも、振り返ってみると、プレイヤーが工夫したり、', 'Looking back, however, I do not think I created enough room for the player to experiment');
  add('上達したりする楽しさは十分に作れていなかったと思います。', 'or enjoy improving their skill.');
  add('でも、振り返ってみると、プレイヤーが工夫したり、 上達したりする楽しさは十分に作れていなかったと思います。', 'Looking back, however, I do not think I created enough room for the player to experiment or enjoy improving their skill.');
  add('操作しづらいことには意味がある。', 'There is a reason the controls are difficult.'); add('でも、', 'But');
  add('操作しづらいこと自体が、ゲームとして面白いとは限らない。', 'difficult controls are not automatically fun as a game.');
  add('これは今回の大きな反省点です。', 'That was the biggest lesson from this project.');
  add('悪夢を体験してもらう作品にはなったけれど、', 'It became an experience that lets players enter a nightmare,'); add('ゲームとしての遊びの核はもっと考える必要がありました。', 'but its core as a game needed more thought.');
  add('悪夢を体験してもらう作品にはなったけれど、 ゲームとしての遊びの核はもっと考える必要がありました。', 'It became an experience that lets players enter a nightmare, but its core as a game needed more thought.');
  add('初めて届いた海外レビュー', 'My first international review'); add('そして、審査員から文章でのフィードバックもいただきました。', 'I also received written feedback from a judge.');
  add('音がめちゃくちゃ耳障り、とのこと。', 'They said the sound design was extremely annoying.'); add('……実は、それを狙って作っていました。', '…That was actually intentional.');
  add('なので、申し訳ない気持ちもありつつ、', 'So while I felt a little apologetic,'); add('ちょっと嬉しくなってしまいました。', 'I was also a little pleased.');
  add('なので、申し訳ない気持ちもありつつ、 ちょっと嬉しくなってしまいました。', 'So while I felt a little apologetic, I was also a little pleased.');
  add('もちろん、意図的な不快感と、', 'Of course, intentional discomfort'); add('プレイヤーが耐えられる不快感は別の話です。', 'and discomfort players can tolerate are different things.');
  add('もちろん、意図的な不快感と、 プレイヤーが耐えられる不快感は別の話です。', 'Of course, intentional discomfort and discomfort players can tolerate are different things.');
  add('演出として成功したとしても、', 'Even if it succeeds as presentation,'); add('ゲーム体験として快適かどうかは考えなければいけない。', 'I still need to consider whether the overall game experience is comfortable enough.');
  add('演出として成功したとしても、 ゲーム体験として快適かどうかは考えなければいけない。', 'Even if it succeeds as presentation, I still need to consider whether the overall game experience is comfortable enough.');
  add('次にこういう作品を作るなら、', 'If I make something like this again,'); add('音量調整くらいは用意しようと思います。笑', 'I’ll at least add a volume control next time. Haha.');
  add('次にこういう作品を作るなら、 音量調整くらいは用意しようと思います。笑', 'If I make something like this again, I’ll at least add a volume control next time. Haha.');
  add('参加してよかった！', 'I am glad I joined!'); add('今回のジャムで得られたのは、順位だけではありません。', 'The rankings were not the only thing I gained from this jam.');
  add('自分の作品を海外の人に遊んでもらい、評価してもらい、', 'People overseas played and rated my work,'); add('文章で感想をもらえたこと。', 'and I received their thoughts in writing.');
  add('自分の作品を海外の人に遊んでもらい、評価してもらい、 文章で感想をもらえたこと。', 'People overseas played and rated my work, and I received their thoughts in writing.');
  add('そして、自分が得意な部分と、', 'I also learned what I am good at'); add('まだ課題のある部分を知れたこと。', 'and where I still need to improve.');
  add('そして、自分が得意な部分と、 まだ課題のある部分を知れたこと。', 'I also learned what I am good at and where I still need to improve.');
  add('雰囲気を作る力と、ゲームとして面白くする力は', 'The ability to create atmosphere and the ability to make a game fun'); add('別々に磨く必要がある。', 'need to be developed separately.');
  add('雰囲気を作る力と、ゲームとして面白くする力は 別々に磨く必要がある。', 'The ability to create atmosphere and the ability to make a game fun need to be developed separately.');
  add('そんなことを実感した48時間でした。', 'Those 48 hours made that clear to me.'); add('初めての海外ジャム、参加してよかったです！', 'I am glad I joined my first international jam!');
  add('ちなみに、このジャムの期間中にもう一本、', 'Incidentally, during the same jam period,'); add('別のゲームも作っていました。', 'I was also making another game.');
  add('ちなみに、このジャムの期間中にもう一本、 別のゲームも作っていました。', 'Incidentally, during the same jam period, I was also making another game.');
  add('我ながら何をしていたんでしょうね。笑', 'I honestly do not know what I was thinking.'); add('次回は、雰囲気だけでなく、', 'Next time, beyond atmosphere,');
  add('操作すること自体が面白い作品も作ってみたいです。', 'I want to make something where the act of playing is fun in itself.');
  add('次回は、雰囲気だけでなく、 操作すること自体が面白い作品も作ってみたいです。', 'Next time, beyond atmosphere, I want to make something where the act of playing is fun in itself.');
  add('でも、また悪夢を作るとしたら、', 'But if I make another nightmare,'); add('きっと多少は耳障りな音を入れてしまうと思います。', 'I will probably still include at least a little unpleasant sound.');
  add('でも、また悪夢を作るとしたら、 きっと多少は耳障りな音を入れてしまうと思います。', 'But if I make another nightmare, I will probably still include at least a little unpleasant sound.');
  add('『WHY CAN’T I RUN?!』をプレイする ↗', 'Play WHY CAN’T I RUN?! ↗'); add("『WHY CAN'T I RUN?!』をプレイする ↗", "Play WHY CAN'T I RUN?! ↗");
  add('← Back to Devlog', '← Back to Devlog'); add('← 開発記録へ戻る', '← Back to Devlog');

  // Gallery and playground.
  add("Things that don't exist, lovingly packaged.", "Things that don't exist, lovingly packaged.");
  add('存在しない商品を、愛情を込めてパッケージしました。', "Things that don't exist, lovingly packaged.");
  add('存在しない商品の、小さなパッケージギャラリー。', 'A small gallery of packages for products that do not exist.');
  add('ALL', 'ALL'); add('CIGARETTES', 'CIGARETTES'); add('DRINKS', 'DRINKS'); add('FICTIONAL PACKAGES', 'FICTIONAL PACKAGES'); add('FICTIONAL CANS', 'FICTIONAL CANS');
  add('All products and brands shown here are fictional. / 掲載されている商品・ブランドは架空のものです。', 'All products and brands shown here are fictional.');
  add('掲載されている商品・ブランドはすべて架空のものです。', 'All products and brands shown here are fictional.');
  add('Filter products', 'Filter products'); add('商品を絞り込む', 'Filter products'); add('IMAGE COMING SOON', 'IMAGE COMING SOON'); add('画像準備中', 'IMAGE COMING SOON');
  add('メディア掲載情報', 'Media information'); add('TVアニメ『スパっと！シがーる』登場銘柄のご案内', 'Products Featured in the TV Anime “スパっと！シがーる”');
  add('本ラインアップの一部銘柄が、TVアニメ『スパっと！シがーる』の作中に登場しています。各商品の愛用キャラクターは、以下の商品一覧をご覧ください。', 'Some products in this lineup appear in the TV anime “スパっと！シがーる.” See the list below for the character associated with each product.');
  add('『スパっと！シがーる』公式ページ →', 'Official “スパっと！シがーる” page →');
  add('コク', 'Body'); add('香り', 'Aroma'); add('キレ', 'Sharpness'); add('本', ' sticks'); add('商品説明は準備中です。', 'Description coming soon.');
  add('Little toys to click, play, and tinker with.', 'Little toys to click, play, and tinker with.');
  add('クリックして、さわって、遊べる小さな実験室。', 'A small lab to click, touch, and play with.');
  add('FREE TO PLAY & USE', 'FREE TO PLAY & USE'); add('無料で遊んで使えます', 'FREE TO PLAY & USE');
  add('Play, customize, and use your creations in personal or commercial projects — for free. You may use and modify them in games, videos, and apps. Please do not redistribute or sell the assets on their own.', 'Play, customize, and use your creations in personal or commercial projects — for free. You may use and modify them in games, videos, and apps. Please do not redistribute or sell the assets on their own.');
  add('無料で遊べます。作成した素材は、個人・商用を問わず作品にご利用いただけます。 ゲーム・動画・アプリでの利用、加工、商用利用は自由です。素材単体での再配布・販売はご遠慮ください。', 'Play, customize, and use your creations in personal or commercial projects — for free. You may use and modify them in games, videos, and apps. Please do not redistribute or sell the assets on their own.');
  add('無料で遊べます。作成した素材は、個人・商用を問わず作品にご利用いただけます。', 'Play, customize, and use your creations in personal or commercial projects — for free.');
  add('ゲーム・動画・アプリでの利用、加工、商用利用は自由です。素材単体での再配布・販売はご遠慮ください。', 'You may use and modify them in games, videos, and apps. Please do not redistribute or sell the assets on their own.');
  add('Make tiny button sounds with six pixel mugs. Listen, tweak, and export WAV files.', 'Make tiny button sounds with six pixel mugs. Listen, tweak, and export WAV files.');
  add('6つのドット絵マグで小さなボタン音を作ろう。聴いて、調整して、WAVで保存できます。', 'Make tiny button sounds with six pixel mugs. Listen, tweak, and export WAV files.');
  add('さわって、おして、ながめて。', 'Touch, press, and watch.'); add('Touch, press, and watch.', 'Touch, press, and watch.');
  add('マグを押して、好きな「カチッ」をつくろう。', 'Press a mug and create your perfect click sound.');
  // MUG SE MAKER display labels only. The tool keeps its existing sound IDs and WAV filenames.
  add('カチッ', 'CLICK'); add('コクッ', 'TOK'); add('ポチッ', 'POP'); add('コンッ', 'KNOCK'); add('コトッ', 'TUK'); add('カタッ', 'CLACK');
  add('手ざわり', 'TEXTURE'); add('かたい', 'HARD'); add('やわらかい', 'SOFT'); add('ほどよい', 'MEDIUM'); add('カチカチ', 'CRISP'); add('ふわふわ', 'SOFT');
  add('音の高さ', 'PITCH'); add('低い', 'LOW'); add('高い', 'HIGH'); add('音の余韻', 'TAIL'); add('短い', 'SHORT'); add('ぷちっ', 'TIGHT'); add('ぽわん', 'LONG');
  add('ひくめ', 'LOW'); add('たかめ', 'HIGH'); add('長め', 'LONG');
  add('小さめ', 'QUIETER'); add('大きめ', 'LOUDER'); add('選んだマグの音がそのまま鳴るよ', 'The selected mug keeps its customized sound.');
  add('PLAYGROUND一覧に戻る', 'Back to PLAYGROUND'); add('音のオンオフ', 'Toggle sound'); add('選択中のマグの音を初期状態へ', 'Reset the selected mug sound');
  add('硬いから柔らかい', 'Hard to soft'); add('低いから高い', 'Low to high'); add('短いから長い', 'Short to long');
  add('生成した音の波形', 'Generated sound waveform'); add('棚2段。マグをドラッグし、各列に3個まで積み重ねられます', 'Two shelves. Drag mugs and stack up to three in each column.');
  add('WAVを書き出したよ', 'WAV exported.'); add('初期の音に戻したよ', 'Restored the original sound.');
  add('↓ WAV保存', '↓ SAVE WAV');
  add('さんかく', 'triangle'); add('ながさんかく', 'tall triangle'); add('ひらたさんかく', 'flat triangle'); add('なめらかさんかく', 'smooth triangle');
  add('なめらかながさんかく', 'smooth tall triangle'); add('なめらかひらたさんかく', 'smooth flat triangle'); add('しろさんかく', 'outline triangle');
  add('なめらかしろさんかく', 'smooth outline triangle'); add('やま', 'chevron'); add('なめらかやま', 'smooth chevron'); add('やじるし', 'arrow'); add('なめらかやじるし', 'smooth arrow');
  add('まる', 'circle'); add('なめらかまる', 'smooth circle'); add('しかく', 'square'); add('なめらかしかく', 'smooth square'); add('はーと', 'heart'); add('ほし', 'star'); add('ひしがた', 'diamond'); add('きらきら', 'sparkle');
  add('おす、なぞる、あそぶ。', 'Press, trace, and play.'); add('おす なぞる あそぶ。', 'Press, trace, and play.'); add('Press, trace, and play.', 'Press, trace, and play.');
  add('↑ HIGH / 高くなる', '↑ HIGH'); add('← SOFT / まるい　　SHARP / くっきり →', '← SOFT　　SHARP →'); add('↓ LOW / 低くなる', '↓ LOW');
  add('まんなか', 'CENTER'); add('ためす', 'PREVIEW'); add('WAV保存', 'SAVE WAV'); add('音の大きさ', 'VOLUME'); add('閉じる', 'Close');
  add('まんなか × ふつう', 'center × medium'); add('POYO / まんなか × ふつう', 'POYO / center × medium');
  add('♪ ぽぽぽぽ', '♪ PLAY SEQUENCE'); add('♪ まんなか', '♪ CENTER'); add('♪ ためす', '♪ PREVIEW');
  add('かなり高い', 'very high'); add('高め', 'high'); add('ふつう', 'medium'); add('低め', 'low'); add('かなり低い', 'very low');
  add('とてもまるい', 'very soft'); add('まるい', 'soft'); add('くっきり', 'sharp'); add('かなりくっきり', 'very sharp');
  add('ぷるん・ぽこん', 'bouncy and round'); add('ピッ・ピコッ', 'bright pixel beeps'); add('キンッ・チリン', 'clear metallic chimes'); add('ぶぶっ・ぼぼっ', 'low nasal buzzes');
  add('ぷるんと弾む、まるい音', 'A round, bouncy sound'); add('乾いた、8bitの電子音', 'A dry 8-bit electronic sound');
  add('きらっと響く、金属の音', 'A sparkling metallic sound'); add('低く鼻にかかった、ブーンと響く音', 'A low, nasal buzzing sound');
  add('向き', 'DIRECTION'); add('アイコン', 'ICON'); add('ふち・影', 'OUTLINE / SHADOW'); add('背景', 'BACKGROUND'); add('サイズ', 'SIZE'); add('動く速さ', 'SPEED');
  add('お持ち帰り', 'Download'); add('選択中のアイコンをお持ち帰り', 'Download the selected icon');
  add('ダウンロードありがとう！', 'Thanks for downloading!'); add('お持ち帰りありがとう！', 'Thanks for downloading!'); add('GIF出力でエラーが起きました。', 'An error occurred while exporting the GIF.');
  add('今の音をダウンロード', 'Download the current sound');
  add('MUG SE MAKERを開く', 'Open MUG SE MAKER'); add('カラフルなドット絵のマグカップが並ぶ MUG SE MAKER', 'MUG SE MAKER with colorful pixel-art mugs');
  add('NEXT MARK GALLERYを開く', 'Open NEXT MARK GALLERY'); add('POPOPO GRIDを開く', 'Open POPOPO GRID');
  add('小さな遊びを、少しずつ追加していきます。', 'More small toys will be added over time.');

  // Branding and navigation stay in English in both JP and EN modes.
  // Content descriptions and other text still follow the chosen language.
  const fixedEnglish = new Map([
    ['ホーム', 'Home'], ['Home', 'Home'],
    ['ゲーム', 'Games'], ['Games', 'Games'],
    ['キャスト', 'Cast'], ['Cast', 'Cast'],
    ['開発記録', 'Devlog'], ['Devlog', 'Devlog'],
    ['このサイトについて', 'About'], ['About', 'About'],
    ['ギャラリー', 'Gallery'], ['Gallery', 'Gallery'],
    ['GALLERY', 'GALLERY'], ['PLAYGROUND', 'PLAYGROUND'],
    ['小さなゲームを、心を込めて。', 'Little games, made with care.'],
    ['Little games, made with care.', 'Little games, made with care.'],
    ['注目のゲーム', 'Featured Games'], ['Featured Games', 'Featured Games'],
    ['最新の開発記録', 'Latest Devlog'], ['Latest Devlog', 'Latest Devlog'],
    ['ゲーム一覧', 'My Games'], ['My Games', 'My Games'],
    ['キャラクター紹介', 'Meet the Cast'], ['Meet the Cast', 'Meet the Cast']
    ,['自己紹介', 'About'], ['Tools', 'Tools'], ['制作ツール', 'Tools'], ['Find me at', 'Find me at'], ['リンク', 'Find me at']
  ]);

  const reverse = new Map([...translations].map(([ja, en]) => [en, ja]));
  const originals = new WeakMap();
  const attrOriginals = new WeakMap();
  let language = readLanguage();
  let applying = false;

  function readLanguage() {
    try { return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'ja'; }
    catch (_) { return 'ja'; }
  }

  function normalize(value) { return value.replace(/\s+/g, ' ').trim(); }

  function translated(source, lang) {
    const clean = normalize(source);
    if (!clean) return source;
    const value = lang === 'en' ? translations.get(clean) : reverse.get(clean);
    return value || clean;
  }

  function applyText(node) {
    if (!originals.has(node)) originals.set(node, node.nodeValue || '');
    const source = originals.get(node);
    if (!normalize(source)) return;
    const parent = node.parentElement;
    if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName) || parent.closest('[data-i18n-ignore]')) return;
    const leading = source.match(/^\s*/)?.[0] || '';
    const trailing = source.match(/\s*$/)?.[0] || '';
    const isFixedLabel = Boolean(
      parent.closest('.brand-subtitle, .nav') ||
      (parent.closest('h1, h2, h3, h4') && fixedEnglish.has(normalize(source)))
    );
    const fixed = isFixedLabel ? fixedEnglish.get(normalize(source)) : null;
    const value = fixed || translated(source, language);
    node.nodeValue = `${leading}${value}${trailing}`;
  }

  function applyAttributes(element) {
    const names = ['alt', 'aria-label', 'title', 'placeholder'];
    let saved = attrOriginals.get(element);
    if (!saved) { saved = {}; attrOriginals.set(element, saved); }
    for (const name of names) {
      if (!element.hasAttribute(name)) continue;
      if (!(name in saved)) saved[name] = element.getAttribute(name);
      element.setAttribute(name, translated(saved[name], language));
    }
  }

  function apply(root = document.body) {
    if (!root) return;
    applying = true;
    if (root.nodeType === Node.TEXT_NODE) applyText(root);
    else {
      if (root.nodeType === Node.ELEMENT_NODE) applyAttributes(root);
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        if (node.nodeType === Node.TEXT_NODE) applyText(node);
        else applyAttributes(node);
      }
    }
    document.documentElement.lang = language;
    updateButtons();
    applying = false;
  }

  function updateButtons() {
    document.querySelectorAll('.language button').forEach(button => {
      const code = normalize(button.textContent).toLowerCase();
      const active = code === language || (code === 'jp' && language === 'ja');
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
      if (active) button.setAttribute('aria-current', 'true'); else button.removeAttribute('aria-current');
    });
  }

  function setLanguage(next) {
    language = next === 'en' ? 'en' : 'ja';
    try { localStorage.setItem(STORAGE_KEY, language); } catch (_) {}
    apply(document.body);
    window.dispatchEvent(new CustomEvent('nulllatte:languagechange', { detail: { language } }));
  }

  function bindButtons() {
    document.querySelectorAll('.language button').forEach(button => {
      if (button.dataset.i18nBound) return;
      button.dataset.i18nBound = 'true';
      button.addEventListener('click', () => setLanguage(normalize(button.textContent).toLowerCase() === 'en' ? 'en' : 'ja'));
    });
    updateButtons();
  }

  const observer = new MutationObserver(records => {
    if (applying) return;
    for (const record of records) for (const node of record.addedNodes) apply(node);
    bindButtons();
  });

  window.NulllatteI18n = { get language() { return language; }, setLanguage, apply, t: value => translated(value, language) };
  const start = () => { bindButtons(); apply(document.body); observer.observe(document.body, { childList: true, subtree: true }); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true }); else start();
})();
