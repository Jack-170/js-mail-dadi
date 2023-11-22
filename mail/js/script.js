// Lista delle email che possono accedere 
const listaAccesso = ["email1@hotmail.com", "email2@hotmail.com", "email3@hotmail.com", "email4@hotmail.com", "email5@hotmail.com", "email6@hotmail.com", "email7@hotmail.com"];

// Chiedi all'utente la sua email
const userEmail = prompt("Inserisci la tua email:");

// Controlla se l'email è nella lista di accesso
if (listaAccesso.includes(userEmail)) {
    console.log("Benvenuto!");
} else {
    console.log("Spiacenti, l'email non è in lista.");
}