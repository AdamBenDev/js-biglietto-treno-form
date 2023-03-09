//!DEFINISCE IL PREZZO PER KM

const prezzoPerKm = 0.21;
let kmDaPercorrere = prompt("Inserisci il numero di chilometri da percorrere:");
let etaPasseggero = prompt("Inserisci l'età del passeggero:");


//!PREZZO TOTALE CALCOLO

let prezzoTotale = kmDaPercorrere * prezzoPerKm;



//! applica lo sconto del 20% per i minorenni


if (etaPasseggero < 18) {  
    prezzoTotale *= 0.8;

//! applica lo sconto del 40% per gli over 65
  } else if (etaPasseggero >= 65) {  
    prezzoTotale *= 0.6;
  }