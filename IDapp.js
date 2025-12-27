"use strict";
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let hensachi = [
  { id:1, code:"工学部", name:"機械工学科", change:"一般入試A日程", passengers:45.0 },
  //{ id:2, code:"工学部", name:"機械工学科", change:"B日程", passengers:45.0 },
  { id:2, code:"工学部", name:"宇宙・半導体工学科", change:"一般入試A日程", passengers:45.0 },
  //{ id:4, code:"工学部", name:"宇宙・半導体工学科", change:"B日程", passengers:47.5 },
  { id:3, code:"工学部", name:"先端材料工学科", change:"一般入試A日程", passengers:37.5 },
  //{ id:6, code:"工学部", name:"先端材料工学科", change:"B日程", passengers:40.0 },
  { id:4, code:"工学部", name:"電気電子工学科", change:"一般入試A日程", passengers:42.5 },
  //{ id:8, code:"工学部", name:"電気電子工学科", change:"B日程", passengers:45.0 },
  { id:5, code:"工学部", name:"情報通信システム工学科", change:"一般入試A日程", passengers:45.0 },
  //{ id:10, code:"工学部", name:"情報通信システム工学科", change:"B日程", passengers:47.5 },
  { id:6, code:"工学部", name:"応用化学科", change:"一般入試A日程", passengers:42.5 },
  //{ id:12, code:"工学部", name:"応用化学科", change:"B日程", passengers:45.0 },
  { id:7, code:"創造工学部", name:"建築学科", change:"一般入試A日程", passengers:47.5 },
  //{ id:14, code:"創造工学部", name:"建築学科", change:"B日程", passengers:50.0 },
  { id:8, code:"創造工学部", name:"都市環境工学科", change:"一般入試A日程", passengers:42.5 },
  //{ id:16, code:"創造工学部", name:"都市環境工学科", change:"B日程", passengers:42.5 },
  { id:9, code:"創造工学部", name:"デザイン科学科", change:"一般入試A日程", passengers:47.5 },
  //{ id:18, code:"創造工学部", name:"デザイン科学科", change:"B日程", passengers:47.5, },
  { id:10, code:"先進工学部", name:"未来ロボティクス学科", change:"一般入試A日程", passengers:42.5 },
  //{ id:20, code:"先進工学部", name:"未来ロボティクス学科", change:"B日程", passengers:45.0 },
  { id:11, code:"先進工学部", name:"生命科学科", change:"一般入試A日程", passengers:42.5 },
  //{ id:22, code:"先進工学部", name:"生命科学科", change:"B日程", passengers:45.0 },
  { id:12, code:"先進工学部", name:"知能メディア工学科", change:"一般入試A日程", passengers:45.0 },
 // { id:24, code:"先進工学部", name:"知能メディア工学科", change:"B日程", passengers:45.0 },
  { id:13, code:"情報変革科学部", name:"情報工学科", change:"一般入試A日程", passengers:47.5 },
  //{ id:26, code:"情報変革科学部", name:"情報工学科", change:"B日程", passengers:50.0 },
  { id:14, code:"情報変革科学部", name:"認知情報科学", change:"一般入試A日程", passengers:45.0 },
 // { id:28, code:"情報変革科学部", name:"認知情報科学", change:"B日程", passengers:45.0 },
  { id:15, code:"情報変革科学部", name:"高度応用情報科学", change:"一般入試A日程", passengers:45.0 },
 // { id:30, code:"情報変革科学部", name:"高度応用情報科学", change:"B日程", passengers:47.5 },
  { id:16, code:"未来変革科学部", name:"デジタル変革科学部", change:"一般入試A日程", passengers:47.5 },
 // { id:32, code:"未来変革科学部", name:"デジタル変革科学部", change:"B日程", passengers:47.5 },
  { id:17, code:"未来変革科学部", name:"経営デザイン科学部", change:"一般入試A日程", passengers:40.0 },
 // { id:34, code:"未来変革科学部", name:"経営デザイン科学部", change:"B日程", passengers:42.5 },
];

