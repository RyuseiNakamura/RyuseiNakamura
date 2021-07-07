const quiz  = [
  {
    question: 'ゲーム史上最も売れたゲーム機は次のうちどれ？',
    answers:[
      'スーパーファミコン',
      'プレイステーション2',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    corect: 'ニンテンドーDS'
  },{
    question: '『クレヨンしんちゃん』の主人公、野原しんのすけの妹の名前はどれでしょう？',
    answers:[
      'すみれ',
      'さくら',
      'あさがお',
      'ひまわり'
    ],
    corect: 'ひまわり'
  },{
    question: '『天空の城ラピュタ』で、物語の終盤にパズーとシータが一緒に唱える滅びの呪文はどれでしょうか？',
    answers:[
      'パズル',
      'ヤリス',
      'クリス',
      'バルス'
    ],
    corect: 'バルス'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//クイズの問題文、選択肢を定義。
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;

  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
  }
};

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].corect === e.target.textContent){
    window.alert('正解');
    score++;
  }else{
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz();
  }else{
    //問題数がもうなければこちらを実行
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

//ボタンをクリックしたら正誤判定。
let handlerIndex = 0;
while(handlerIndex < buttonLength ){
  $button[handlerIndex].addEventListener('click', (e) =>{
    clickHandler(e);
  });
  handlerIndex++;
}
