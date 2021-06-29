<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>あなたのいいところ診断</title>
    <link rel="stylesheet" href="assesment.css"/>
</head>
<body>
    <h1>あなたのいいところは？</h1>
    <h3>診断したい名前を入力してください</h3>
    <input type="text" id="user-name" size="40" maxlength="20"/>
    <button id="assessment">診断する</button>
    <div id="result-area"></div>
    <div id="tweet-area">
        <a href="https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ診断&ref_src=twsrc%5Etfw" 
        class="twitter-hashtag-button" 
        data-text="診断結果の文章" 
        data-show-count="false"
        >Tweet #あなたのいいところ診断</a
        >
        <script 
        async 
        src="https://platform.twitter.com/widgets.js" 
        charset="utf-8"
        ></script>
    </div>
   <script src="assesment.js"></script>
</body>
</html>
