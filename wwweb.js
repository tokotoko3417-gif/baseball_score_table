// ===========================================================
//   共通設定・画像パス
// ===========================================================
const imageA = "irasto/0_C_blue.png";     // ボール（青）
const imageB = "irasto/0_C_yellow.png";   // ストライク（黄）
const imageOUT = "irasto/0_C_red.png";    // アウト（赤）

const imageC = "irastoDI/0_B_sfly.png";           // スコア表ボール
const imageD = "irastoDI/0_B_ball.png";           // スコア表ストライク
const imageE = "irastoDI/0_O_1out.png";           // 特別画像E
const imageF = "irastoDI/0_A_strikeout.png";      // スコア表三振
const imageG = "irastoDI/0_A_walk.png";           // フォアボール

const imageH = "irastoDI/0_B_foul.png";          // ファウル→セーフ時スコア表
const imageI = "irastoG/0_N_maru02w.png"; //必要ない可能性がある
const imageJ = "irastoG/0_N_maru03w.png";
const imageK = "irastoG/0_N_maru05w.png";
const imageL = "irastoG/0_N_maru07w.png";
const imageM = "irastoG/0_N_maru09w.png"; //ここまで

const imageN = "irastoG/FAURU/0_D_ff02.png";
const imageO = "irastoG/FAURU/0_D_ff03.png";
const imageP = "irastoG/FAURU/0_D_ff05.png";
const imageQ = "irastoG/FAURU/0_D_ff07.png";
const imageR = "irastoG/FAURU/0_D_ff09.png";

const imageS = "irastoHIT/0_N_homerun02.png";   // スコア表ホームラン
const imageT = "irastoHIT/0_S_homerun.png";
const imageU = "irastoHIT/HOMERUN/0_D_f07.png";     // スコア表三塁打
const imageV = "irastoHIT/HOMERUN/0_D_f08.png";
const imageW = "irastoHIT/HOMERUN/0_D_f09.png";     // スコア表二塁打
const imageX = "irastoHIT/0_O_earned.png"; 

const imageAA = "irastoHIT/fly/0_D_f01.png";  //フライ
const imageBB = "irastoHIT/fly/0_D_f02.png";
const imageCC = "irastoHIT/fly/0_D_f03.png";
const imageDD = "irastoHIT/fly/0_D_f04.png";
const imageEE = "irastoHIT/fly/0_D_f05.png";
const imageFF = "irastoHIT/fly/0_D_f06.png";
const imageGG = "irastoHIT/fly/0_D_f07.png";
const imageHH = "irastoHIT/fly/0_D_f08.png";
const imageII = "irastoHIT/fly/0_D_f09.png";

const imageJJ = "irastoHIT/grounder/0_N_01.png";  //ゴロ
const imageKK = "irastoHIT/grounder/0_N_02.png";
const imageLL = "irastoHIT/grounder/0_N_03.png";
const imageMM = "irastoHIT/grounder/0_N_04.png";
const imageNN = "irastoHIT/grounder/0_N_05.png";
const imageOO = "irastoHIT/grounder/0_N_06.png";
const imagePP = "irastoHIT/grounder/0_N_07.png";
const imageQQ = "irastoHIT/grounder/0_N_08.png";
const imageRR = "irastoHIT/grounder/0_N_09.png";

const imageSS = "irastoHIT/liner/0_D_l01.png";  //ライナー
const imageTT = "irastoHIT/liner/0_D_l02.png";
const imageUU = "irastoHIT/liner/0_D_l03.png";
const imageVV = "irastoHIT/liner/0_D_l04.png";
const imageWW = "irastoHIT/liner/0_D_l05.png";
const imageXX = "irastoHIT/liner/0_D_l06.png";
const imageYY = "irastoHIT/liner/0_D_l07.png";
const imageZZ = "irastoHIT/liner/0_D_l08.png";
const imageAAA = "irastoHIT/liner/0_D_l09.png";

const image_distance01 ="irastoHIT/0_S_s_hit.png"; //どこまで進んだか
const image_distance02 ="irastoHIT/0_S_d_hit.png";
const image_distance03 ="irastoHIT/0_S_t_hit.png";

const image_angle01_01 ="irastoHIT/grounder/AUT/first/0_D_1to3.png"; //ゴロアウトの時の送球方向
const image_angle01_02 ="irastoHIT/grounder/AUT/first/0_D_2to3.png"; //一塁に送球
const image_angle01_04 ="irastoHIT/grounder/AUT/first/0_D_4to3.png";
const image_angle01_05 ="irastoHIT/grounder/AUT/first/0_D_5to3.png";
const image_angle01_06 ="irastoHIT/grounder/AUT/first/0_D_6to3.png";
const image_angle01_07 ="irastoHIT/grounder/AUT/first/0_D_7to3.png";
const image_angle01_08 ="irastoHIT/grounder/AUT/first/0_D_8to3.png";
const image_angle01_09 ="irastoHIT/grounder/AUT/first/0_D_9to1.png";

const image_angle04_01 ="irastoHIT/grounder/AUT/second/0_D_1to4.png"; //二塁に送球
const image_angle04_02 ="irastoHIT/grounder/AUT/second/0_D_2to4.png";
const image_angle04_03 ="irastoHIT/grounder/AUT/second/0_D_3to4.png";
const image_angle04_05 ="irastoHIT/grounder/AUT/second/0_D_5to4.png";
const image_angle04_06 ="irastoHIT/grounder/AUT/second/0_D_6to4.png";
const image_angle04_07 ="irastoHIT/grounder/AUT/second/0_D_7to4.png";
const image_angle04_08 ="irastoHIT/grounder/AUT/second/0_D_8to4.png";
const image_angle04_09 ="irastoHIT/grounder/AUT/second/0_D_9to4.png";

const image_angle05_01 ="irastoHIT/grounder/AUT/third/0_D_1to5.png"; //三塁に送球
const image_angle05_02 ="irastoHIT/grounder/AUT/third/0_D_2to5.png";
const image_angle05_03 ="irastoHIT/grounder/AUT/third/0_D_3to5.png";
const image_angle05_04 ="irastoHIT/grounder/AUT/third/0_D_4to5.png";
const image_angle05_06 ="irastoHIT/grounder/AUT/third/0_D_6to5.png";
const image_angle05_07 ="irastoHIT/grounder/AUT/third/0_D_7to5.png";
const image_angle05_08 ="irastoHIT/grounder/AUT/third/0_D_8to5.png";
const image_angle05_09 ="irastoHIT/grounder/AUT/third/0_D_9to5.png";

const image_angle02_01 ="irastoHIT/grounder/AUT/home/0_D_1to2.png"; //本塁に送球
const image_angle02_03 ="irastoHIT/grounder/AUT/home/0_D_3to2.png";
const image_angle02_04 ="irastoHIT/grounder/AUT/home/0_D_4to2.png";
const image_angle02_05 ="irastoHIT/grounder/AUT/home/0_D_5to2.png";
const image_angle02_06 ="irastoHIT/grounder/AUT/home/0_D_6to2.png";
const image_angle02_07 ="irastoHIT/grounder/AUT/home/0_D_7to2.png";
const image_angle02_08 ="irastoHIT/grounder/AUT/home/0_D_8to2.png";
const image_angle02_09 ="irastoHIT/grounder/AUT/home/0_D_9to2.png";

const imageBBB ="irastoDI/0_A_deadball.png"; //デッドボール画像

const imageCCC ="irastoHIT/1_A_RH.png"; //ランニングホームラン

const baseAX = 150, baseAY = 49;
const baseBX = 150, baseBY = 135;
const baseCX = 150, baseCY = 221;
const offsetX = 100;

const maxA = 3;
const maxB = 3;
const maxOUT = 2;