let jugyou = [
  { id:1, code:"教養基礎科目", name:"英語理解基礎１", change:"選択", passengers:1, distance:"基礎レベル対象の科目" },
  { id:2, code:"教養基礎科目", name:"英語表現基礎１", change:"選択", passengers:1, distance:"基礎レベル対象の科目" },
  { id:3, code:"教養基礎科目", name:"英語理解基礎２", change:"選択", passengers:1, distance:"基礎レベル対象の科目" },
  { id:4, code:"教養基礎科目", name:"英語表現基礎２", change:"選択", passengers:1, distance:"基礎レベル対象の科目" },
  { id:5, code:"教養基礎科目", name:"英語理解１", change:"選択", passengers:1, distance:"中級レベル対象の科目" },
  { id:6, code:"教養基礎科目", name:"英語表現１", change:"選択", passengers:1, distance:"中級レベル対象の科目" },
  { id:7, code:"教養基礎科目", name:"英語理解２", change:"選択", passengers:1, distance:"中級レベル対象の科目" },
  { id:8, code:"教養基礎科目", name:"英語表現２", change:"選択", passengers:1, distance:"中級レベル対象の科目" },
  { id:9, code:"教養基礎科目", name:"英語理解発展１", change:"選択", passengers:1, distance:"上級レベル対象の科目" },
  { id:10, code:"教養基礎科目", name:"英語表現発展１", change:"選択", passengers:1, distance:"上級レベル対象の科目" },
  { id:11, code:"教養基礎科目", name:"英語理解発展２", change:"選択", passengers:1, distance:"上級レベル対象の科目" },
  { id:12, code:"教養基礎科目", name:"英語表現発展２", change:"選択", passengers:1, distance:"上級レベル対象の科目" },
  { id:13, code:"教養基礎科目", name:"日本語表現法", change:"必修", passengers:1, distance:"" },
  { id:14, code:"教養基礎科目", name:"数理・データサイエンス・AI入門", change:"必修", passengers:1, distance:"" },
  { id:15, code:"教養基礎科目", name:"AI・プログラミング基礎演習", change:"選択", passengers:1, distance:"" },
  { id:16, code:"教養基礎科目", name:"スポーツ科学", change:"必修", passengers:2, distance:"" },
  { id:17, code:"教養基礎科目", name:"初年次教育", change:"必修", passengers:1, distance:"GPA除外，CAP除外" },
  { id:18, code:"教養基礎科目", name:"キャリアデザイン１", change:"必修", passengers:1, distance:"GPA除外，CAP除外" },
  { id:19, code:"教養共通科目", name:"異文化理解", change:"必修", passengers:2, distance:"" },
  { id:20, code:"教養共通科目", name:"言語と文化１", change:"必修", passengers:2, distance:"" },
  { id:21, code:"教養共通科目", name:"言語と文化２", change:"必修", passengers:2, distance:"" },
  { id:22, code:"教養共通科目", name:"哲学", change:"選択", passengers:1, distance:"" },
  { id:23, code:"教養共通科目", name:"倫理学", change:"選択", passengers:2, distance:"学部指定科目群1に含まれる" },
  { id:24, code:"教養共通科目", name:"文学と芸術", change:"選択", passengers:2, distance:"" },
  { id:25, code:"教養共通科目", name:"歴史と人間", change:"選択", passengers:2, distance:"学部指定科目群1に含まれる" },
  { id:26, code:"教養共通科目", name:"心理学", change:"選択", passengers:2, distance:"学部指定科目群1に含まれる" },
  { id:27, code:"教養共通科目", name:"身体と健康の科学", change:"選択", passengers:2, distance:"" },
  { id:28, code:"教養共通科目", name:"憲法と社会", change:"選択", passengers:2, distance:"学部指定科目群1に含まれる" },
  { id:29, code:"教養共通科目", name:"現代社会論", change:"選択", passengers:2, distance:"" },
  { id:30, code:"教養共通科目", name:"科学技術史", change:"選択", passengers:2, distance:"学部指定科目群1に含まれる" },
  { id:31, code:"教養共通科目", name:"環境科学概論", change:"選択", passengers:2, distance:"学部指定科目群1に含まれる" },
  { id:32, code:"教養特別科目", name:"ソーシャルアクティブラーニング", change:"選択", passengers:1, distance:"GPA 除外，CAP 除外" },
  { id:33, code:"教養特別科目", name:"国際インターン", change:"選択", passengers:1, distance:"GPA 除外，CAP 除外" },
  { id:34, code:"教養特別科目", name:"国内インターン", change:"選択", passengers:1, distance:"GPA 除外，CAP 除外" },
  { id:35, code:"教養特別科目", name:"ボランティア", change:"選択", passengers:1, distance:"GPA 除外，CAP 除外" },
  { id:36, code:"教養特別科目", name:"キャリアアップラーニング", change:"選択", passengers:1, distance:"GPA 除外，CAP 除外" },
  { id:37, code:"専門基礎科目", name:"情報工学概論", change:"必修", passengers:2, distance:"" },
  { id:38, code:"専門基礎科目", name:"電気回路", change:"必修", passengers:2, distance:"" },
  { id:39, code:"専門基礎科目", name:"数学基礎", change:"選択", passengers:2, distance:"" },
  { id:40, code:"専門基礎科目", name:"微分積分", change:"選択", passengers:2, distance:"" },
  { id:41, code:"専門基幹科目", name:"プログラミング言語", change:"必修", passengers:2, distance:"" },
  { id:42, code:"専門基幹科目", name:"論理回路", change:"必修", passengers:2, distance:"" },
  { id:43, code:"専門基幹科目", name:"フィジカルコンピューティング", change:"必修", passengers:2, distance:"" },
  { id:44, code:"専門基幹科目", name:"技術文章作成", change:"必修", passengers:2, distance:"" },
  { id:45, code:"専門基幹科目", name:"アイディアソン", change:"必修", passengers:2, distance:"" },
  { id:46, code:"専門基幹科目", name:"Webプログラミング", change:"必修", passengers:2, distance:"" },
  { id:47, code:"専門基幹科目", name:"データサイエンス", change:"必修", passengers:2, distance:"" },
  { id:48, code:"専門基幹科目", name:"データ通信", change:"必修", passengers:2, distance:"" },
  { id:49, code:"専門基幹科目", name:"メディア処理", change:"選択", passengers:2, distance:"" },
  { id:50, code:"専門基幹科目", name:"グラフィックス", change:"選択", passengers:2, distance:"" },
  { id:51, code:"専門基幹科目", name:"アジャイルワーク１", change:"必修", passengers:2, distance:"" },
];


