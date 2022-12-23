// Input 
const nameInput = document.getElementById("name-input");
const kmInput = document.getElementById("km-input");
const ageInput = document.getElementById("age-input");
const submitButton = document.getElementById("submit-button");
const deleteButton = document.getElementById("delete-button");

// Al click 
submitButton.addEventListener("click", 
                         
    function() {

        console.log("nameInput.value", nameInput.value);
        console.log("kmInput.value", kmInput.value);
        console.log("ageInput.value", ageInput.value);

        const km = kmInput.value;
        const age = ageInput.value;

        if (age < 18) {
            let juniorprice = ((km * 0.21) / 100) * 80;
            document.getElementById("ticket-price").innerHTML = juniorprice.toFixed(2) + "€";
            document.getElementById("offer-type").innerHTML = "Sconto minorenne";
        } else if (age > 65) {
            let seniorprice = ((km * 0.21) / 100) * 60;
            document.getElementById("ticket-price").innerHTML = seniorprice.toFixed(2) + "€";
            document.getElementById("offer-type").innerHTML = "Sconto silver";
        } else {
            let price = km * 0.21;
            document.getElementById("ticket-price").innerHTML = price.toFixed(2) + "€";
            document.getElementById("offer-type").innerHTML = "Biglietto standard";
        }

        document.getElementById("name-output").innerHTML = nameInput.value;
        document.getElementById("coach-number").innerHTML = Math.floor(Math.random() * 10) + 1;
        document.getElementById("code-number").innerHTML = Math.floor(Math.random() * (99999 - 90000) ) + 90000;
          
    }
                         
);

deleteButton.addEventListener("click", 
                         
    function() {
        nameInput.value = "";
        kmInput.value = "";
        ageInput.value = "";

    }
                         
);