const field = document.getElementById("field");
const board = document.getElementById("board");
const mainImage = document.getElementById("mainImage");
const imageContainer = document.getElementById("imageContainer");
const historyList = document.getElementById("historyList");
const groundButtons = document.getElementById("groundButtons");
const Hitype = document.getElementById("Hitype");

const originalBoardWidth = 500;

// グローバルに basePositions 情報を保持（flyImg を含む）
const basePositionsGlobal = [
  {id: '1', baseLeft: -303, baseTop: 440, flyImg: imageAA, groundImg: imageJJ, lineImg: imageSS},
  {id: '2', baseLeft: -303, baseTop: 520, flyImg: imageBB, groundImg: imageKK, lineImg: imageTT},
  {id: '3', baseLeft: -244, baseTop: 440, flyImg: imageCC, groundImg: imageLL, lineImg: imageUU},
  {id: '4', baseLeft: -256, baseTop: 385, flyImg: imageDD, groundImg: imageMM, lineImg: imageVV},
  {id: '5', baseLeft: -360, baseTop: 440, flyImg: imageEE, groundImg: imageNN, lineImg: imageWW},
  {id: '6', baseLeft: -350, baseTop: 385, flyImg: imageFF, groundImg: imageOO, lineImg: imageXX},
  {id: '7', baseLeft: -450, baseTop: 270, flyImg: imageGG, groundImg: imagePP, lineImg: imageYY},
  {id: '8', baseLeft: -303, baseTop: 200, flyImg: imageHH, groundImg: imageQQ, lineImg: imageZZ},
  {id: '9', baseLeft: -156, baseTop: 270, flyImg: imageII, groundImg: imageRR, lineImg: imageAAA},
  // ホームラン用画像ボタン（位置のみ、homeImg は既存画像を使用）
  {id: ' ', baseLeft: -303, baseTop: 78,  homeImg: imageV},
  {id: ' ', baseLeft: -558, baseTop: 160, homeImg: imageU},
  {id: ' ', baseLeft: -48,  baseTop: 160, homeImg: imageW},
];

// ===========================================================
// 既存の let 宣言に追加
// ===========================================================
let countA = 0, countB = 0, outCount = 0;
let placedImages = [];
let overlayImages = [];
let history = [];
let stateStack = [];
let specialImageAdded = false;
let buttonsLocked = false;
let SANSHINaddded = false;

let foulMode = false;
let foulPrevCountB = 1;

// 追加：ファウルでの「仮増分」を表すフラグ
let pendingFoulIncrement = false;

// ★ 追加：打つモードのフラグ
let hitMode = false;
// 一時的に押された打球位置を保持（決定ボタンで確定）
let pendingHitPosition = null;
// ゴロ＋アウトで送球先選択を待っている状態か
let awaitingThrowSelection = false;

// ...existing code...

// 戻るボタンのイベントはファイル内で一箇所にまとめています
// （重複登録を避けるため最下部の登録を使用）

// ...existing code...







// ===========================================================
// ★ 追加：打つモードの後処理：UIを元に戻す
// ===========================================================
function exitHitModeCleanup() {
  hitMode = false;
  // 戻すUI
  document.getElementById("btnStrike").style.display = "inline-block";
  document.getElementById("btnBall").style.display = "inline-block";
  document.getElementById("btnFoul").style.display = "inline-block";
  document.getElementById("btnHit").style.display = "inline-block";
  document.getElementById("btnUndo").style.display = "inline-block";
  document.getElementById("btndead").style.display = "inline-block";
  document.getElementById("btnClear").style.display = "inline-block";
  document.getElementById("btnPosition").style.display = "inline-block";
  // ★ Hitypeも非表示に
  document.getElementById("Hitype").style.border = "none";
  document.getElementById("Hitype").style.display = "none";
  document.getElementById("Hit_result").style.display = "none";
  document.getElementById("errorMsg").style.display = "none"; // ★ エラーメッセージも非表示に  
  document.querySelectorAll('input[name="fruit"]').forEach(r => {
  r.checked = false;
});

  
  // ground buttons も消す
  removeGroundIMButtons();
}

// ===== 打つボタン =====
document.getElementById("btnHit").addEventListener("click", () => {
  if (buttonsLocked) return;
  saveState();
  
  // ★ 打つモードを開始
  hitMode = true;
  
  // ★ ボタンUIを切り替え（ファウルモードと同様）
  document.getElementById("btnStrike").style.display = "none";
  document.getElementById("btnBall").style.display = "none";
  document.getElementById("btnFoul").style.display = "none";
  document.getElementById("btnHit").style.display = "none";
  document.getElementById("btndead").style.display = "none";
  document.getElementById("btnClear").style.display = "none";
  document.getElementById("btnUndo").style.display = "inline-block"; // ★ 戻るボタンは残す
  document.getElementById("Hitype").style.display = "block"; // ★ Hitypeを表示
  document.getElementById("Hitype").style.border = "none";
  document.getElementById("Hit_result").style.display = "none";
  document.getElementById("btnPosition").style.display = "none";
  document.getElementById("errorMsg").style.display = "none"; // ★ エラーメッセージも非表示に  
  document.querySelectorAll('input[name="fruit"]').forEach(r => {
  r.checked = false;
});


  // グラウンド上にボタンを表示
  showGroundHitButtons();
});

// ...existing code...

// ===========================================================
// 状態保存・復元（改良版）
// ===========================================================
function saveState() {
  stateStack.push({
    placedImages: placedImages.map(p => ({
      type: p.type,
      left: p.element.style.left,
      top: p.element.style.top,
      width: p.element.style.width
    })),
    overlayImages: overlayImages.map(img => ({
      src: img.src,
      type: img.dataset.type,
      left: img.style.left || "",
      top: img.style.top || "",
      width: img.style.width || ""
    })),
    countA, countB, outCount, history: [...history],
    specialImageAdded, buttonsLocked,
    // ファウル関連も保存
    foulMode,
    foulPrevCountB,
    pendingFoulIncrement,
    // ポジションモードも保存
    isPositionMode
  });
}

