describe('FEATURE 1.1: Have a way to count vegan brownies.', () => {
    describe('Can add to brownie count, and retrieve brownie count.', () => {
        let underTest; //Has to be declared prior to beforeEach

        beforeEach(() => {
            underTest = new BrownieMaker();
        });

        it('Should start with a click count of 0.', () => {
            expect(underTest.clickCount).toBe(0);
        });
        it('Can retrieve a brownie count.', () => {
            underTest.recordClick();
            expect(underTest.clickCount).toBe(1);
        });
        it ('Can retrieve 2 as a brownie count if 2 clicks recorded.', () => {
            underTest.recordClick();
            underTest.recordClick();
            expect(underTest.clickCount).toBe(2);
        });
    });
});

describe('FEATURE 1.2: Be able to purchase the first Auto Clicker with 100 brownies from your brownie count.', () => {
    describe('Can retrieve an Auto Clicker Count, add to Auto Clicker count, and subtract Auto Clicker cost from brownie count.', () => {
        let underTest;

        beforeEach(() => {
            underTest = new BrownieMaker();
            underTest.clickCount = 450;
            underTest.autoClickerCount = 0;
        });

        it('Should start with a click count of 450, and Auto Clicker count of 0.', () => {
            expect(underTest.clickCount).toBe(450);
            expect(underTest.autoClickerCount).toBe(0);
        });

        it('Can retrieve a brownie Auto Clicker count.', () => {
            underTest.purchaseAutoClicker();
            expect(underTest.autoClickerCount).toBe(1);
        });

        it('Can retrieve a brownie Auto Clicker count if 2 Auto Clickers are purchased.', () => {
            underTest.purchaseAutoClicker();
            underTest.purchaseAutoClicker();
            expect(underTest.autoClickerCount).toBe(2);
        });

        it('Can subtract the Auto Clicker cost from the brownie count.', () => {
            underTest.purchaseAutoClicker();
            expect(underTest.clickCount).toBe(350);
            expect(underTest.autoClickerCount).toBe(1);
        });
    });
});

describe('FEATURE 1.3: The cost of each Auto Clicker will go up with each purchase', () => {
    describe('Increase the cost of the second Auto Clicker by 10%, and each additional Auto Clicker by additional 10%', () => {
        let underTest;

        beforeEach(() => {
            underTest = new BrownieMaker;
            underTest.clickCount = 400;
        });

        it('Should start with a click count of 400.', () => {
            expect(underTest.clickCount).toBe(400);
        });

        it('Should subtract the Auto Clicker cost from the brownie count.', () => {
            underTest.purchaseAutoClicker(); // Subtract 100
            underTest.purchaseAutoClicker(); // Subtract 110
            expect(underTest.clickCount).toBe(190);
        });

        it('Should subtract the Auto Clicker cost from the brownie count.', () => {
            underTest.purchaseAutoClicker();
            underTest.purchaseAutoClicker();
            underTest.purchaseAutoClicker(); // Subtract 121
            expect(underTest.clickCount).toBe(69);
        });        
    });
});

describe('FEATURE 1.4: Ensure that there are enough brownies to buy an Auto Clicker.', () => {
    describe('Prevent the Auto Clicker count from going up if there are not enough brownies to purcfhase an Auto Clicker.', () => {
        let underTest;

        beforeEach(() => {
            underTest = new BrownieMaker;
            underTest.clickCount = 400;
        });

        it('Should start with a click count of 400.', () => {
            expect(underTest.clickCount).toBe(400);
        });

        it('Should not allow click count to increase by purchasing Auto Clicker when click count is below 100.', () => {
            underTest.purchaseAutoClicker();
            console.log(underTest.clickCount);
            underTest.purchaseAutoClicker();
            console.log(underTest.clickCount);
            underTest.purchaseAutoClicker();
            expect(underTest.clickCount).toBe(69);
            underTest.purchaseAutoClicker();
            console.log(underTest.clickCount);
        });
    });
});

