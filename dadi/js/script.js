// Genero un numero casuale da 1 a 6 per il giocatore
// const giocatore = Math.floor(Math.random() * 6) + 1;
// Genero un numero casuale da 1 a 6 per computer
// const computer = Math.floor(Math.random() * 6) + 1;

// Mostra i numeri generati per il giocatore e per il computer
// console.log(`Il giocatore ha ottenuto: ${giocatore}`);
// console.log(`Il computer ha ottenuto: ${computer}`);

// Determina il vincitore in base al punteggio più alto

const startGame = document.getElementById("startgame");

startGame.addEventListener("click" ,

    function gioca() {
        const giocatore = Math.floor(Math.random() * 6) + 1;
        const computer = Math.floor(Math.random() * 6) + 1;

        const risultato = document.getElementById("risultato");

        risultato.innerHTML = `Il giocatore ha ottenuto: ${giocatore}<br>Il computer ha ottenuto: ${computer}<br>`;

        if (giocatore > computer) {
        risultato.innerHTML += "Il giocatore vince!";
        } else if (computer > giocatore) {
        risultato.innerHTML += "Il computer vince!";
        } else {
        risultato.innerHTML += "È un pareggio!";
        }
    }

);