let kenkyu = [
  { id:1, code:"有本 泰子", name:"マルチモーダルな情報からコミュニケーションを解明", change:"感情の情報工学的な研究と、認知的・心理学的研究の両方を行う文理融合型研究を行います。コミュニケーション場面を研究対象とすることで、感情の表出や知覚に利用される表情や音声・生理反応を個別に分析するだけではなく、それらを統合的に分析し、システムの精度向上を図る仕組みを考えます。", passengers:"音声処理・コミュニケーション・認知科学・マルチメディア・心理学", distance:"https://mac-lab.org/" },
  { id:2, code:"鎌倉 浩嗣", name:"可視光通信システム及び高速道路交通システムへの応用", change:"高速で点滅させることができるLED光源を用いた可視光通信に関する研究に取り組んでいます。受信機をイメージセンサ（高速度カメラ）とする可視光システムの高度道路交通システム（ITS）への応用を目指しています。また、ITS応用については、交通の輸送効率や快適性の向上に寄与する効率のよい車間通信・車路間通信を実現するプロトコルの研究にも取り組んでいます。", passengers:"IT（情報技術）・ITS（インテリジェント交通システム）・移動体通信・信号処理", distance:"https://www.kama.cs.it-chiba.ac.jp/" },
  { id:3, code:"佐波 孝彦", name:"次世代無線通信方式に関する研究", change:"スマートフォン、無線LAN、ディジタル放送など、昨今の無線通信技術の発展は、我々の日常生活の様式に大きな変化をもたらしました。ケーブル不要な無線システムは、今後もさらに多くの場面で重要となるでしょう。高速・高品質・安全な伝送が求められている次世代無線通信システムにおいて核となるさまざまな技術に関する研究開発を行っています。", passengers:"IoT・移動体通信・ユビキタス・信号処理・無線通信", distance:"https://www.saba.cs.it-chiba.ac.jp/" },
  { id:4, code:"中村 直人", name:"メディア情報処理、クラウドアプリケーション開発", change:"人間の動作などの生体情報をセンシングして、仮想空間でシミュレーションし、その結果をCG/VR/AR等のメディア技術で表示することを研究しています。また、対象として訓練や介護、福祉などが具体的なテーマです。介護における介助者の動作訓練への応用や、発話障害者向けのモバイルアプリの開発など実用的なシステムの開発を行っています。", passengers:"音声処理・ヒューマン・インタフェース・AR（拡張現実）・画像処理・バーチャルリアリティ",distance:"https://citnlab.com/" },
  { id:5, code:"信川 創", name:"脳・神経系におけるゆらぎの機能性の解析/工学的応用", change:"私の研究室では，数理モデルを利用し，計算機上で擬似的な脳を構築します．そして，非線形解析の手法を駆使して脳の情報処理を理解していく，またその機構を機械学習などに応用していく研究を行っています．このような研究は計算論的神経科学と呼ばれ，現在，深層学習の普及によって世界的に注目を集めている分野です．ぜひ，みなさんと共に学び研究を行いたいと思っています．", passengers: "AI(人工知能)・ニューラルネットワーク・シミュレーション・生体メカニズム・ソフトコンピューティング", distance:"" },
  { id:6, code:"前川 仁孝", name:"並列処理、計算機工学", change:"当研究室では、マルチコアCPUや、スーパーコンピュータ、GPUなどの並列計算機の性能を最大限に引き出せるようなソフトウェアの開発を目標に研究を行っています。例えば、気象解析や流体解析などのシュミレーションで必要となる大規模な数値計算や、コンピュータ将棋や囲碁のようなゲーム情報学の分野に関する高性能計算を行っています。", passengers: "分散処理・並列処理・プログラミング・AI（人工知能）・アルゴリズム・学習アルゴリズム", distance:"" },
  { id:7, code:"須田 宇宙", name:"マルチメディア教材による教育・学習支援", change:"目で見ることのできない現象を、コンピュータを使って見えるようにする（可視化）ことが、教育・学習に有効である。そこで、可視化を主としたマルチメディア教材を開発し、実際に授業で使用して効果を確認する研究を行っている。また、その教材を元にした自学自習用コンテンツの構築手法についても研究を行っている。", passengers:" Web・ネットワーク・マルチメディア・プログラミング", distance:""},
  { id:8, code:"関根 晃太", name:"数値計算・シミュレーションの品質保証法の開発", change:"コンピュータを利用したシミュレーションは様々な場面で応用されています。しかし、いくら高性能なコンピュータといえども、無限に計算を行うことはできません。そのために、シミュレーションでは多くの近似を行います。そのため、得られた結果が本当に正しいかわかりません。そこで、シミュレーションの結果が正しいことを保証するアルゴリズムを開発する研究をしています。", passengers:"アルゴリズム・学習アルゴリズム・ソフトコンピューティング・品質管理・シミュレーション", distance:"https://271.jp/research.php" },
  { id:9, code:"水本 旭洋", name:"サイバーフィジカルシステム", change:"本研究室では、人の生活に溶け込むサイバーフィジカルシステムをテーマとして研究に取り組んでいます。学生、社会人、高齢者、様々な世代や生活シーンに応じて、自然な形でデータを収集できるIoTデバイスや、データを基に人や空間の状態を推定するAI、生活がより豊かになるよう支援が行えるシステムなどの実現に取り組んでいます。", passengers:"AI(人工知能)・IoT・ユビキタス・モバイルコンピューティング・シミュレーション", distance:"" },
  { id:10, code:"三木 大輔", name:"人間の動作を理解するためのAI（人工知能）", change:"人物の動作を理解するためのAI（人工知能）に関する研究に取り組んでいます。特に、映像やモーションキャプチャデータを解析するニューラルネットワークやその学習手法の研究を通して、人物の動作を理解できるAIの実現を目指しています。最近では、意思の伝達などに用いられるジェスチャのような動作を理解できるAIの研究にも取り組んでいます。", passengers:"AI（人工知能）・アルゴリズム・学習アルゴリズム・ニューラルネットワーク・ヒューマンインタフェース", distance:"" },
];