describe('FEATURE 1.5: The amount of Auto Clickers affect the amount of brownies added when an Activate Auto Clickers event is called', () => {
    describe('When the Activate Auto Clickers event is executed, increase the brownie total by the amount of Auto Clickers owned', () => {
        let underTest;

        beforeEach(() => {
            underTest = new BrownieMaker;
            underTest.clickCount = 400;
        });

        it('Should start with a click count of 300.', () => {
            expect(underTest.clickCount).toBe(400);
        });

        it('Should count 1 brownie per click after purchasing first Auto Clicker.', () => {
            underTest.purchaseAutoClicker(); // Subtract 100 brownies
            underTest.recordAutoClick();
            underTest.recordAutoClick();
            expect(underTest.clickCount).toBe(302);
        });

        it('Should count 2 brownies per click after purchasing second Auto Clicker.', () => {
            underTest.purchaseAutoClicker(); // Subtract 100 brownies
            underTest.recordAutoClick(); // Add 1 brownie
            underTest.purchaseAutoClicker(); // Subtract 110 brownies
            underTest.recordAutoClick(); // Add 2 brownies
            expect(underTest.clickCount).toBe(193);
        });

        it('Should count 3 brownies per click after purchasing third Auto Clicker.', () => {
            underTest.purchaseAutoClicker();
            underTest.recordAutoClick();
            underTest.purchaseAutoClicker();
            underTest.recordAutoClick();
            underTest.purchaseAutoClicker();
            underTest.recordAutoClick();
            expect(underTest.clickCount).toBe(75);
        });
    });
});

describe('FEATURE 2.1: Be able to purchase the first brownie multiplier with 10 clicks from your click count', () => {
    describe('Can retrieve a Brownie Multiplier Count, add to a Brownie Multiplier count, and subtract a Brownie Multiplier cost from brownie count.', () => {
        let underTest;

        beforeEach(() => {
            underTest = new BrownieMaker;
            underTest.clickCount = 50;
        });

        it('Should start with a click count of 50, and a Brownie Multiplier count of 0.', () => {
            expect(underTest.clickCount).toBe(50);
            expect(underTest.brownieMultiplierCount).toBe(0);
        });

        it('Can retrieve a Brownie Multiplier count if a Brownie Multiplier is purchased.', () => {
            underTest.purchaseBrownieMultiplier();
            expect(underTest.brownieMultiplierCount).toBe(1);
        });

        it('Can retrieve a Brownie Multiplier count if 2 Brownie Multipliers are purchased.', () => {
            underTest.purchaseBrownieMultiplier();
            underTest.purchaseBrownieMultiplier();
            expect(underTest.brownieMultiplierCount).toBe(2);
        });

        it('Can subtract the Brownie Multiplier cost from the Brownie count.', () => {
            underTest.purchaseBrownieMultiplier();
            expect(underTest.clickCount).toBe(40);
            expect(underTest.brownieMultiplierCount).toBe(1);
        });
    });
});

describe('FEATURE 2.2: The cost of each Brownie Multiplier will go up with each purchase.', () => {
    describe('Increase the cost of the second Brownie Multiplier by 10%, and each additional Brownie Multiplier by additional 10%', () => {
        let underTest;

        beforeEach(() => {
            underTest = new BrownieMaker;
            underTest.clickCount = 50;
        });

        it('Should start with a click count of 50, and a Brownie Multiplier count of 0.', () => {
            expect(underTest.clickCount).toBe(50);
            expect(underTest.brownieMultiplierCount).toBe(0);
        });

        it('Should subtract the Brownie Multiplier cost from the brownie count.', () => {
            underTest.purchaseBrownieMultiplier(); // Subtract 10
            underTest.purchaseBrownieMultiplier(); // Subtract 11
            expect(underTest.clickCount).toBe(29);
        });

        it('Should subtract the Brownie Multiplier cost from the brownie count.', () => {
            underTest.purchaseBrownieMultiplier();
            underTest.purchaseBrownieMultiplier();
            underTest.purchaseBrownieMultiplier(); // Subtract 12
            expect(underTest.clickCount).toBe(17);
        });                
    });
});

