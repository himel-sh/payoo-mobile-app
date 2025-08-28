const validWithdrawPin = 1234;
const validCashoutPin = 1234;
const validBankAccountNumber = "12345678901";
const validAgentNumber = "12345678901";
// function to get input values
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = parseInt(inputField.value);
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}
// function to get inner texts
function getInnerText(id) {
  const element = document.getElementById(id);
  return parseInt(element.innerText);
}

// function to toggle

function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// add money feature
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const bankAccountNumber = document.getElementById(
      "bank-account-number"
    ).value;
    const amountToAdd = getInputValueNumber("add-amount");
    const pinNumber = getInputValueNumber("add-pin-number");
    const availableBalance = getInnerText("available-balance");
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
    if (pinNumber !== validWithdrawPin) {
      alert("Please enter the correct 4-digit pin number");
      return;
    }
    const newBalance = availableBalance + amountToAdd;
    document.getElementById("available-balance").innerText = newBalance;
  });

// withdrawing feature
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const agentNumber = document.getElementById("agent-number").value;
  const cashOutAmount = getInputValueNumber("cash-out-amount");
  const pinNumber = getInputValueNumber("cash-out-pin-number");
  const availableBalance = getInnerText("available-balance");
  if (agentNumber !== validAgentNumber) {
    alert("Please enter the correct 11-digit agent number");
    return;
  }
  if (isNaN(cashOutAmount) || cashOutAmount <= 0) {
    alert("Please enter a valid amount to cash out");
    return;
  }
  if (pinNumber !== validCashoutPin) {
    alert("Please enter the correct 4-digit pin number");
    return;
  }
  const newBalance = availableBalance - cashOutAmount;
  document.getElementById("available-balance").innerText = newBalance;
  if (newBalance < 0) {
    alert("Insufficient balance");
    document.getElementById("available-balance").innerText = availableBalance;
    return;
  }
});

// toggling feature

document.getElementById("add-button").addEventListener("click", function () {
  handleToggle("add-money-parent");
});
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    handleToggle("cash-out-parent");
  });
document
  .getElementById("transfer-money-button")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent");
  });
document
  .getElementById("get-bonus-button")
  .addEventListener("click", function () {
    handleToggle("get-bonus-parent");
  });
