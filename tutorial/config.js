/* NamaKe 用チュートリアル設定（NamaTutorial キット v1）
   キャラの口調: 基本は丁寧語。文末は「です」「ます」の代わりに「ナマ」を語幹へ直接付ける
   （例: 機能の一覧ナマ／できナマ／仰せつかってナマ／お疲れナマ。規格参照） */
window.NAMA_TUTORIAL_CONFIG = {
  appId: 'namake',
  assetBase: 'tutorial/img/',
  buttonImage: 'tutorial/img/tutorial-button.png',
  buttonPages: ['home'], // 呼び出しボタンはトップページにだけ出す（他ページの操作ボタンの邪魔をしない）
  bridge: 'NamaTutorialBridge',
  introTitle: 'Nama計算機の使い方',
  introText: 'このアプリの使い方を、実際の画面を触りながら案内しナマ。1分くらいで終わりナマ。',
  chapters: [
    {
      id: 'home', page: 'home', title: 'はじめに', desc: 'ホーム画面の見方と、この案内の使い方', icon: 'wave', since: 1,
      steps: [
        { pose: 'wave', text: 'やあ！生物（ナマモノ）ナマ。このアプリの案内役を仰せつかってナマ。先に言っておくと、この案内はいつでも✕ボタンでやめられるし、やめた後も画面右下のボタンから見直せナマ。気楽にどうぞ。まずはホーム画面からナマ。' },
        { target: '#menu-card', pose: 'point', text: 'ここが機能の一覧ナマ。タップで各機能を開きナマ。並び順は左端のハンドルをドラッグで変えられて、カテゴリ分けや非表示もできナマ。自分好みに並べ替えて大丈夫ナマ。この案内は構成が変わっても平気な作りになってナマ。' },
        { target: '.menu-item[data-id="todo"]', pose: 'point', text: '「逆算ToDo」は、出発時刻から逆算して準備の開始時刻を並べる機能ナマ。通知まで含めるとAPK版が本領ナマ。真ん中の章でくわしく案内しナマ。' },
        { target: '#btn-settings', pose: 'point', text: '右上の歯車は設定ナマ。表示する項目の切り替えや、データの読み込み・出力（バックアップ）ができナマ。' },
        { target: '#nt-btn', pose: 'thumbs_up', text: 'この案内は、右下のこのボタンからいつでも見直せナマ。新しい案内が増えると赤い印が付きナマ。' }
      ]
    },
    {
      id: 'warikan', page: 'warikan', title: 'ワリカン', desc: '金額と人数を入れるだけ。班ごとの調整も', icon: 'yay', since: 1,
      steps: [
        { page: 'warikan', pose: 'wave', text: 'ワリカンの章ナマ。試しに入力してみても大丈夫ナマ。この案内の間に入れた内容は、終わったら元に戻りナマ。' },
        { page: 'warikan', target: '#wk-a', pose: 'point', text: 'まず合計金額と人数ナマ。入れるだけで、まず均等割りが下に出ナマ。' },
        { page: 'warikan', target: '#wk-b', pose: 'point', text: '「キリを良くする」は端数の処理ナマ。500円単位で切り上げたり、端数を幹事が調整して合計ぴったりにしたりできナマ。' },
        { page: 'warikan', target: '#wk-c', pose: 'point', text: '班ごとに人数や金額を変えたい時はここナマ。第一班・第二班のように分けて、班ごとに多く／少なくできナマ。' },
        { page: 'warikan', target: '#wk-copy', pose: 'point', text: '結果はこのボタンでコピーして、LINEなどにそのまま貼れナマ。' }
      ]
    },
    {
      id: 'todo', page: 'todo', title: '逆算ToDo', desc: '出発時刻から逆算して準備の開始時刻を並べる', icon: 'thinking', since: 1,
      steps: [
        { page: 'todo', pose: 'wave', text: '逆算ToDoの章ナマ。「何時に出るか」を決めると、準備の各行動を何時から始めればいいか、逆算して並べてくれナマ。時刻に合わせて通知する機能はAPK版用だけど、スケジュールを組み立てるだけでも使えナマ。' },
        { page: 'todo', target: '#todo-sequence-list', pose: 'point', text: 'ここに行動が上から順に並びナマ。各行動には「かかる時間」を設定しておくのがポイントナマ。' },
        { page: 'todo', target: '#todo-add-action-btn', pose: 'point', text: '行動の追加はここからナマ。よく使う組み合わせは「セット」にまとめると楽ナマ。' },
        { page: 'todo', target: '#todo-targets-row', pose: 'point', text: 'ここで目標の時刻（出発や到着）を決めると、各行動の開始時刻が自動で計算されナマ。' },
        { page: 'todo', target: '#todo-manage-btn', pose: 'point', text: '行動やセットの整理・編集はこのボタンからナマ。' },
        { page: 'todo', target: '#todo-alarm-box', pose: 'point', text: 'APK版では、開始時刻に合わせた通知も出せナマ。' }
      ]
    },
    {
      id: 'others', page: 'budget', title: 'その他の機能', desc: '予算収支・なます・LINE用URLなど。ホームに出ていない物は自動で飛ばします', icon: 'question', since: 1,
      steps: [
        { page: 'home', pose: 'wave', text: 'その他の機能をまとめて紹介しナマ。ホームに表示していない機能の説明は、自動で飛ばすから安心してナマ。' },
        { page: 'home', target: '.menu-item[data-id="budget"]', pose: 'point', text: '予算収支計算機ナマ。予算と出費を入れて、残りいくらかを見る機能ナマ。' },
        { page: 'home', target: '.menu-item[data-id="stopwatch"]', pose: 'point', text: 'NamaStopwatch「なます」ナマ。曲ごとの計測に使うストップウォッチナマ。' },
        { page: 'home', target: '.menu-item[data-id="line"]', pose: 'point', text: 'LINE用外部ブラウザURLナマ。LINEの中でリンクを外部ブラウザで開きたい時のお助けナマ。' },
        { page: 'home', target: '.fav-tile', pose: 'point', text: 'お気に入りに登録した機能は、こういうタイルからも開けナマ。' }
      ]
    }
  ]
};
