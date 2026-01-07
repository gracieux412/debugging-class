// for procurement form for debugging day 1 exercise


// syntax error 1
// object was not in quotes, causing a syntax error
/*
if (typeof formData != object) {
    return "Invalid form data structure";
}

*/

// correct
if (typeof formData !== "object") {
    return "Invalid form data structure";
}
// "object" is now correctly written as a string



// syntax error 2
//supplierName variable was not declared or quoted
/*
if (supplierName in formData) {
    return "Supplier name field missing";
}
*/

// correct
if (!("supplierName" in formData)) {
    return "Supplier name field missing";
}
//Property name is correctly written as a string



// sysntax error 3
// quantity, unitPrice, and totalAmount were not declared
/*
if (quantity || unitPrice) {
    totalAmount = quantity * unitPrice;
}
*/

// correct 
if ("quantity" in formData && "unitPrice" in formData) {
    const totalAmount = formData.quantity * formData.unitPrice;
}
// Variables are now accessed correctly from formData


// logical error 1
//Empty supplier name was still accepted
/*
if (formData.supplierName == "") {
    // no action
}
*/

// corrected
if (formData.supplierName.trim() === "") {
    return "Supplier name cannot be empty";
}
// Empty and whitespace-only values are rejected


// logical error 2
//Quantity of zero is invalid but allowed
/*
if (formData.quantity >= 0) {
    // quantity accepted
}
*/

// correct
if (formData.quantity <= 0) {
    return "Quantity must be greater than zero";
}
// Quantity must now be a positive number


// runtime error 1
//If unitPrice is a string, result becomes NaN
/*
let total = formData.quantity * formData.unitPrice;
*/

// correct
if (typeof formData.unitPrice !== "number") {
    return "Unit price must be a number";
}
// Type is validated before calculation


// runtime err 2
//No error handling if values are undefined
/*
let calculatedTotal = formData.quantity * formData.unitPrice;
if (calculatedTotal != formData.totalAmount) {
    return "Total amount is incorrect";
}
*/

// error handling 
let calculatedTotal;
try {
    calculatedTotal = formData.quantity * formData.unitPrice;
} catch (error) {
    return "Error calculating total amount";
}
// try–catch added to handle runtime failures

if (formData.totalAmount !== calculatedTotal) {
    return "Total amount is incorrect";
}
// Ensures good calculation