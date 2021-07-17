import {BrownieMaker} from "./brownie-maker.js";

const newBrownie = new BrownieMaker();

const brownieButton = document.querySelector(".brownie-button");
const brownieCount = document.querySelector(".click-count");

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