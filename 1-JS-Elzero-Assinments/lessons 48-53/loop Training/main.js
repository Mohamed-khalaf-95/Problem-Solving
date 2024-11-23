let product = ["keybord", "mouse", "camera", "screen", "mouspad","screen"];
let hardware = ["cpu", "ram", "rom"];
let allProduct = product.concat(hardware);
let color = ["red", "green", "blue"];
let showCount = allProduct.length - hardware.length;
// product = product.sort();
// for (let i = 0; i < product.length; i++) {
//   if (product[i][0] !== product[i][0].toUpperCase()) {
//     product[i] = product[i][0].toUpperCase() + product[i].slice(1);
//   }
//   if (
//     product[i].toUpperCase() === "cpu".toUpperCase() ||
//     product[i].toUpperCase() === "ram".toUpperCase()
//   ) {
//     continue;
//   }

//   console.log(`# ${product[i]}`);

//   for (let c = 0; c < color.length; c++) {
//     if (color[c][0] !== color[c][0].toUpperCase()) {
//       color[c] = color[c][0].toUpperCase() + color[c].slice(1);
//     }
//     console.log(`- ${color[c]}`);
//   }
// }

document.write(`<h1>show ${showCount} products </h1>`.toUpperCase());
for (let i = 0; i < showCount; i++) {
  if (allProduct[i][0] !== allProduct[i][0].toUpperCase()) {
    allProduct[i] = allProduct[i][0].toUpperCase() + allProduct[i].slice(1);
  }
  if (allProduct[i].toLowerCase() === hardware[i - product.length]) {
    continue;
  } 
  document.write(`<div>`);

  document.write(`<h2>${allProduct[i]}</h2>`);
  document.write(`<h4> colors : </h4>`);

  for (let c = 0; c < color.length; c++) {
    if (color[c][0] !== color[c][0].toUpperCase()) {
      color[c] = color[c][0].toUpperCase() + color[c].slice(1);
    }

    document.write(`<h4> ${color[c]} </h4>`);
  }

  document.write(`</div>`);
}
