describe('LinkedList1 ', function () {
    const obj = new LinkedList1();
    const obj1 = new LinkedList1();

    describe('checked method myUnshift', function () {
        it(`should return  new list end length list`, function () {
            const expected1 = 8;
            const expected2 = 0;
            const expected3 = 9;

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

        it(`should return  unchanged length, if argument is empty`, function () {
            const expected = obj.length;
            const actual = obj.myUnshift();

            assert.strictEqual(actual, expected);
        });
    });

    describe('checked method myShift', function () {
        it(`should return  new list and deleted element`, function () {
            const expected1 = 7;
            const expected2 = 0;
            const expected3 = 8;

            let actual3 = obj.myShift();
            let actual1 = obj.root.value;
            let actual2 = obj.last.value;

            assert.strictEqual(actual1, expected1);
            assert.strictEqual(actual2, expected2);
            assert.strictEqual(actual3, expected3);
        });

        it(`should return  undefined, if list is empty`, function () {
            const expected = undefined;
     //       const obj1 = new LinkedList1();
            const actual = obj1.myShift();
            assert.strictEqual(actual, expected);
        });
    });

    describe('checked method myPop', function () {
        it(`should return  new list and deleted element`, function () {
            const expected1 = 7;
            const expected2 = 1;
            const expected3 = 0;

            const actual3 = obj.myPop();
            const actual1 = obj.root.value;
            const actual2 = obj.last.value;

            assert.strictEqual(actual1, expected1);
            assert.strictEqual(actual2, expected2);
            assert.strictEqual(actual3, expected3);
        });

        it(`should return  undefined, if list is empty`, function () {
            const expected = undefined;
            const actual = obj1.myPop();
            assert.strictEqual(actual, expected);
        });
    });

    describe('checked method myPush', function () {
        it(`should return  new list end length list`, function () {
            const a = 0;
            const expected1 = 7;
            const expected2 = 0;
            const expected3 = 8;

            const actual3 = obj.myPush(a);
            const actual1 = obj.root.value;
            const actual2 = obj.last.value;

            assert.strictEqual(actual1, expected1);
            assert.strictEqual(actual2, expected2);
            assert.strictEqual(actual3, expected3);
        });
        it(`should return  unchanged length list, if argument is empty`, function () {
            const expected = obj.length;
            const actual = obj.myPush();
            assert.strictEqual(actual, expected);
        });
    });

    describe('checked method myRemove', function () {
        it(`should return  new list end length list`, function () {
            const a = 5;
            const expected1 = 7;
            const expected2 = 0;
            const expected3 = true;
            const expected4 = 7;

            const actual3 = obj.myRemove(a);
            const actual1 = obj.root.value;
            const actual2 = obj.last.value;
            const actual4 = obj.length;

            assert.strictEqual(actual1, expected1);
            assert.strictEqual(actual2, expected2);
            assert.strictEqual(actual3, expected3);
            assert.strictEqual(actual4, expected4);
        });
    });

    describe('checked method myToArrayList', function () {
        it(`should return  array end length list`, function () {
            const expected1 = [7, 6, 4, 3, 2, 1, 0];
            const expected2 = obj.length;

            const actual1 = obj.myToArrayList().arr;
            const actual2 = actual1.length;

            assert.deepEqual(actual1, expected1);
            assert.strictEqual(actual2, expected2);

        });
        it(`should return [] array if {} list`, function () {
            const expected1 = [];
            const expected2 = obj1.length;

            const actual1 = obj1.myToArrayList().arr;
            const actual2 = actual1.length;

            assert.deepEqual(actual1, expected1);
            assert.strictEqual(actual2, expected2);

        });
    });

    describe('checked method myToString', function () {
        it(`should return  array end length list`, function () {
            const expected1 = '7, 6, 4, 3, 2, 1, 0';

            const actual1 = obj.myToString();

            assert.deepEqual(actual1, expected1);
        });
        it(`should return '' array if {} listt`, function () {
            const expected1 = '';

            const actual1 = obj1.myToString();

            assert.deepEqual(actual1, expected1);
        });
    });

    describe('checked method myToLinkedList', function () {
        it(`should return  array end length list`, function () {
            const expected1 = obj.myToString();
            obj.myToLinkedList();
            let actual1 = obj.myToString();

            assert.deepEqual(actual1, expected1);
        });
        it(`should return '' array if {} listt`, function () {
            const expected1 = '';
            obj1.myToLinkedList();
            let actual1 = obj1.myToString();

            assert.deepEqual(actual1, expected1);
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
