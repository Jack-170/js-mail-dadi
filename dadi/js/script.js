// Genero un numero casuale da 1 a 6 per il giocatore
const giocatore = Math.floor(Math.random() * 6) + 1;
// Genero un numero casuale da 1 a 6 per computer
const computer = Math.floor(Math.random() * 6) + 1;

// Mostra i numeri generati per il giocatore e per il computer
console.log(`Il giocatore ha ottenuto: ${giocatore}`);
console.log(`Il computer ha ottenuto: ${computer}`);

// Determina il vincitore in base al punteggio più alto
if (giocatore > computer) {
  console.log("Il giocatore vince!");
} else if (computer > giocatore) {
  console.log("Il computer vince!");
} else {
  console.log("È un pareggio!");
}