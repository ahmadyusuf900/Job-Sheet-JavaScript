class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }
}

const requestQueue = new Queue();

requestQueue.enqueue("Request 1");
requestQueue.enqueue("Request 2");
requestQueue.enqueue("Request 3");

console.log(requestQueue);

console.log(requestQueue.dequeue());

console.log(requestQueue.peek());