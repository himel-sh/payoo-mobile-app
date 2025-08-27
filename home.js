const validPin = 1234;
const validBankAccountNumber = "12345678901";

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const bankAccountNumber = document.getElementById(
      "bank-account-number"
    ).value;
    const amountToAdd = parseInt(document.getElementById("add-amount").value);
    const pinNumber = parseInt(document.getElementById("pin-number").value);
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    if (bank === "Select Bank") {
      alert("Please select a bank");
      return;
    }
    if (bankAccountNumber !== validBankAccountNumber) {
      alert("Please enter the correct 11-digit bank account number");
      return;
    }
    if (isNaN(amountToAdd) || amountToAdd <= 0) {
      alert("Please enter a valid amount to add");
      return;
    }
    if (pinNumber !== validPin) {
      alert("Please enter the correct 4-digit pin number");
      return;
    }
    const newBalance = availableBalance + amountToAdd;
    document.getElementById("available-balance").innerText = newBalance;
  });
