// Benvenuto
alert("Benvenuto sul sito di Trenitalia!");

// Info 
alert("Nei prossimi passaggi ti saranno richiesti i dati necessari per il calcolo del prezzo del tuo biglietto")

// Chiedo il numero di km che vuole fare 
const km = prompt("Quanti km percorrerai?");
console.log("Il passeggerò percorrerà: ", km);

// Chiedo l'età al passeggero 
const age = prompt("Quanti anni hai?");
console.log("Il passeggerò ha: ", age);

// Calcolo prezzo passeggero minorenne o over 65 o adulto senza vantaggi
if (age < 18) {
    let juniorprice = ((km * 0.21) / 100) * 80;
    document.getElementById("ticket-price").innerHTML = juniorprice.toFixed(2);
} else if (age > 65){
    let seniorprice = ((km * 0.21) / 100) * 60;
    document.getElementById("ticket-price").innerHTML = seniorprice.toFixed(2);
} else {
    let price = km * 0.21;
    document.getElementById("ticket-price").innerHTML = price;
}