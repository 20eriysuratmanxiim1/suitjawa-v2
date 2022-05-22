function getPilihanComputer() {
  var comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

const scoreComputer = document.querySelector(".score-computer");
let scoreComputerCount = 0;
const scorePlayer = document.querySelector(".score-player");
let scorePlayerCount = 0;

function getHasil(computer, player) {
  if (player === computer) {
    return "SERI";
  }
  // if (player === 'semut') return (computer === 'orang')? 'KALAH' : 'MENANG!';
  else if (player === "semut") {
    if (computer === "orang") {
      scoreComputerCount += 1;
      return "KALAH";
    } else {
      scorePlayerCount += 1;
      return "MENANG!";
    }
  }
  // if (player === 'orang') return (computer === 'semut')? 'MENANG!' : 'KALAH';
  else if (player === "orang") {
    if (computer === "semut") {
      scorePlayerCount += 1;
      return "MENANG!";
    } else {
      scoreComputerCount += 1;
      return "KALAH";
    }
  }
  // if (player === 'gajah') return (computer === 'orang')? 'MENANG!' : 'KALAH';
  else if (player === "gajah") {
    if (computer === "orang") {
      scorePlayerCount += 1;
      return "MENANG!";
    } else {
      scoreComputerCount += 1;
      return "KALAH";
    }
  }
}
function putar() {
  const imgComputer = document.querySelector(".img-computer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pill) {
  pill.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pill.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-computer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;

      scoreComputer.innerHTML = scoreComputerCount;
      scorePlayer.innerHTML = scorePlayerCount;
    }, 1000);
  });
});
