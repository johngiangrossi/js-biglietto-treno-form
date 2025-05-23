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
const formInputTicketElement = document.getElementById('ticket-form');
const ticketCardElement = document.getElementById('card-ticket');

// prendo gli elementi input ticket
const inputName = formInputTicketElement.querySelector('#name');
const inputSurname = formInputTicketElement.querySelector('#surname');
const inputDate = formInputTicketElement.querySelector('#date');
const inputDistance = formInputTicketElement.querySelector('#distance');
const inputDiscount = formInputTicketElement.querySelector('#discount');

// prendo gli elementi output ticket
const cardRecapNameSurname = ticketCardElement.querySelector('#recap-passenger-name-surname')
const cardRecapDate = ticketCardElement.querySelector('#recap-date')
const cardRecapDistance = ticketCardElement.querySelector('#recap-distance')
const cardRecapPrice = ticketCardElement.querySelector('#recap-price')
const cardRecapDiscount = ticketCardElement.querySelector('#recap-discount')
const cardFinalPrice = ticketCardElement.querySelector('#final-price')

// console.log(inputDistance, inputDiscount, cardRecapPrice, cardRecapDiscount, cardFinalPrice, inputDate, inputName);
// console.log(cardRecapDistance, cardRecapNameSurname, cardRecapDate);


// funzione per lo sconto
function getdiscount(price, discount) {
  discountPrice = (price / 100) * discount
  return discountPrice
  // return number
}

// funzione per gli elementi input
function getFormData() {
  const name = inputName.value
  const surname = inputSurname.value
  const date = inputDate.value
  const distance = Math.abs(parseFloat(inputDistance.value));
  const discount = inputDiscount.value;

  return {
    name,
    surname,
    date,
    distance,
    discount
  }
}

// console.log(getFormData())
const priceForKm = 0.21


//aggiungo evento listener
formInputTicketElement.addEventListener('submit', function (e) {
  e.preventDefault()
  // console.log(getFormData())
  // console.log('calcolo prezzo');



  // prendo i valori inseriti dall'utente
  const inputData = getFormData()
  // console.log(inputData);
  
  
  /*
  // verifico utente inserisca valori validi
  if (isNaN(inputData.distance)) {
    cardRecapPrice.innerHTML = 0 + ' €' 
    cardRecapDiscount.innerHTML = 0 + ' €' 
    cardFinalPrice.innerHTML = 0 + ' €' 
    inputDistance.classList.add("border-danger")
    inputDistance.placeholder = "Inserire un numero valido";
   
    // cardRecapPrice.innerHTML = `${new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
    //   0,
    // )}`
    // cardRecapDiscount.innerHTML = `${new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
    //   0,
    // )}`  
    // cardFinalPrice.innerHTML = `${new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
    //   0,
    // )}`
   
    return alert('inserire un numero valido')
  } else {
    inputDistance.classList.remove("border-danger")
    inputDistance.placeholder = "inserire il numero di chilometri da percorrere";
  }
  // console.log(distance, discount);
  */
  

  // calcolo gli sconti e prezzo finale
  priceTicket = priceForKm * inputData.distance;
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
  cardRecapPrice.innerHTML = priceTicket.toFixed(2) + ' €' 
  cardRecapDiscount.innerHTML = finalDiscount.toFixed(2) + ' €' 
  cardFinalPrice.innerHTML = finalPrice.toFixed(2) + ' €'
  // console.log(inputData.date)
  cardRecapDate.innerHTML = inputData.date
  // console.log(inputData.distance)
  cardRecapDistance.innerHTML = inputData.distance
  // console.log(inputData.name, inputData.surname)
  cardRecapNameSurname.innerHTML = `${inputData.name} ${inputData.surname}`

  /*
  cardRecapPrice.innerHTML = `${new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
      priceTicket,
    )}`
  cardRecapDiscount.innerHTML = `${new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
      finalDiscount,
    )}`  
  cardFinalPrice.innerHTML = `${new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
      finalPrice,
    )}`
    */
})

