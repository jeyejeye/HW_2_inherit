function LinkedList0() {
    InterfaceList0.apply(this, arguments);
    this.root = null;
    this.last = null;
    this.length = 0;
}

LinkedList0.prototype = Object.create(InterfaceList0.prototype);

LinkedList0.prototype.constructor = LinkedList0.prototype;

// Вставляет новые элементы в конце списка  и возвращает новую длину списка.
LinkedList0.prototype.myPush = function (value) {

    var e = new Entry(value, this.last, null)

    if (this.last !== null) {
        this.last.next = e;
    } else {
        this.root = e;
    }

    this.last = e;
    this.length++;

    return this.length;
}


// Удаляет последний элемент из списка и возвращает его.
LinkedList0.prototype.myPop = function () {

    if (this.length === 0) {
        return undefined;
    }

    let e = this.last;

    if (e.prev) {
        this.last = e.prev;
        e.prev.next = null;
        this.length--;
    } else {
        this.root = null;
        this.last = null;
        this.length = 0;
    }

    return e.value;
}


// Удаляет первый элемент из списка и возвращает его.
LinkedList0.prototype.myShift = function () {
    if (this.length === 0) {
        return undefined;
    }

    let e = this.root;

    if (e.next) {
        this.root = e.next;
        e.next.prev = null;
        this.length--;
    } else {
        this.root = null;
        this.last = null;
        this.length = 0;
    }

    return e.value;
}


// Вставляет новые элементы в начале списка  и возвращает новую длину списка.
LinkedList0.prototype.myUnshift = function (value) {
    let e = new Entry(value, null, this.root);

    if (this.root !== null) {
        this.root.prev = e;
    } else {
        this.last = e;
    }

    this.root = e;
    this.length++;
    return this.length;
};


// Удаляет элемент из списка и возвращает true если элемент удален.
LinkedList0.prototype.myRemove = function (valRemove) {

    let e = this.root;
    while (e.next !== null) {
        if (e.value === valRemove) {
            e.prev.next = e.next;
            this.length--;
            return true;
        }
        e = e.next;
    }
    return false;
}


// Создает новый элемент списка
function Entry(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
}


// Проверяет является ли вызывающий объект массивом
LinkedList0.prototype.myIsArray = function (arr) {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
        return true;
    }
    return false;
}




