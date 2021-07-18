class BrownieMaker {

    constructor() {
        this.clickCount = 0; // Number of brownies
        this.autoClickerCount = 0; // Number of Auto Clickers purchased
        this.autoClickerCost = 10; // Cost of first Auto Clicker
        this.brownieMultiplierCount = 0; // Number of Brownie Multipliers purchased
        this.brownieMultiplierCost = 10; //Cost of first Brownie Multiplier
        this.browniesPerClick = 1; // Number of brownies baked per click with no Brownie Multipliers
    }

    brownieCount() {
        return this.clickCount;
    }

    recordClick() {
        if (this.brownieMultiplierCount < 1) {
            this.clickCount++;
            brownieCount.innerHTML = this.clickCount;
        } else {
            this.clickCount += Math.pow(1.2, this.brownieMultiplierCount);
            this.clickCount = Math.round(this.clickCount);
            brownieCount.innerHTML = this.clickCount;
        }
        // disableAutoClickerButton();
    }

    recordAutoClick() {
        if (this.autoClickerCount < 2 && this.brownieMultiplierCount < 1) {
            this.clickCount++;
            brownieCount.innerHTML = this.clickCount;
            // newBrownie.showBrowniesPerClick();
            // brownieClickValue.innerHTML = newBrownie.browniesPerClick;
        } else if (this.brownieMultiplierCount < 1) {
            this.clickCount += this.autoClickerCount;
            brownieCount.innerHTML = this.clickCount;
            // newBrownie.showBrowniesPerClick();
            // brownieClickValue.innerHTML = newBrownie.browniesPerClick;
        } else {
            this.clickCount += this.autoClickerCount;
            this.clickCount += Math.pow(1.2, this.brownieMultiplierCount);
            this.clickCount = Math.round(this.clickCount);
            brownieCount.innerHTML = this.clickCount;
            // newBrownie.showBrowniesPerClick();
            // brownieClickValue.innerHTML = newBrownie.browniesPerClick;
        }
    }

    showBrowniesPerClick() {
        this.browniesPerClick = Math.pow(1.2, this.brownieMultiplierCount);
        
    }
    
    purchaseAutoClicker() {
        if (this.clickCount >= this.autoClickerCost) {
            this.clickCount -= this.autoClickerCost;
            this.autoClickerCount++;
            setInterval(() => {
                this.recordClick();
            }, 1000);
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

    brownieMakerReset() {
        location.reload();
    }

}
// export { BrownieMaker }