function restoreState() {
  if (stateStack.length === 0) return;

  // 現在の DOM 上の画像を削除
  placedImages.forEach(p => { if (p.element.parentNode) field.removeChild(p.element); });
  overlayImages.forEach(img => { if (img.parentNode) imageContainer.removeChild(img); });

  const s = stateStack.pop();

  // 基本状態を復元
  countA = s.countA;
  countB = s.countB;
  outCount = s.outCount;
  history = [...s.history];
  specialImageAdded = s.specialImageAdded;
  buttonsLocked = s.buttonsLocked;

  // ファウル関連も復元
  foulMode = !!s.foulMode;
  foulPrevCountB = (typeof s.foulPrevCountB === 'number') ? s.foulPrevCountB : 0;
  pendingFoulIncrement = !!s.pendingFoulIncrement;

  // ポジションモード状態も復元
  isPositionMode = !!s.isPositionMode;

  placedImages = [];
  overlayImages = [];

  // placedImages を復元（DOM 再作成）
  s.placedImages.forEach(p => {
    const img = document.createElement("img");
    img.src = (p.type === 'A') ? imageA : (p.type === 'B') ? imageB : imageOUT;
    img.style.position = "absolute";
    if (p.left) img.style.left = p.left;
    if (p.top) img.style.top = p.top;
    if (p.width) img.style.width = p.width;
    field.appendChild(img);
    placedImages.push({ type: p.type, element: img });
  });

  // overlayImages を復元（style も復元）
  s.overlayImages.forEach(p => {
    const img = document.createElement("img");
    img.src = p.src;
    img.classList.add(p.type === 'E' ? "special-image" : "overlay");
    img.dataset.type = p.type;
    if (p.left) img.style.left = p.left;
    if (p.top) img.style.top = p.top;
    if (p.width) img.style.width = p.width;
    imageContainer.appendChild(img);
    overlayImages.push(img);
  });

  // UI（foulBox等）をファウル状態に合わせる
  if (foulMode) {
    document.getElementById("btnStrike").style.display = "none";
    document.getElementById("btnBall").style.display = "none";
    document.getElementById("btnFoul").style.display = "none";
    document.getElementById("btnHit").style.display = "none"; //★
    document.getElementById("btndead").style.display = "none"; //★
    document.getElementById("btnClear").style.display = "none";
    document.getElementById("btnPosition").style.display = "none";
    document.getElementById("ground_po_container").style.display = "none";
    document.getElementById("Hitype").style.border = "none";
    document.getElementById("Hit_result").style.display = "none";
    document.getElementById("foulBox").style.display = "block";
    document.getElementById("btnPosition").style.display = "none";
    document.getElementById("errorMsg").style.display = "none"; // ★ エラーメッセージも非表示に  
    document.querySelectorAll('input[name="fruit"]').forEach(r => {
    r.checked = false;
});

  } else {
    document.getElementById("btnStrike").style.display = "inline-block";
    document.getElementById("btnBall").style.display = "inline-block";
    document.getElementById("btnFoul").style.display = "inline-block";
    document.getElementById("btnHit").style.display = "inline-block"; //★
    document.getElementById("Hitype").style.border = "none";
    document.getElementById("Hit_result").style.display = "none";
    document.getElementById("foulBox").style.display = "none";
    document.getElementById("btndead").style.display = "inline-block"; //★
    document.getElementById("btnClear").style.display = "inline-block";
    document.getElementById("btnPosition").style.display = "inline-block";
    // ポジションモード状態に応じて表示切替
    if (isPositionMode) {
      document.getElementById("ground_po_container").style.display = "block";
      document.getElementById("ground_po_container").style.zIndex = "100";
      document.getElementById("Position_01").style.display = "block";
      document.getElementById("btnStrike").style.display = "none";
      document.getElementById("btnBall").style.display = "none";
      document.getElementById("btnFoul").style.display = "none";
      document.getElementById("btnHit").style.display = "none";
      document.getElementById("btndead").style.display = "none";
      document.getElementById("clearBox").style.display = "none";
    } else {
      document.getElementById("ground_po_container").style.display = "none";
      document.getElementById("Position_01").style.display = "none";
    }
    document.getElementById("errorMsg").style.display = "none"; // ★ エラーメッセージも非表示に  
    document.querySelectorAll('input[name="fruit"]').forEach(r => {
    r.checked = false;
});

  }

  // ★ 打つモード以外の時は#Hitypeを隠す
  document.getElementById("Hitype").style.display = "none";

  updateOverlayPositions();
  updateHistoryView();
}

// ===========================================================
//   ボタン動作
// ===========================================================
//=====ストライク=====
document.getElementById("btnStrike").addEventListener("click", () => {
  if (buttonsLocked) return;

  const scale = board.clientWidth / originalBoardWidth;
  saveState();

  // ===== スコアボード側 =====
  if (countB === 2) {
    // 3回目 → アウト処理
    placedImages.forEach(p => {
      if (p.type === 'A' || p.type === 'B') field.removeChild(p.element);
    });
    placedImages = placedImages.filter(p => p.type === 'OUT');
    countA = 0; countB = 0;
    history.push("アウト");

    if (outCount < maxOUT) {
      const img = document.createElement("img");
      img.src = imageOUT;
      img.style.position = "absolute";
      img.style.width = (80 * scale) + "px";
      img.style.left = (baseCX * scale + offsetX * scale * outCount) + "px";
      img.style.top = (baseCY * scale) + "px";
      field.appendChild(img);
      placedImages.push({ type: 'OUT', element: img });
      outCount++;
    }

    // ===== スコア表側（E画像追加） =====
    const imgE = document.createElement("img");
    imgE.src = imageE;
    imgE.classList.add("special-image");
    imgE.dataset.type = "E";
    imageContainer.appendChild(imgE);
    overlayImages.push(imgE);
    specialImageAdded = true;
    buttonsLocked = true;

    // ★ ここを修正：画像CをEの前に挿入
    const imgC = document.createElement("img");
    imgC.src = imageD;
    imgC.classList.add("overlay");
    imgC.dataset.type = "C";
    imageContainer.appendChild(imgC);

    // Eの直前にCを挿入
    const indexE = overlayImages.findIndex(img => img.dataset.type === 'E');
    if (indexE >= 0) {
      overlayImages.splice(indexE, 0, imgC);  // ← Eの前にCを入れる
    } else {
      overlayImages.push(imgC);
    }

    // 三振の画像
    const imgF = document.createElement("img");
    imgF.src = "irastoDI/0_A_strikeout.png";
    imgF.classList.add("overlay");
    imgF.style.width = "31%";
    imgF.style.top = "58%";
    imgF.style.left = "65%";
    imgF.style.zIndex = 100;
    imgF.dataset.type = "F";
    imageContainer.appendChild(imgF);
    overlayImages.push(imgF);

    updateOverlayPositions();

  } else {
    // 通常ストライク
    const img = document.createElement("img");
    img.src = imageB;
    img.style.position = "absolute";
    img.style.width = (80 * scale) + "px";
    img.style.left = (baseBX * scale + offsetX * scale * countB) + "px";
    img.style.top = (baseBY * scale) + "px";
    field.appendChild(img);
    placedImages.push({ type: 'B', element: img });
    countB++;
    history.push("ストライク");

    // スコア表にも追加
    const imgD = document.createElement("img");
    imgD.src = imageD;
    imgD.classList.add("overlay");
    imgD.dataset.type = "D";
    imageContainer.appendChild(imgD);
    overlayImages.push(imgD);
    updateOverlayPositions();
  }

  updateHistoryView();
});

// ===== ボールボタン =====
document.getElementById("btnBall").addEventListener("click", () => {
  if (buttonsLocked) return;

  const scale = board.clientWidth / originalBoardWidth;
  saveState();

  // ★ ボール4回 → フォアボール処理
  if (countA === 3) {
    // 右下ボードのカウント画像（AとB）を消す
    placedImages.forEach(p => {
      if (p.type === 'A' || p.type === 'B') field.removeChild(p.element);
    });
    placedImages = placedImages.filter(p => p.type === 'OUT'); // OUTだけ残す

    // カウントリセット
    countA = 0;
    countB = 0;

    // 履歴に追加
    history.push("フォアボール");

    // 同時にボール出す
    const imgC2 = document.createElement("img");
    imgC2.src = imageC;
    imgC2.classList.add("overlay");
    imgC2.dataset.type = "C";
    imageContainer.appendChild(imgC2);
    overlayImages.push(imgC2);


    // スコア表に四球画像追加（imageG）
    const imgG = document.createElement("img");
    imgG.src = imageG;       // ← スコア表でボール用に使っている画像
    imgG.classList.add("overlay");
    imgG.dataset.type = "G";
    imgG.style.width = "31%";
    imgG.style.top = "58%";
    imgG.style.left = "65%";
    imgG.style.zIndex = 100;
    imageContainer.appendChild(imgG);
    overlayImages.push(imgG);


    updateOverlayPositions();
    updateHistoryView();

    // 打席終了のためロック（※継続するならこの1行を削除）
    buttonsLocked = true;

    return; // ← 重要：ここで処理終了
  }

  //  通常のボール追加（これより下は今のまま）
  if (countA >= maxA) return;
  const img = document.createElement("img");
  img.src = imageA;
  img.style.position = "absolute";
  img.style.width = (80 * scale) + "px";
  img.style.left = (baseAX * scale + offsetX * scale * countA) + "px";
  img.style.top = (baseAY * scale) + "px";
  field.appendChild(img);
  placedImages.push({ type: 'A', element: img });
  countA++;
  history.push("ボール");

  const imgC2 = document.createElement("img");
  imgC2.src = imageC;
  imgC2.classList.add("overlay");
  imgC2.dataset.type = "C";
  imageContainer.appendChild(imgC2);
  overlayImages.push(imgC2);
  updateOverlayPositions();

  updateHistoryView();
});

