function updateRate() {
    var rateval = document.getElementById("rate").value; // Get the value of the rate slider
    document.getElementById("rate_val").innerText = rateval; // Update the display of the rate value
}

function compute() {
    // Get the values from the input elements
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value; 
    
    // Calculate interest and total amount
    var interest = principal * years * rate / 100; // Calculate the interest
    var year = new Date().getFullYear() + parseInt(years); // Calculate the future year
    var amount = parseInt(principal) + parseFloat(interest); // Calculate the total amount
    var result = document.getElementById("result"); // Get the result element
    
    // Validate principal input
    if (principal <= 0) {
        alert('Please enter a positive number!'); // Alert if principal is invalid
        document.getElementById("principal").focus(); // Focus back to principal input
    } else {
        // Display the result
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",<br> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "<br> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",<br> in the year " + "<mark>" + year + "</mark>" + "<br>";
    } 
}
    