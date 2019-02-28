describe('LinkedList0 ', function () {
    let obj = new LinkedList0();
    describe('checked method myUnshift', function () {
        const expected1 = 8;
        const expected2 = 0;
        const expected3 = 9;
        it(`should return  new list end length list`, function () {
            let actual3;

            for (let i = 0; i < 9; i++) {
                actual3 = obj.myUnshift(i);
            }
            let actual1 = obj.root.value;
            let actual2 = obj.last.value;

            assert.strictEqual(actual1, expected1);
            assert.strictEqual(actual2, expected2);
            assert.strictEqual(actual3, expected3);
        });
    });

    describe('checked method myShift', function () {
        const expected1 = 7;
        const expected2 = 0;
        const expected3 = 8;
        it(`should return  new list and deleted element`, function () {
            let actual3 = obj.myShift();
            let actual1 = obj.root.value;
            let actual2 = obj.last.value;

            assert.strictEqual(actual1, expected1);
            assert.strictEqual(actual2, expected2);
            assert.strictEqual(actual3, expected3);
        });
    });

    describe('checked method myPop', function () {
        const expected1 = 7;
        const expected2 = 1;
        const expected3 = 0;
        it(`should return  new list and deleted element`, function () {
            let actual3 = obj.myPop();
            let actual1 = obj.root.value;
            let actual2 = obj.last.value;

            assert.strictEqual(actual1, expected1);
            assert.strictEqual(actual2, expected2);
            assert.strictEqual(actual3, expected3);
        });
    });

    describe('checked method myPush', function () {
        const a = 0;
        const expected1 = 7;
        const expected2 = 0;
        const expected3 = 8;
        it(`should return  new list end length list`, function () {
            let actual3 = obj.myPush(a);
            let actual1 = obj.root.value;
            let actual2 = obj.last.value;

            assert.strictEqual(actual1, expected1);
            assert.strictEqual(actual2, expected2);
            assert.strictEqual(actual3, expected3);
        });
    });

    describe('checked method myRemove', function () {
        const a = 5;
        const expected1 = 7;
        const expected2 = 0;
        const expected3 = true;
        const expected4 = 7;

        it(`should return  new list end length list`, function () {
            let actual3 = obj.myRemove(a);
            let actual1 = obj.root.value;
            let actual2 = obj.last.value;
            let actual4 = obj.length;

            assert.strictEqual(actual1, expected1);
            assert.strictEqual(actual2, expected2);
            assert.strictEqual(actual3, expected3);
            assert.strictEqual(actual4, expected4);
        });
    });

    describe('checked method myIsArray', function () {
        describe('method return true', function () {
            const testData = [
                {arrA: [], expected: true},
                {arrA: [5], expected: true},
                {arrA: [0, 1, 2, 3, 4, 5, 6, 7, 8], expected: true}
            ];
            testData.forEach(function (data) {
                const {arrA, expected} = data;
                it(`should return bool ${expected}  if object was \[${arrA}\] `, function () {

                    let actual = obj.myIsArray(arrA);

                    assert.strictEqual(actual, expected);
                });
            });
        });
        describe('method return false', function () {
            const testData = [
                {arrA: obj, expected: false},
                {arrA: 'str', expected: false},
                {arrA: 5, expected: false},
                {arrA: undefined, expected: false}
            ];
            testData.forEach(function (data) {
                const {arrA, expected} = data;
                it(`should return bool ${expected}  if object was ${arrA} `, function () {

                    let actual = obj.myIsArray(arrA);

                    assert.strictEqual(actual, expected);
                });
            });
        });
    });
});
