describe('FEATURE: Have a way to count vegan brownies', () => {
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

describe('FEATURE: Be able to purchase the first Auto Clicker with 100 brownies from your brownie count.', () => {
    describe('Can retrieve an Auto Clicker Count, add to Auto Clicker count, and subtract Auto Clicker cost from brownie count.', () => {
        let underTest;

        beforeEach(() => {
            underTest = new BrownieMaker();
            underTest.clickCount = 450;
            underTest.autoClickerCount = 0;
        });

        it('Should start with a click count of 450.', () => {
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

describe('FEATURE: The cost of each Auto Clicker will go up with each purchase', () => {
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

describe('FEATURE: Ensure that there are enough clicks to buy an Auto Clicker.', () => {
    describe('Prevent the Auto Clicker count from going up if there are not enough clicks to purcfhase an Auto Clicker.', () => {
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

describe('FEATURE: The amount of Auto Clickers affect the amount of brownies added when an Activate Auto Clickers event is called', () => {
    describe('When the Activate Auto Clickers event is executed, increase the brownie total by the amount of Auto Clickers owned', () => {
        let underTest;

        beforeEach(() => {
            underTest = new BrownieMaker;
            underTest.clickCount = 300;
        });

        

    });
});