//toppage表示
app.get("/", (req, res) => {
    res.render('toppage');
});


//以下、学科偏差値システム用

// 一覧
app.get("/hensachi", (req, res) => {
  res.render('hensachi', {data: hensachi} );
});

// Create
app.get("/hensachi/create", (req, res) => {
  res.redirect('/public/hensachi.html');
});

// Read
app.get("/hensachi/:number", (req, res) => {
  const number = req.params.number;
  const detail = hensachi[ number ];
  res.render('hensachi_detail', {id: number, data: detail} );
});

// Delete
app.get("/hensachi/delete/confirm/:number", (req, res) => {
  const number = req.params.number;
  const detail = hensachi[number];
  // データがない場合は一覧に戻す
  if (!detail) {
    return res.redirect('/hensachi');
  }
  // 確認画面
  res.render('hensachi_delete', { id: number, data: detail });
});

// フォームから送信されるから、getではなくpostにしてみる
app.post("/hensachi/delete/:number", (req, res) => {
  const number = req.params.number;
  // ダミーデータいれる＝削除処理とすることで、IDの整合性を保てる
  if (hensachi[number]) {
    hensachi[number] = null;
  }
  // 削除が終わったら一覧画面へ
  res.redirect('/hensachi');
});

// Create
app.post("/hensachi", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = hensachi.length + 1;
  const code = req.body.code;
  const name = req.body.name;
  const change = req.body.change;
  const passengers = req.body.passengers;
  const distance = req.body.distance;
  hensachi.push( { id: id, code: code, name: name, change: change, passengers: passengers, distance: distance } );
  console.log( hensachi );
  res.render('hensachi', {data: hensachi} );
});

