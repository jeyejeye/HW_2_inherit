describe('Alist1 method init', function () {

    const arrA = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let obj = new Alist1();
    obj.init(arrA);
    it(`should return  new array \[ ${expected} \]  if array is \[${obj.arr}\] `, function () {
        let actual = obj.arr;

        assert.deepEqual(actual, expected);
    });
});


describe('Alist1  method myPush', function () {

    describe('checked method myPush', function () {

        const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        it(`should return  new array`, function () {

            let obj = new Alist1();
            for (let i = 0; i < 9; i = i + 3) {
                obj.myPush(i, i + 1, i + 2);
            }
            let actual = obj.arr;

            assert.deepEqual(actual, expected);
        });
    });

    describe('checked method myPush', function () {
        const a = 9;
        const b = 10;
        const arrA = [0, 1, 2, 3, 4, 5, 6, 7, 8];

        it('should return length new array', function () {
            let obj = new Alist1();
            obj.init(arrA);
            const expected = obj.arr.length + 2;
            let actual = obj.myPush(a, b);

            assert.strictEqual(actual, expected);

        });
    });
});


describe('Alist1  method myPop', function () {
    const testData = [
        {arrA: [], expected1: [], expected2: undefined},
        {arrA: [5], expected1: [], expected2: 5},
        {arrA: [0, 1, 2, 3, 4, 5, 6, 7, 8], expected1: [0, 1, 2, 3, 4, 5, 6, 7], expected2: 8}
    ];
    testData.forEach(function (data) {
        const {arrA, expected1, expected2} = data;
        it(`should return  new array\[ ${expected1} \]  if array was \[${arrA}\] and deleted element ${expected2}`, function () {
            let obj = new Alist1();
            obj.init(arrA);
            let actual2 = obj.myPop();
            let actual1 = obj.arr;

            assert.deepEqual(actual1, expected1);

            assert.strictEqual(actual2, expected2);
        });
    });
});


describe('Alist1  method myUnshift', function () {

    describe('checked method myUnshift', function () {

        const expected = [6, 7, 8, 3, 4, 5, 0, 1, 2];
        it(`should return  new array`, function () {

            let obj = new Alist1();
            for (let i = 0; i < 9; i = i + 3) {
                obj.myUnshift(i, i + 1, i + 2);
            }
            let actual = obj.arr;

            assert.deepEqual(actual, expected);
        });
    });

    describe('checked method myUnshift', function () {
        const a = 9;
        const b = 10;
        const arrA = [0, 1, 2, 3, 4, 5, 6, 7, 8];

        it('should return length new array', function () {
            let obj = new Alist1();
            obj.init(arrA);
            const expected = obj.arr.length + 2;
            let actual = obj.myUnshift(a, b);

            assert.strictEqual(actual, expected);

        });
    });
});


describe('Alist1  method myShift', function () {
    const testData = [
        {arrA: [], expected1: [], expected2: undefined},
        {arrA: [5], expected1: [], expected2: 5},
        {arrA: [0, 1, 2, 3, 4, 5, 6, 7, 8], expected1: [1, 2, 3, 4, 5, 6, 7, 8], expected2: 0}
    ]
    testData.forEach(function (data) {
        const {arrA, expected1, expected2} = data;
        it(`should return  new array\[ ${expected1} \]  if array was \[${arrA}\] and deleted element ${expected2}`, function () {
            let obj = new Alist1();
            obj.init(arrA);
            let actual2 = obj.myShift();
            let actual1 = obj.arr;

            assert.deepEqual(actual1, expected1);

            assert.strictEqual(actual2, expected2);
        });
    });
});

