function updateSky() {
    const hour = new Date().getHours(); // 今の「時」を取得 (0-23)
    const body = document.body;

    // いったん全ての空クラスを消す
    body.classList.remove('sky-morning', 'sky-day', 'sky-evening', 'sky-night');

    if (hour >= 5 && hour < 8) {
        body.classList.add('sky-morning'); // 5時〜8時：朝
    } else if (hour >= 8 && hour < 16) {
        body.classList.add('sky-day');     // 8時〜16時：昼
    } else if (hour >= 16 && hour < 19) {
        body.classList.add('sky-evening'); // 16時〜19時：夕方
    } else {
        body.classList.add('sky-night');   // それ以外：夜
    }
}

// ページが開いた時に実行
updateSky();