// ===== ファウルボタン =====
document.getElementById("btnFoul").addEventListener("click", () => {
  if (buttonsLocked) return;

  // 状態保存（現状の状態を保存しておく）
  saveState();

  // ファウルモード開始
  foulMode = true;

  // ファウルでストライクが増えるかどうか（ただし2ストライク以上は増えない）
  // ここでは直接 countB を増やさず「保留フラグ」を立てる方式に変更
  if (countB < 2) {
    pendingFoulIncrement = true;
    // foulPrevCountB は確認用に残す（デバッグ等で使える）
    foulPrevCountB = countB;
  } else {
    pendingFoulIncrement = false;
  }

  // UI: ストライク・ボールを隠し、セーフ／アウトを表示
  document.getElementById("btnStrike").style.display = "none";
  document.getElementById("btnBall").style.display = "none";
  document.getElementById("btnFoul").style.display = "none";
  document.getElementById("btnHit").style.display = "none"; //★
  document.getElementById("btndead").style.display = "none"; //★
  document.getElementById("btnClear").style.display = "none";
  document.getElementById("btnPosition").style.display = "none";
  document.getElementById("ground_po_container").style.display = "none";
  // 既存の戻るボタンはファウル時は隠す（foulBox 内の戻るを使うため）
  document.getElementById("btnUndo").style.display = "none";
  document.getElementById("foulBox").style.display = "block";

  updateHistoryView();
});

// セーフ処理（ファウルからの分岐）
document.getElementById("btnSafe").addEventListener("click", () => {
  if (!foulMode) return;
  saveState();

  // スコア表に画像Hを出す（これは従来どおり）
  const imgH = document.createElement("img");
  imgH.src = imageH;
  imgH.classList.add("overlay");
  imgH.dataset.type = "H";
  imageContainer.appendChild(imgH);
  overlayImages.push(imgH);
  updateOverlayPositions();

  // pendingFoulIncrement が立っていたら、ここで正式に countB を増やして
  // ボードにストライク画像を追加する（indexは増やす前の countB を使う）
  if (pendingFoulIncrement) {
    const scale = board.clientWidth / originalBoardWidth;
    // 正式に増やす（配置位置は増やす前の countB をインデックスに使う）
    const idx = countB; // 現在の countB が追加位置（0-based）
    countB++;
    const img = document.createElement("img");
    img.src = imageB;
    img.style.position = "absolute";
    img.style.width = (80 * scale) + "px";
    img.style.left = (baseBX * scale + offsetX * scale * idx) + "px";
    img.style.top = (baseBY * scale) + "px";
    field.appendChild(img);
    placedImages.push({ type: 'B', element: img });

    history.push("セーフ");
  } else {
    // 既に2ストライク以上で増えない時は履歴のみ
    history.push("セーフ");
  }

  // 保留フラグをクリアしてファウルモード終了
  pendingFoulIncrement = false;
  exitFoulModeCleanup();
  updateHistoryView();
});


// アウトボタン押下（ファウル分岐）
document.getElementById("btnOut").addEventListener("click", () => {
  if (!foulMode) return;

  // グラウンド上に画像I~Mのボタンを表示する
  showGroundIMButtons();
});

// 戻るボタン
document.getElementById("btnUndo").addEventListener("click", () => {
  // ポジションモード中かどうかを判定
  if (isPositionMode) {
    // ポジションビューから戻る
    document.getElementById("Position_01").style.display = "none";
    const groundPoContainer = document.getElementById("ground_po_container");
    groundPoContainer.style.display = "none";
    groundPoContainer.style.zIndex = "";
    
    // ボタンを個別に表示
    document.getElementById("btnStrike").style.display = "inline-block";
    document.getElementById("btnBall").style.display = "inline-block";
    document.getElementById("btnFoul").style.display = "inline-block";
    document.getElementById("btnHit").style.display = "inline-block";
    document.getElementById("btndead").style.display = "inline-block";
    document.getElementById("clearBox").style.display = "block";
    
    isPositionMode = false;
  } else {
    // 通常の戻る処理
    removeGroundIMButtons();
    restoreState();
    document.getElementById("btnPosition").style.display = "inline-block";
    document.getElementById("clearBox").style.display = "block";
    if (foulMode) {
      exitFoulModeCleanup();
    }
    if (hitMode) {
      exitHitModeCleanup();
    }
  }
});

// ★ 打つ機能は上部の btnHit ハンドラで処理しています（重複登録を削除しました）

// ==========================
//   グラウンド上の I~M ボタンの生成 / 削除
//   （位置はここで設定可能。ユーザーが後で調整できるようにコメント）
// ===========================================================
function showGroundIMButtons() {
  // すでに表示中なら何もしない
  if (groundButtons.querySelectorAll('.ground-button').length > 0) return;

  // pointer-events を有効にしてクリックを受け付ける
  groundButtons.style.pointerEvents = 'auto';

  // グラウンド画像そのもの
  const groundImg = document.querySelector("#ground img");

  // スケール計算（元画像サイズ 750）
  const scale = groundImg ? groundImg.width / 750 : 1;

  // ★ グラウンド画像の画面上の位置を取得
  const rect = groundImg.getBoundingClientRect();
  const offsetLeft = rect.left;   // X方向の移動量
  const offsetTop  = rect.top;    // Y方向の移動量

  // ボタン配置データ
  const positions = [
    {id: '2', left: -303, top: 520, img: imageI, outImg: imageN},
    {id: '5', left: -400, top: 440, img: imageJ, outImg: imageP},
    {id: '7', left: -520, top: 330, img: imageK, outImg: imageQ},
    {id: '3', left: -206, top: 440, img: imageL, outImg: imageO},
    {id: '9', left: -83, top: 330, img: imageM, outImg: imageR}
  ];

  positions.forEach(pos => {
    const b = document.createElement('button');
    b.className = 'ground-button';
    b.textContent = pos.id;

    // ★ グラウンド画像の縮小＆移動の両方に追従！
    b.style.left = (pos.left * scale + offsetLeft) + 'px';
    b.style.top  = (pos.top  * scale + offsetTop ) + 'px';

    b.style.width = (50 * scale) + 'px';
    b.style.height = (40 * scale) + 'px';
    b.style.fontSize = (14 * scale) + 'px';

    b.dataset.outImg = pos.outImg;
    b.dataset.label = pos.id;

    b.addEventListener('click', onGroundButtonClicked);
    groundButtons.appendChild(b);
  });
}


function removeGroundIMButtons() {
  groundButtons.style.pointerEvents = 'none';
  while (groundButtons.firstChild) groundButtons.removeChild(groundButtons.firstChild);
}