describe('Alist1  method myRemove', function () {
    let obj = null;

    before(function () {
        const arrA = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        obj = new Alist1().init(arrA);
    });

    it('method myRemove should return undefined', function () {
        var anotherObj = new Alist0();
        anotherObj.init([]);

        var actual = anotherObj.myRemove(5);

        assert.strictEqual(actual, void 0);
    });

    it('method myRemove return false', function () {
        obj = new Alist1();
        obj.init([0, 1, 2, 3, 4, 5, 6, 7, 8]);

        let actual = obj.myRemove(9);

        assert.isFalse(actual);
    });

    it('method myRemove return true', function () {
        const arrA = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        const a = 1;
        const expected1 = [0, 2, 3, 4, 5, 6, 7, 8];
        const expected2 = true;

        it(`should return  new array`, function () {

            let obj = new Alist1();
            obj.init(arrA);
            let actual2 = obj.myRemove(a);
            let actual1 = obj.arr;

            assert.deepEqual(actual1, expected1);
            assert.strictEqual(actual2, expected2);
        });
    });
});

describe('Alist1  method myIsArray', function () {
    describe('method return true', function () {
        const testData = [
            {arrA: [], expected: true},
            {arrA: [5], expected: true},
            {arrA: [0, 1, 2, 3, 4, 5, 6, 7, 8], expected: true}
        ];
        testData.forEach(function (data) {
            const {arrA, expected} = data;
            it(`should return bool ${expected}  if object was \[${arrA}\] `, function () {
                let obj = new Alist1();
                let actual = obj.myIsArray(arrA);

                assert.strictEqual(actual, expected);
            });
        });
    });
    describe('method return false', function () {
        const testData = [
            {arrA: {b: 12}, expected: false},
            {arrA: 'str', expected: false},
            {arrA: 5, expected: false},
            {arrA: undefined, expected: false}
        ];
        testData.forEach(function (data) {
            const {arrA, expected} = data;
            it(`should return bool ${expected}  if object was ${arrA} `, function () {
                let obj = new Alist0();
                let actual = obj.myIsArray(arrA);

                assert.strictEqual(actual, expected);
            });
        });
    });
});

describe('Alist1  method myToArrayList', function () {
    const testData = [
        {arrA: [], expected1: []},
        {arrA: [5], expected1: [5]},
        {arrA: [0, 1, 2, 3, 4, 5, 6, 7, 8], expected1: [0, 1, 2, 3, 4, 5, 6, 7, 8]}
    ]
    testData.forEach(function (data) {
        const {arrA, expected1} = data;
        it(`should return  new array\[ ${expected1} \]  if array was \[${arrA}\] `, function () {
            let obj = new Alist1();
            obj.init(arrA);
            let actual1 = obj.myToArrayList();

            assert.deepEqual(actual1.arr, expected1);
        });
    });
});

describe('Alist1  method myToString', function () {
    const testData = [
        {arrA: [], expected1: ''},
        {arrA: [5], expected1: '5'},
        {arrA: [0, 1, 2, 3, 4, 5, 6, 7, 8], expected1: '0, 1, 2, 3, 4, 5, 6, 7, 8'}
    ]
    testData.forEach(function (data) {
        const {arrA, expected1} = data;
        it(`should return  string \[ ${expected1} \]  if array was \[${arrA}\] `, function () {
            let obj = new Alist1();
            obj.init(arrA);
            let actual1 = obj.myToString();

            assert.strictEqual(actual1, expected1);
        });
    });
})
;

describe('Alist1  method myToLinkedList', function () {
    const testData = [
        {arrA: [],  expected: []},
        {arrA: [5],  expected: [5]},
        {arrA: [0, 1, 2, 3, 4, 5, 6, 7, 8], expected: [0, 1, 2, 3, 4, 5, 6, 7, 8]}
    ];
    testData.forEach(function (data) {
        const {arrA,  expected} = data;
        it(`should return  new array\[ ${expected1} \]  if array was \[${arrA}\] `, function () {
            const obj2 = new Alist1();
            obj2.init(arrA);

            const actual = obj2.myToLinkedList();

            assert.deepEqual(actual.myToArrayList().arr, expected);
        });
    });

});

