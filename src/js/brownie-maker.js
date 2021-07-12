class BrownieMaker {

    constructor() {
        this.clickCount = 0; // Number of brownies
        this.autoClickerCount = 0; // Number of Auto Clickers purchased
        this.autoClickerCost = 100; // Cost of first Auto Clicker
        this.brownieMultiplierCount = 0; // Number of Brownie Multipliers purchased
        this.brownieMultiplierCost = 10; //Cost of first Brownie Multiplier
    }

    recordClick(){
        this.clickCount++;
    }

    recordAutoClick() {
        if (this.autoClickerCount < 2) {
            this.clickCount++;
        } else {
            this.clickCount += this.autoClickerCount;
        }
    }
    
    purchaseAutoClicker() {
        if (this.clickCount >= this.autoClickerCost) {
            this.clickCount -= this.autoClickerCost;
            this.autoClickerCount++;
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

}