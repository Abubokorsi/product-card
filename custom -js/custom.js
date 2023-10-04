// product-1
const pulsBtn1 = document.getElementById("plusBtn1");
pulsBtn1.addEventListener("click", function () {
  const product1 = document.getElementById("product1").value;
  const product1Number = parseFloat(product1);
  const product1pice = product1Number + 1;
  document.getElementById("product1").value = product1pice;
  const product1toTalPrice =
    document.getElementById("product1TotalPrice").innerText;
  const product1TotalPriceNumber = parseFloat(product1toTalPrice);
  const product1TotalRate = product1TotalPriceNumber + 1290;
  document.getElementById("product1TotalPrice").innerText = product1TotalRate;
  const totalPrice = document.getElementById("totalPrice").innerText;
  const totalPriceNumber = parseFloat(totalPrice);
  const totalprices = totalPriceNumber + 1290;
  document.getElementById("totalPrice").innerText = totalprices;
  const tex = document.getElementById("tex").innerText;
  const texNumber = parseFloat(tex);
  const totalText = texNumber + 11;
  document.getElementById("tex").innerText = totalText;
  const totalRate = document.getElementById("totalRate").innerText;
  const totalRateNumber = parseFloat(totalRate);
  const allProductPrice = totalRateNumber + 1301;
  document.getElementById("totalRate").innerText = allProductPrice;
});
const minusBtn1 = document.getElementById("minusBtn1");
minusBtn1.addEventListener("click", function () {
  const product1 = document.getElementById("product1").value;
  const product1Number = parseFloat(product1);
  if (0 < product1Number) {
    const product1pice = product1Number - 1;
    document.getElementById("product1").value = product1pice;
    const product1toTalPrice =
      document.getElementById("product1TotalPrice").innerText;
    const product1TotalPriceNumber = parseFloat(product1toTalPrice);
    const product1TotalRate = product1TotalPriceNumber - 1290;
    document.getElementById("product1TotalPrice").innerText = product1TotalRate;
    const totalPrice = document.getElementById("totalPrice").innerText;
    const totalPriceNumber = parseFloat(totalPrice);
    const totalprices = totalPriceNumber - 1290;
    document.getElementById("totalPrice").innerText = totalprices;
    const tex = document.getElementById("tex").innerText;
    const texNumber = parseFloat(tex);
    const totalText = texNumber - 11;
    document.getElementById("tex").innerText = totalText;
    const totalRate = document.getElementById("totalRate").innerText;
    const totalRateNumber = parseFloat(totalRate);
    const allProductPrice = totalRateNumber - 1301;
    document.getElementById("totalRate").innerText = allProductPrice;
  }
});

// product -2
const pulsBtn2 = document.getElementById("plusBtn2");
pulsBtn2.addEventListener("click", function () {
  const product2 = document.getElementById("product2").value;
  const product2Number = parseFloat(product2);
  const product2pice = product2Number + 1;
  document.getElementById("product2").value = product2pice;
  const product2toTalPrice =
    document.getElementById("product2TotalPrice").innerText;
  const product2TotalPriceNumber = parseFloat(product2toTalPrice);
  const product2TotalRate = product2TotalPriceNumber + 99;
  document.getElementById("product2TotalPrice").innerText = product2TotalRate;
  const totalPrice = document.getElementById("totalPrice").innerText;
  const totalPriceNumber = parseFloat(totalPrice);
  const totalprices = totalPriceNumber + 99;
  document.getElementById("totalPrice").innerText = totalprices;
  const tex = document.getElementById("tex").innerText;
  const texNumber = parseFloat(tex);
  const totalText = texNumber + 11;
  document.getElementById("tex").innerText = totalText;
  const totalRate = document.getElementById("totalRate").innerText;
  const totalRateNumber = parseFloat(totalRate);
  const allProductPrice = totalRateNumber + 110;
  document.getElementById("totalRate").innerText = allProductPrice;
});
const minusBtn2 = document.getElementById("minusBtn2");
minusBtn2.addEventListener("click", function () {
  const product2 = document.getElementById("product2").value;
  const product2Number = parseFloat(product2);
  if (0 < product2Number) {
    const product2pice = product2Number - 1;
    document.getElementById("product2").value = product2pice;
    const product2toTalPrice =
      document.getElementById("product2TotalPrice").innerText;
    const product2TotalPriceNumber = parseFloat(product2toTalPrice);
    const product2TotalRate = product2TotalPriceNumber - 99;
    document.getElementById("product2TotalPrice").innerText = product2TotalRate;
    const totalPrice = document.getElementById("totalPrice").innerText;
    const totalPriceNumber = parseFloat(totalPrice);
    const totalprices = totalPriceNumber - 99;
    document.getElementById("totalPrice").innerText = totalprices;
    const tex = document.getElementById("tex").innerText;
    const texNumber = parseFloat(tex);
    const totalText = texNumber - 11;
    document.getElementById("tex").innerText = totalText;
    const totalRate = document.getElementById("totalRate").innerText;
    const totalRateNumber = parseFloat(totalRate);
    const allProductPrice = totalRateNumber - 110;
    document.getElementById("totalRate").innerText = allProductPrice;
  }
});