// 地面のボタンが押されたときの処理（アウト決定）
function onGroundButtonClicked(e) {
  const btn = e.currentTarget;
  // saveState してから変更（undoで戻るため）
  saveState();

  // ここでアウト処理（ストライクが3回のときと同じ挙動）
  // まず右下ボードのA/Bを消す
  placedImages.forEach(p => {
    if (p.type === 'A' || p.type === 'B') {
      if (p.element.parentNode) field.removeChild(p.element);
    }
  });
  placedImages = placedImages.filter(p => p.type === 'OUT');
  countA = 0; countB = 0;
  history.push('アウト');

  const scale = board.clientWidth / originalBoardWidth;
  if (outCount < maxOUT) {
    const img = document.createElement('img');
    img.src = imageOUT;
    img.style.position = 'absolute';
    img.style.width = (80 * scale) + 'px';
    img.style.left = (baseCX * scale + offsetX * scale * outCount) + 'px';
    img.style.top = (baseCY * scale) + 'px';
    field.appendChild(img);
    placedImages.push({ type: 'OUT', element: img });
    outCount++;
  }

  // E画像をスコア表側に出す
  const imgE = document.createElement('img');
  imgE.src = imageE;
  imgE.classList.add('special-image');
  imgE.dataset.type = 'E';
  imageContainer.appendChild(imgE);
  overlayImages.push(imgE);
  specialImageAdded = true;

  // スコア表の画像Sの上に選択に対応した画像（N~R）を出す
// ...existing code...
  const outImgSrc = btn.dataset.outImg;
  const outOverlay = document.createElement('img');
  outOverlay.src = outImgSrc;
  outOverlay.classList.add('overlay');
  outOverlay.dataset.type = 'NR'; // 共通タイプ
  outOverlay.style.width = "31%";    // 三振画像と同じ大きさにする
  outOverlay.style.top = "58%";
  outOverlay.style.left = "65%";
  outOverlay.style.zIndex = 100;     // 必要なら同じ zIndex に
  imageContainer.appendChild(outOverlay);
  overlayImages.push(outOverlay);
  // ...existing code...


  // ground buttons は消す
  removeGroundIMButtons();
  foulMode = false;
  // ground_po_containerを非表示化
  document.getElementById("ground_po_container").style.display = "none";
  exitFoulModeCleanup();
  updateOverlayPositions();
  updateHistoryView();
  buttonsLocked = true;
}

//ヒット


// ===========================================================
//   ファウルモードの後処理：UIを元に戻す
// ===========================================================
function exitFoulModeCleanup() {
  foulMode = false;
  // 戻すUI
  document.getElementById("btnStrike").style.display = "inline-block";
  document.getElementById("btnBall").style.display = "inline-block";
  document.getElementById("btnFoul").style.display = "inline-block";
  document.getElementById("btnHit").style.display = "inline-block"; //★
  document.getElementById("btndead").style.display = "inline-block"; //★
  document.getElementById("btnClear").style.display = "inline-block";
  document.getElementById("btnPosition").style.display = "inline-block";
    // 元の戻るボタンも復活させる
  document.getElementById("btnUndo").style.display = "inline-block";
  document.getElementById("foulBox").style.display = "none";
  // ground buttons も消す
  removeGroundIMButtons();
}

// ===========================================================
//   スコア表側の画像位置調整
// ===========================================================

// ===========================================================
//   スコア表側の画像位置を自動調整
// ===========================================================
function updateOverlayPositions() {
  // ★ 現在の画像の高さを取得（リサイズに応じて変わる）
  const imgHeight = mainImage.clientHeight;
  
  // ★ 画像間隔を画像サイズに比例させる
  const offset = imgHeight * -0.1;        // 画像間隔（10%）
  const startOffset = imgHeight * 0.05;   // 開始位置（5%）

  // ★ すべての画像に対して位置を再計算
  overlayImages.forEach((img, i) => {
    // E/F/G/NR/FB/GB/LB/THROW は固定位置なので除外
    if (["E","F","G","NR","FB","GB","LB","THROW","HR"].includes(img.dataset.type)) return;

    // ★ Y座標を動的に計算（画像の高さに応じて自動調整）
    img.style.top = `${startOffset - offset * i}px`;
    img.style.zIndex = 100 + i;  // 重なり順も設定
  });
}

function updateHistoryView() {
  historyList.textContent = history.join(" → ");
}

const resizeObserver = new ResizeObserver(updateOverlayPositions);
resizeObserver.observe(mainImage);


//★==========================================================
//   打つ機能用コード
// ===========================================================
//   打つ時用ボタン（グラウンドサイズに応じてスケーリング）
// ===========================================================
function showGroundHitButtons() {
  // すでに表示中なら何もしない
  if (groundButtons.querySelectorAll('.ground-button').length > 0) return;

  // pointer-events を有効にしてクリックを受け付ける
  groundButtons.style.pointerEvents = 'auto';

  // グラウンド画像の取得
  const groundImg = document.querySelector("#ground img");
  if (!groundImg) return;

  // グラウンド画像のスケール比率（元サイズ 750px）
  const scale = groundImg.width / 750;

  document.getElementById("Hitype").style.display = "block"

  // ===============================
  // ★ 正しい絶対位置の取得（重要）
  // ===============================
  const rect = groundImg.getBoundingClientRect();
  const offsetX = rect.left;   // 画面左端からの位置
  const offsetY = rect.top;    // 画面上端からの位置

  // ===============================
  // ボタン配置用の相対座標
  // ===============================
  // 配置はグローバル定義を参照（flyImg を含む）
  const basePositions = basePositionsGlobal;

  // ===============================
  //       ボタン生成ループ
  // ===============================
  basePositions.forEach(pos => {
    const isImageButton = pos.homeImg != null;

    if (isImageButton) {
      // -------------------------
      //   画像ボタン（ホームラン）
      // -------------------------
      const btn = document.createElement('button');
      btn.className = 'ground-button';
      btn.textContent = pos.id || ' ';

      // ★ 完全追従する left / top
      btn.style.left = (offsetX + pos.baseLeft * scale) + "px";
      btn.style.top  = (offsetY + pos.baseTop  * scale) + "px";

      btn.style.width = (50 * scale) + 'px';
      btn.style.height = (40 * scale) + 'px';
      btn.style.fontSize = (14 * scale) + 'px';

      // image ボタン識別用
      btn.dataset.homeImg = pos.homeImg;
      btn.dataset.label = pos.id;

      btn.addEventListener('click', onHomeButtonClicked);

      groundButtons.appendChild(btn);

    } else {

      // -------------------------
      //     通常ボタン
      // -------------------------
      const b = document.createElement('button');
      b.className = 'ground-button';
      b.textContent = pos.id;

      // ★ 完全追従する left / top
      b.style.left = (offsetX + pos.baseLeft * scale) + "px";
      b.style.top  = (offsetY + pos.baseTop * scale) + "px";

      b.style.width = (50 * scale) + 'px';
      b.style.height = (40 * scale) + 'px';
      b.style.fontSize = (14 * scale) + 'px';

      b.dataset.label = pos.id;

      b.addEventListener('click', onHitButtonClicked);
      groundButtons.appendChild(b);
    }
  });
}


// 打つ時のホームランボタンが押されたときの処理
function onHomeButtonClicked(e) {
  const btn = e.currentTarget;
  const hitPosition = btn.dataset.label;

  const homeImgSrc = btn.dataset.homeImg;
  if (!homeImgSrc) return;

  // ラジオ選択チェック（未選択ならエラーメッセージ表示して処理を止める）
  const selected = document.querySelector('input[name="fruit"]:checked');


  const homeOverlay = document.createElement('img');
  homeOverlay.src = homeImgSrc;
  homeOverlay.classList.add('overlay');
  homeOverlay.dataset.type = 'HR';
  homeOverlay.style.width = "31%";
  homeOverlay.style.top = "58%";
  homeOverlay.style.left = "65%";
  homeOverlay.style.zIndex = 100;
  imageContainer.appendChild(homeOverlay);
  overlayImages.push(homeOverlay);

  //ホームランの枠
  const home_01Overlay = document.createElement('img');
  home_01Overlay.src = imageT;
  home_01Overlay.classList.add('score-point');
  home_01Overlay.dataset.type = 'HR';
  home_01Overlay.style.width = "98%";
  home_01Overlay.style.top = "1.15%";
  home_01Overlay.style.left = "1%";
  home_01Overlay.style.zIndex = 100;
  imageContainer.appendChild(home_01Overlay);
  overlayImages.push(home_01Overlay);
  //自責点の画像
  const home_02Overlay = document.createElement('img');
  home_02Overlay.src = imageX;
  home_02Overlay.classList.add('score-point');
  home_02Overlay.dataset.type = 'HR';
  home_02Overlay.style.width = "30%";
  home_02Overlay.style.top = "33.2%";
  home_02Overlay.style.left = "41.8%";
  home_02Overlay.style.zIndex = 100;
  imageContainer.appendChild(home_02Overlay);
  overlayImages.push(home_02Overlay);

  console.log('ホームランボタンを押した位置：' + hitPosition);
  
  placedImages.forEach(p => {
      if (p.type === 'A' || p.type === 'B') field.removeChild(p.element);
    });
    placedImages = placedImages.filter(p => p.type === 'OUT'); // OUTだけ残す
  //カウントリセット必要ないなら消す
  countA = 0;
  countB = 0;

  removeGroundIMButtons();
  history.push('ホームラン');
  updateHistoryView();
  exitHitModeCleanup();
  buttonsLocked = true;
}

