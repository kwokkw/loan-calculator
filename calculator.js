window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  // Returning an Object
  return {
    // The unary plus (+) operator is used convert the retrieved value to a number data type. This is a common JavaScript pattern to ensure that the value is treated as a number rather than a string.
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanObj = {
    amount: 100000,
    years: 8,
    rate: 5.8,
  };

  document.getElementById("loan-amount").value = loanObj.amount;
  document.getElementById("loan-years").value = loanObj.years;
  document.getElementById("loan-rate").value = loanObj.rate;

  document.getElementById("monthly-payment").innerText =
    calculateMonthlyPayment(loanObj);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const n = values.years * 12;
  const rate = values.rate / 100 / 12;
  const monthlyPmt = (values.amount * rate) / 1 - Math.pow(1 + rate, -n);
  // `toFixed()` returns a string representation of the number.
  return monthlyPmt.toFixed(2); // string
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPmt = document.getElementById("monthly-payment");
  monthlyPmt.innerText = monthly;
}
