class BrownieMaker {

    constructor() {
        this.clickCount = 0; // Number of brownies
        this.autoClickerCount = 0; // Number of Auto Clickers purchased
        this.autoClickerCost = 100; // Cost of first Auto Clicker
        this.brownieMultiplierCount = 0; // Number of Brownie Multipliers purchased
        this.brownieMultiplierCost = 10; //Cost of first Brownie Multiplier
    }

    brownieCount() {
        return this.clickCount;
    }

    recordClick() {
        if (this.brownieMultiplierCount < 1) {
            this.clickCount++;
        } else {
            this.clickCount += Math.pow(1.2, this.brownieMultiplierCount);
            this.clickCount = Math.round(this.clickCount);
        }
    }

    recordAutoClick() {
        if (this.autoClickerCount < 2 && this.brownieMultiplierCount < 1) {
            this.clickCount++;
        } else if (this.brownieMultiplierCount < 1) {
            this.clickCount += this.autoClickerCount;
        } else {
            this.clickCount += this.autoClickerCount;
            this.clickCount += Math.pow(1.2, this.brownieMultiplierCount);
            this.clickCount = Math.round(this.clickCount);
        }
        console.log("click count: "+ this.clickCount);
    }
    
    purchaseAutoClicker() {
        if (this.clickCount >= this.autoClickerCost) {
            this.clickCount -= this.autoClickerCost;
            this.autoClickerCount++;
            this.activateAutoClicker();
            this.autoClickerCost = Math.round(this.autoClickerCost * 1.10);
        }
    }

    purchaseBrownieMultiplier() {
        if (this.clickCount >= this.brownieMultiplierCost) {
            this.clickCount -= this.brownieMultiplierCost;
            this.brownieMultiplierCount++;
            this.brownieMultiplierCost = Math.round(this.brownieMultiplierCost * 1.10);
        }
    }

    activateAutoClicker() {
        setInterval(this.recordAutoClick, 1000);
        this.recordAutoClick;
    }

    brownieMakerReset() {
        this.clickCount = 0;
        this.autoClickerCount = 0;
        this.brownieMultiplierCount = 0;
    }

    // get clickCount() {
    //     return this.clickCount;
    // }

}
// export { BrownieMaker }