// 打つ時のボタンが押されたときの処理
function onHitButtonClicked(e) {
  const btn = e.currentTarget;
  const hitPosition = btn.dataset.label;
  // 非ホームランの打球位置が押されたら、まず Hitype の選択を確認
  const selected = document.querySelector('input[name="fruit"]:checked');
  const hitypeBox = document.getElementById("Hitype");

  if (!selected) {
    // 選択されていなければエラー表示（既存の挙動を踏襲）
    alert("ボタンを選択してください");
    if (hitypeBox) hitypeBox.style.border = "2px solid red";
    return;
  }

  if (hitypeBox) hitypeBox.style.border = "none";

  // ground の既存ボタンを消す（basePositions を消す意味）
  removeGroundIMButtons();

  // 決定処理を行うために一時的に位置を保持し、結果選択 UI を表示
  pendingHitPosition = hitPosition;
  const hitResultDiv = document.getElementById('Hit_result');
  if (hitResultDiv) hitResultDiv.style.display = 'inline-block';
}

// 決定ボタンの処理（打つモードを終了して履歴に追加）
document.getElementById('btnHitResult').addEventListener('click', () => {
  if (!pendingHitPosition) return;

  const outcome = document.querySelector('input[name="hitOutcome"]:checked');
  if (!outcome) {
    alert('結果を選択してください');
    return;
  }

  // 履歴に追加（位置と結果を記録）
  history.push('打つ(' + pendingHitPosition + '): ' + outcome.value);

  //画像をスコア表に表示

  // Hitype（ゴロ/ライナー/フライ）でフライが選ばれていたら、
  const hitype = document.querySelector('input[name="fruit"]:checked');
  
  // ★ フライの処理（既存）
  if (hitype && hitype.value === 'フライ') {
    // basePositionsGlobal の flyImg を使って該当画像を表示
    const posEntry = basePositionsGlobal.find(p => p.id === pendingHitPosition);
    if (posEntry && posEntry.flyImg) {
      const flySrc = posEntry.flyImg;
      const imgFly = document.createElement('img');
      imgFly.src = flySrc;
      imgFly.classList.add('overlay');
      imgFly.dataset.type = 'FB';
      imgFly.style.width = "31%";
      imgFly.style.top = "58%";
      imgFly.style.left = "65%";
      imgFly.style.zIndex = 100;
      countA = 0;
      countB = 0;
      placedImages.forEach(p => {  //ボードのストライクとボードを消す（消してもいい）
      if (p.type === 'A' || p.type === 'B') field.removeChild(p.element);
      });
      placedImages = placedImages.filter(p => p.type === 'OUT');
      imageContainer.appendChild(imgFly);
      overlayImages.push(imgFly);
      updateOverlayPositions();
    }
  }
  
  // ★ ゴロの処理（新規追加）
  else if (hitype && hitype.value === 'ゴロ') {
    // 決定時に結果が「アウト」の場合はここで送球画像を出さない（送球先選択で追加する）
    if (!(outcome && outcome.value === 'アウト')) {
      const posEntry = basePositionsGlobal.find(p => p.id === pendingHitPosition);
      if (posEntry && posEntry.groundImg) {  // groundImg という新しいプロパティを使用
        const groundSrc = posEntry.groundImg;
        const imgGround = document.createElement('img');
        imgGround.src = groundSrc;
        imgGround.classList.add('overlay');
        imgGround.dataset.type = 'GB';  // Ground Ball 用の型
        imgGround.style.width = "31%";
        imgGround.style.top = "58%";
        imgGround.style.left = "65%";
        imgGround.style.zIndex = 100;
        countA = 0;
        countB = 0;
        placedImages.forEach(p => {  //ボードのストライクとボードを消す（消してもいい）
        if (p.type === 'A' || p.type === 'B') field.removeChild(p.element);
        });
        placedImages = placedImages.filter(p => p.type === 'OUT');
        imageContainer.appendChild(imgGround);
        overlayImages.push(imgGround);
        updateOverlayPositions();
      }
    } else {
      // ゴロ＋アウト：ここでは送球先選択を待つので何もしない
    }
  }
  
  // ★ ライナーの処理（新規追加）
  else if (hitype && hitype.value === 'ライナー') {
    const posEntry = basePositionsGlobal.find(p => p.id === pendingHitPosition);
    if (posEntry && posEntry.lineImg) {  // ★ lineImg という新しいプロパティを使用
      const lineSrc = posEntry.lineImg;
      const imgLine = document.createElement('img');
      imgLine.src = lineSrc;
      imgLine.classList.add('overlay');
      imgLine.dataset.type = 'LB';  // ★ Line Ball 用の型
      imgLine.style.width = "31%";
      imgLine.style.top = "58%";
      imgLine.style.left = "65%";
      imgLine.style.zIndex = 100;
      countA = 0;
      countB = 0;
      placedImages.forEach(p => {  //ボードのストライクとボードを消す（消してもいい）
      if (p.type === 'A' || p.type === 'B') field.removeChild(p.element);
      });
      placedImages = placedImages.filter(p => p.type === 'OUT');
      imageContainer.appendChild(imgLine);
      overlayImages.push(imgLine);
      updateOverlayPositions();
    }
  }

  //打った種類の後に入力するやつ
  const Hit_result = document.querySelector('input[name="hitOutcome"]:checked');
  // ★アウト処理
  if (Hit_result && Hit_result.value === 'アウト') {
    const imgE = document.createElement("img");
    imgE.src = imageE;
    imgE.classList.add("special-image");
    imgE.dataset.type = "E";
    imageContainer.appendChild(imgE);
    overlayImages.push(imgE);
    specialImageAdded = true;
    // ===== ボード上に OUT 画像を 1 つ表示（打つモードでアウト選択時） =====
    // 既存の A/B カウント画像を消してリセット
    countA = 0;
    countB = 0;
    placedImages.forEach(p => { if (p.type === 'A' || p.type === 'B') { if (p.element.parentNode) field.removeChild(p.element); } });
    placedImages = placedImages.filter(p => p.type === 'OUT');
    // ボードのスケールに合わせて OUT 画像を配置（他のアウト処理と同様）
    const scale = board.clientWidth / originalBoardWidth;
    if (outCount < maxOUT) {
      const outImg = document.createElement('img');
      outImg.src = imageOUT;
      outImg.style.position = 'absolute';
      outImg.style.width = (80 * scale) + 'px';
      outImg.style.left = (baseCX * scale + offsetX * scale * outCount) + 'px';
      outImg.style.top = (baseCY * scale) + 'px';
      field.appendChild(outImg);
      placedImages.push({ type: 'OUT', element: outImg });
      outCount++;
    }
    
    // ゴロの場合は送球先選択を表示して確定を待つ
    if (hitype && hitype.value === 'ゴロ') {
      const whereAngru = document.getElementById('where_angle');
      if (whereAngru) whereAngru.style.display = 'block';
      awaitingThrowSelection = true;
      // 他の操作は一旦ロック
      buttonsLocked = true;
    } else {
      // 通常のアウトは従来どおり
      const whereAngru = document.getElementById('where_angle');
      if (whereAngru) whereAngru.style.display = 'none';
      awaitingThrowSelection = false;
      buttonsLocked = true;
    }
  }

  //一塁の場合
  else if (Hit_result && Hit_result.value === '一塁まで進む') {
    const home_01Overlay = document.createElement('img');
    home_01Overlay.src = image_distance01;
    home_01Overlay.classList.add('score-point');
    home_01Overlay.dataset.type = 'HR';
    home_01Overlay.style.width = "98%";
    home_01Overlay.style.top = "1.15%";
    home_01Overlay.style.left = "1%";
    home_01Overlay.style.zIndex = 100;
    imageContainer.appendChild(home_01Overlay);
    overlayImages.push(home_01Overlay);
  }

  //二塁の場合
  else if (Hit_result && Hit_result.value === '二塁まで進む') {
    const home_02Overlay = document.createElement('img');
    home_02Overlay.src = image_distance02;
    home_02Overlay.classList.add('score-point');
    home_02Overlay.dataset.type = 'HR';
    home_02Overlay.style.width = "98%";
    home_02Overlay.style.top = "1.15%";
    home_02Overlay.style.left = "1%";
    home_02Overlay.style.zIndex = 100;
    imageContainer.appendChild(home_02Overlay);
    overlayImages.push(home_02Overlay);
  }

  //三塁の場合
  else if (Hit_result && Hit_result.value === '三塁まで進む') {
    const home_01Overlay = document.createElement('img');
    home_01Overlay.src = image_distance03;
    home_01Overlay.classList.add('score-point');
    home_01Overlay.dataset.type = 'HR';
    home_01Overlay.style.width = "98%";
    home_01Overlay.style.top = "1.15%";
    home_01Overlay.style.left = "1%";
    home_01Overlay.style.zIndex = 100;
    imageContainer.appendChild(home_01Overlay);
    overlayImages.push(home_01Overlay);
  }

  //ランニングホームランの場合
  else if (Hit_result && Hit_result.value === 'ランニングホームラン') {
    const home_01Overlay = document.createElement('img');
    home_01Overlay.src = imageT;
    home_01Overlay.classList.add('score-point');
    home_01Overlay.dataset.type = 'HR';
    home_01Overlay.style.width = "98%";
    home_01Overlay.style.top = "1.15%";
    home_01Overlay.style.left = "1%";
    home_01Overlay.style.zIndex = 100;
    imageContainer.appendChild(home_01Overlay);
    overlayImages.push(home_01Overlay);

      //自責点の画像
    const home_02Overlay = document.createElement('img');
    home_02Overlay.src = imageX;
    home_02Overlay.classList.add('score-point');
    home_02Overlay.dataset.type = 'HR';
    home_02Overlay.style.width = "30%";
    home_02Overlay.style.top = "33.2%";
    home_02Overlay.style.left = "41.8%";
    home_02Overlay.style.zIndex = 100;
    imageContainer.appendChild(home_02Overlay);
    overlayImages.push(home_02Overlay);

    //ランニングホームランの画像
    const homeOverlay = document.createElement('img');
    homeOverlay.src = imageCCC;
    homeOverlay.classList.add('overlay');
    homeOverlay.dataset.type = 'HR';
    homeOverlay.style.width = "31%";
    homeOverlay.style.top = "58%";
    homeOverlay.style.left = "15%";
    homeOverlay.style.zIndex = 100;
    imageContainer.appendChild(homeOverlay);
    overlayImages.push(homeOverlay);
  }  

  //ゴロアウト例外の時の場合
  else if (Hit_result && Hit_result.value === 'ゴロでアウト') {
  }

  updateHistoryView();

  // ゴロ＋アウトで送球先選択待ちの場合はここで打つモードを終了しない
  if (!awaitingThrowSelection) {
    // Hit_result と Hitype を非表示にして打つモードを終了
    const hitResultDiv = document.getElementById('Hit_result');
    if (hitResultDiv) hitResultDiv.style.display = 'none';
    document.querySelectorAll('input[name="hitOutcome"]').forEach(r => r.checked = false);
    document.querySelectorAll('input[name="fruit"]').forEach(r => r.checked = false);
    pendingHitPosition = null;
    exitHitModeCleanup();
    buttonsLocked = true;
  } else {
    // 送球先選択待ち：Hit_result は非表示にするが打つモードは継続（pendingHitPosition を保持）
    const hitResultDiv = document.getElementById('Hit_result');
    if (hitResultDiv) hitResultDiv.style.display = 'none';
    document.querySelectorAll('input[name="hitOutcome"]').forEach(r => r.checked = false);
    // Hitype の選択はそのまま残す
  }
});

