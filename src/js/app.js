import {BrownieMaker} from "./brownie-maker.js";

const newBrownie = new BrownieMaker();

const brownieButton = document.querySelector(".brownie-button");
const brownieCount = document.querySelector(".click-count");

const purchaseAutoClickerButton = document.querySelector(".purchase-auto-clicker-button");
const autoClickerCount = document.querySelector(".auto-clicker-count");

const purchaseBrownieMultiplierButton = document.querySelector(".purchase-brownie-multiplier-button");
const brownieMultiplierCount = document.querySelector(".brownie-multiplier-count");

brownieButton.addEventListener("click", () => {
    newBrownie.recordClick();
    console.log(newBrownie.clickCount);
});

const updateBrownieCount = function (newBrownie) {
    newBrownie.brownieCount();
    brownieCount.innerHTML = "5";
    brownieCount.innerHTML = newBrownie.clickCount;
    brownieCount.innerText = newBrownie.clickCount;
}

const updBrownieCount = newBrownie.brownieCount();

purchaseAutoClickerButton.addEventListener("click", () => {
    newBrownie.purchaseAutoClicker();
    console.log(newBrownie.autoClickerCount);
    console.log(newBrownie.autoClickerCost);
});

purchaseBrownieMultiplierButton.addEventListener("click", () => {
    newBrownie.purchaseBrownieMultiplier();
    console.log(newBrownie.brownieMultiplierCount);
    console.log(newBrownie.brownieMultiplierCost);
})