function Alist0() {
    InterfaceList0.apply(this, arguments);
    this.arr = [];

    // Инициализирует массив данных
    this.init = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            this.arr[i] = arr[i];
        }
    }
}

Alist0.prototype = Object.create(InterfaceList0.prototype);

Alist0.prototype.constructor = Alist0;

// Добавляет новые элементы к массиву и возвращает новую длину массива.
Alist0.prototype.myPush = function (val) {

    for (var i = 0; i < arguments.length; i++) {
        this.arr[this.arr.length] = arguments[i];
    }
    return this.arr.length;
};

// Удаляет последний элемент из массива и возвращает его.
Alist0.prototype.myPop = function () {
    if (this.arr.length === 0) {
        return undefined;
    }
    let a = this.arr[this.arr.length - 1];
    this.arr.length--;
    return a;
};

// Вставляет новые элементы в начале массива и возвращает новую длину массива.
Alist0.prototype.myUnshift = function (val) {
    if (arguments.length === 0) {
        return this.arr.length;
    }
    for (var i = this.arr.length - 1; i >= 0; i--) {
        this.arr[i + arguments.length] = this.arr[i];
    }
    for (var i = 0; i < arguments.length; i++) {
        this.arr[i] = arguments[i];
    }

    return this.arr.length;
};


// Удаляет первый элемент из массива и возвращает его.
Alist0.prototype.myShift = function () {
    if (this.arr.length === 0) {
        return undefined;
    }

    let a = this.arr[0];
    for (var i = 1; i < this.arr.length; i++) {
        this.arr[i - 1] = this.arr[i];
    }

    this.arr.length--;
    return a;
};


// Удаляет элемент из массива и возвращает true если элемент удален.
Alist0.prototype.myRemove = function (val) {
    if (this.arr.length === 0) {
        return;
    }

    let a;

    for (var j = 0; j < this.arr.length; j++) {
        if (this.arr[j] === val) {
            a = this.arr[j];

            for (var i = j; i < this.arr.length - 1; i++) {
                this.arr[i] = this.arr[i + 1];
            }

            this.arr.length--;
            return true;
        }
    }
    return false;
}

// Проверяет является ли вызывающий объект массивом
Alist0.prototype.myIsArray = function (arr) {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
        return true;
    }
    return false;
}



