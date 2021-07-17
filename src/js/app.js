// import {BrownieMaker} from "./brownie-maker.js";

const newBrownie = new BrownieMaker();

const brownieButton = document.querySelector(".brownie-button");
const brownieCount = document.querySelector(".click-count");

const purchaseAutoClickerButton = document.querySelector(".purchase-auto-clicker-button");
const autoClickerCount = document.querySelector(".auto-clicker-count");
const autoClickerCost = document.querySelector(".auto-clicker-cost");

const purchaseBrownieMultiplierButton = document.querySelector(".purchase-brownie-multiplier-button");
const brownieMultiplierCount = document.querySelector(".brownie-multiplier-count");
const brownieMultiplierCost = document.querySelector(".brownie-multiplier-cost");

const brownieReset = document.querySelector(".reset-button");


brownieButton.addEventListener("click", () => {
    newBrownie.recordClick();
    console.log(newBrownie.clickCount);
    brownieCount.innerHTML = newBrownie.clickCount;
});

const updateBrownieCount = function (newBrownie) {
    brownieCount.innerHTML = newBrownie.brownieCount();
};

purchaseAutoClickerButton.addEventListener("click", () => {
    newBrownie.purchaseAutoClicker();
    console.log(newBrownie.autoClickerCount);
    autoClickerCount.innerHTML = newBrownie.autoClickerCount;
    console.log(newBrownie.autoClickerCost);
    autoClickerCost.innerHTML = newBrownie.autoClickerCost;
});

purchaseBrownieMultiplierButton.addEventListener("click", () => {
    newBrownie.purchaseBrownieMultiplier();
    console.log(newBrownie.brownieMultiplierCount);
    brownieMultiplierCount.innerHTML = newBrownie.brownieMultiplierCount;
    console.log(newBrownie.brownieMultiplierCost);
    brownieMultiplierCost.innerHTML = newBrownie.brownieMultiplierCost;
})