document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const bankAccountNumber = document.getElementById(
      "bank-account-number"
    ).value;
    const amountToAdd = parseInt(document.getElementById("add-amount").value);
    const pinNumber = document.getElementById("pin-number").value;
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    const newBalance = availableBalance + amountToAdd;
    document.getElementById("available-balance").innerText = newBalance;
  });
