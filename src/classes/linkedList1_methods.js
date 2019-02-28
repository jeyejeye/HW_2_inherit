function LinkedList1() {
    // Двусвязный список 
    
    InterfaceList1.apply(this, arguments);
    this.root = null;
    this.last = null;
    this.length = 0;
}

LinkedList1.prototype = Object.create(InterfaceList1.prototype);

LinkedList1.prototype.constructor = LinkedList1.prototype;


// Вставляет новые элементы в конце списка  и возвращает новую длину списка.
LinkedList1.prototype.myPush = function (value) {
    if (arguments.length === 0) {
        return this.length;
    }
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
LinkedList1.prototype.myPop = function () {

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
LinkedList1.prototype.myShift = function () {
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
LinkedList1.prototype.myUnshift = function (value) {
    if (arguments.length === 0) {
        return this.length;
    }
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
LinkedList1.prototype.myRemove = function (valRemove) {

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
LinkedList1.prototype.myIsArray = function (arr) {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
        return true;
    }
    return false;
}


// Метод преобразует список в массив
LinkedList1.prototype.myToArrayList = function () {
    let arr =  new Alist1();
    let e = this.root;
    while (e) {
        arr.myPush(e.value);
        e = e.next;
    }
       return arr;
    }


// Метод преобразует список в строку
LinkedList1.prototype.myToString = function (){
    let str = '';
    let e = this.root;

    while (e) {
        str += ', '+ e.value ;
        e = e.next;
    }
    return str.slice(2);
};

// Метод  возвращает двусвязный список
LinkedList1.prototype.myToLinkedList = function (){
    return this;
};


Alist1.prototype.mySort = function (){
};


