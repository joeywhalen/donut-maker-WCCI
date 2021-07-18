// import {BrownieMaker} from "./brownie-maker.js";

const newBrownie = new BrownieMaker();

const brownieButton = document.querySelector(".brownie-button");
const brownieCount = document.querySelector(".click-count");
const brownieClickValue = document.querySelector(".click-value");

const purchaseAutoClickerButton = document.querySelector(".purchase-auto-clicker-button");
const autoClickerCount = document.querySelector(".auto-clicker-count");
const autoClickerCost = document.querySelector(".auto-clicker-cost");

const purchaseBrownieMultiplierButton = document.querySelector(".purchase-brownie-multiplier-button");
const brownieMultiplierCount = document.querySelector(".brownie-multiplier-count");
const brownieMultiplierCost = document.querySelector(".brownie-multiplier-cost");

const brownieAudio = document.getElementById("brownieButtonAudio");
const resetAudio = document.getElementById("resetButtonAudio");
const autoClickerAudio = document.getElementById("autoClickerButtonAudio");
const brownieMultiplierAudio = document.getElementById("multiplierButtonAudio");

const brownieReset = document.querySelector(".reset-button");

brownieButton.addEventListener("click", () => {
    newBrownie.recordClick();
    brownieCount.innerHTML = newBrownie.clickCount;
    newBrownie.showBrowniesPerClick();
    brownieClickValue.innerHTML = newBrownie.browniesPerClick;
});

function playBrownieAudio() {
    brownieAudio.play();
};

function playResetAudio() {
    resetAudio.play();
};

function playAutoClickerAudio() {
    autoClickerAudio.play();
};

function playMultiplierAudio() {
    brownieMultiplierAudio.play();
};

// const disableAutoClickerButton = function () {
//     if (this.clickCount < this.autoClickerCost) {
//         document.getElementById("clickerButton").disabled = true;
//     } else {
//         document.getElementById("clickerButton").disabled = false;
//     }
// };

purchaseAutoClickerButton.addEventListener("click", () => {
    newBrownie.purchaseAutoClicker();
    autoClickerCount.innerHTML = newBrownie.autoClickerCount;
    autoClickerCost.innerHTML = newBrownie.autoClickerCost;
});

purchaseBrownieMultiplierButton.addEventListener("click", () => {
    newBrownie.purchaseBrownieMultiplier();
    brownieMultiplierCount.innerHTML = newBrownie.brownieMultiplierCount;
    brownieMultiplierCost.innerHTML = newBrownie.brownieMultiplierCost;
    newBrownie.showBrowniesPerClick();
    brownieClickValue.innerHTML = newBrownie.browniesPerClick;
});

brownieReset.addEventListener("click", () => {
    // newBrownie.playResetAudio();
    newBrownie.brownieMakerReset();
});