// ===========================================================
// #where_angle ボタンハンドラー（ゴロ＋アウトの確定）
// ===========================================================
const whereFirstBtn = document.getElementById('where_first');
const whereSecondBtn = document.getElementById('where_second');
const whereThirdBtn = document.getElementById('where_third');
const whereHomeBtn = document.getElementById('where_home');

if (whereFirstBtn) whereFirstBtn.addEventListener('click', () => finalizeThrow('first'));
if (whereSecondBtn) whereSecondBtn.addEventListener('click', () => finalizeThrow('second'));
if (whereThirdBtn) whereThirdBtn.addEventListener('click', () => finalizeThrow('third'));
if (whereHomeBtn) whereHomeBtn.addEventListener('click', () => finalizeThrow('home'));

function finalizeThrow(throwTarget) {
  if (!pendingHitPosition) return;

  // 送球先画像マップ（存在する定数のみ参照）
  const map = {
    '1': { first: image_angle01_01, second: image_angle04_01, third: image_angle05_01, home: image_angle02_01 },
    '2': { first: image_angle01_02, second: image_angle04_02, third: image_angle05_02, home: null },
    '3': { first: image_angle01_04, second: image_angle04_03, third: image_angle05_03, home: image_angle02_03 },
    '4': { first: image_angle01_04, second: image_angle04_05, third: image_angle05_04, home: image_angle02_04 },
    '5': { first: image_angle01_05, second: image_angle04_05, third: image_angle05_06, home: image_angle02_05 },
    '6': { first: image_angle01_06, second: image_angle04_06, third: image_angle05_06, home: image_angle02_06 },
    '7': { first: image_angle01_07, second: image_angle04_07, third: image_angle05_07, home: image_angle02_07 },
    '8': { first: image_angle01_08, second: image_angle04_08, third: image_angle05_08, home: image_angle02_08 },
    '9': { first: image_angle01_09, second: image_angle04_09, third: image_angle05_09, home: image_angle02_09 }
  };

  const data = map[pendingHitPosition];
  const src = data ? data[throwTarget] : null;

  // 送球先画像がなければ groundImg をフォールバック
  let finalSrc = src;
  if (!finalSrc) {
    const posEntry = basePositionsGlobal.find(p => p.id === pendingHitPosition);
    finalSrc = posEntry ? posEntry.groundImg || posEntry.flyImg || posEntry.lineImg : null;
  }
  if (!finalSrc) {
    // なければ何もしない（安全策）
    awaitingThrowSelection = false;
    const whereAngru = document.getElementById('where_angle');
    if (whereAngru) whereAngru.style.display = 'none';
    pendingHitPosition = null;
    exitHitModeCleanup();
    buttonsLocked = true;
    return;
  }

  // 既に同種の送球表示があれば置換
  const existing = overlayImages.find(img => img.dataset.type === 'THROW');
  if (existing) { if (existing.parentNode) imageContainer.removeChild(existing); overlayImages = overlayImages.filter(i => i !== existing); }

  const img = document.createElement('img');
  img.src = finalSrc;
  img.classList.add('overlay');
  img.dataset.type = 'THROW';
  img.style.width = '31%';
  img.style.top = '58%';
  img.style.left = '65%';
  img.style.zIndex = 100;
  imageContainer.appendChild(img);
  overlayImages.push(img);
  updateOverlayPositions();

  // 履歴に追加
  const labels = { first: '一塁', second: '二塁', third: '三塁', home: '本塁' };
  history.push(labels[throwTarget] + 'に送球');
  updateHistoryView();

  // where_angle を隠して打つモードを終了
  const whereAngru = document.getElementById('where_angle');
  if (whereAngru) whereAngru.style.display = 'none';
  awaitingThrowSelection = false;
  pendingHitPosition = null;
  exitHitModeCleanup();
  buttonsLocked = true;
}

