// Lista delle email che possono accedere 
const listaAccesso = ["email1@hotmail.com", "email2@hotmail.com", "email3@hotmail.com", "email4@hotmail.com", "email5@hotmail.com", "email6@hotmail.com", "email7@hotmail.com"];

// Chiedi all'utente la sua email
// const userEmail = prompt("Inserisci la tua email:");

// Controlla se l'email è nella lista di accesso

const verifyButton = document.getElementById("verify");

verifyButton.addEventListener("click",
    function verificaAccesso() {
        const userEmail = document.getElementById("userEmail").value;
        const risultato = document.getElementById("risultato");
    
        if (listaAccesso.includes(userEmail)) {
        risultato.textContent = "Benvenuto! Puoi accedere.";
        risultato.style.color = "green";
        } else {
        risultato.textContent = "Spiacenti, l'accesso non è consentito.";
        risultato.style.color = "red";
        }
    }
);
