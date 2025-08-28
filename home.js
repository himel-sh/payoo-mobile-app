const validWithdrawPin = 1234;
const validCashoutPin = 1234;
const validBankAccountNumber = "12345678901";
const validAgentNumber = "12345678901";
const transactionData = [];
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
function handleToggleButton(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874F2]", "bg-[#0874F20D]");
    btn.classList.add("border-[#0808081a]");
  }
  document
    .getElementById(id)
    .classList.add("border-[#0874F2]", "bg-[#0874F20D]");
  document.getElementById(id).classList.remove("border-[#0808081a]");
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

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
    console.log(transactionData);
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
  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
  console.log(transactionData);
});

document
  .getElementById("transactions-history-button")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transactions-container"
    );
    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML =
        '<div class="bg-white my-3 rounded-xl p-3 flex justify-between items-center h-auto max-w-lg mx-auto">\
          <div>\
            <div class="flex items-center">\
              <div class="p-3 rounded-full bg-[#f4f5f7]"><img src="./assets/wallet1.png" class="mx-auto" alt="" /></div>\
              <div class="ml-2">\
                    <h1>' +
        data.name +
        "</h1>\
                <p>" +
        data.date +
        '</p>\
              </div>\
            </div>\
          </div>\
          <div><i class="fa-solid fa-ellipsis-vertical"></i></div>\
        </div>';
      transactionContainer.appendChild(div);
    }
  });
// toggling feature

document.getElementById("add-button").addEventListener("click", function () {
  handleToggle("add-money-parent");

  handleToggleButton("add-button");
});
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    handleToggle("cash-out-parent");
    handleToggleButton("cash-out-button");
  });
document
  .getElementById("transfer-money-button")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent");
    handleToggleButton("transfer-money-button");
  });
document
  .getElementById("get-bonus-button")
  .addEventListener("click", function () {
    handleToggle("get-bonus-parent");
    handleToggleButton("get-bonus-button");
  });
document
  .getElementById("pay-bill-button")
  .addEventListener("click", function () {
    handleToggle("pay-bill-parent");
    handleToggleButton("pay-bill-button");
  });
document
  .getElementById("transactions-history-button")
  .addEventListener("click", function () {
    handleToggle("transactions-history-parent");
    handleToggleButton("transactions-history-button");
  });
