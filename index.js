let activeAccount = ""
let accounts = {
  "Brandon": {
    password: "contraseña1",
    balance: 100
  },
  "Alex": {
    password: "contraseña2",
    balance: 200
  },
  "Dilan": {
    password: "contraseña3",
    balance: 50
  },
  "Nicol": {
    password: "contraseña4",
    balance: 100
  },
  "Geraldin": {
    password: "contraseña5",
    balance: 150
  }
};

const renderBalance = () => {
  document.getElementById("balance").innerHTML = accounts[activeAccount].balance;
};

const destroyBalance = () => {
  document.getElementById("balance").innerHTML = "";
};

const showAccount = () => {
  renderBalance();
  document.getElementById("account-name").innerHTML = `Account of ${activeAccount}`;
  document.getElementById("account").style.display = "";
};

const hideAccount = () => {
  destroyBalance()
  document.getElementById("account-name").innerHTML = ""
  document.getElementById("account").style.display = "none";
};

const adjustBalance = (type, msg) => {
  const input = parseInt(prompt(msg));

  if (input === null)
    return;

  if (isNaN(input))
    return alert("Invalid amount.");

  const newBalance = accounts[activeAccount].balance + (type * Math.abs(input));

  if (newBalance < 0)
    return alert("Insufficient funds.");

  accounts[activeAccount].balance = newBalance;

  renderBalance();
};

document.getElementById("login-button").addEventListener("click", () => {
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (accounts?.[username.value].password === password.value) {
    document.getElementById("login").style.display = "none";
    activeAccount = username.value;
    username.value = "";
    password.value = "";
    showAccount();
  } else {
    alert("User not found.");
  }
});

document.getElementById("logout-button").addEventListener("click", () => {
  hideAccount();
  activeAccount = "";
  document.getElementById("login").style.display = "";
});

document.getElementById("deposit").addEventListener("click", () => {
  adjustBalance(+1, "Enter an amount to deposit.");
});

document.getElementById('withdraw').addEventListener("click", () => {
  adjustBalance(-1, "Enter an amount to withdraw.");
});