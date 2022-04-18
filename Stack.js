export default class Stack {

    constructor (items = []) {
        this.items = items 
    }

    push (element) {
        this.items.push(element)
    }
    pop () {
        return this.items.length === 0 ? "Underflow" : this.items.pop()
    }
    peek () {
        return this.items[this.items.length-1]
    }
    isEmpty () {
        return this.items.length == 0;
    }
    list () {
        return this.items
    }
}