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

const ticketElement = document.getElementById("ticket");
console.log(ticketElement);

// Prezzo del biglietto per km
const ticketPricePerKm = 0.21;

// Fase di gestione eventi e di raccolta dati

// Controllo il click del bottone
buttonElement.addEventListener("click", function(event) {
    // Blocco il reloading della pagina
    event.preventDefault();

    // Recupero la distanza (in km) che l'utente vuole percorrere tramite il form e salvo il dato in una variabile
    const distanceValue = parseInt(distanceField.value);
    console.log("distanceValue =", distanceValue, "type:", typeof distanceValue);

    // Recupero l'età dell'utente tramite il form e salvo il dato in una variabile
    const ageValue = parseInt(ageField.value);
    console.log("ageValue =", ageValue, "type:", typeof ageValue);

    // Svuoto il form
    formElement.reset();

    // Fase di elaborazione e produzione

    // Calcolo e stampo il prezzo del biglietto
    let ticketPrice = distanceValue * ticketPricePerKm;
    console.log("Prezzo biglietto:", ticketPrice, "type:", typeof ticketPrice);

    // Variabile sconto
    let discount = null;

    // Controllo l'età dell'utente per applicare uno sconto al prezzo del biglietto
    if (ageValue < 18) discount = 20;
    else if (ageValue > 65) discount = 40;

    // Calcolo e stampo il prezzo del biglietto con l'eventuale sconto
    if (discount) {
        ticketPrice -= ((ticketPrice * discount) / 100);
        console.log("Prezzo biglietto:", ticketPrice, "type:", typeof ticketPrice);
        ticketElement.innerText = `Distanza: ${distanceValue} km
                                   Età: ${ageValue} anni
                                   Prezzo biglietto: ${ticketPrice} € (sconto del ${discount}%)`;
    } else {
        ticketElement.innerText = `Distanza: ${distanceValue} km
                                   Età: ${ageValue} anni
                                   Prezzo biglietto: ${ticketPrice} €`;
    }
});