// ===========================================================
// Hit_result 選択時に 4 つのベースボタンを出す処理
// ===========================================================
function showBasePositionButtons() {
  // グラウンド画像の取得
  const groundImg = document.querySelector("#ground img");
  if (!groundImg) return;

  // 既存の groundButtons を一旦クリア
  removeGroundIMButtons();

  // 表示する 4 つのボタン座標（元の basePositions の一部）
  const baseFour = [
    {id: '1', baseLeft: -244, baseTop: 440},
    {id: '2', baseLeft: -303, baseTop: 370},
    {id: '3', baseLeft: -360, baseTop: 440},
    {id: '4', baseLeft: -303, baseTop: 520}
  ];

  const scale = groundImg.width / 750;
  const rect = groundImg.getBoundingClientRect();
  const offsetX = rect.left;
  const offsetY = rect.top;

  baseFour.forEach(pos => {
    const b = document.createElement('button');
    b.className = 'ground-button hit-base-button';
    b.textContent = pos.id;
    b.dataset.label = pos.id;

    b.style.left = (offsetX + pos.baseLeft * scale) + 'px';
    b.style.top = (offsetY + pos.baseTop * scale) + 'px';
    b.style.width = (50 * scale) + 'px';
    b.style.height = (40 * scale) + 'px';
    b.style.fontSize = (14 * scale) + 'px';
    b.style.background = 'rgba(255,255,255,0.95)';

    // クリックで色を切り替え（手動でも反応するように）


    groundButtons.appendChild(b);
  });
}

// Hit_result の選択に応じてベースボタンを表示・ハイライトする処理を追加
document.querySelectorAll('input[name="hitOutcome"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    const val = e.target.value;

    // 必要ならベースボタンを配置
    showBasePositionButtons();

    // outcome -> base id の対応
    const map = {
      '一塁まで進む': '1',
      '二塁まで進む': '2',
      '三塁まで進む': '3',
      'ランニングホームラン': '4',
      'アウト': null
    };

    const targetId = map[val] || null;

    // 全ボタンの色をリセットしてから該当ボタンをハイライト
    document.querySelectorAll('.hit-base-button').forEach(b => {
      if (b.dataset.label === targetId) {
        b.style.background = '#cce4ff';
        b.style.borderColor = '#2b7ae4';
        b.dataset.selected = '1';
      } else {
        b.style.background = 'rgba(255,255,255,0.95)';
        b.style.borderColor = '#888';
        b.dataset.selected = '0';
      }
    });
  });
})

//多分デッドボール
document.getElementById("btndead").addEventListener("click", () => {
  if (buttonsLocked) return;
  const scale = board.clientWidth / originalBoardWidth;
  saveState();
  const imgG = document.createElement("img");
  imgG.src = imageBBB;       // ← スコア表でボール用に使っている画像
  imgG.classList.add("overlay");
  imgG.dataset.type = "G";
  imgG.style.width = "31%";
  imgG.style.top = "58%";
  imgG.style.left = "65%";
  imgG.style.zIndex = 100;
  imageContainer.appendChild(imgG);
  overlayImages.push(imgG);
  history.push("デッドボール");
  countA = 0;
  countB = 0;
  placedImages.forEach(p => {  //ボードのストライクとボードを消す
      if (p.type === 'A' || p.type === 'B') field.removeChild(p.element);
    });
    placedImages = placedImages.filter(p => p.type === 'OUT');
  updateHistoryView();
  updateOverlayPositions();
  buttonsLocked = true;
});

// クリアボタン：スコア表の重ね画像を全消去 + 履歴と状態スタックをクリア
document.getElementById("btnClear").addEventListener("click", () => {
  countA = 0;
  countB = 0;
  outCount = 0;
  // ★ saveState() は呼ばずに、history と stateStack を直接クリア
  // これにより、クリア後の状態が stateStack に保存されない
  history = [];
  stateStack = [];
  cria();
  updateHistoryView();
});

// ポジションボタン：ビューを切り替える
let isPositionMode = false;

document.getElementById("btnPosition").addEventListener("click", () => {
  // ポジションモードはbuttonsLockedの影響を受けない
  
  // ボタンを個別に非表示
  document.getElementById("btnStrike").style.display = "none";
  document.getElementById("btnBall").style.display = "none";
  document.getElementById("btnFoul").style.display = "none";
  document.getElementById("btnHit").style.display = "none";
  document.getElementById("btndead").style.display = "none";
  document.getElementById("clearBox").style.display = "none";
  
  // Position と ground_po を表示
  document.getElementById("ground_po_container").style.display = "block";
  document.getElementById("ground_po_container").style.zIndex = "100"; // グラウンドより前面に出す
  document.getElementById("Position_01").style.display = "block";
  
  isPositionMode = true;
});

function cria() {
  // スコア表に重ねた全画像を削除してリセット
  overlayImages.forEach(img => {
    if (img.parentNode) imageContainer.removeChild(img);
  });
  placedImages.forEach(p => {  //ボードのストライクとボードを消す
    if (p.type === 'A' || p.type === 'B' || p.type === 'OUT') field.removeChild(p.element);
  });
  
  // ★ 完全に初期状態にリセット
  countA = 0;
  countB = 0;
  outCount = 0;
  history = [];
  stateStack = [];
  placedImages = [];
  overlayImages = [];
  specialImageAdded = false;
  buttonsLocked = false;
  foulMode = false;
  hitMode = false;
  pendingHitPosition = null;
  awaitingThrowSelection = false;
  isPositionMode = false;
  
  // UI をすべて初期状態に戻す
  document.getElementById("btnStrike").style.display = "inline-block";
  document.getElementById("btnBall").style.display = "inline-block";
  document.getElementById("btnFoul").style.display = "inline-block";
  document.getElementById("btnHit").style.display = "inline-block";
  document.getElementById("btndead").style.display = "inline-block";
  document.getElementById("btnClear").style.display = "inline-block";
  document.getElementById("btnPosition").style.display = "inline-block";
  document.getElementById("btnUndo").style.display = "block";
  document.getElementById("Hitype").style.display = "none";
  document.getElementById("Hitype").style.border = "none";
  document.getElementById("Hit_result").style.display = "none";
  document.getElementById("where_angle").style.display = "none";
  document.getElementById("foulBox").style.display = "none";
  document.getElementById("Position_01").style.display = "none";
  document.getElementById("clearBox").style.display = "block";
  
  const groundPoContainer = document.getElementById("ground_po_container");
  if (groundPoContainer) groundPoContainer.style.display = "none";
  
  // ラジオボタンもすべてクリア
  document.querySelectorAll('input[name="fruit"]').forEach(r => r.checked = false);
  document.querySelectorAll('input[name="hitOutcome"]').forEach(r => r.checked = false);
  
  removeGroundIMButtons();
  updateOverlayPositions();
}

// ファウルモード時の戻るボタン
document.getElementById("btnFoulUndo").addEventListener("click", () => {
  // ファウルモードで表示しているI~Mボタンは消す
  removeGroundIMButtons();
  // overlayの一時的なもの（HやN~Rなど）を含めて復元
  restoreState();
  // UIも元に戻す
  exitFoulModeCleanup();
});

