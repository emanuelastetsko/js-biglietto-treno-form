// Input 
const kmInput = document.getElementById("km-input");
const ageInput = document.getElementById("age-input");
const submitButton = document.getElementById("submit-button");

// Al click 
submitButton.addEventListener("click", 
                         
    function() {

        console.log("kmInput.value", kmInput.value);
        console.log("ageInput.value", ageInput.value);

        const km = kmInput.value;
        const age = ageInput.value;

        if (age < 18) {
            let juniorprice = ((km * 0.21) / 100) * 80;
            document.getElementById("ticket-price").innerHTML = juniorprice.toFixed(2) + "€";
        } else if (age > 65) {
            let seniorprice = ((km * 0.21) / 100) * 60;
            document.getElementById("ticket-price").innerHTML = seniorprice.toFixed(2) + "€";
        } else {
            let price = km * 0.21;
            document.getElementById("ticket-price").innerHTML = price.toFixed(2) + "€";
        }
    }
                         
);