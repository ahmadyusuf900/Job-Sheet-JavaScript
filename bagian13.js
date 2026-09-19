class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        return this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const searchHistory = new Stack();

searchHistory.push("laptop");
searchHistory.push("phone");
searchHistory.push("tablet");
console.log(searchHistory);
console.log(searchHistory.pop());
console.log(searchHistory.peek());
console.log(searchHistory.isEmpty());

