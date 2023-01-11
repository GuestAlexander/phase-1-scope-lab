var customerName = "bob";
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// var bestCustomer = "not bob";
function setBestCustomer() {
    if (customerName === "bob") {
        bestCustomer = "bob";
    }
    else {
        bestCustomer = "not bob";
    }
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "steve"
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "maybe bob"
}