var activePlayer = 0;
var scores = [0, 0];
var roundScore = 0;

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 дотрох санамсаргүй тоог гаргаж авна.
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //Шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.style.display = "block";
  // Буусан санамсаргүй тоогд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";
  // Буусан тоо нь 1-ээс ялгаатай бол идэвхтэйт тоглогчийн ээлжийн оноонд нэмж өгнө.
  if (diceNumber !== 1) {
    // 1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 буусан тул тоглогчийн ээлжийг солино.
    // Он
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // Хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго. Үгүй бол идэвхтэй тоглогч нь 0 болго.

    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Улаан цэгийг шилжүүлэх
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // Шоог түр алга болгоно.
    diceDom.style.display = "none";
  }
});

// HOLD товчны эвент листнер
document.querySelector(".btn-hold").addEventListener("click", function () {
  // Уг тоглочийн цуглуулсан ээлжний оноог глобал оноо дээр нэмж өгнө.
  //   activePlayer === 0
  //     ? (scores[0] = scores[0] + roundScore)
  //     : (scores[1] = scores[1] + roundScore);
  scores[activePlayer] = scores[activePlayer] + roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  //Ээлжийн оноог 0 болгоно.
  // Тоглогчийн ээлжийг солино.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго. Үгүй бол идэвхтэй тоглогч нь 0 болго.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэгийг шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // Шоог түр алга болгоно.
  diceDom.style.display = "none";
});
