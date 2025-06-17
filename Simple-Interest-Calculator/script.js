function compute()
{
    //Added variables to store principal, rate, years, interest, amount, result, and year
    // Get the values from the input fields
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");
    var year = new Date().getFullYear() + parseInt(years);
    
    //Added if statement to check if principal is a positive number
    if (principal <= 0) {
        alert("Please enter a positive number for Principal");
        document.getElementById("principal").focus();
        return;
    }
    else {
        result.innerHTML = "If you deposit $" + "<mark>" + principal  + "</mark>" + ",\<br\>at an interest rate of " + "<mark>" + rate + "</mark>" + "%.\<br\>You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\>in the year " + "<mark>" + year + "</mark>" + ".\<br\>";
    }
}

//Added function to update the rate value in the display
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        