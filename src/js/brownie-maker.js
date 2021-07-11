class BrownieMaker {

    constructor() {
        this.clickCount = 0; // Number of brownies
        this.autoClickerCount = 0; // Number of Auto Clickers purchased
        this.autoClickerCost = 100; // Cost of first Auto Clicker
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

}