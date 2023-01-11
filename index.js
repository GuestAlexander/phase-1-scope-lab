var customerName = "bob";
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

var bestCustomer = "not bob";
function bestCustomer() {
    if (customerName === "bob") {
        bestCustomer = "bob";
    }
    else {
        bestCustomer = "not bob";
    }
}