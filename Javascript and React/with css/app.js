const amountEl = document.getElementById("amount");
const buttonEl = document.getElementById("exchangeBtn");
const fromEl = document.getElementById("from");
const toEl = document.getElementById("to");
const resultEl = document.getElementById("result");

buttonEl.addEventListener("click", async function () {
  const amount = parseFloat(amountEl.value);

  if (isNaN(amount) || amount <= 0) {
    resultEl.innerText = "Please enter a valid amount";
    return;
  }

  resultEl.innerText = "Loading...";

  try {
    const url = `https://open.er-api.com/v6/latest/${fromEl.value}`;
    const response = await fetch(url);
    const data = await response.json();

    const rate = data.rates[toEl.value];
    const total = (amount * rate).toFixed(2);

    resultEl.innerText = `${amount} ${fromEl.value} = ${total} ${toEl.value}`;
  } catch (error) {
    resultEl.innerText = "Error fetching rates. Check your internet.";
  }
});