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
        { page: 'warikan', target: '#wk-a', mode: 'free', pose: 'point', text: 'まず合計金額と人数ナマ。ここは実際に触って入力できるナマ。試しに入れてみるナマ。入れるだけで、まず均等割りが下に出ナマ。' },
        { page: 'warikan', target: '#wk-b', mode: 'free', pose: 'point', text: '「キリを良くする」は端数の処理ナマ。ここも実際に切り替えて試せるナマ。500円単位で切り上げたり、端数を幹事が調整して合計ぴったりにしたりできナマ。' },
        { page: 'warikan', target: '#wk-c', mode: 'free', pose: 'point', text: '班ごとに人数や金額を変えたい時はここナマ。第一班・第二班のように分けて、班ごとに多く／少なくできナマ。ここも実際に触れるナマ。' },
        { page: 'warikan', target: '#wk-copy', mode: 'tap', pose: 'point', text: '結果はこのボタンでコピーして、LINEなどにそのまま貼れナマ。押してみるナマ。' }
      ]
    },
    {
      id: 'todo', page: 'todo', title: '逆算ToDo', desc: '「食事」を例に、行動の登録から実際にやってみる', icon: 'thinking', since: 2,
      steps: [
        { page: 'todo', pose: 'wave', text: '逆算ToDoの章ナマ。「何時に出るか」「何時までに終わらせるか」を決めると、準備の各行動を何時から始めればいいか、逆算して並べてくれナマ。この章では試しに『食事』という行動を作ってみるナマ。作った物は章が終わると元に戻るので、気楽にどうぞナマ。時刻に合わせて通知する機能はAPK版が本領ナマ。' },
        { page: 'todo', target: '#todo-manage-btn', mode: 'tap', pose: 'point', text: '行動そのものの登録は「行動・完了時刻を管理」から。押してみるナマ。' },
        { page: 'todo', target: '#todo-tab-actions .todo-manage-add-row', mode: 'free', pose: 'point', text: '行動の登録欄ナマ。試しに、名前へ『食事』、右の分の欄へ『30』と入れてみるナマ。入れ終わったら「つぎへ」ナマ。' },
        { page: 'todo', target: '#todo-new-action-add-btn', mode: 'tap', pose: 'point', text: '入れたら「追加」ボタン。押してみるナマ。上のリストに『食事』が増えナマ。' },
        { page: 'todo', target: '[data-tab="times"]', mode: 'tap', pose: 'point', text: '今度は上の「完了時刻」タブ。押してみるナマ。' },
        { page: 'todo', target: '#todo-tab-times .todo-manage-add-row', mode: 'free', pose: 'point', text: '完了時刻は「何時までに終わらせるか」ナマ。食事なら「19時までに食べ終わる」という具合ナマ。時の欄へ『19』、分へ『0』と入れて、「追加」も押してみるナマ。' },
        { page: 'todo', target: '#todo-manage-close-btn', mode: 'tap', pose: 'point', text: '最後に「閉じる」で戻るナマ。押してみるナマ。' },
        { page: 'todo', target: '#todo-add-action-btn', pose: 'point', text: 'メイン画面では、この「➕ 行動追加」から、登録した行動を並びへ入れていくナマ。並べたら目標の時刻を決めるだけで、各行動の開始時刻が逆算されナマ。よく使う組み合わせは「セット」にまとめると楽ナマ。' }
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
