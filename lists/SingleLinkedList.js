"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SingleLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(value) {
        const newNode = new SLLNode(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else if (this.tail != null) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        }
        if (this.length > 1) {
            var newTail = this.head;

            while (newTail.next != this.tail) {
                newTail = newTail.next;
            }
            
            newTail.next = null;
            this.tail = newTail;
            this.length--;
        }
        return this;
    }
    toString() {
        var string = '';
        var node = this.head;
        string += node.value;
        while (node.next != null) {
            node = node.next;
            string += ' -> ' + node.value;
        }
        return string;
    }
}
class SLLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
exports.default = SingleLinkedList;