describe('FEATURE 2.3: Ensure that there are enough brownies to buy a Brownie Multiplier.', () => {
    describe('Prevent the Brownie Multiplier count from going up if there are not enough brownies to purcfhase a Brownie Multiplier.', () => {
        let underTest;

        beforeEach(() => {
            underTest = new BrownieMaker;
            underTest.clickCount = 40;
        });

        it('Should start with a click count of 400.', () => {
            expect(underTest.clickCount).toBe(40);
        });

        it('Should not allow click count to increase by purchasing Auto Clicker when click count is below 100.', () => {
            underTest.purchaseBrownieMultiplier();
            console.log(underTest.clickCount);
            underTest.purchaseBrownieMultiplier();
            console.log(underTest.clickCount);
            underTest.purchaseBrownieMultiplier();
            expect(underTest.clickCount).toBe(7);
            underTest.purchaseBrownieMultiplier();
            console.log(underTest.clickCount);
        });
    });
});

describe('FEATURE 2.4: The first Brownie Multiplier should increase the value of a click 1.2x', () => {
    describe('Increase the amount of brownies added to the brownie count by multiplying by 1.2 after the first Brownie Multiplier is purchased.', () => {
        let underTest;

        beforeEach(() => {
            underTest = new BrownieMaker;
            underTest.clickCount = 40;
        });

        it('Should start with a click count of 40.', () => {
            expect(underTest.clickCount).toBe(40);
        });

        it('Should count 1.2 brownies per click after the first Brownie Multiplier is purchased.', () => {
            underTest.purchaseBrownieMultiplier();
            underTest.recordAutoClick();
            expect(underTest.clickCount).toBe(31);
            underTest.recordAutoClick();
            expect(underTest.clickCount).toBe(32);
        });
    });
});

describe('FEATURE 2.5: The amount the subsequent Donut Multipliers click bonus will go up exponentially.', () => {
    describe('Increase the click value multiplier to 1.2 to the xth power, where _x_ is the amount of the Donut Multipliers count.', () => {
        let underTest;

        beforeEach(() => {
            underTest = new BrownieMaker;
            underTest.clickCount = 40;
        });

         it('Should start with a click count of 40.', () => {
            expect(underTest.clickCount).toBe(40);
        });

        it('Should count 1.728 brownies per click after the third Brownie Multiplier is purchased.', () => {
            underTest.purchaseBrownieMultiplier();
            underTest.recordAutoClick();
            underTest.purchaseBrownieMultiplier();
            underTest.recordAutoClick();
            underTest.purchaseBrownieMultiplier();
            underTest.recordAutoClick();
            expect(underTest.clickCount).toBe(11);
        });
    }); 
});

describe('FEATURE 2.7: Reset the game state.', () => {
    describe('This action should reset the game to 0 donuts, 0 Auto Clickers, and 0 Donut Multipliers.', () => {
        let underTest;

        beforeEach(() => {
            underTest = new BrownieMaker;
            underTest.clickCount = 50;
            underTest.autoClickerCount = 5;
            underTest.brownieMultiplierCount = 5;
        });

         it('Should start with a click count of 50, Auto Clicker count of 5, and a Brownie Multiplier count of 5.', () => {
             expect(underTest.clickCount).toBe(50);
             expect(underTest.autoClickerCount).toBe(5);
             expect(underTest.brownieMultiplierCount).toBe(5);

        });

        it('Should reset the game to 0 donuts, 0 Auto Clickers, and 0 Donut Multipliers.', () => {
            underTest.brownieMakerReset();
            expect(underTest.clickCount).toBe(0);
            expect(underTest.autoClickerCount).toBe(0);
            expect(underTest.brownieMultiplierCount).toBe(0);
        });
    }); 
});