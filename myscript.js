// creare database di mail - array
    // * creo un  variabile con array chiamata userMail
    // * inserisco gli indirizzi


const userMail = ["matteo@dajeroma.it", "luca@dajeroma.it", "totti@dajeroma.it", "batman@dajeroma.it", "regressione@dajeroma.it","cresta@dajeroma.it","mail@dajeroma.it","umpalumpa@dajeroma.it","dicapra@dajeroma.it","vittoriosgarbi@dajeroma.it",]
console.log (userMail);


// creo una condizione per verificare che la mail inserita sia presente nel db

    // * creo una ciclo che dica: se la mail è presente - PUOI ACCEDERE, se la mail non è presente - NON PUOI ACCEDERE.
    // * stampo nel dom un messaggio per ogni condizione che si verifica.

let userMailAccount = document.getElementById("mail-text");

let mailValidation = document.getElementById("mail-validation");

let generatedEvent = document.getElementById('event-validation');

let check = false;

generatedEvent.addEventListener('click', function() {
    for (let i = 0; i <= userMail.length; i++) {
        if (userMailAccount.value == userMail[i]) {
        check = true;
        }
        
    };
    if (check = true) {
        mailValidation.innerHTML = "PUOI ACCEDERE!"
    } else {
        mailValidation.innerHTML = " NON PUOI ACCEDERE!"
    }; 

    userMailAccount.value= "";
});

// sezione game

let userScore = document.querySelector("#user-match");

let startTheGame = document.getElementById("start-game");

let pcScore =document.getElementById("pc-match");

let finalScore = document.getElementById("final-score");