// Edit
app.get("/hensachi/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = hensachi[ number ];
  res.render('hensachi_edit', {id: number, data: detail} );
});

// Update
app.post("/hensachi/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // データが存在しない（削除済みの）場合は一覧へ戻す等の処理
  if (!hensachi[req.params.number]) {
     return res.redirect('/hensachi');
  }
  hensachi[req.params.number].code = req.body.code;
  hensachi[req.params.number].name = req.body.name;
  hensachi[req.params.number].change = req.body.change;
  hensachi[req.params.number].passengers = req.body.passengers;
  hensachi[req.params.number].distance = req.body.distance;
  console.log( hensachi );
  res.redirect('/hensachi' );
});



//学科偏差値システム用ここまで
//以下、授業一覧システム用


// 一覧
app.get("/jugyou", (req, res) => {
  res.render('jugyou', {data: jugyou} );
});

// Create
app.get("/jugyou/create", (req, res) => {
  res.redirect('/public/jugyou.html');
});

// Read
app.get("/jugyou/:number", (req, res) => {
  const number = req.params.number;
  const detail = jugyou[ number ];
  res.render('jugyou_detail', {id: number, data: detail} );
});

// Delete
app.get("/jugyou/delete/confirm/:number", (req, res) => {
  const number = req.params.number;
  const detail = jugyou[number];
  // データがない場合は一覧に戻す
  if (!detail) {
    return res.redirect('/jugyou');
  }
  // 確認画面
  res.render('jugyou_delete', { id: number, data: detail });
});

