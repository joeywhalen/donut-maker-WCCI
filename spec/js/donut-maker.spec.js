describe('FEATURE: Have a way to count donuts', () => {
    describe('Can add to donut count.', () => {
        let underTest; //Has to be declared prior to beforeEach

        beforeEach(() => {
            underTest = new DonutMaker();
        })

        it('should start with a click count of 0', () => {
            expect(underTest.clickCount).toBe(0);
        })
        it('Can retrieve a donut count.', () => {
            underTest.recordClick();
            expect(underTest.clickCount).toBe(1);
        });
        if ('Can retrieve 2 as a donut count if 2 clicks recorded', () => {
            underTest.recordClick();
            underTest.recordClick();
            expect(underTest.clickCount).toBe(2);
        });
    });
});