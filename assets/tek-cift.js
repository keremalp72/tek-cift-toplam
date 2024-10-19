let sayiAdet = Number(prompt("Kaç tane sayı eklemek istiyorsunuz"));

let sayilar = [];
let cift = [];
let tek = [];
let sayi;

let ciftSayilar = 0;
let tekSayilar = 0;

function topla() {
  for (let i = 0; i < sayiAdet; i++) {
    sayi = Number(prompt("Sayılarınızı giriniz: "));
    sayilar.push(sayi);

    if (sayi % 2 == 0) {
      ciftSayilar++;
      cift.push(sayi);
    } else if (sayi % 2 == 1) {
      tekSayilar++;
      tek.push(sayi);
    }
  }
  console.log(
    `${tekSayilar} tane tek sayı var ${ciftSayilar} tane çift sayı var`
  );
}
topla();

let ciftToplam = 0;

function ciftGöster() {
  for (let i = 0; i < cift.length; i++) {
    ciftToplam += cift[i];
  }
  console.log(`çift sayıların toplamı: ${ciftToplam}`);
}
ciftGöster();

let tekToplam = 0;

function tekGöster() {
  for (let i = 0; i < tek.length; i++) {
    tekToplam += tek[i];
  }
  console.log(`tek sayıların toplamı: ${tekToplam}`);
}
tekGöster();
