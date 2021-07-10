class BrownieMaker {

    constructor() {
        this.clickCount = 0;
        this.AutoClickerCount = 0;
    }

    recordClick(){
        this.clickCount++;
    }

    recordAutoClick() {
        this.clickCount++;
    }
    
    purchaseAutoClicker() {
        this.clickCount -= 100;
        this.autoClickerCount++;
    }

}