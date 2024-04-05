//PRIMITIVNI TIPOVI
var godine = 25;
var ime = "Saska";
var studira = true;
//NIZOVI
var predmeti = ["EPOS", "Klijentske", "Cloud"];
var ocene = [10, 8, 9];
//Tuples
var tuple = ["Saska", 25];
//Enum
var Modul;
(function (Modul) {
    Modul[Modul["TehnologijeElektronskogPoslovanja"] = 0] = "TehnologijeElektronskogPoslovanja";
    Modul[Modul["SoftverskoInzenjerstvo"] = 1] = "SoftverskoInzenjerstvo";
    Modul[Modul["InformacioniSistemi"] = 2] = "InformacioniSistemi";
})(Modul || (Modul = {}));
var modul = Modul.TehnologijeElektronskogPoslovanja;
//OBJEKAT
var student = {
    ime: "Danica",
    godine: 24,
    studira: true
};
//Unija tipova
var brojIliString = 10;
//Any tip
var biloSta = "Moze bilo koji tip";
function cao() {
    console.log("cao");
}
var n = null;
var u = undefined;
var nekaVrednost = "neki string";
var duzinaStringa = nekaVrednost.length;
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloSta);
console.log(n, u);
console.log(duzinaStringa);
