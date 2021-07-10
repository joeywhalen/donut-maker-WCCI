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
        if ('Can retrieve 2 as a brownie count if 2 clicks recorded.', () => {
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
            underTest.clickCount = 150;
        });

        it('Should start with a click count of 150.', () => {
            expect(underTest.clickCount).toBe(150);
        });

        it('Can retrieve a brownie Auto Clicker count.', () => {
            underTest.recordAutoClick();
            expect(underTest.clickCount).toBe(151);
        });

        it('Can retrieve a brownie Auto Clicker count if 2 Auto Clicks recorded.', () => {
            underTest.recordAutoClick();
            underTest.recordAutoClick();
            expect(underTest.clickCount).toBe(152);
        });

        it('Can subtract the Auto Clicker cost from the brownie count.', () => {
            underTest.purchaseAutoClicker();
            expect(underTest.clickCount).toBe(50);
        });
    });
});

describe('FEATURE: The cost of each Auto Clicker will go up with each purchase', () => {
    describe('Increase the cost of the second Auto Clicker by 10%, and each additional Auto Clicker by additional 10%', () => {
        let underTest;

        beforeEach(() => {
            underTest = new BrownieMaker;
            underTest.clickCount = 300;
        });

        it('Should start with a click count of 300.', () => {
            expect(underTest.clickCount).toBe(300);
        });
    });
});