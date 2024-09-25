function omikujishow(){
	var sound = document.getElementById("omikujigaragara");
	sound.load();  // 音声ファイルをロードする
	sound.play();  // 再生

	var omikuji =["超・大吉","大吉","吉","中吉","小吉","末吉"];

		var number1=Math.random();
		var number2=number1*6;
		var number =Math.floor(number2);
		var message =omikuji[number];

		var object = document.getElementById("omikuji")
		object.innerText = message;

	var okotoba =["今日この日を噛みしめよう……","おめでとう！良いことあるんじゃない？","吉って、大吉の次だよ。良さそう","嬉しいこと、あるといいな","楽しいことを見つけよう","徳でも積むか"]
		var okotoba_kekka =okotoba[number];
		var object_kekka =document.getElementById("okotoba")
		object_kekka.innerText = okotoba_kekka

	var luckyitem =["丸いもの","軽いもの","小さいもの","重いもの","四角いもの","変な形のもの"]

	var luckyitem_number1 = Math.random(); // 0から1までの乱数
	var luckyitem_number2 = luckyitem_number1 * luckyitem.length; // 配列の長さに基づいてスケーリング
	var luckyitem_number = Math.floor(luckyitem_number2); // 小数点以下を切り捨て
	var luckyitem_message = "ラッキーアイテムは、" + luckyitem[luckyitem_number] ; // メッセージ作成
	
	// luckyitemを表示する要素を取得
	var object_luckyitem = document.getElementById("luckyitem");
	
	// ラッキーアイテムのメッセージを表示
	object_luckyitem.innerText = luckyitem_message;
}