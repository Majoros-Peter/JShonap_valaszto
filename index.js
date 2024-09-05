const honapokSelect = document.querySelector("#honapok");
const honapok = [
    { neve: "január", hossz: 31 },
    { neve: "február", hossz: 28 },
    { neve: "március", hossz: 31 },
    { neve: "április", hossz: 30 },
    { neve: "május", hossz: 31 },
    { neve: "június", hossz: 30 },
    { neve: "július", hossz: 31 },
    { neve: "augusztus", hossz: 31 },
    { neve: "szeptember", hossz: 30 },
    { neve: "október", hossz: 31 },
    { neve: "november", hossz: 30 },
    { neve: "december", hossz: 31 },
  ];

honapok.forEach((honap) => {
  let opt = document.createElement("option");
  opt.innerText = honap.neve;
  honapok.appendChild(opt);
});
