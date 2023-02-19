"use strict";
let basket = JSON.parse(localStorage.getItem("basketData")) || [];
let calculation = () => {
    let cartIcon = document.getElementById("cart-amount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();
