/*
1. Recuperare gli elementi dal DOM
2. Recuperare la distanza (in km) che l'utente vuole percorrere tramite il form e salvare il dato in una variabile
3. Recuperare l'età dell'utente tramite il form e salvare il dato in una variabile
4. Calcolare il prezzo del biglietto
5. Applicare al prezzo del biglietto uno sconto del 20% se l'utente ha meno di 18 anni
6. Applicare al prezzo del biglietto uno sconto del 40% se l'utente ha più di 65 anni
7. Stampare il prezzo del biglietto
*/

// Fase di preparazione

// Recupero gli elementi dal DOM
const formElement = document.getElementById("form");
console.log(formElement);

const distanceField = document.getElementById("distance");
console.log(distanceField);

const ageField = document.getElementById("age");
console.log(ageField);

const buttonElement = document.querySelector("button");
console.log(buttonElement);

// Prezzo del biglietto per km
const ticketPricePerKm = 0.21;

// Fase di gestione eventi e di raccolta dati

// Controllo l'evento
buttonElement.addEventListener("click", function(event) {
    event.preventDefault();

    // Recupero la distanza (in km) che l'utente vuole percorrere tramite il form e salvo il dato in una variabile
    const distance = parseInt(distanceField.value);
    console.log("distance =", distance, "type:", typeof distance);

    // Recupero l'età dell'utente tramite il form e salvo il dato in una variabile
    const age = parseInt(ageField.value);
    console.log("age =", age, "type:", typeof age);

    // Svuoto il form
    formElement.reset();

    // Fase di elaborazione e produzione

    // Calcolo e stampo il prezzo del biglietto
    let ticketPrice = distance * ticketPricePerKm;
    console.log("Prezzo biglietto:", ticketPrice, "type:", typeof ticketPrice);

    // Variabile sconto
    let discount = null;

    // Controllo l'età dell'utente per applicare uno sconto al prezzo del biglietto
    if (age < 18) discount = 20;
    else if (age > 65) discount = 40;

    // Calcolo e stampo il prezzo del biglietto con l'eventuale sconto
    if (discount) {
        ticketPrice -= ((ticketPrice * discount) / 100);
        console.log("Prezzo biglietto:", ticketPrice, "type:", typeof ticketPrice);
    }
});