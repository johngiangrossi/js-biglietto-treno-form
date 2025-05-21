console.log('JS biglietto treno form');

/*
Il programma dovrà mostrare una form da compilare usando i corretti campi HTML di input con cui chiedere all’utente il numero di chilometri che vuole percorrere e lo sconto da applicare scegliendo tra 3 opzioni:
prezzo intero
sconto studente
sconto over 65
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l’output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
*/

//prendo gli elementi dal DOM
const inputDistance = document.getElementById('distance');
const inputDiscount = document.getElementById('discount');
const btnLoader = document.getElementById('count');
const divRecapPrice = document.getElementById('recap-price')
const divRecapDiscount = document.getElementById('recap-discount')
const divFinalPrice = document.getElementById('final-price')

// console.log(inputDistance, inputDiscount, btnLoader, divRecapPrice, divRecapDiscount, divFinalPrice);


// funzione per lo sconto
function getdiscount(price, discount) {
  discountPrice = (price / 100) * discount
  return discountPrice
  // return number
}

const priceForKm = 0.21


//aggiungo evento listener
btnLoader.addEventListener('click', function () {
  // console.log('calcolo prezzo');
  
  // prendo i valori inseriti dall'utente
  const distance = Math.abs(parseFloat(inputDistance.value));
  const discount = inputDiscount.value;
  
  // verifico utente inserisca valori validi
  if (isNaN(distance)) {
    divRecapPrice.innerHTML = `${new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
      0,
    )}`
  divRecapDiscount.innerHTML = `${new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
      0,
    )}`  
  divFinalPrice.innerHTML = `${new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
      0,
    )}`
    return alert('inserire un numero valido')
  }

  // console.log(distance, discount);

  // calcolo gli sconti e prezzo finale
  priceTicket = priceForKm * distance;
  finalDiscount = getdiscount(priceTicket, 0)
  finalPrice = priceTicket;

  if (discount === 'student-discount') {
      finalDiscount = getdiscount(priceTicket, 20)
      finalPrice = priceTicket - finalDiscount
  } else if (discount === 'senior-discount') {
      finalDiscount = getdiscount(priceTicket, 40)
      finalPrice = priceTicket - finalDiscount
  }

  // console.log(finalPrice , finalDiscount);

  // stampo il risultato
  divRecapPrice.innerHTML = `${new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
      priceTicket,
    )}`
  divRecapDiscount.innerHTML = `${new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
      finalDiscount,
    )}`  
  divFinalPrice.innerHTML = `${new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
      finalPrice,
    )}`
})