// フォームから送信されるから、getではなくpostにしてみる
app.post("/jugyou/delete/:number", (req, res) => {
  const number = req.params.number;
  // ダミーデータいれる＝削除処理とすることで、IDの整合性を保てる
  if (jugyou[number]) {
    jugyou[number] = null;
  }
  // 削除が終わったら一覧画面へ
  res.redirect('/jugyou');
});

// Create
app.post("/jugyou", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = jugyou.length + 1;
  const code = req.body.code;
  const name = req.body.name;
  const change = req.body.change;
  const passengers = req.body.passengers;
  const distance = req.body.distance;
  jugyou.push( { id: id, code: code, name: name, change: change, passengers: passengers, distance: distance } );
  console.log( jugyou );
  res.render('jugyou', {data: jugyou} );
});

// Edit
app.get("/jugyou/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = jugyou[ number ];
  res.render('jugyou_edit', {id: number, data: detail} );
});

// Update
app.post("/jugyou/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // データが存在しない（削除済みの）場合は一覧へ戻す等の処理
  if (!jugyou[req.params.number]) {
     return res.redirect('/jugyou');
  }
  jugyou[req.params.number].code = req.body.code;
  jugyou[req.params.number].name = req.body.name;
  jugyou[req.params.number].change = req.body.change;
  jugyou[req.params.number].passengers = req.body.passengers;
  jugyou[req.params.number].distance = req.body.distance;
  console.log( jugyou );
  res.redirect('/jugyou' );
});


//授業一覧システム用ここまで
//以下、研究室一覧システム用


// 一覧
app.get("/kenkyu", (req, res) => {
  res.render('kenkyu', {data: kenkyu} );
});

// Create
app.get("/kenkyu/create", (req, res) => {
  res.redirect('/public/kenkyu.html');
});

// Read
app.get("/kenkyu/:number", (req, res) => {
  const number = req.params.number;
  const detail = kenkyu[ number ];
  res.render('kenkyu_detail', {id: number, data: detail} );
});

// Delete
app.get("/kenkyu/delete/confirm/:number", (req, res) => {
  const number = req.params.number;
  const detail = kenkyu[number];
  // データがない場合は一覧に戻す
  if (!detail) {
    return res.redirect('/kenkyu');
  }
  // 確認画面
  res.render('kenkyu_delete', { id: number, data: detail });
});

// フォームから送信されるから、getではなくpostにしてみる
app.post("/kenkyu/delete/:number", (req, res) => {
  const number = req.params.number;
  // ダミーデータいれる＝削除処理とすることで、IDの整合性を保てる
  if (kenkyu[number]) {
    kenkyu[number] = null;
  }
  // 削除が終わったら一覧画面へ
  res.redirect('/kenkyu');
});

// Create
app.post("/kenkyu", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = kenkyu.length + 1;
  const code = req.body.code;
  const name = req.body.name;
  const change = req.body.change;
  const passengers = req.body.passengers;
  const distance = req.body.distance;
  kenkyu.push( { id: id, code: code, name: name, change: change, passengers: passengers, distance: distance } );
  console.log( kenkyu );
  res.render('kenkyu', {data: kenkyu} );
});

// Edit
app.get("/kenkyu/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = kenkyu[ number ];
  res.render('kenkyu_edit', {id: number, data: detail} );
});

// Update
app.post("/kenkyu/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // データが存在しない（削除済みの）場合は一覧へ戻す等の処理
  if (!kenkyu[req.params.number]) {
     return res.redirect('/kenkyu');
  }
  kenkyu[req.params.number].code = req.body.code;
  kenkyu[req.params.number].name = req.body.name;
  kenkyu[req.params.number].change = req.body.change;
  kenkyu[req.params.number].passengers = req.body.passengers;
  kenkyu[req.params.number].distance = req.body.distance;
  console.log( kenkyu );
  res.redirect('/kenkyu' );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));