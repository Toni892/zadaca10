function izracunajPDV(cijenaBezPdv, stopaPdv) {
    var pdv=cijenaBezPdv*(stopaPdv/100);
  var ukupnaCijena=cijenaBezPdv+pdv;

 alert("Vas proizvod ukljucujuci i pdv iznos" + ukupnaCijena.toFixed(2) + "eura");
}