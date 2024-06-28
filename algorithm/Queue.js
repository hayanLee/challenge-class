//FIFO
class Queue {
    #queue;
    constructor() {
        this.#queue = [];
    }

    // 큐에 요소를 추가
    enqueue(element) {
        if (element === undefined) throw new Error('빈 값은 큐에 추가할 수 없음');
        this.#queue.push(element);
    }

    // 큐에서 요소를 제거
    dequeue() {
        if (this.isEmpty()) throw new Error('큐가 비어있음');
        return this.#queue.shift();
    }

    // 큐의 첫 번째 요소를 확인
    front() {
        if (this.isEmpty()) throw new Error('큐가 비어있음');
        return this.#queue[0];
    }

    // 큐가 비어있는지 확인
    isEmpty() {
        return this.#queue.length === 0;
    }

    // 큐의 요소 수를 확인
    size() {
        return this.#queue.length;
    }

    // 큐를 비움
    clear() {
        this.#queue = [];
    }

    // 큐의 모든 요소를 출력
    print() {
        console.log(this.#queue.join(','));
    }
}

// 사용 예시
const queue = new Queue();
// console.log(queue.dequeue());
// queue.enqueue();
console.log(queue.isEmpty()); //true
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.size()); //3
console.log(queue.isEmpty()); //false
queue.print(); // 1,2,3
console.log(queue.dequeue()); // 1
console.log(queue.front()); // 2
queue.print(); // 2,3
