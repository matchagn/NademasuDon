function sound1() {
  // 対象となるID名
  var id = "sound-file1";

  // 初回以外だったら音声ファイルを巻き戻す
  if (typeof document.getElementById(id).currentTime != "undefined") {
    document.getElementById(id).currentTime = 0;
  }

  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById(id).play();
}

function sound2() {
  // 対象となるID名
  var id = "sound-file2";

  // 初回以外だったら音声ファイルを巻き戻す
  if (typeof document.getElementById(id).currentTime != "undefined") {
    document.getElementById(id).currentTime = 0;
  }

  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById(id).play();
}

function sound3() {
  // 対象となるID名
  var id = "sound-file3";

  // 初回以外だったら音声ファイルを巻き戻す
  if (typeof document.getElementById(id).currentTime != "undefined") {
    document.getElementById(id).currentTime = 0;
  }

  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById(id).play();
}
