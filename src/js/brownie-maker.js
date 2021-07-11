class BrownieMaker {

    constructor() {
        this.clickCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerCost = 100;
    }

    recordClick(){
        this.clickCount++;
    }

    recordAutoClick() {
        this.clickCount++;
    }
    
    purchaseAutoClicker() {
        if (this.clickCount >= this.autoClickerCost) {
            this.clickCount -= this.autoClickerCost;
            this.autoClickerCount++;
            this.autoClickerCost = Math.round(this.autoClickerCost * 1.10);
        }
    }

}